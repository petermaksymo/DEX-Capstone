script {
    use 0x2::CoinA;
    use 0x2::CoinB;
    use 0x2::Exchange;

    fun main(exch_acct: signer, acct_a: signer) {
        CoinA::mint(500, &acct_a);
        CoinB::mint(5000, &acct_a);

        // Test add_liquidity
        Exchange::add_liquidity(500, &acct_a, &exch_acct);

        CoinA::burn(&acct_a);
        CoinB::burn(&acct_a);
    }
}