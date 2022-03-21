script {
    use 0x2::Exchange;

    fun init_exchange(exch_acct: signer, acct_a: address, coin_a_amt: u64, coin_b_amt: u64) {
        Exchange::initialize(&exch_acct, acct_a, 30, coin_a_amt, coin_b_amt);
    }
}
