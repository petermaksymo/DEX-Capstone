module Sender::CoinA {
    use Std::Signer;

    struct CoinA has key, store, drop {
        value: u64
    }

    public fun mint(amount: u64, account: &signer): u64 {
        move_to<CoinA>(account, CoinA { value: amount });
        amount
    }

    public fun get_value(addr: address): u64 acquires CoinA {
        borrow_global<CoinA>(addr).value
    }

    public fun burn(account: &signer): u64 acquires CoinA {
        assert!(exist_at(Signer::address_of(account)), 1);
        let CoinA { value: value } = move_from<CoinA>(Signer::address_of(account));
        value
    }

    public fun exist_at(addr: address): bool {
        exists<CoinA>(addr)
    }

    public fun transfer_between(from_acct: &signer, to_acct: &signer, transferred_amt: u64): u64 acquires CoinA {
        let from_addr = Signer::address_of(from_acct);
        let to_addr = Signer::address_of(to_acct);

        assert!(exist_at(from_addr), 1);
        assert!(get_value(from_addr) >= transferred_amt, 2);

        if(!exist_at(to_addr)) {
            mint(0, to_acct);
        };

        let from_coin = borrow_global_mut<CoinA>(from_addr);
        from_coin.value = from_coin.value - transferred_amt;

        let to_coin = borrow_global_mut<CoinA>(to_addr);
        to_coin.value = to_coin.value + transferred_amt;

        transferred_amt
    }
}
