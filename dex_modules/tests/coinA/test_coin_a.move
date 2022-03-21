script {
    use Std::Debug;
    use Std::Signer;
    use 0x2::CoinA;

    fun main(acct_a: signer, acct_b: signer) {
	let addr_a = Signer::address_of(&acct_a);
	let addr_b = Signer::address_of(&acct_b);

        // Test minting
        CoinA::mint(100, &acct_a);
	CoinA::mint(25, &acct_b);

        // Test get_value
        Debug::print(&CoinA::get_value(Signer::address_of(&acct_a)));

        // Test transferring between accounts
        let transferred_amt = CoinA::transfer_between(addr_a, addr_b, 10);
        Debug::print(&transferred_amt);
        Debug::print(&CoinA::get_value(Signer::address_of(&acct_a)));
        Debug::print(&CoinA::get_value(Signer::address_of(&acct_b)));

        // Test burn
        Debug::print(&CoinA::burn(addr_a));
        Debug::print(&CoinA::burn(addr_b));
    }
}
