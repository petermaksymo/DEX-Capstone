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

	if(!CoinB::exist_at(addr_a)){
		CoinB::mint(0, &acct_a);
	};

        // Test remove_liquidity
        Exchange::remove_liquidity(500, addr_a, exch_addr);

        CoinA::burn(addr_a);
        CoinB::burn(addr_a);
    }
}
