module Sender::ExchangeCD {
	// Exchange module between coinA and coinD
	use Std::Signer;
	use Sender::CoinC;
	use Sender::CoinD;

	//Exchange Struct
	struct Exchange has key, store {
		coin_c: u64,
		coin_d: u64,
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
	public fun mint(amount: u64, account: &signer): u64 acquires LPCoin {
		//Get account address
		let account_addr = Signer::address_of(account);

		//Check if account has coin
		if(lp_exist_at(account_addr)) {
			let account_lp_coin = borrow_global_mut<LPCoin>(account_addr);
			account_lp_coin.value = account_lp_coin.value + amount;
		}else{
			move_to<LPCoin>(account, LPCoin { value: amount });
		};
		amount
	}

 	public(script) fun mint_lp(account: signer, amt: u64) acquires LPCoin {
        mint(amt, &account);
    }

	//Return the value of LP coin located at addr
	public fun get_value(addr: address): u64 acquires LPCoin {
		borrow_global<LPCoin>(addr).value
	}

	//Destroy resource located at account's address
	fun burn(account: address, amt:u64) acquires LPCoin {
		assert!(lp_exist_at(account), 1);
		let lp_coin = borrow_global_mut<LPCoin>(account);
		assert!(amt<=lp_coin.value, 1);
		lp_coin.value = lp_coin.value - amt;
	}

	//Check to see if LPCoin resource exists at addr
	public fun lp_exist_at(addr: address): bool {
		exists<LPCoin>(addr)
	}

	//Transfer LP coins between two accounts
	public fun transfer_between(from_addr: address, to_addr: address, transfer_amt: u64): u64 acquires LPCoin {
		//Make sure that from_addr has LP coins and that the 
		//value at from_addr is at least as much as the tranfer amount
		//Otherwise break -> MAKE THE USER GIVE US GOOD DATA
		assert!(lp_exist_at(from_addr), 1);
		assert!(get_value(from_addr) >= transfer_amt, 2);
		assert!(lp_exist_at(to_addr), 1);


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
	public fun initialize(exchange_acct: &signer, initializer_addr: address, comm_rate: u64, coin_c_amt: u64, coin_d_amt: u64) acquires LPCoin {
		//Make sure initializer has enough funds
		assert!(CoinC::exist_at(initializer_addr), 1);
		assert!(CoinC::get_value(initializer_addr) >= coin_c_amt, 2);
		assert!(CoinD::exist_at(initializer_addr), 1);
		assert!(CoinD::get_value(initializer_addr) >= coin_d_amt, 2);
		assert!(lp_exist_at(initializer_addr), 1);

		//Check that exchange has viable place for coins
		let exchange_addr = Signer::address_of(exchange_acct);
		assert!(CoinC::exist_at(exchange_addr), 1);
		assert!(CoinD::exist_at(exchange_addr), 1);
		assert!(lp_exist_at(exchange_addr), 1);

		//Transfer funds from exchange initializer to exchange 
		let coin_c_transferred = CoinC::transfer_between(initializer_addr, exchange_addr, coin_c_amt);
		let coin_d_transferred = CoinD::transfer_between(initializer_addr, exchange_addr, coin_d_amt);

		//Calculate the amount of LP to give to intializer (setting equal to CoinAC
		//FIXME: IDK if this is best way
		let minted_lp_coin_amt = coin_c_transferred;

		let initializer_lp_coin = borrow_global_mut<LPCoin>(initializer_addr);
		initializer_lp_coin.value = initializer_lp_coin.value + minted_lp_coin_amt;

		move_to<Exchange>(exchange_acct, Exchange { coin_c: coin_c_transferred, 
							    coin_d: coin_d_transferred,
							    LP_minted: minted_lp_coin_amt,
							    comm_rate: comm_rate});

	}

	public(script) fun initialize_exchange(exchange: signer, initializer: address, comm_rate: u64, coin_c_amt: u64, coin_d_amt: u64) acquires LPCoin {
		initialize(&exchange, initializer, comm_rate, coin_c_amt, coin_d_amt)
	}

	//Check if exchange exists at an address
	public fun exists_at(exchange_addr: address): bool {
		exists<Exchange>(exchange_addr)
	}

	//Check amount of CoinC in pool
	public fun get_CoinC_in_pool(exchange_addr: address): u64 acquires Exchange {
		borrow_global<Exchange>(exchange_addr).coin_c
	}

	//Check amount of CoinD in pool
	public fun get_CoinD_in_pool(exchange_addr: address): u64 acquires Exchange {
		borrow_global<Exchange>(exchange_addr).coin_d
	}

	//Check amount of LPCoin minted by pool
	public fun get_minted_LPCoin(exchange_addr: address): u64 acquires Exchange {
		borrow_global<Exchange>(exchange_addr).LP_minted
	}

	//Add liquidity to Pool
	public fun add_liquidity(coin_c_amt: u64, provider_addr: address, exchange_addr: address): u64 acquires Exchange, LPCoin {
		//Make sure exchange exists
		assert!(exists_at(exchange_addr), 1);
		assert!(lp_exist_at(exchange_addr), 1);
		assert!(CoinC::exist_at(exchange_addr), 1);
		assert!(CoinD::exist_at(exchange_addr), 1);
		
		//Get Exchange
		let exchange_obj = borrow_global_mut<Exchange>(exchange_addr);

		//Get current exchange balances
		let exchange_coin_c_balance = exchange_obj.coin_c;
		let exchange_coin_d_balance = exchange_obj.coin_d;
		let exchange_lp_coin_balance = exchange_obj.LP_minted;

		//Calculate required amount of CoinD from provider
		let new_coin_d_balance = exchange_coin_d_balance + {{exchange_coin_d_balance * coin_c_amt} / exchange_coin_c_balance};
		let coin_d_amt = new_coin_d_balance - exchange_coin_d_balance;

		//Make sure provider has enough of each coin
		assert!(CoinC::exist_at(provider_addr), 1);
		assert!(CoinC::get_value(provider_addr) >= coin_c_amt, 2);
		assert!(CoinD::exist_at(provider_addr), 1);
		assert!(CoinD::get_value(provider_addr) >= coin_d_amt, 2);
		assert!(lp_exist_at(provider_addr), 1);

		//Calculate LP coin required to mint
		let new_lp_coin_balance = exchange_lp_coin_balance + {{exchange_lp_coin_balance * coin_c_amt} / exchange_coin_c_balance};
		let lp_coin_amt = new_lp_coin_balance - exchange_lp_coin_balance;

		//Transfer CoinC funds from provider to exchange
		let transferred_coin_c = CoinC::transfer_between(provider_addr, exchange_addr, coin_c_amt);
		exchange_obj.coin_c = exchange_obj.coin_c + transferred_coin_c;

		//Transfer CoinD funds from provider to exchange
		let transferred_coin_d = CoinD::transfer_between(provider_addr, exchange_addr, coin_d_amt);
		exchange_obj.coin_d = exchange_obj.coin_d + transferred_coin_d;
	
		//Mint LPCoin for exchange
		let provider_lp = borrow_global_mut<LPCoin>(provider_addr);
		provider_lp.value = provider_lp.value + lp_coin_amt;
		
		//Add LPCoin amount to exhcange
		exchange_obj.LP_minted = exchange_obj.LP_minted + lp_coin_amt;

		lp_coin_amt
	}

	public(script) fun add_exchange_liquidity(exchange: address, provider: address, coin_c_amt: u64) acquires Exchange, LPCoin {
		add_liquidity(coin_c_amt, provider, exchange);
	}

	//Function for removing liquidity
	public fun remove_liquidity(lp_coin_amt: u64, provider_addr: address, exchange_addr: address): (u64, u64) acquires Exchange, LPCoin {
		//Make sure exchange exists
		assert!(exists_at(exchange_addr), 1);
		assert!(lp_exist_at(exchange_addr), 1);
		assert!(CoinC::exist_at(exchange_addr), 1);
		assert!(CoinD::exist_at(exchange_addr), 1);
		
		//Get exchange_obj
		let exchange_obj = borrow_global_mut<Exchange>(exchange_addr);

		//Check that provider has required amount of LPCoin
		assert!(lp_exist_at(provider_addr), 1);
		assert!(get_value(provider_addr) >= lp_coin_amt, 2);

		//Check that Exchange has minted enough LPCoin
		assert!(exchange_obj.LP_minted >= lp_coin_amt, 2);

		//Get current exchange balances
		let exchange_coin_c_balance = exchange_obj.coin_c;
		let exchange_coin_d_balance = exchange_obj.coin_d;
		let exchange_lp_coin_balance = exchange_obj.LP_minted;

		//Calculate required amount of CoinC from exchange
		let new_coin_c_balance = exchange_coin_c_balance - {{exchange_coin_c_balance * lp_coin_amt} / exchange_lp_coin_balance};
		let coin_c_amt = exchange_coin_c_balance - new_coin_c_balance;

		//Calculate required amount of CoinD from exchange
		let new_coin_d_balance = exchange_coin_d_balance - {{exchange_coin_d_balance * lp_coin_amt} / exchange_lp_coin_balance};
		let coin_d_amt = exchange_coin_d_balance - new_coin_d_balance;

		//Make sure new balances are less than old balances
		assert!(CoinC::exist_at(exchange_addr), 1);
		assert!(exchange_coin_c_balance >= new_coin_c_balance, 2);
		assert!(CoinD::exist_at(exchange_addr), 1);
		assert!(exchange_coin_d_balance >= new_coin_d_balance, 2);

		//Make sure exchange has enough of CoinC and CoinD to satisfy request
		assert!(exchange_coin_c_balance >= coin_c_amt, 2);
		assert!(exchange_coin_d_balance >= coin_d_amt, 2);

		//Transfer CoinC funds from exchange to provider
		let transferred_coin_c = CoinC::transfer_between(exchange_addr, provider_addr, coin_c_amt);
		exchange_obj.coin_c = exchange_obj.coin_c - transferred_coin_c;

		//Transfer CoinD funds from exchange to provider
		let transferred_coin_d = CoinD::transfer_between(exchange_addr, provider_addr, coin_d_amt);
		exchange_obj.coin_d = exchange_obj.coin_d - transferred_coin_d;

		//Transfer LPCoin from provider to exchange and burn
		let transferred_lp_coin = transfer_between(provider_addr, exchange_addr, lp_coin_amt);
		assert!(transferred_lp_coin == lp_coin_amt, 2);
		burn(exchange_addr, transferred_lp_coin);

		exchange_obj.LP_minted = exchange_obj.LP_minted - transferred_lp_coin;

		(coin_c_amt, coin_d_amt)
	}
	
	public(script) fun remove_exchange_liquidity(exchange: address, provider: address, lp_coin_amt: u64) acquires Exchange, LPCoin {
		remove_liquidity(lp_coin_amt, provider, exchange);
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

	public fun swap_coinC_to_coinD(coin_c_amt: u64, swapper_addr: address, exchange_addr: address): u64 acquires Exchange {
		//Make sure exchange exists
		assert!(exists_at(exchange_addr), 1);
		assert!(CoinC::exist_at(exchange_addr), 1);
		assert!(CoinD::exist_at(exchange_addr), 1);
		
		//Get exchange
		let exchange_obj = borrow_global_mut<Exchange>(exchange_addr);

		//Make sure swapper has enough of CoinC
		assert!(CoinC::exist_at(swapper_addr), 1);
		assert!(CoinC::get_value(swapper_addr) >= coin_c_amt, 2);

		//Make sure swapper has CoinB
		assert!(CoinD::exist_at(swapper_addr), 1);

		//Get current exchange balances
		let exchange_coin_c_balance = exchange_obj.coin_c;
		let exchange_coin_d_balance = exchange_obj.coin_d;
		let exchange_comm_rate = exchange_obj.comm_rate;

		//Calculate required CoinD from exchange
		let coin_d_amt = get_input_price(exchange_comm_rate, coin_c_amt, exchange_coin_c_balance, exchange_coin_d_balance);

		//Make sure exchange has enough CoinD
		assert!(exchange_coin_d_balance >= coin_d_amt, 2);

		//Transfer CoinC funds from swapper to exchange
		let transferred_coin_c = CoinC::transfer_between(swapper_addr, exchange_addr, coin_c_amt);
		exchange_obj.coin_c = exchange_obj.coin_c + transferred_coin_c;
	
		//Transfer CoinD funds from exchange to swapper
		let transferred_coin_d = CoinD::transfer_between(exchange_addr, swapper_addr, coin_d_amt);
		exchange_obj.coin_d = exchange_obj.coin_d - transferred_coin_d;

		transferred_coin_d
	}

	public(script) fun exchange_coinC_to_coinD(swapper: address, exchange: address, coin_c_amt: u64) acquires Exchange {
		swap_coinC_to_coinD(coin_c_amt, swapper, exchange);
	}

	public fun swap_coinD_to_coinC(coin_d_amt: u64, swapper_addr: address, exchange_addr: address): u64 acquires Exchange {
		//Make sure exchange exists
		assert!(exists_at(exchange_addr), 1);
		assert!(CoinC::exist_at(exchange_addr), 1);
		assert!(CoinD::exist_at(exchange_addr), 1);
		
		//Get exchange
		let exchange_obj = borrow_global_mut<Exchange>(exchange_addr);

		//Make sure swapper has enough of CoinB
		assert!(CoinD::exist_at(swapper_addr), 1);
		assert!(CoinD::get_value(swapper_addr) >= coin_d_amt, 2);

		//Make sure swapper has CoinC
		assert!(CoinC::exist_at(swapper_addr), 1);

		//Get current exchange balances
		let exchange_coin_c_balance = exchange_obj.coin_c;
		let exchange_coin_d_balance = exchange_obj.coin_d;
		let exchange_comm_rate = exchange_obj.comm_rate;

		//Calculate required CoinC from exchange
		let coin_c_amt = get_input_price(exchange_comm_rate, coin_d_amt, exchange_coin_d_balance, exchange_coin_c_balance);
	
		//Make sure exchange has enough CoinC
		assert!(exchange_coin_c_balance >= coin_c_amt, 2);

		//Transfer CoinD funds from swapper to exchange
		let transferred_coin_d = CoinD::transfer_between(swapper_addr, exchange_addr, coin_d_amt);
		exchange_obj.coin_d = exchange_obj.coin_d + transferred_coin_d;
	
		//Transfer CoinC funds from exchange to swapper
		let transferred_coin_c = CoinC::transfer_between(exchange_addr, swapper_addr, coin_c_amt);
		exchange_obj.coin_c = exchange_obj.coin_c - transferred_coin_c;

		transferred_coin_c
	}
	
	public(script) fun exchange_coinD_to_coinC(swapper: address, exchange: address, coin_d_amt: u64) acquires Exchange {
		swap_coinD_to_coinC(coin_d_amt, swapper, exchange);
	}
}

