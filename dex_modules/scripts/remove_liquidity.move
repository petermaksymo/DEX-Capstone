script {
    use 0x2::Exchange;

    fun main(exch_acct: signer, acct_a: signer, u64: amt) {
        //Remove Liquidity
        Exchange::remove_liquidity(amt, &acct_a, &exch_acct);
    }
}
