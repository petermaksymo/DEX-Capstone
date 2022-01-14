script {
    use Std::Signer;
    use Std::Debug;
    use 0x2::Exchange;

    fun main(exch_acct: signer, u64: coin_index) {
	if (coin_index == 0) {//CoinA
       		Debug::print(& Exchange::get_CoinA_in_pool(Signer::address_of(&exch_acct)) );
	}
	
	if (coin_index == 1) {//CoinB
       		Debug::print(& Exchange::get_CoinB_in_pool(Signer::address_of(&exch_acct)) );
	}
	
	if (coin_index == 2) {//LP Coin
       		Debug::print(& Exchange::get_minted_LPCoin(Signer::address_of(&exch_acct)) );
	}
    }
}
