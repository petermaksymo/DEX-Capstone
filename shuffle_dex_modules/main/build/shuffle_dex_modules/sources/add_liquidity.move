script {
    use Sender::ExchangeAB;

    fun add_liquidity(exch_acct: signer, acct_a: signer, amt: u64) {
        //Add Liquidity
        ExchangeAB::add_liquidity(amt, &acct_a, &exch_acct);
    }
}
