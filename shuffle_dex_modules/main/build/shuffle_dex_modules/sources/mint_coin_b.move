script {
    use Sender::CoinB;

    fun mint_coin_b(acct_a: signer, amt: u64) {
        //Mint CoinB
        CoinB::mint(amt, &acct_a);
    }
}
