module Sender::ExchangeCD {
	// ExchangeCD module between coinC and coinD
	use Std::Signer;
	use Sender::CoinC;
	use Sender::CoinD;
	use Sender::CoinEvents;
	use Sender::ExchangeEvents;

	//ExchangeCD Struct
	struct ExchangeCD has key, store {
		coin_c: u64,
		coin_d: u64,
		LP_minted: u64,
		comm_rate: u64
	}

	//Liquidity Provider Coin Struct
	struct LPCoinCD has key, store, drop{
		value: u64
	}

	//
	//Liquidity Provider Coin functions
	//
	
	public(script) fun initialize_lp_coin_cd(account: signer) {
        CoinEvents::init_metadata<LPCoinCD>(&account);
    }

	//Generate new LP coin resource at account's address with 
	//number of LP coins = amount
	public fun mint(amount: u64, account: &signer): u64 acquires LPCoinCD {
		//Get account address
		let account_addr = Signer::address_of(account);

		//Check if account has coin
		if(lp_exist_at(account_addr)) {
			let account_lp_coin = borrow_global_mut<LPCoinCD>(account_addr);
			account_lp_coin.value = account_lp_coin.value + amount;
		}else{
			move_to<LPCoinCD>(account, LPCoinCD { value: amount });
		};

		CoinEvents::emit_mint_event<LPCoinCD>(b"LPCoin CU", amount, account_addr);
		amount
	}

 	public(script) fun mint_lp(account: signer, amt: u64) acquires LPCoinCD {
        mint(amt, &account);
    }

	//Return the value of LP coin located at addr
	public fun get_value(addr: address): u64 acquires LPCoinCD {
		borrow_global<LPCoinCD>(addr).value
	}

	//Destroy resource located at account's address
	fun burn(account: address, amt:u64) acquires LPCoinCD {
		assert!(lp_exist_at(account), 1);
		let lp_coin = borrow_global_mut<LPCoinCD>(account);
		assert!(amt<=lp_coin.value, 1);
		lp_coin.value = lp_coin.value - amt;
		CoinEvents::emit_burn_event<LPCoinCD>(b"LPCoin CU", amt, account);
	}

	//Check to see if LPCoinCD resource exists at addr
	public fun lp_exist_at(addr: address): bool {
		exists<LPCoinCD>(addr)
	}

	//Transfer LP coins between two accounts
	public fun transfer_between(from_addr: address, to_addr: address, transfer_amt: u64): u64 acquires LPCoinCD {
		//Make sure that from_addr has LP coins and that the 
		//value at from_addr is at least as much as the tranfer amount
		//Otherwise break -> MAKE THE USER GIVE US GOOD DATA
		assert!(lp_exist_at(from_addr), 1);
		assert!(get_value(from_addr) >= transfer_amt, 2);
		assert!(lp_exist_at(to_addr), 1);


		//Get the coin from from_addr and subtract the transfer amount
		let from_coin = borrow_global_mut<LPCoinCD>(from_addr);
		from_coin.value = from_coin.value - transfer_amt;

		//Get the coin from to_addr and add the transfer amount
		let to_coin = borrow_global_mut<LPCoinCD>(to_addr);
		to_coin.value = to_coin.value + transfer_amt;

		CoinEvents::emit_transfer_event<LPCoinCD>(b"LPCoin CU", transfer_amt, from_addr, to_addr);

		//Return the transferred amount
		transfer_amt
	}

	//
	//ExchangeCD functions
	//

	//Initialize the exchange with commision rate and 0's for coins
	public fun initialize(exchange_acct: &signer, comm_rate: u64, coin_c_amt: u64, coin_d_amt: u64) acquires LPCoinCD {
		//Make sure initializer has enough funds
		assert!(CoinC::exist_at(@Sender), 1);
		assert!(CoinC::get_value(@Sender) >= coin_c_amt, 2);
		assert!(CoinD::exist_at(@Sender), 1);
		assert!(CoinD::get_value(@Sender) >= coin_d_amt, 2);
		assert!(lp_exist_at(@Sender), 1);

		//Check that exchange has viable place for coins
		assert!(CoinC::exist_at(@Sender), 1);
		assert!(CoinD::exist_at(@Sender), 1);
		assert!(lp_exist_at(@Sender), 1);

		//Transfer funds from exchange initializer to exchange 
		let coin_c_transferred = CoinC::transfer_between(@Sender, @Sender, coin_c_amt);
		let coin_d_transferred = CoinD::transfer_between(@Sender, @Sender, coin_d_amt);

		//Calculate the amount of LP to give to intializer (setting equal to CoinC)
		//FIXME: IDK if this is best way
		let minted_lp_coin_cmt = coin_c_transferred;

		let initializer_lp_coin = borrow_global_mut<LPCoinCD>(@Sender);
		initializer_lp_coin.value = initializer_lp_coin.value + minted_lp_coin_cmt;

		move_to<ExchangeCD>(exchange_acct, ExchangeCD { coin_c: coin_c_transferred, 
							    coin_d: coin_d_transferred,
							    LP_minted: minted_lp_coin_cmt,
							    comm_rate: comm_rate});
		
		ExchangeEvents::init_metadata<ExchangeCD>(exchange_acct);
	}

	public(script) fun initialize_exchange(exchange: signer, comm_rate: u64, coin_c_amt: u64, coin_d_amt: u64) acquires LPCoinCD {
		initialize(&exchange, comm_rate, coin_c_amt, coin_d_amt)
	}

	//Check if exchange exists at an address
	public fun exists_at(): bool {
		exists<ExchangeCD>(@Sender)
	}

	//Check amount of CoinC in pool
	public fun get_CoinC_in_pool(): u64 acquires ExchangeCD {
		borrow_global<ExchangeCD>(@Sender).coin_c
	}

	//Check amount of CoinD in pool
	public fun get_CoinD_in_pool(): u64 acquires ExchangeCD {
		borrow_global<ExchangeCD>(@Sender).coin_d
	}

	//Check amount of LPCoinCD minted by pool
	public fun get_minted_LPCoinCD(): u64 acquires ExchangeCD {
		borrow_global<ExchangeCD>(@Sender).LP_minted
	}

	//Add liquidity to Pool
	public fun add_liquidity(coin_c_amt: u64, provider_addr: address): u64 acquires ExchangeCD, LPCoinCD {
		//Make sure exchange exists
		assert!(exists_at(), 1);
		assert!(lp_exist_at(@Sender), 1);
		assert!(CoinC::exist_at(@Sender), 1);
		assert!(CoinD::exist_at(@Sender), 1);
		
		//Get ExchangeCD
		let exchange_obj = borrow_global_mut<ExchangeCD>(@Sender);

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
		let lp_coin_cmt = new_lp_coin_balance - exchange_lp_coin_balance;

		//Transfer CoinC funds from provider to exchange
		let transferred_coin_c = CoinC::transfer_between(provider_addr, @Sender, coin_c_amt);
		exchange_obj.coin_c = exchange_obj.coin_c + transferred_coin_c;

		//Transfer CoinD funds from provider to exchange
		let transferred_coin_d = CoinD::transfer_between(provider_addr, @Sender, coin_d_amt);
		exchange_obj.coin_d = exchange_obj.coin_d + transferred_coin_d;
	
		//Mint LPCoinCD for exchange
		let provider_lp = borrow_global_mut<LPCoinCD>(provider_addr);
		provider_lp.value = provider_lp.value + lp_coin_cmt;
		
		//Add LPCoinCD amount to exhcange
		exchange_obj.LP_minted = exchange_obj.LP_minted + lp_coin_cmt;

		ExchangeEvents::emit_add_liquidity_event<ExchangeCD>(
			b"Pool C - USD",
			transferred_coin_c,
			transferred_coin_d,
			lp_coin_cmt,
			provider_addr,
		);

		lp_coin_cmt
	}

	public(script) fun add_exchange_liquidity(provider: address, coin_c_amt: u64) acquires ExchangeCD, LPCoinCD {
		add_liquidity(coin_c_amt, provider);
	}

	//Function for removing liquidity
	public fun remove_liquidity(lp_coin_cmt: u64, provider_addr: address): (u64, u64) acquires ExchangeCD, LPCoinCD {
		//Make sure exchange exists
		assert!(exists_at(), 1);
		assert!(lp_exist_at(@Sender), 1);
		assert!(CoinC::exist_at(@Sender), 1);
		assert!(CoinD::exist_at(@Sender), 1);
		
		//Get exchange_obj
		let exchange_obj = borrow_global_mut<ExchangeCD>(@Sender);

		//Check that provider has required amount of LPCoinCD
		assert!(lp_exist_at(provider_addr), 1);
		assert!(get_value(provider_addr) >= lp_coin_cmt, 2);

		//Check that ExchangeCD has minted enough LPCoinCD
		assert!(exchange_obj.LP_minted >= lp_coin_cmt, 2);

		//Get current exchange balances
		let exchange_coin_c_balance = exchange_obj.coin_c;
		let exchange_coin_d_balance = exchange_obj.coin_d;
		let exchange_lp_coin_balance = exchange_obj.LP_minted;

		//Calculate required amount of CoinC from exchange
		let new_coin_c_balance = exchange_coin_c_balance - {{exchange_coin_c_balance * lp_coin_cmt} / exchange_lp_coin_balance};
		let coin_c_amt = exchange_coin_c_balance - new_coin_c_balance;

		//Calculate required amount of CoinD from exchange
		let new_coin_d_balance = exchange_coin_d_balance - {{exchange_coin_d_balance * lp_coin_cmt} / exchange_lp_coin_balance};
		let coin_d_amt = exchange_coin_d_balance - new_coin_d_balance;

		//Make sure new balances are less than old balances
		assert!(CoinC::exist_at(@Sender), 1);
		assert!(exchange_coin_c_balance >= new_coin_c_balance, 2);
		assert!(CoinD::exist_at(@Sender), 1);
		assert!(exchange_coin_d_balance >= new_coin_d_balance, 2);

		//Make sure exchange has enough of CoinC and CoinD to satisfy request
		assert!(exchange_coin_c_balance >= coin_c_amt, 2);
		assert!(exchange_coin_d_balance >= coin_d_amt, 2);

		//Transfer CoinC funds from exchange to provider
		let transferred_coin_c = CoinC::transfer_between(@Sender, provider_addr, coin_c_amt);
		exchange_obj.coin_c = exchange_obj.coin_c - transferred_coin_c;

		//Transfer CoinD funds from exchange to provider
		let transferred_coin_d = CoinD::transfer_between(@Sender, provider_addr, coin_d_amt);
		exchange_obj.coin_d = exchange_obj.coin_d - transferred_coin_d;

		//Transfer LPCoinCD from provider to exchange and burn
		let transferred_lp_coin = transfer_between(provider_addr, @Sender, lp_coin_cmt);
		assert!(transferred_lp_coin == lp_coin_cmt, 2);
		burn(@Sender, transferred_lp_coin);

		exchange_obj.LP_minted = exchange_obj.LP_minted - transferred_lp_coin;

		ExchangeEvents::emit_remove_liquidity_event<ExchangeCD>(
			b"Pool C - USD",
			coin_c_amt,
			coin_d_amt,
			transferred_lp_coin,
			provider_addr,
		);

		(coin_c_amt, coin_d_amt)
	}
	
	public(script) fun remove_exchange_liquidity(provider: address, lp_coin_cmt: u64) acquires ExchangeCD, LPCoinCD {
		remove_liquidity(lp_coin_cmt, provider);
	}

	//Get pricing for output amount given input amount including commision rate
	fun get_input_price(comm_rate: u64, input_amount: u64, input_reserve: u64, output_reserve: u64): u64 {
		let numerator = input_amount * (10000 - comm_rate) * output_reserve ;
		let denominator = {input_reserve * 10000} + {input_amount * (10000 - comm_rate)};
		numerator / denominator
	}

	//Get spot (input) price to emit as an event (multiple of 10000)
	fun get_spot_price(): u64 acquires ExchangeCD {
		//Get exchange
		let exchange_obj = borrow_global_mut<ExchangeCD>(@Sender);

		//Get current exchange balances
		let coin_c_balance = exchange_obj.coin_c;
		let coin_d_balance = exchange_obj.coin_d;
		let comm_rate = exchange_obj.comm_rate;

		let numerator = (10000 - comm_rate) * coin_d_balance;
		let denominator = {coin_c_balance * 10000} + {10000 - comm_rate};
		{numerator*10000} / denominator
	}

	//Get pricing for input amount given output amount including commision rate
	fun get_output_price(comm_rate: u64, output_amount: u64, input_reserve: u64, output_reserve: u64): u64 {
		let numerator = input_reserve * output_amount * 10000;
		let denominator = {output_reserve - output_amount} * (10000 - comm_rate);
		{numerator / denominator} + 1
	}

	public fun swap_coinC_to_coinD(coin_c_amt: u64, swapper_addr: address): u64 acquires ExchangeCD {
		//Make sure exchange exists
		assert!(exists_at(), 1);
		assert!(CoinC::exist_at(@Sender), 1);
		assert!(CoinD::exist_at(@Sender), 1);
		
		//Get exchange
		let exchange_obj = borrow_global_mut<ExchangeCD>(@Sender);

		//Make sure swapper has enough of CoinC
		assert!(CoinC::exist_at(swapper_addr), 1);
		assert!(CoinC::get_value(swapper_addr) >= coin_c_amt, 2);

		//Make sure swapper has CoinD
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
		let transferred_coin_c = CoinC::transfer_between(swapper_addr, @Sender, coin_c_amt);
		exchange_obj.coin_c = exchange_obj.coin_c + transferred_coin_c;
	
		//Transfer CoinD funds from exchange to swapper
		let transferred_coin_d = CoinD::transfer_between(@Sender, swapper_addr, coin_d_amt);
		exchange_obj.coin_d = exchange_obj.coin_d - transferred_coin_d;

		ExchangeEvents::emit_exchange_price_change_event<ExchangeCD>(
			b"Pool C - USD",
			get_spot_price(),
		);

		transferred_coin_d
	}

	public(script) fun exchange_coinC_to_coinD(swapper: address, coin_c_amt: u64) acquires ExchangeCD {
		swap_coinC_to_coinD(coin_c_amt, swapper);
	}

	public fun swap_coinD_to_coinC(coin_d_amt: u64, swapper_addr: address): u64 acquires ExchangeCD {
		//Make sure exchange exists
		assert!(exists_at(), 1);
		assert!(CoinC::exist_at(@Sender), 1);
		assert!(CoinD::exist_at(@Sender), 1);
		
		//Get exchange
		let exchange_obj = borrow_global_mut<ExchangeCD>(@Sender);

		//Make sure swapper has enough of CoinD
		assert!(CoinD::exist_at(swapper_addr), 1);
		assert!(CoinD::get_value(swapper_addr) >= coin_d_amt, 2);

		//Make sure swapper has CoinC
		assert!(CoinC::exist_at(swapper_addr), 1);

		//Get current exchange balances
		let exchange_coin_c_balance = exchange_obj.coin_c;
		let exchange_coin_d_balance = exchange_obj.coin_d;
		let exchange_comm_rate = exchange_obj.comm_rate;

		//Calculate required CoinD from exchange
		let coin_c_amt = get_input_price(exchange_comm_rate, coin_d_amt, exchange_coin_d_balance, exchange_coin_c_balance);
	
		//Make sure exchange has enough CoinC
		assert!(exchange_coin_c_balance >= coin_c_amt, 2);

		//Transfer CoinD funds from swapper to exchange
		let transferred_coin_d = CoinD::transfer_between(swapper_addr, @Sender, coin_d_amt);
		exchange_obj.coin_d = exchange_obj.coin_d + transferred_coin_d;
	
		//Transfer CoinC funds from exchange to swapper
		let transferred_coin_c = CoinC::transfer_between(@Sender, swapper_addr, coin_c_amt);
		exchange_obj.coin_c = exchange_obj.coin_c - transferred_coin_c;

		ExchangeEvents::emit_exchange_price_change_event<ExchangeCD>(
			b"Pool C - USD",
			get_spot_price(),
		);

		transferred_coin_c
	}
	
	public(script) fun exchange_coinD_to_coinC(swapper: address, coin_d_amt: u64) acquires ExchangeCD {
		swap_coinD_to_coinC(coin_d_amt, swapper);
	}
}

