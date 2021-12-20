script {
    use Std::Debug;
    use Std::Signer;
    use 0x2::CoinA;

    fun main(acct_a: signer, acct_b: signer) {
        // Test minting
        CoinA::mint(100, &acct_a);

        // Test get_value
        Debug::print(&CoinA::get_value(Signer::address_of(&acct_a)));

        // Test transferring between accounts where recipient doesn't have resource yet
        let transferred_amt = CoinA::transfer_between(&acct_a, &acct_b, 25);
        Debug::print(&transferred_amt);
        Debug::print(&CoinA::get_value(Signer::address_of(&acct_a)));
        Debug::print(&CoinA::get_value(Signer::address_of(&acct_b)));

        // Test transferring between accounts where recipient does have resource
        let transferred_amt = CoinA::transfer_between(&acct_b, &acct_a, 10);
        Debug::print(&transferred_amt);
        Debug::print(&CoinA::get_value(Signer::address_of(&acct_a)));
        Debug::print(&CoinA::get_value(Signer::address_of(&acct_b)));

        // Test burn
        Debug::print(&CoinA::burn(&acct_a));
        Debug::print(&CoinA::burn(&acct_b));
    }
}