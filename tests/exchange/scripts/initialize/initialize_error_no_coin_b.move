script {
    use 0x2::CoinA;
    use 0x2::Exchange;

    fun main(exch_acct: signer, acct_a: signer) {
        CoinA::mint(1000, &acct_a);

        Exchange::initialize(&acct_a, &exch_acct, 30, 1000, 1000);
    }
}