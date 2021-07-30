script {
    use Std::Signer;
    use Std::Debug;
    use 0x2::Exchange;

    fun main(exch_acct: signer) {
        Debug::print(& Exchange::get_minted_LPCoin(Signer::address_of(&exch_acct)) );
    }
}