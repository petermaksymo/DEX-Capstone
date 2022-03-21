script {
    use 0x2::Exchange;

    fun main(exch_acct: address, acct_a: address, amt: u64) {
        //Remove Liquidity
        Exchange::remove_liquidity(amt, acct_a, exch_acct);
    }
}
