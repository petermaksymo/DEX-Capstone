script {
    use 0x2::Exchange;

    fun add_liquidity(exch_acct: address, acct_a: address, amt: u64) {
        //Add Liquidity
        Exchange::add_liquidity(amt, acct_a, exch_acct);
    }
}
