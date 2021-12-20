script {
    use 0x2::Exchange;

    fun main(exch_acct: signer, acct_a: signer) {
        Exchange::initialize(&acct_a, &exch_acct, 997, 1000, 1000);
    }
}