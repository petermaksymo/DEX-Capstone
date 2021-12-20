address 0x2 {
module TestExchange {
    use Std::Debug;
    use Std::Signer;
    use 0x2::Exchange;

    public fun print_exchange(exchange_acct: &signer) {
        let echange_addr = Signer::address_of(exchange_acct);

        Debug::print(&b"Exchange:");
        Debug::print(& Exchange::get_CoinA_in_pool(echange_addr));
        Debug::print(& Exchange::get_CoinB_in_pool(echange_addr));
        Debug::print(& Exchange::get_minted_LPCoin(echange_addr));
    }

}
}