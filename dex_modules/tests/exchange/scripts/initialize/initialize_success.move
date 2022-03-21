script {
    use 0x2::CoinA;
    use 0x2::CoinB;
    use 0x2::Exchange;
    use Std::Signer;

    fun main(exch_acct: signer, acct_a: signer) {
        CoinA::mint(500, &acct_a);
        CoinB::mint(5000, &acct_a);
	Exchange::mint(0, &acct_a);
        
	CoinA::mint(0, &exch_acct);
        CoinB::mint(0, &exch_acct);
	Exchange::mint(0, &exch_acct);

        // Test initialize
	let addr_a = Signer::address_of(&acct_a);
        Exchange::initialize(&exch_acct, addr_a, 30, 500, 5000);

        CoinA::burn(addr_a);
        CoinB::burn(addr_a);
    }
}
