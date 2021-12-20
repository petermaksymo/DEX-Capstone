script {
    use 0x2::CoinA;
    use 0x2::CoinB;
    use 0x2::Exchange;

    fun main(exch_acct: signer, acct_a: signer) {
        CoinA::mint(100, &acct_a);

        // Test swap_coinA_to_coinB
        Exchange::swap_coinA_to_coinB(100, &acct_a, &exch_acct);

        CoinA::burn(&acct_a);
        CoinB::burn(&acct_a);
    }
}