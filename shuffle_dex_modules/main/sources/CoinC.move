module Sender::CoinC {
    use Sender::CoinEvents;
    use Std::Signer;

    struct CoinC has key, store, drop {
        value: u64
    }

    public fun mint(amount: u64, account: &signer): u64 {
        let addr = Signer::address_of(account);
        move_to<CoinC>(account, CoinC { value: amount });
        CoinEvents::emit_mint_event<CoinC>(b"CoinC", amount, addr);
        amount
    }

    public(script) fun initialize_coin_c(account: signer) {
        CoinEvents::init_metadata<CoinC>(&account);
    }

    public(script) fun mint_coin_c(account: signer, amt: u64) {
        mint(amt, &account);
    }

    public fun get_value(addr: address): u64 acquires CoinC {
        borrow_global<CoinC>(addr).value
    }

    public fun burn(account: address): u64 acquires CoinC {
        assert!(exist_at(account), 1);
        let CoinC { value: value } = move_from<CoinC>(account);
        CoinEvents::emit_burn_event<CoinC>(b"CoinC", value, account);
        value
    }

    public fun exist_at(addr: address): bool {
        exists<CoinC>(addr)
    }

    public fun transfer_between(from_addr: address, to_addr: address, transferred_amt: u64): u64 acquires CoinC {
        assert!(exist_at(from_addr), 1);
        assert!(get_value(from_addr) >= transferred_amt, 2);

        //Can't mint here so to_addr must have a spot for coin
        assert!(exist_at(to_addr), 1);

        let from_coin = borrow_global_mut<CoinC>(from_addr);
        from_coin.value = from_coin.value - transferred_amt;

        let to_coin = borrow_global_mut<CoinC>(to_addr);
        to_coin.value = to_coin.value + transferred_amt;

        CoinEvents::emit_transfer_event<CoinC>(b"CoinC", transferred_amt, from_addr, to_addr);

        transferred_amt
    }
}
