module Sender::CoinB {
    struct CoinB has key, store, drop {
        value: u64
    }

    public fun mint(amount: u64, account: &signer): u64 {
        move_to<CoinB>(account, CoinB { value: amount });
        amount
    }

    public(script) fun mint_coin_b(account: signer, amt: u64) {
        mint(amt, &account);
    }

    public fun get_value(addr: address): u64 acquires CoinB {
        borrow_global<CoinB>(addr).value
    }

    public fun burn(account: address): u64 acquires CoinB {
        assert!(exist_at(account), 1);
        let CoinB { value: value } = move_from<CoinB>(account);
        value
    }

    public fun exist_at(addr: address): bool {
        exists<CoinB>(addr)
    }

    public fun transfer_between(from_addr: address, to_addr: address, transferred_amt: u64): u64 acquires CoinB {
        assert!(exist_at(from_addr), 1);
        assert!(get_value(from_addr) >= transferred_amt, 2);

	//Can't mint here so to_addr must have CoinB
	assert!(exist_at(to_addr), 1);

        let from_coin = borrow_global_mut<CoinB>(from_addr);
        from_coin.value = from_coin.value - transferred_amt;

        let to_coin = borrow_global_mut<CoinB>(to_addr);
        to_coin.value = to_coin.value + transferred_amt;

        transferred_amt
    }
}

