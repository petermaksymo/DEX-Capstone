script {
    use Sender::ExchangeAB;
    use Std::Signer;

    fun remove_liquidity(exch_acct: signer, acct_a: signer, amt: u64) {
        //Remove Liquidity
	let addr_a = Signer::address_of(&acct_a);
	let exch_addr = Signer::address_of(&exch_acct);
        ExchangeAB::remove_liquidity(amt, addr_a, exch_addr);
    }
}
