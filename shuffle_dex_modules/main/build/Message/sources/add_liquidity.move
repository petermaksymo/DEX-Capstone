script {
    use Sender::Exchange;

    fun add_liquidity(exch_acct: signer, acct_a: signer, amt: u64) {
        //Add Liquidity
        Exchange::add_liquidity(amt, &acct_a, &exch_acct);
    }
}
