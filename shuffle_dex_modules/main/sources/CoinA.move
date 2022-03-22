module Sender::CoinA {
    struct CoinA has key, store, drop {
        value: u64
    }

    public fun mint(amount: u64, account: &signer): u64 {
        move_to<CoinA>(account, CoinA { value: amount });
        amount
    }

    public(script) fun mint_coin_a(account: signer, amt: u64) {
        mint(amt, &account);
    }

    public fun get_value(addr: address): u64 acquires CoinA {
        borrow_global<CoinA>(addr).value
    }

    public fun burn(account: address): u64 acquires CoinA {
        assert!(exist_at(account), 1);
        let CoinA { value: value } = move_from<CoinA>(account);
        value
    }

    public fun exist_at(addr: address): bool {
        exists<CoinA>(addr)
    }

    public fun transfer_between(from_addr: address, to_addr: address, transferred_amt: u64): u64 acquires CoinA {
        assert!(exist_at(from_addr), 1);
        assert!(get_value(from_addr) >= transferred_amt, 2);

	//Can't mint here so to_addr must have a spot for coin
	assert!(exist_at(to_addr), 1);


        let from_coin = borrow_global_mut<CoinA>(from_addr);
        from_coin.value = from_coin.value - transferred_amt;

        let to_coin = borrow_global_mut<CoinA>(to_addr);
        to_coin.value = to_coin.value + transferred_amt;

        transferred_amt
    }
}
