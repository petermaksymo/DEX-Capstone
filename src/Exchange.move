address 0x2 {
module Exchange{
	use Std::Signer;
	use 0x2::CoinA;
	use 0x2::CoinB;

	//Exchange Struct
	struct Exchange has key, store {
		coin_a: u64,
		coin_b: u64,
		LP_minted: u64,
		comm_rate: u64
	}

	//Liquidity Provider Coin Struct
	struct LPCoin has key, store, drop{
		value: u64
	}

	//
	//Liquidity Provider Coin functions
	//

	//Generate new LP coin resource at account's address with 
	//number of LP coins = amount
	fun mint(amount: u64, account: &signer): u64 {
		move_to<LPCoin>(account, LPCoin { value: amount });
		amount
	}

	//Return the value of LP coin located at addr
	public fun get_value(addr: address): u64 acquires LPCoin {
		borrow_global<LPCoin>(addr).value
	}

	//Destroy resource located at account's address
	fun burn(account: &signer): u64 acquires LPCoin {
		assert(exist_at(Signer::address_of(account)), 1);
		let LPCoin { value: value } = move_from<LPCoin>(Signer::address_of(account));
		value
	}

	//Check to see if LPCoin resource exists at addr
	fun exist_at(addr: address): bool {
		exists<LPCoin>(addr)
	}

	//Transfer LP coins between two accounts
	public fun transfer_between(from_acct: &signer, to_acct: &signer, transfer_amt: u64): u64 acquires LPCoin {
		//Get from_addr and to_addr to reduce calls to Signer::address_of()
		let from_addr = Signer::address_of(from_acct);
		let to_addr = Signer::address_of(to_acct);

		//Make sure that from_addr has LP coins and that the 
		//value at from_addr is at least as much as the tranfer amount
		//Otherwise break -> MAKE THE USER GIVE US GOOD DATA
		assert(exist_at(from_addr), 1);
		assert(get_value(from_addr) >= transfer_amt, 2);

		//If to_addr doesn't have LPCoin resource mint it for them
		//with value of 0 (No free money for them :) )
		if(!exist_at(to_addr)) {
			mint(0, to_acct);
		};

		//Get the coin from from_addr and subtract the transfer amount
		let from_coin = borrow_global_mut<LPCoin>(from_addr);
		from_coin.value = from_coin.value - transfer_amt;

		//Get the coin from to_addr and add the transfer amount
		let to_coin = borrow_global_mut<LPCoin>(to_addr);
		to_coin.value = to_coin.value + transfer_amt;

		//Return the transferred amount
		transfer_amt
	}

	//
	//Exchange functions
	//

	//Initialize the exchange with commision rate and 0's for coins
	public fun initialize(exchange_acct: &signer, comm_rate: u64) {
		move_to<Exchange>(exchange_acct, Exchange { coin_a: CoinA::mint(0, exchange_acct), 
							    coin_b: CoinB::mint(0, exchange_acct),
							    LP_minted: 0,
							    comm_rate: comm_rate});

	}

	//Check if exchange exists at an address
	public fun exists_at(exchange_addr: address): bool {
		exists<Exchange>(exchange_addr)
	}

	//Check amount of CoinA in pool
	public fun get_CoinA_in_pool(exchange_addr: address): u64 acquires Exchange {
		borrow_global<Exchange>(exchange_addr).coin_a
	}

	//Check amount of CoinB in pool
	public fun get_CoinB_in_pool(exchange_addr: address): u64 acquires Exchange {
		borrow_global<Exchange>(exchange_addr).coin_b
	}

	//Check amount of LPCoin minted by pool
	public fun get_minted_LPCoin(exchange_addr: address): u64 acquires Exchange {
		borrow_global<Exchange>(exchange_addr).LP_minted
	}

	//Add liquidity to Pool
	public fun add_liquidity(coin_a_amt: u64, provider: &signer, exchange: &signer): u64 acquires Exchange {
		//Get exchange addr to avoid multiple calls to Signer::address_of
		let exchange_addr = Signer::address_of(exchange);

		//Get proivder addr to avoid multiple calls to Signer::address_of
		let provider_addr = Signer::address_of(provider);

		//Get Exchange
		let exchange_obj = borrow_global_mut<Exchange>(exchange_addr);

		//Check if pool is empty
		if(exchange_obj.coin_a == 0 && exchange_obj.coin_b == 0 && exchange_obj.LP_minted == 0){

			//If all 0 require equal amounts of all coins
			//FIXME: This probably isn't the best idea...
			let coin_b_amt = coin_a_amt;
			let lp_coin_amt = coin_a_amt;
			
			//Check that Provider has the required funds
			assert(CoinA::exist_at(provider_addr), 1);
			assert(CoinA::get_value(provider_addr) >= coin_a_amt, 2);
			assert(CoinB::exist_at(provider_addr), 1);
			assert(CoinB::get_value(provider_addr) >= coin_b_amt, 2);

			//Transfer CoinA funds from provider to exchange
			let transferred_coin_a = CoinA::transfer_between(provider, exchange, coin_a_amt);
			exchange_obj.coin_a = exchange_obj.coin_a + transferred_coin_a;

			//Transfer CoinB funds from provider to exchange
			let transferred_coin_b = CoinB::transfer_between(provider, exchange, coin_b_amt);
			exchange_obj.coin_b = exchange_obj.coin_b + transferred_coin_b;

			//Mint LPCoin for provider
			let lp_minted = mint(lp_coin_amt, provider);

			//Add LPCoin amount to exchange
			exchange_obj.LP_minted = exchange_obj.LP_minted + lp_minted;

			lp_minted
		}else{
			//If exchange isn't empty we need to calculate the proper amounts of each coin
			let exchange_coin_a_balance = exchange_obj.coin_a;
			let exchange_coin_b_balance = exchange_obj.coin_b;
			let exchange_lp_coin_balance = exchange_obj.LP_minted;

			//Calculate required amount of CoinB from provider
			let new_coin_b_balance = exchange_coin_b_balance + {{exchange_coin_b_balance * coin_a_amt} / exchange_coin_a_balance};
			let coin_b_amt = new_coin_b_balance - exchange_coin_b_balance;

			//Make sure provider has enough of each coin
			assert(CoinA::exist_at(provider_addr), 1);
			assert(CoinA::get_value(provider_addr) >= coin_a_amt, 2);
			assert(CoinB::exist_at(provider_addr), 1);
			assert(CoinB::get_value(provider_addr) >= coin_b_amt, 2);

			//Calculate LP coin required to mint
			let new_lp_coin_balance = exchange_lp_coin_balance + {{exchange_lp_coin_balance * coin_a_amt} / exchange_coin_a_balance};
			let lp_coin_amt = new_lp_coin_balance - exchange_lp_coin_balance;

			//Transfer CoinA funds from provider to exchange
			let transferred_coin_a = CoinA::transfer_between(provider, exchange, coin_a_amt);
			exchange_obj.coin_a = exchange_obj.coin_a + transferred_coin_a;

			//Transfer CoinB funds from provider to exchange
			let transferred_coin_b = CoinB::transfer_between(provider, exchange, coin_b_amt);
			exchange_obj.coin_b = exchange_obj.coin_b + transferred_coin_b;
		
			//Mint LPCoin for provider
			let lp_minted = mint(lp_coin_amt, provider);

			//Add LPCoin amount to exhcange
			exchange_obj.LP_minted = exchange_obj.LP_minted + lp_minted;

			lp_minted
		}
	}

	//Function for removing liquidity
	public fun remove_liquidity(lp_coin_amt: u64, provider: &signer, exchange: &signer): (u64, u64) acquires Exchange, LPCoin {
		//Get exchange addr to avoid multiple calls to Signer::address_of
		let exchange_addr = Signer::address_of(exchange);
		
		//Get provider addr to avoid multiple calls to Signer::address_of
		let provider_addr = Signer::address_of(provider);

		//Get exchange_obj
		let exchange_obj = borrow_global_mut<Exchange>(exchange_addr);

		//Check that provider has required amount of LPCoin
		assert(exist_at(provider_addr), 1);
		assert(get_value(provider_addr) >= lp_coin_amt, 2);

		//Check that Exchange has minted enough LPCoin
		assert(exchange_obj.LP_minted >= lp_coin_amt, 2);

		//Get current exchange balances
		let exchange_coin_a_balance = exchange_obj.coin_a;
		let exchange_coin_b_balance = exchange_obj.coin_b;
		let exchange_lp_coin_balance = exchange_obj.LP_minted;

		//Calculate required amount of CoinA from exchange
		let new_coin_a_balance = exchange_coin_a_balance - {{exchange_coin_a_balance * lp_coin_amt} / exchange_lp_coin_balance};
		let coin_a_amt = exchange_coin_a_balance - new_coin_a_balance;

		//Calculate required amount of CoinB from exchange
		let new_coin_b_balance = exchange_coin_b_balance - {{exchange_coin_b_balance * lp_coin_amt} / exchange_lp_coin_balance};
		let coin_b_amt = exchange_coin_b_balance - new_coin_b_balance;

		//Make sure new balances are less than old balances
		assert(CoinA::exist_at(exchange_addr), 1);
		assert(exchange_coin_a_balance >= new_coin_a_balance, 2);
		assert(CoinB::exist_at(exchange_addr), 1);
		assert(exchange_coin_b_balance >= new_coin_b_balance, 2);

		//Make sure exchange has enough of CoinA and CoinB to satisfy request
		assert(exchange_coin_a_balance >= coin_a_amt, 2);
		assert(exchange_coin_b_balance >= coin_b_amt, 2);

		//Transfer CoinA funds from exchange to provider
		let transferred_coin_a = CoinA::transfer_between(exchange, provider, coin_a_amt);
		exchange_obj.coin_a = exchange_obj.coin_a - transferred_coin_a;

		//Transfer CoinB funds from exchange to provider
		let transferred_coin_b = CoinB::transfer_between(exchange, provider, coin_b_amt);
		exchange_obj.coin_b = exchange_obj.coin_b - transferred_coin_b;

		//Transfer LPCoin from provider to exchange and burn
		let transferred_lp_coin = transfer_between(provider, exchange, lp_coin_amt);
		let burned_lp_coin = burn(exchange);
		assert(burned_lp_coin == transferred_lp_coin, 3);

		(coin_a_amt, coin_b_amt)
	}
}
}
