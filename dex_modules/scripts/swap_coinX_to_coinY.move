script {
    use 0x2::Exchange;

    fun main(exch_acct: signer, acct_a: signer, swap_amt: u64, from_coin_idx: u64) {
        if (from_coin_idx == 0) { //Swap coin A to coin B
        	Exchange::swap_coinA_to_coinB(swap_amt, &acct_a, &exch_acct);
	};
        
	if (from_coin_idx == 1) { //Swap coin B to coin A
        	Exchange::swap_coinB_to_coinA(swap_amt, &acct_a, &exch_acct);
	};
    }
}
