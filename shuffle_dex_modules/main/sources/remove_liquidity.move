script {
    use Sender::Exchange;

    fun remove_liquidity(exch_acct: signer, acct_a: signer, amt: u64) {
        //Remove Liquidity
        Exchange::remove_liquidity(amt, &acct_a, &exch_acct);
    }
}
