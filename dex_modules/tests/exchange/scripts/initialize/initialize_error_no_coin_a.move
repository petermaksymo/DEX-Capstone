script {
    use 0x2::Exchange;
    use Std::Signer;

    fun main(exch_acct: signer, acct_a: signer) {
        Exchange::initialize(&exch_acct, Signer::address_of(&acct_a), 997, 1000, 1000);
    }
}
