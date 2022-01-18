script {
    use 0x2::CoinA;

    fun mint_coin_a(acct_a: signer, amt: u64) {
        //Mint CoinA
        CoinA::mint(amt, &acct_a);
    }
}
