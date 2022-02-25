script {
    use Sender::ExchangeAB;

    fun remove_liquidity(exch_acct: signer, acct_a: signer, amt: u64) {
        //Remove Liquidity
        ExchangeAB::remove_liquidity(amt, &acct_a, &exch_acct);
    }
}
