module Sender::Exchange {
	use Std::Signer;
	use Sender::CoinA;
	use Sender::CoinB;

	use Sender::V8;
	use Sender::Rotary;
	use Sender::LP_V8_Rotary;

	use DiemFramework::Diem;
	use DiemFramework::DiemAccount;

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
	fun mint(amount: u64, account: &signer): u64 acquires LPCoin {
		//Get account address
		let account_addr = Signer::address_of(account);

		//Check if account has coin
		if(exist_at(account_addr)) {
			let account_lp_coin = borrow_global_mut<LPCoin>(account_addr);
			account_lp_coin.value = account_lp_coin.value + amount;
		}else{
			move_to<LPCoin>(account, LPCoin { value: amount });
		};
		amount
	}

	//Return the value of LP coin located at addr
	public fun get_value(addr: address): u64 acquires LPCoin {
		borrow_global<LPCoin>(addr).value
	}

	//Destroy resource located at account's address
	fun burn(account: &signer): u64 acquires LPCoin {
		assert!(exist_at(Signer::address_of(account)), 1);
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
		assert!(exist_at(from_addr), 1);
		assert!(get_value(from_addr) >= transfer_amt, 2);

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
	public fun initialize(exchange_initializer: &signer, exchange_acct: &signer, comm_rate: u64, coin_a_amt: u64, coin_b_amt: u64) acquires LPCoin {
		//Make sure initializer has enough funds
		let initializer_addr = Signer::address_of(exchange_initializer);
		assert!(CoinA::exist_at(initializer_addr), 1);
		assert!(CoinA::get_value(initializer_addr) >= coin_a_amt, 2);
		assert!(CoinB::exist_at(initializer_addr), 1);
		assert!(CoinB::get_value(initializer_addr) >= coin_b_amt, 2);

		//Transfer funds from exchange initializer to exchange 
		let coin_a_transferred = CoinA::transfer_between(exchange_initializer, exchange_acct, coin_a_amt);
		let coin_b_transferred = CoinB::transfer_between(exchange_initializer, exchange_acct, coin_b_amt);

		//Calculate the amount of LP to give to intializer (setting equal to CoinA)
		//FIXME: IDK if this is best way
		let lp_coin_amt = coin_a_transferred;
		let minted_lp_coin_amt = mint(lp_coin_amt, exchange_initializer);

		assert!(minted_lp_coin_amt == lp_coin_amt, 1);

		//Register Exchange account
		let exchange_addr = Signer::address_of(exchange_acct);
		let auth_key_prefix = x"AAAAAAAA";
		DiemAccount::create_child_vasp_account<Diem::Diem<LP_V8_Rotary::LP_V8_Rotary>>(exchange_initializer,
											exchange_addr,
											auth_key_prefix,
											false);

		//A bit scuffed. The only way I can find to add currencies that aren't blocked by (friend)
		DiemAccount::add_currency_for_test<Diem::Diem<V8::V8>>(exchange_acct);	
		DiemAccount::add_currency_for_test<Diem::Diem<Rotary::Rotary>>(exchange_acct);	
	
		move_to<Exchange>(exchange_acct, Exchange { coin_a: coin_a_transferred, 
							    coin_b: coin_b_transferred,
							    LP_minted: minted_lp_coin_amt,
							    comm_rate: comm_rate});

	}

	public(script) fun initialize_exchange(account: signer, coin_a_amt: u64, coin_b_amt: u64) acquires LPCoin {
		initialize(&account, &account, 20, coin_a_amt, coin_b_amt)
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
	public fun add_liquidity(coin_a_amt: u64, provider: &signer, exchange: &signer): u64 acquires Exchange, LPCoin {
		//Get exchange addr to avoid multiple calls to Signer::address_of
		let exchange_addr = Signer::address_of(exchange);

		//Get proivder addr to avoid multiple calls to Signer::address_of
		let provider_addr = Signer::address_of(provider);

		//Make sure exchange exists
		assert!(exists_at(exchange_addr), 1);
		assert!(CoinA::exist_at(exchange_addr), 1);
		assert!(CoinB::exist_at(exchange_addr), 1);
		
		//Get Exchange
		let exchange_obj = borrow_global_mut<Exchange>(exchange_addr);

		//Get current exchange balances
		let exchange_coin_a_balance = exchange_obj.coin_a;
		let exchange_coin_b_balance = exchange_obj.coin_b;
		let exchange_lp_coin_balance = exchange_obj.LP_minted;

		//Calculate required amount of CoinB from provider
		let new_coin_b_balance = exchange_coin_b_balance + {{exchange_coin_b_balance * coin_a_amt} / exchange_coin_a_balance};
		let coin_b_amt = new_coin_b_balance - exchange_coin_b_balance;

		//Make sure provider has enough of each coin
		assert!(CoinA::exist_at(provider_addr), 1);
		assert!(CoinA::get_value(provider_addr) >= coin_a_amt, 2);
		assert!(CoinB::exist_at(provider_addr), 1);
		assert!(CoinB::get_value(provider_addr) >= coin_b_amt, 2);

		//Calculate LP coin required to mint
		let new_lp_coin_balance = exchange_lp_coin_balance + {{exchange_lp_coin_balance * coin_a_amt} / exchange_coin_a_balance};
		let lp_coin_amt = new_lp_coin_balance - exchange_lp_coin_balance;

		//Transfer CoinA funds from provider to exchange
		let transferred_coin_a = CoinA::transfer_between(provider, exchange, coin_a_amt);
		exchange_obj.coin_a = exchange_obj.coin_a + transferred_coin_a;

		//Transfer CoinB funds from provider to exchange
		let transferred_coin_b = CoinB::transfer_between(provider, exchange, coin_b_amt);
		exchange_obj.coin_b = exchange_obj.coin_b + transferred_coin_b;
	
		//Mint LPCoin for exchange
		let lp_coin_minted = mint(lp_coin_amt, provider);
		
		assert!(lp_coin_minted == lp_coin_amt, 3);

		//Add LPCoin amount to exhcange
		exchange_obj.LP_minted = exchange_obj.LP_minted + lp_coin_minted;

		lp_coin_minted
	}

	public(script) fun add_exchange_liquidity(account: signer, coin_a_amt: u64) acquires Exchange, LPCoin {
		add_liquidity(coin_a_amt, &account, &account);
	}

	//Function for removing liquidity
	public fun remove_liquidity(lp_coin_amt: u64, provider: &signer, exchange: &signer): (u64, u64) acquires Exchange, LPCoin {
		//Get exchange addr to avoid multiple calls to Signer::address_of
		let exchange_addr = Signer::address_of(exchange);
		
		//Get provider addr to avoid multiple calls to Signer::address_of
		let provider_addr = Signer::address_of(provider);

		//Make sure exchange exists
		assert!(exists_at(exchange_addr), 1);
		assert!(CoinA::exist_at(exchange_addr), 1);
		assert!(CoinB::exist_at(exchange_addr), 1);
		
		//Get exchange_obj
		let exchange_obj = borrow_global_mut<Exchange>(exchange_addr);

		//Check that provider has required amount of LPCoin
		assert!(exist_at(provider_addr), 1);
		assert!(get_value(provider_addr) >= lp_coin_amt, 2);

		//Check that Exchange has minted enough LPCoin
		assert!(exchange_obj.LP_minted >= lp_coin_amt, 2);

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
		assert!(CoinA::exist_at(exchange_addr), 1);
		assert!(exchange_coin_a_balance >= new_coin_a_balance, 2);
		assert!(CoinB::exist_at(exchange_addr), 1);
		assert!(exchange_coin_b_balance >= new_coin_b_balance, 2);

		//Make sure exchange has enough of CoinA and CoinB to satisfy request
		assert!(exchange_coin_a_balance >= coin_a_amt, 2);
		assert!(exchange_coin_b_balance >= coin_b_amt, 2);

		//Transfer CoinA funds from exchange to provider
		let transferred_coin_a = CoinA::transfer_between(exchange, provider, coin_a_amt);
		exchange_obj.coin_a = exchange_obj.coin_a - transferred_coin_a;

		//Transfer CoinB funds from exchange to provider
		let transferred_coin_b = CoinB::transfer_between(exchange, provider, coin_b_amt);
		exchange_obj.coin_b = exchange_obj.coin_b - transferred_coin_b;

		//Transfer LPCoin from provider to exchange and burn
		let transferred_lp_coin = transfer_between(provider, exchange, lp_coin_amt);
		let burned_lp_coin = burn(exchange);
		assert!(transferred_lp_coin == lp_coin_amt, 2);
		assert!(burned_lp_coin == transferred_lp_coin, 3);

		exchange_obj.LP_minted = exchange_obj.LP_minted - burned_lp_coin;

		(coin_a_amt, coin_b_amt)
	}

	//Get pricing for output amount given input amount including commision rate
	fun get_input_price(comm_rate: u64, input_amount: u64, input_reserve: u64, output_reserve: u64): u64 {
		//FIXME: change fixed amounts based on commision rate provided to exchange
		let numerator = input_amount * (10000 - comm_rate) * output_reserve ;
		let denominator = {input_reserve * 10000} + {input_amount * (10000 - comm_rate)};
		numerator / denominator
	}

	//Get pricing for input amount given output amount including commision rate
	fun get_output_price(comm_rate: u64, output_amount: u64, input_reserve: u64, output_reserve: u64): u64 {
		//FIXME: change fixed amounts based on commision rate provided to exchange
		let numerator = input_reserve * output_amount * 10000;
		let denominator = {output_reserve - output_amount} * (10000 - comm_rate);
		{numerator / denominator} + 1
	}

	public fun swap_coinA_to_coinB(coin_a_amt: u64, swapper: &signer, exchange: &signer): u64 acquires Exchange {
		//Get exchange address to avoid multiple calls to Signer::address_of
		let exchange_addr = Signer::address_of(exchange);

		//Get swapper address to avoid multiple calls to Signer::address_of
		let swapper_addr = Signer::address_of(swapper);

		//Make sure exchange exists
		assert!(exists_at(exchange_addr), 1);
		assert!(CoinA::exist_at(exchange_addr), 1);
		assert!(CoinB::exist_at(exchange_addr), 1);
		
		//Get exchange
		let exchange_obj = borrow_global_mut<Exchange>(exchange_addr);

		//Make sure swapper has enough of CoinA
		assert!(CoinA::exist_at(swapper_addr), 1);
		assert!(CoinA::get_value(swapper_addr) >= coin_a_amt, 2);

		//Get current exchange balances
		let exchange_coin_a_balance = exchange_obj.coin_a;
		let exchange_coin_b_balance = exchange_obj.coin_b;
		let exchange_comm_rate = exchange_obj.comm_rate;

		//Calculate required CoinB from exchange
		let coin_b_amt = get_input_price(exchange_comm_rate, coin_a_amt, exchange_coin_a_balance, exchange_coin_b_balance);

		//Make sure exchange has enough CoinB
		assert!(exchange_coin_b_balance >= coin_b_amt, 2);

		//Transfer CoinA funds from swapper to exchange
		let transferred_coin_a = CoinA::transfer_between(swapper, exchange, coin_a_amt);
		exchange_obj.coin_a = exchange_obj.coin_a + transferred_coin_a;
	
		//Transfer CoinB funds from exchange to swapper
		let transferred_coin_b = CoinB::transfer_between(exchange, swapper, coin_b_amt);
		exchange_obj.coin_b = exchange_obj.coin_b - transferred_coin_b;

		transferred_coin_b
	}

	public(script) fun exchange_coinA_to_coinB(account: signer, coin_a_amt: u64) acquires Exchange {
		swap_coinA_to_coinB(coin_a_amt, &account, &account);
	}

	public fun swap_coinB_to_coinA(coin_b_amt: u64, swapper: &signer, exchange: &signer): u64 acquires Exchange {
		//Get exchange address to avoid multiple calls to Signer::address_of
		let exchange_addr = Signer::address_of(exchange);

		//Get swapper address to avoid multiple calls to Signer::address_of
		let swapper_addr = Signer::address_of(swapper);

		//Make sure exchange exists
		assert!(exists_at(exchange_addr), 1);
		assert!(CoinA::exist_at(exchange_addr), 1);
		assert!(CoinB::exist_at(exchange_addr), 1);
		
		//Get exchange
		let exchange_obj = borrow_global_mut<Exchange>(exchange_addr);

		//Make sure swapper has enough of CoinB
		assert!(CoinB::exist_at(swapper_addr), 1);
		assert!(CoinB::get_value(swapper_addr) >= coin_b_amt, 2);

		//Get current exchange balances
		let exchange_coin_a_balance = exchange_obj.coin_a;
		let exchange_coin_b_balance = exchange_obj.coin_b;
		let exchange_comm_rate = exchange_obj.comm_rate;

		//Calculate required CoinB from exchange
		let coin_a_amt = get_input_price(exchange_comm_rate, coin_b_amt, exchange_coin_b_balance, exchange_coin_a_balance);
	
		//Make sure exchange has enough CoinA
		assert!(exchange_coin_a_balance >= coin_a_amt, 2);

		//Transfer CoinB funds from swapper to exchange
		let transferred_coin_b = CoinB::transfer_between(swapper, exchange, coin_b_amt);
		exchange_obj.coin_b = exchange_obj.coin_b + transferred_coin_b;
	
		//Transfer CoinA funds from exchange to swapper
		let transferred_coin_a = CoinA::transfer_between(exchange, swapper, coin_a_amt);
		exchange_obj.coin_a = exchange_obj.coin_a - transferred_coin_a;

		transferred_coin_a
	}
}

