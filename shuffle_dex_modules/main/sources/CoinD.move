module Sender::CoinD {
    use Sender::CoinEvents;
    use Std::Signer;

    struct CoinD has key, store, drop {
        value: u64
    }

    public fun mint(amount: u64, account: &signer): u64 {
        let addr = Signer::address_of(account);
        move_to<CoinD>(account, CoinD { value: amount });
        CoinEvents::emit_mint_event<CoinD>(b"USD", amount, addr);
        amount
    }

    public(script) fun initialize_coin_d(account: signer) {
        CoinEvents::init_metadata<CoinD>(&account);
    }

    public(script) fun mint_coin_d(account: signer, amt: u64) {
        mint(amt, &account);
    }

    public fun get_value(addr: address): u64 acquires CoinD {
        borrow_global<CoinD>(addr).value
    }

    public fun burn(account: address): u64 acquires CoinD {
        assert!(exist_at(account), 1);
        let CoinD { value: value } = move_from<CoinD>(account);
        CoinEvents::emit_burn_event<CoinD>(b"USD", value, account);
        value
    }

    public fun exist_at(addr: address): bool {
        exists<CoinD>(addr)
    }

    public fun transfer_between(from_addr: address, to_addr: address, transferred_amt: u64): u64 acquires CoinD {
        assert!(exist_at(from_addr), 1);
        assert!(get_value(from_addr) >= transferred_amt, 2);

        //Can't mint here so to_addr must have a spot for coin
        assert!(exist_at(to_addr), 1);

        let from_coin = borrow_global_mut<CoinD>(from_addr);
        from_coin.value = from_coin.value - transferred_amt;

        let to_coin = borrow_global_mut<CoinD>(to_addr);
        to_coin.value = to_coin.value + transferred_amt;

        CoinEvents::emit_transfer_event<CoinD>(b"USD", transferred_amt, from_addr, to_addr);

        transferred_amt
    }
}
