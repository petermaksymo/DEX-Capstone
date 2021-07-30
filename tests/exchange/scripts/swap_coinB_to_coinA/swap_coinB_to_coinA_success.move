script {
    use 0x2::CoinA;
    use 0x2::CoinB;
    use 0x2::Exchange;

    fun main(exch_acct: signer, acct_a: signer) {
        CoinB::mint(1000, &acct_a);

        // Test swap_coinB_to_coinA
        Exchange::swap_coinB_to_coinA(1000, &acct_a, &exch_acct);

        CoinA::burn(&acct_a);
        CoinB::burn(&acct_a);
    }
}