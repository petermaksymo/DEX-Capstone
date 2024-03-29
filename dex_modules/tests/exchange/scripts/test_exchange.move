script {
    use Std::Debug;
    use Std::Signer;
    use 0x2::CoinA;
    use 0x2::CoinB;
    use 0x2::Exchange;
    use 0x2::TestExchange;

    fun main(exch_acct: signer, acct_a: signer) {
        let exch_addr = Signer::address_of(&exch_acct);
	let addr_a = Signer::address_of(&acct_a);

        CoinA::mint(10000, &acct_a);
        CoinB::mint(10000, &acct_a);

        // Test exists_at and initialize
        Debug::print(&Exchange::exists_at(exch_addr));
        Exchange::initialize(&exch_acct, addr_a, 30, 100, 100);
        Debug::print(&Exchange::exists_at(exch_addr));

        TestExchange::print_exchange(&exch_acct);

        // Test add_liquidity success on empty pool
        Debug::print(& Exchange::add_liquidity(1000, addr_a, exch_addr) );

        // Test add_liquidity success on initialized pool
        Debug::print(& Exchange::add_liquidity(500, addr_a, exch_addr) );

        TestExchange::print_exchange(&exch_acct);

        // Test swap_coinA_to_coinB with a small ammount
        Debug::print(& Exchange::swap_coinA_to_coinB(10, addr_a, exch_addr) );

        TestExchange::print_exchange(&exch_acct);

        // Test swap_coinB_to_coinA with a small ammount
        Debug::print(& Exchange::swap_coinB_to_coinA(10, addr_a, exch_addr) );


        TestExchange::print_exchange(&exch_acct);

        // Test swap_coinA_to_coinB with a large ammount
        Debug::print(& Exchange::swap_coinA_to_coinB(900, addr_a, exch_addr) );

        TestExchange::print_exchange(&exch_acct);

        // Test swap_coinB_to_coinA with a large ammount
        Debug::print(& Exchange::swap_coinB_to_coinA(900, addr_a, exch_addr) );

        TestExchange::print_exchange(&exch_acct);

        let (coinA, coinB) = Exchange::remove_liquidity(500, addr_a, exch_addr);
        Debug::print(& coinA);
        Debug::print(& coinB);

        TestExchange::print_exchange(&exch_acct);

        let (coinA, coinB) = Exchange::remove_liquidity(1100, addr_a, exch_addr);
        Debug::print(& coinA);
        Debug::print(& coinB);

        TestExchange::print_exchange(&exch_acct);

    }
}
