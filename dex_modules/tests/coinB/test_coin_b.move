script {
    use Std::Debug;
    use Std::Signer;
    use 0x2::CoinB;

    fun main(acct_a: signer, acct_b: signer) {
	let addr_a = Signer::address_of(&acct_a);
	let addr_b = Signer::address_of(&acct_b);	

        // Test minting
        CoinB::mint(100, &acct_a);
        CoinB::mint(25, &acct_b);

        // Test get_value
        Debug::print(&CoinB::get_value(Signer::address_of(&acct_a)));

        // Test transferring between accounts
        let transferred_amt = CoinB::transfer_between(addr_b, addr_a, 10);
        Debug::print(&transferred_amt);
        Debug::print(&CoinB::get_value(Signer::address_of(&acct_a)));
        Debug::print(&CoinB::get_value(Signer::address_of(&acct_b)));

        // Test burn
        Debug::print(&CoinB::burn(addr_a));
        Debug::print(&CoinB::burn(addr_b));
    }
}
