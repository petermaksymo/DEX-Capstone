script {
    use Std::Signer;
    use 0x2::CoinA;
    use 0x2::CoinB;
    use 0x2::Exchange;

    fun main(exch_acct: signer, acct_a: signer) {
        CoinA::mint(500, &acct_a);
        CoinB::mint(5000, &acct_a);

        // Test add_liquidity
	let addr_a = Signer::address_of(&acct_a);
	let exch_addr = Signer::address_of(&exch_acct);
        Exchange::add_liquidity(500, addr_a, exch_addr);

        CoinA::burn(addr_a);
        CoinB::burn(addr_a);
    }
}
