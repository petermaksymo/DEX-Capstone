module Sender::ExchangeBC {
	// ExchangeBC module between coinB and coinC
	use Std::Signer;
	use Sender::CoinB;
	use Sender::CoinC;
	use Sender::CoinEvents;
	use Sender::ExchangeEvents;

	//ExchangeBC Struct
	struct ExchangeBC has key, store {
		coin_b: u64,
		coin_c: u64,
		LP_minted: u64,
		comm_rate: u64
	}

	//Liquidity Provider Coin Struct
	struct LPCoinBC has key, store, drop{
		value: u64
	}

	//
	//Liquidity Provider Coin functions
	//
	
	public(script) fun initialize_lp_coin_bc(account: signer) {
        CoinEvents::init_metadata<LPCoinBC>(&account);
    }

	//Generate new LP coin resource at account's address with 
	//number of LP coins = amount
	public fun mint(amount: u64, account: &signer): u64 acquires LPCoinBC {
		//Get account address
		let account_addr = Signer::address_of(account);

		//Check if account has coin
		if(lp_exist_at(account_addr)) {
			let account_lp_coin = borrow_global_mut<LPCoinBC>(account_addr);
			account_lp_coin.value = account_lp_coin.value + amount;
		}else{
			move_to<LPCoinBC>(account, LPCoinBC { value: amount });
		};

		CoinEvents::emit_mint_event<LPCoinBC>(b"LPCoin BC", amount, account_addr);
		amount
	}

 	public(script) fun mint_lp(account: signer, amt: u64) acquires LPCoinBC {
        mint(amt, &account);
    }

	//Return the value of LP coin located at addr
	public fun get_value(addr: address): u64 acquires LPCoinBC {
		borrow_global<LPCoinBC>(addr).value
	}

	//Destroy resource located at account's address
	fun burn(account: address, amt:u64) acquires LPCoinBC {
		assert!(lp_exist_at(account), 1);
		let lp_coin = borrow_global_mut<LPCoinBC>(account);
		assert!(amt<=lp_coin.value, 1);
		lp_coin.value = lp_coin.value - amt;
		CoinEvents::emit_burn_event<LPCoinBC>(b"LPCoin BC", amt, account);
	}

	//Check to see if LPCoinBC resource exists at addr
	public fun lp_exist_at(addr: address): bool {
		exists<LPCoinBC>(addr)
	}

	//Transfer LP coins between two accounts
	public fun transfer_between(from_addr: address, to_addr: address, transfer_amt: u64): u64 acquires LPCoinBC {
		//Make sure that from_addr has LP coins and that the 
		//value at from_addr is at least as much as the tranfer amount
		//Otherwise break -> MAKE THE USER GIVE US GOOD DATA
		assert!(lp_exist_at(from_addr), 1);
		assert!(get_value(from_addr) >= transfer_amt, 2);
		assert!(lp_exist_at(to_addr), 1);


		//Get the coin from from_addr and subtract the transfer amount
		let from_coin = borrow_global_mut<LPCoinBC>(from_addr);
		from_coin.value = from_coin.value - transfer_amt;

		//Get the coin from to_addr and add the transfer amount
		let to_coin = borrow_global_mut<LPCoinBC>(to_addr);
		to_coin.value = to_coin.value + transfer_amt;

		CoinEvents::emit_transfer_event<LPCoinBC>(b"LPCoin BC", transfer_amt, from_addr, to_addr);

		//Return the transferred amount
		transfer_amt
	}

	//
	//ExchangeBC functions
	//

	//Initialize the exchange with commision rate and 0's for coins
	public fun initialize(exchange_acct: &signer, comm_rate: u64, coin_b_amt: u64, coin_c_amt: u64) acquires LPCoinBC, ExchangeBC {
		//Make sure initializer has enough funds
		assert!(CoinB::exist_at(@Sender), 1);
		assert!(CoinB::get_value(@Sender) >= coin_b_amt, 2);
		assert!(CoinC::exist_at(@Sender), 1);
		assert!(CoinC::get_value(@Sender) >= coin_c_amt, 2);
		assert!(lp_exist_at(@Sender), 1);

		//Check that exchange has viable place for coins
		assert!(CoinB::exist_at(@Sender), 1);
		assert!(CoinC::exist_at(@Sender), 1);
		assert!(lp_exist_at(@Sender), 1);

		//Transfer funds from exchange initializer to exchange 
		let coin_b_transferred = CoinB::transfer_between(@Sender, @Sender, coin_b_amt);
		let coin_c_transferred = CoinC::transfer_between(@Sender, @Sender, coin_c_amt);

		//Calculate the amount of LP to give to intializer (setting equal to CoinB)
		//FIXME: IDK if this is best way
		let minted_lp_coin_bmt = coin_b_transferred;

		let initializer_lp_coin = borrow_global_mut<LPCoinBC>(@Sender);
		initializer_lp_coin.value = initializer_lp_coin.value + minted_lp_coin_bmt;

		move_to<ExchangeBC>(exchange_acct, ExchangeBC { coin_b: coin_b_transferred, 
							    coin_c: coin_c_transferred,
							    LP_minted: minted_lp_coin_bmt,
							    comm_rate: comm_rate});
		
		ExchangeEvents::init_metadata<ExchangeBC>(exchange_acct);

		ExchangeEvents::emit_exchange_price_change_event<ExchangeBC>(
			b"Pool B - C",
			get_spot_price(),
		);
	}

	public(script) fun initialize_exchange(exchange: signer, comm_rate: u64, coin_b_amt: u64, coin_c_amt: u64) acquires LPCoinBC, ExchangeBC {
		initialize(&exchange, comm_rate, coin_b_amt, coin_c_amt)
	}

	//Check if exchange exists at an address
	public fun exists_at(): bool {
		exists<ExchangeBC>(@Sender)
	}

	//Check amount of CoinB in pool
	public fun get_CoinB_in_pool(): u64 acquires ExchangeBC {
		borrow_global<ExchangeBC>(@Sender).coin_b
	}

	//Check amount of CoinC in pool
	public fun get_CoinC_in_pool(): u64 acquires ExchangeBC {
		borrow_global<ExchangeBC>(@Sender).coin_c
	}

	//Check amount of LPCoinBC minted by pool
	public fun get_minted_LPCoinBC(): u64 acquires ExchangeBC {
		borrow_global<ExchangeBC>(@Sender).LP_minted
	}

	//Add liquidity to Pool
	public fun add_liquidity(coin_b_amt: u64, provider_addr: address): u64 acquires ExchangeBC, LPCoinBC {
		//Make sure exchange exists
		assert!(exists_at(), 1);
		assert!(lp_exist_at(@Sender), 1);
		assert!(CoinB::exist_at(@Sender), 1);
		assert!(CoinC::exist_at(@Sender), 1);
		
		//Get ExchangeBC
		let exchange_obj = borrow_global_mut<ExchangeBC>(@Sender);

		//Get current exchange balances
		let exchange_coin_b_balance = exchange_obj.coin_b;
		let exchange_coin_c_balance = exchange_obj.coin_c;
		let exchange_lp_coin_balance = exchange_obj.LP_minted;

		//Calculate required amount of CoinC from provider
		let new_coin_c_balance = exchange_coin_c_balance + {{exchange_coin_c_balance * coin_b_amt} / exchange_coin_b_balance};
		let coin_c_amt = new_coin_c_balance - exchange_coin_c_balance;

		//Make sure provider has enough of each coin
		assert!(CoinB::exist_at(provider_addr), 1);
		assert!(CoinB::get_value(provider_addr) >= coin_b_amt, 2);
		assert!(CoinC::exist_at(provider_addr), 1);
		assert!(CoinC::get_value(provider_addr) >= coin_c_amt, 2);
		assert!(lp_exist_at(provider_addr), 1);

		//Calculate LP coin required to mint
		let new_lp_coin_balance = exchange_lp_coin_balance + {{exchange_lp_coin_balance * coin_b_amt} / exchange_coin_b_balance};
		let lp_coin_bmt = new_lp_coin_balance - exchange_lp_coin_balance;

		//Transfer CoinB funds from provider to exchange
		let transferred_coin_b = CoinB::transfer_between(provider_addr, @Sender, coin_b_amt);
		exchange_obj.coin_b = exchange_obj.coin_b + transferred_coin_b;

		//Transfer CoinC funds from provider to exchange
		let transferred_coin_c = CoinC::transfer_between(provider_addr, @Sender, coin_c_amt);
		exchange_obj.coin_c = exchange_obj.coin_c + transferred_coin_c;
	
		//Mint LPCoinBC for exchange
		let provider_lp = borrow_global_mut<LPCoinBC>(provider_addr);
		provider_lp.value = provider_lp.value + lp_coin_bmt;
		
		//Add LPCoinBC amount to exhcange
		exchange_obj.LP_minted = exchange_obj.LP_minted + lp_coin_bmt;

		ExchangeEvents::emit_add_liquidity_event<ExchangeBC>(
			b"Pool B - C",
			transferred_coin_b,
			transferred_coin_c,
			lp_coin_bmt,
			provider_addr,
		);

		lp_coin_bmt
	}

	public(script) fun add_exchange_liquidity(provider: address, coin_b_amt: u64) acquires ExchangeBC, LPCoinBC {
		add_liquidity(coin_b_amt, provider);
	}

	//Function for removing liquidity
	public fun remove_liquidity(lp_coin_bmt: u64, provider_addr: address): (u64, u64) acquires ExchangeBC, LPCoinBC {
		//Make sure exchange exists
		assert!(exists_at(), 1);
		assert!(lp_exist_at(@Sender), 1);
		assert!(CoinB::exist_at(@Sender), 1);
		assert!(CoinC::exist_at(@Sender), 1);
		
		//Get exchange_obj
		let exchange_obj = borrow_global_mut<ExchangeBC>(@Sender);

		//Check that provider has required amount of LPCoinBC
		assert!(lp_exist_at(provider_addr), 1);
		assert!(get_value(provider_addr) >= lp_coin_bmt, 2);

		//Check that ExchangeBC has minted enough LPCoinBC
		assert!(exchange_obj.LP_minted >= lp_coin_bmt, 2);

		//Get current exchange balances
		let exchange_coin_b_balance = exchange_obj.coin_b;
		let exchange_coin_c_balance = exchange_obj.coin_c;
		let exchange_lp_coin_balance = exchange_obj.LP_minted;

		//Calculate required amount of CoinB from exchange
		let new_coin_b_balance = exchange_coin_b_balance - {{exchange_coin_b_balance * lp_coin_bmt} / exchange_lp_coin_balance};
		let coin_b_amt = exchange_coin_b_balance - new_coin_b_balance;

		//Calculate required amount of CoinC from exchange
		let new_coin_c_balance = exchange_coin_c_balance - {{exchange_coin_c_balance * lp_coin_bmt} / exchange_lp_coin_balance};
		let coin_c_amt = exchange_coin_c_balance - new_coin_c_balance;

		//Make sure new balances are less than old balances
		assert!(CoinB::exist_at(@Sender), 1);
		assert!(exchange_coin_b_balance >= new_coin_b_balance, 2);
		assert!(CoinC::exist_at(@Sender), 1);
		assert!(exchange_coin_c_balance >= new_coin_c_balance, 2);

		//Make sure exchange has enough of CoinB and CoinC to satisfy request
		assert!(exchange_coin_b_balance >= coin_b_amt, 2);
		assert!(exchange_coin_c_balance >= coin_c_amt, 2);

		//Transfer CoinB funds from exchange to provider
		let transferred_coin_b = CoinB::transfer_between(@Sender, provider_addr, coin_b_amt);
		exchange_obj.coin_b = exchange_obj.coin_b - transferred_coin_b;

		//Transfer CoinC funds from exchange to provider
		let transferred_coin_c = CoinC::transfer_between(@Sender, provider_addr, coin_c_amt);
		exchange_obj.coin_c = exchange_obj.coin_c - transferred_coin_c;

		//Transfer LPCoinBC from provider to exchange and burn
		let transferred_lp_coin = transfer_between(provider_addr, @Sender, lp_coin_bmt);
		assert!(transferred_lp_coin == lp_coin_bmt, 2);
		burn(@Sender, transferred_lp_coin);

		exchange_obj.LP_minted = exchange_obj.LP_minted - transferred_lp_coin;

		ExchangeEvents::emit_remove_liquidity_event<ExchangeBC>(
			b"Pool B - C",
			coin_b_amt,
			coin_c_amt,
			transferred_lp_coin,
			provider_addr,
		);

		(coin_b_amt, coin_c_amt)
	}
	
	public(script) fun remove_exchange_liquidity(provider: address, lp_coin_bmt: u64) acquires ExchangeBC, LPCoinBC {
		remove_liquidity(lp_coin_bmt, provider);
	}

	//Get pricing for output amount given input amount including commision rate
	fun get_input_price(comm_rate: u64, input_amount: u64, input_reserve: u64, output_reserve: u64): u64 {
		let numerator = input_amount * (10000 - comm_rate) * output_reserve ;
		let denominator = {input_reserve * 10000} + {input_amount * (10000 - comm_rate)};
		numerator / denominator
	}

	//Get spot (input) price to emit as an event (multiple of 10000)
	fun get_spot_price(): u64 acquires ExchangeBC {
		//Get exchange
		let exchange_obj = borrow_global_mut<ExchangeBC>(@Sender);

		//Get current exchange balances
		let coin_b_balance = exchange_obj.coin_b;
		let coin_c_balance = exchange_obj.coin_c;
		let comm_rate = exchange_obj.comm_rate;

		let numerator = (10000 - comm_rate) * coin_c_balance;
		let denominator = {coin_b_balance * 10000} + {10000 - comm_rate};
		{numerator*10000} / denominator
	}

	//Get pricing for input amount given output amount including commision rate
	fun get_output_price(comm_rate: u64, output_amount: u64, input_reserve: u64, output_reserve: u64): u64 {
		let numerator = input_reserve * output_amount * 10000;
		let denominator = {output_reserve - output_amount} * (10000 - comm_rate);
		{numerator / denominator} + 1
	}

	public fun swap_coinB_to_coinC(coin_b_amt: u64, swapper_addr: address): u64 acquires ExchangeBC {
		//Make sure exchange exists
		assert!(exists_at(), 1);
		assert!(CoinB::exist_at(@Sender), 1);
		assert!(CoinC::exist_at(@Sender), 1);
		
		//Get exchange
		let exchange_obj = borrow_global_mut<ExchangeBC>(@Sender);

		//Make sure swapper has enough of CoinB
		assert!(CoinB::exist_at(swapper_addr), 1);
		assert!(CoinB::get_value(swapper_addr) >= coin_b_amt, 2);

		//Make sure swapper has CoinC
		assert!(CoinC::exist_at(swapper_addr), 1);

		//Get current exchange balances
		let exchange_coin_b_balance = exchange_obj.coin_b;
		let exchange_coin_c_balance = exchange_obj.coin_c;
		let exchange_comm_rate = exchange_obj.comm_rate;

		//Calculate required CoinC from exchange
		let coin_c_amt = get_input_price(exchange_comm_rate, coin_b_amt, exchange_coin_b_balance, exchange_coin_c_balance);

		//Make sure exchange has enough CoinC
		assert!(exchange_coin_c_balance >= coin_c_amt, 2);

		//Transfer CoinB funds from swapper to exchange
		let transferred_coin_b = CoinB::transfer_between(swapper_addr, @Sender, coin_b_amt);
		exchange_obj.coin_b = exchange_obj.coin_b + transferred_coin_b;
	
		//Transfer CoinC funds from exchange to swapper
		let transferred_coin_c = CoinC::transfer_between(@Sender, swapper_addr, coin_c_amt);
		exchange_obj.coin_c = exchange_obj.coin_c - transferred_coin_c;

		ExchangeEvents::emit_exchange_price_change_event<ExchangeBC>(
			b"Pool B - C",
			get_spot_price(),
		);

		transferred_coin_c
	}

	public(script) fun exchange_coinB_to_coinC(swapper: address, coin_b_amt: u64) acquires ExchangeBC {
		swap_coinB_to_coinC(coin_b_amt, swapper);
	}

	public fun swap_coinC_to_coinB(coin_c_amt: u64, swapper_addr: address): u64 acquires ExchangeBC {
		//Make sure exchange exists
		assert!(exists_at(), 1);
		assert!(CoinB::exist_at(@Sender), 1);
		assert!(CoinC::exist_at(@Sender), 1);
		
		//Get exchange
		let exchange_obj = borrow_global_mut<ExchangeBC>(@Sender);

		//Make sure swapper has enough of CoinC
		assert!(CoinC::exist_at(swapper_addr), 1);
		assert!(CoinC::get_value(swapper_addr) >= coin_c_amt, 2);

		//Make sure swapper has CoinB
		assert!(CoinB::exist_at(swapper_addr), 1);

		//Get current exchange balances
		let exchange_coin_b_balance = exchange_obj.coin_b;
		let exchange_coin_c_balance = exchange_obj.coin_c;
		let exchange_comm_rate = exchange_obj.comm_rate;

		//Calculate required CoinC from exchange
		let coin_b_amt = get_input_price(exchange_comm_rate, coin_c_amt, exchange_coin_c_balance, exchange_coin_b_balance);
	
		//Make sure exchange has enough CoinB
		assert!(exchange_coin_b_balance >= coin_b_amt, 2);

		//Transfer CoinC funds from swapper to exchange
		let transferred_coin_c = CoinC::transfer_between(swapper_addr, @Sender, coin_c_amt);
		exchange_obj.coin_c = exchange_obj.coin_c + transferred_coin_c;
	
		//Transfer CoinB funds from exchange to swapper
		let transferred_coin_b = CoinB::transfer_between(@Sender, swapper_addr, coin_b_amt);
		exchange_obj.coin_b = exchange_obj.coin_b - transferred_coin_b;

		ExchangeEvents::emit_exchange_price_change_event<ExchangeBC>(
			b"Pool B - C",
			get_spot_price(),
		);

		transferred_coin_b
	}
	
	public(script) fun exchange_coinC_to_coinB(swapper: address, coin_c_amt: u64) acquires ExchangeBC {
		swap_coinC_to_coinB(coin_c_amt, swapper);
	}
}

