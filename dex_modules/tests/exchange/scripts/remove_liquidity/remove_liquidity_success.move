script {
    use 0x2::CoinA;
    use 0x2::CoinB;
    use 0x2::Exchange;

    fun main(exch_acct: signer, acct_a: signer) {
        // Test remove_liquidity
        Exchange::remove_liquidity(500, &acct_a, &exch_acct);

        CoinA::burn(&acct_a);
        CoinB::burn(&acct_a);
    }
}