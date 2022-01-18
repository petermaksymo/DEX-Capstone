script {
    use 0x2::CoinA;
    use 0x2::CoinB;
    use 0x2::Exchange;

    fun init_exchange(exch_acct: signer, acct_a: signer, coin_a_amt: u64, coin_b_amt: u64) {
        Exchange::initialize(&acct_a, &exch_acct, 30, coin_a_amt, coin_b_amt);
    }
}