script {
    use 0x2::CoinA;
    use 0x2::Exchange;
    use Std::Signer;

    fun main(exch_acct: signer, acct_a: signer) {
        CoinA::mint(1000, &acct_a);

        Exchange::initialize(&exch_acct, Signer::address_of(&acct_a), 30, 1000, 1000);
    }
}
