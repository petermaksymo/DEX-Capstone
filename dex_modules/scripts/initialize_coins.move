script {
    use Std::FixedPoint32;
    use DiemFramework::Diem;
    use 0x2::V8;

    fun initialize_coins(dr_acct: signer, tc_acct: signer) {
        //Register V8
	let fixed_pt = FixedPoint32::create_from_raw_value(100);
        
	//Scuffed As Shit
	Diem::register_SCS_currency<V8::V8>(&dr_acct, &tc_acct, fixed_pt, 5, 5, b"V8");
    }
}
