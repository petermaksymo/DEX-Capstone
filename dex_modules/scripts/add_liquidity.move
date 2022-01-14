script {
    use 0x2::Exchange;

    fun main(exch_acct: signer, acct_a: signer, amt: u64) {
        //Add Liquidity
        Exchange::add_liquidity(amt, &acct_a, &exch_acct);
    }
}
