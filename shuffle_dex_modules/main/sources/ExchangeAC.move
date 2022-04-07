module Sender::ExchangeAC {
	// ExchangeAC module between coinA and coinC
	use Std::Signer;
	use Sender::CoinA;
	use Sender::CoinC;
	use Sender::CoinEvents;
	use Sender::ExchangeEvents;

	//ExchangeAC Struct
	struct ExchangeAC has key, store {
		coin_a: u64,
		coin_c: u64,
		LP_minted: u64,
		comm_rate: u64
	}

	//Liquidity Provider Coin Struct
	struct LPCoinAC has key, store, drop{
		value: u64
	}

	//
	//Liquidity Provider Coin functions
	//
	
	public(script) fun initialize_lp_coin_ac(account: signer) {
        CoinEvents::init_metadata<LPCoinAC>(&account);
    }

	//Generate new LP coin resource at account's address with 
	//number of LP coins = amount
	public fun mint(amount: u64, account: &signer): u64 acquires LPCoinAC {
		//Get account address
		let account_addr = Signer::address_of(account);

		//Check if account has coin
		if(lp_exist_at(account_addr)) {
			let account_lp_coin = borrow_global_mut<LPCoinAC>(account_addr);
			account_lp_coin.value = account_lp_coin.value + amount;
		}else{
			move_to<LPCoinAC>(account, LPCoinAC { value: amount });
		};

		CoinEvents::emit_mint_event<LPCoinAC>(b"LPCoin AC", amount, account_addr);
		amount
	}

 	public(script) fun mint_lp(account: signer, amt: u64) acquires LPCoinAC {
        mint(amt, &account);
    }

	//Return the value of LP coin located at addr
	public fun get_value(addr: address): u64 acquires LPCoinAC {
		borrow_global<LPCoinAC>(addr).value
	}

	//Destroy resource located at account's address
	fun burn(account: address, amt:u64) acquires LPCoinAC {
		assert!(lp_exist_at(account), 1);
		let lp_coin = borrow_global_mut<LPCoinAC>(account);
		assert!(amt<=lp_coin.value, 1);
		lp_coin.value = lp_coin.value - amt;
		CoinEvents::emit_burn_event<LPCoinAC>(b"LPCoin AC", amt, account);
	}

	//Check to see if LPCoinAC resource exists at addr
	public fun lp_exist_at(addr: address): bool {
		exists<LPCoinAC>(addr)
	}

	//Transfer LP coins between two accounts
	public fun transfer_between(from_addr: address, to_addr: address, transfer_amt: u64): u64 acquires LPCoinAC {
		//Make sure that from_addr has LP coins and that the 
		//value at from_addr is at least as much as the tranfer amount
		//Otherwise break -> MAKE THE USER GIVE US GOOD DATA
		assert!(lp_exist_at(from_addr), 1);
		assert!(get_value(from_addr) >= transfer_amt, 2);
		assert!(lp_exist_at(to_addr), 1);


		//Get the coin from from_addr and subtract the transfer amount
		let from_coin = borrow_global_mut<LPCoinAC>(from_addr);
		from_coin.value = from_coin.value - transfer_amt;

		//Get the coin from to_addr and add the transfer amount
		let to_coin = borrow_global_mut<LPCoinAC>(to_addr);
		to_coin.value = to_coin.value + transfer_amt;

		CoinEvents::emit_transfer_event<LPCoinAC>(b"LPCoin AC", transfer_amt, from_addr, to_addr);

		//Return the transferred amount
		transfer_amt
	}

	//
	//ExchangeAC functions
	//

	//Initialize the exchange with commision rate and 0's for coins
	public fun initialize(exchange_acct: &signer, comm_rate: u64, coin_a_amt: u64, coin_c_amt: u64) acquires LPCoinAC {
		//Make sure initializer has enough funds
		assert!(CoinA::exist_at(@Sender), 1);
		assert!(CoinA::get_value(@Sender) >= coin_a_amt, 2);
		assert!(CoinC::exist_at(@Sender), 1);
		assert!(CoinC::get_value(@Sender) >= coin_c_amt, 2);
		assert!(lp_exist_at(@Sender), 1);

		//Check that exchange has viable place for coins
		assert!(CoinA::exist_at(@Sender), 1);
		assert!(CoinC::exist_at(@Sender), 1);
		assert!(lp_exist_at(@Sender), 1);

		//Transfer funds from exchange initializer to exchange 
		let coin_a_transferred = CoinA::transfer_between(@Sender, @Sender, coin_a_amt);
		let coin_c_transferred = CoinC::transfer_between(@Sender, @Sender, coin_c_amt);

		//Calculate the amount of LP to give to intializer (setting equal to CoinA)
		//FIXME: IDK if this is best way
		let minted_lp_coin_amt = coin_a_transferred;

		let initializer_lp_coin = borrow_global_mut<LPCoinAC>(@Sender);
		initializer_lp_coin.value = initializer_lp_coin.value + minted_lp_coin_amt;

		move_to<ExchangeAC>(exchange_acct, ExchangeAC { coin_a: coin_a_transferred, 
							    coin_c: coin_c_transferred,
							    LP_minted: minted_lp_coin_amt,
							    comm_rate: comm_rate});
		
		ExchangeEvents::init_metadata<ExchangeAC>(exchange_acct);
	}

	public(script) fun initialize_exchange(exchange: signer, comm_rate: u64, coin_a_amt: u64, coin_c_amt: u64) acquires LPCoinAC {
		initialize(&exchange, comm_rate, coin_a_amt, coin_c_amt)
	}

	//Check if exchange exists at an address
	public fun exists_at(): bool {
		exists<ExchangeAC>(@Sender)
	}

	//Check amount of CoinA in pool
	public fun get_CoinA_in_pool(): u64 acquires ExchangeAC {
		borrow_global<ExchangeAC>(@Sender).coin_a
	}

	//Check amount of CoinC in pool
	public fun get_CoinC_in_pool(): u64 acquires ExchangeAC {
		borrow_global<ExchangeAC>(@Sender).coin_c
	}

	//Check amount of LPCoinAC minted by pool
	public fun get_minted_LPCoinAC(): u64 acquires ExchangeAC {
		borrow_global<ExchangeAC>(@Sender).LP_minted
	}

	//Add liquidity to Pool
	public fun add_liquidity(coin_a_amt: u64, provider_addr: address): u64 acquires ExchangeAC, LPCoinAC {
		//Make sure exchange exists
		assert!(exists_at(), 1);
		assert!(lp_exist_at(@Sender), 1);
		assert!(CoinA::exist_at(@Sender), 1);
		assert!(CoinC::exist_at(@Sender), 1);
		
		//Get ExchangeAC
		let exchange_obj = borrow_global_mut<ExchangeAC>(@Sender);

		//Get current exchange balances
		let exchange_coin_a_balance = exchange_obj.coin_a;
		let exchange_coin_c_balance = exchange_obj.coin_c;
		let exchange_lp_coin_balance = exchange_obj.LP_minted;

		//Calculate required amount of CoinC from provider
		let new_coin_c_balance = exchange_coin_c_balance + {{exchange_coin_c_balance * coin_a_amt} / exchange_coin_a_balance};
		let coin_c_amt = new_coin_c_balance - exchange_coin_c_balance;

		//Make sure provider has enough of each coin
		assert!(CoinA::exist_at(provider_addr), 1);
		assert!(CoinA::get_value(provider_addr) >= coin_a_amt, 2);
		assert!(CoinC::exist_at(provider_addr), 1);
		assert!(CoinC::get_value(provider_addr) >= coin_c_amt, 2);
		assert!(lp_exist_at(provider_addr), 1);

		//Calculate LP coin required to mint
		let new_lp_coin_balance = exchange_lp_coin_balance + {{exchange_lp_coin_balance * coin_a_amt} / exchange_coin_a_balance};
		let lp_coin_amt = new_lp_coin_balance - exchange_lp_coin_balance;

		//Transfer CoinA funds from provider to exchange
		let transferred_coin_a = CoinA::transfer_between(provider_addr, @Sender, coin_a_amt);
		exchange_obj.coin_a = exchange_obj.coin_a + transferred_coin_a;

		//Transfer CoinC funds from provider to exchange
		let transferred_coin_c = CoinC::transfer_between(provider_addr, @Sender, coin_c_amt);
		exchange_obj.coin_c = exchange_obj.coin_c + transferred_coin_c;
	
		//Mint LPCoinAC for exchange
		let provider_lp = borrow_global_mut<LPCoinAC>(provider_addr);
		provider_lp.value = provider_lp.value + lp_coin_amt;
		
		//Add LPCoinAC amount to exhcange
		exchange_obj.LP_minted = exchange_obj.LP_minted + lp_coin_amt;

		ExchangeEvents::emit_add_liquidity_event<ExchangeAC>(
			b"Pool A - C",
			transferred_coin_a,
			transferred_coin_c,
			lp_coin_amt,
			provider_addr,
		);

		lp_coin_amt
	}

	public(script) fun add_exchange_liquidity(provider: address, coin_a_amt: u64) acquires ExchangeAC, LPCoinAC {
		add_liquidity(coin_a_amt, provider);
	}

	//Function for removing liquidity
	public fun remove_liquidity(lp_coin_amt: u64, provider_addr: address): (u64, u64) acquires ExchangeAC, LPCoinAC {
		//Make sure exchange exists
		assert!(exists_at(), 1);
		assert!(lp_exist_at(@Sender), 1);
		assert!(CoinA::exist_at(@Sender), 1);
		assert!(CoinC::exist_at(@Sender), 1);
		
		//Get exchange_obj
		let exchange_obj = borrow_global_mut<ExchangeAC>(@Sender);

		//Check that provider has required amount of LPCoinAC
		assert!(lp_exist_at(provider_addr), 1);
		assert!(get_value(provider_addr) >= lp_coin_amt, 2);

		//Check that ExchangeAC has minted enough LPCoinAC
		assert!(exchange_obj.LP_minted >= lp_coin_amt, 2);

		//Get current exchange balances
		let exchange_coin_a_balance = exchange_obj.coin_a;
		let exchange_coin_c_balance = exchange_obj.coin_c;
		let exchange_lp_coin_balance = exchange_obj.LP_minted;

		//Calculate required amount of CoinA from exchange
		let new_coin_a_balance = exchange_coin_a_balance - {{exchange_coin_a_balance * lp_coin_amt} / exchange_lp_coin_balance};
		let coin_a_amt = exchange_coin_a_balance - new_coin_a_balance;

		//Calculate required amount of CoinC from exchange
		let new_coin_c_balance = exchange_coin_c_balance - {{exchange_coin_c_balance * lp_coin_amt} / exchange_lp_coin_balance};
		let coin_c_amt = exchange_coin_c_balance - new_coin_c_balance;

		//Make sure new balances are less than old balances
		assert!(CoinA::exist_at(@Sender), 1);
		assert!(exchange_coin_a_balance >= new_coin_a_balance, 2);
		assert!(CoinC::exist_at(@Sender), 1);
		assert!(exchange_coin_c_balance >= new_coin_c_balance, 2);

		//Make sure exchange has enough of CoinA and CoinC to satisfy request
		assert!(exchange_coin_a_balance >= coin_a_amt, 2);
		assert!(exchange_coin_c_balance >= coin_c_amt, 2);

		//Transfer CoinA funds from exchange to provider
		let transferred_coin_a = CoinA::transfer_between(@Sender, provider_addr, coin_a_amt);
		exchange_obj.coin_a = exchange_obj.coin_a - transferred_coin_a;

		//Transfer CoinC funds from exchange to provider
		let transferred_coin_c = CoinC::transfer_between(@Sender, provider_addr, coin_c_amt);
		exchange_obj.coin_c = exchange_obj.coin_c - transferred_coin_c;

		//Transfer LPCoinAC from provider to exchange and burn
		let transferred_lp_coin = transfer_between(provider_addr, @Sender, lp_coin_amt);
		assert!(transferred_lp_coin == lp_coin_amt, 2);
		burn(@Sender, transferred_lp_coin);

		exchange_obj.LP_minted = exchange_obj.LP_minted - transferred_lp_coin;

		ExchangeEvents::emit_remove_liquidity_event<ExchangeAC>(
			b"Pool A - C",
			coin_a_amt,
			coin_c_amt,
			transferred_lp_coin,
			provider_addr,
		);

		(coin_a_amt, coin_c_amt)
	}
	
	public(script) fun remove_exchange_liquidity(provider: address, lp_coin_amt: u64) acquires ExchangeAC, LPCoinAC {
		remove_liquidity(lp_coin_amt, provider);
	}

	//Get pricing for output amount given input amount including commision rate
	fun get_input_price(comm_rate: u64, input_amount: u64, input_reserve: u64, output_reserve: u64): u64 {
		let numerator = input_amount * (10000 - comm_rate) * output_reserve ;
		let denominator = {input_reserve * 10000} + {input_amount * (10000 - comm_rate)};
		numerator / denominator
	}

	//Get spot (input) price to emit as an event (multiple of 10000)
	fun get_spot_price(): u64 acquires ExchangeAC {
		//Get exchange
		let exchange_obj = borrow_global_mut<ExchangeAC>(@Sender);

		//Get current exchange balances
		let coin_a_balance = exchange_obj.coin_a;
		let coin_c_balance = exchange_obj.coin_c;
		let comm_rate = exchange_obj.comm_rate;

		let numerator = (10000 - comm_rate) * coin_c_balance;
		let denominator = {coin_a_balance * 10000} + {10000 - comm_rate};
		{numerator*10000} / denominator
	}

	//Get pricing for input amount given output amount including commision rate
	fun get_output_price(comm_rate: u64, output_amount: u64, input_reserve: u64, output_reserve: u64): u64 {
		let numerator = input_reserve * output_amount * 10000;
		let denominator = {output_reserve - output_amount} * (10000 - comm_rate);
		{numerator / denominator} + 1
	}

	public fun swap_coinA_to_coinC(coin_a_amt: u64, swapper_addr: address): u64 acquires ExchangeAC {
		//Make sure exchange exists
		assert!(exists_at(), 1);
		assert!(CoinA::exist_at(@Sender), 1);
		assert!(CoinC::exist_at(@Sender), 1);
		
		//Get exchange
		let exchange_obj = borrow_global_mut<ExchangeAC>(@Sender);

		//Make sure swapper has enough of CoinA
		assert!(CoinA::exist_at(swapper_addr), 1);
		assert!(CoinA::get_value(swapper_addr) >= coin_a_amt, 2);

		//Make sure swapper has CoinC
		assert!(CoinC::exist_at(swapper_addr), 1);

		//Get current exchange balances
		let exchange_coin_a_balance = exchange_obj.coin_a;
		let exchange_coin_c_balance = exchange_obj.coin_c;
		let exchange_comm_rate = exchange_obj.comm_rate;

		//Calculate required CoinC from exchange
		let coin_c_amt = get_input_price(exchange_comm_rate, coin_a_amt, exchange_coin_a_balance, exchange_coin_c_balance);

		//Make sure exchange has enough CoinC
		assert!(exchange_coin_c_balance >= coin_c_amt, 2);

		//Transfer CoinA funds from swapper to exchange
		let transferred_coin_a = CoinA::transfer_between(swapper_addr, @Sender, coin_a_amt);
		exchange_obj.coin_a = exchange_obj.coin_a + transferred_coin_a;
	
		//Transfer CoinC funds from exchange to swapper
		let transferred_coin_c = CoinC::transfer_between(@Sender, swapper_addr, coin_c_amt);
		exchange_obj.coin_c = exchange_obj.coin_c - transferred_coin_c;

		ExchangeEvents::emit_exchange_price_change_event<ExchangeAC>(
			b"Pool A - C",
			get_spot_price(),
		);

		transferred_coin_c
	}

	public(script) fun exchange_coinA_to_coinC(swapper: address, coin_a_amt: u64) acquires ExchangeAC {
		swap_coinA_to_coinC(coin_a_amt, swapper);
	}

	public fun swap_coinC_to_coinA(coin_c_amt: u64, swapper_addr: address): u64 acquires ExchangeAC {
		//Make sure exchange exists
		assert!(exists_at(), 1);
		assert!(CoinA::exist_at(@Sender), 1);
		assert!(CoinC::exist_at(@Sender), 1);
		
		//Get exchange
		let exchange_obj = borrow_global_mut<ExchangeAC>(@Sender);

		//Make sure swapper has enough of CoinC
		assert!(CoinC::exist_at(swapper_addr), 1);
		assert!(CoinC::get_value(swapper_addr) >= coin_c_amt, 2);

		//Make sure swapper has CoinA
		assert!(CoinA::exist_at(swapper_addr), 1);

		//Get current exchange balances
		let exchange_coin_a_balance = exchange_obj.coin_a;
		let exchange_coin_c_balance = exchange_obj.coin_c;
		let exchange_comm_rate = exchange_obj.comm_rate;

		//Calculate required CoinC from exchange
		let coin_a_amt = get_input_price(exchange_comm_rate, coin_c_amt, exchange_coin_c_balance, exchange_coin_a_balance);
	
		//Make sure exchange has enough CoinA
		assert!(exchange_coin_a_balance >= coin_a_amt, 2);

		//Transfer CoinC funds from swapper to exchange
		let transferred_coin_c = CoinC::transfer_between(swapper_addr, @Sender, coin_c_amt);
		exchange_obj.coin_c = exchange_obj.coin_c + transferred_coin_c;
	
		//Transfer CoinA funds from exchange to swapper
		let transferred_coin_a = CoinA::transfer_between(@Sender, swapper_addr, coin_a_amt);
		exchange_obj.coin_a = exchange_obj.coin_a - transferred_coin_a;

		ExchangeEvents::emit_exchange_price_change_event<ExchangeAC>(
			b"Pool A - C",
			get_spot_price(),
		);

		transferred_coin_a
	}
	
	public(script) fun exchange_coinC_to_coinA(swapper: address, coin_c_amt: u64) acquires ExchangeAC {
		swap_coinC_to_coinA(coin_c_amt, swapper);
	}
}

