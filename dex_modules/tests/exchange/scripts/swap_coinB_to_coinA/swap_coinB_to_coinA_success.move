script {
    use 0x2::CoinA;
    use 0x2::CoinB;
    use 0x2::Exchange;
    use Std::Signer;

    fun main(exch_acct: signer, acct_a: signer) {
	let addr_a = Signer::address_of(&acct_a);
	let exch_addr = Signer::address_of(&exch_acct);

	if(!CoinA::exist_at(addr_a)){
		CoinA::mint(0, &acct_a);
	};
	
	if(!Exchange::lp_exist_at(addr_a)){
		Exchange::mint(0, &acct_a);
	};

        CoinB::mint(1000, &acct_a);

        // Test swap_coinB_to_coinA
        Exchange::swap_coinB_to_coinA(1000, addr_a, exch_addr);

        CoinA::burn(addr_a);
        CoinB::burn(addr_a);
    }
}
