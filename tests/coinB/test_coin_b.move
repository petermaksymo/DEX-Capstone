script {
    use Std::Debug;
    use Std::Signer;
    use 0x2::CoinB;

    fun main(acct_a: signer, acct_b: signer) {
        // Test minting
        CoinB::mint(100, &acct_a);

        // Test get_value
        Debug::print(&CoinB::get_value(Signer::address_of(&acct_a)));

        // Test transferring between accounts where recipient doesn't have resource yet
        let transferred_amt = CoinB::transfer_between(&acct_a, &acct_b, 25);
        Debug::print(&transferred_amt);
        Debug::print(&CoinB::get_value(Signer::address_of(&acct_a)));
        Debug::print(&CoinB::get_value(Signer::address_of(&acct_b)));

        // Test transferring between accounts where recipient does have resource
        let transferred_amt = CoinB::transfer_between(&acct_b, &acct_a, 10);
        Debug::print(&transferred_amt);
        Debug::print(&CoinB::get_value(Signer::address_of(&acct_a)));
        Debug::print(&CoinB::get_value(Signer::address_of(&acct_b)));

        // Test burn
        Debug::print(&CoinB::burn(&acct_a));
        Debug::print(&CoinB::burn(&acct_b));
    }
}