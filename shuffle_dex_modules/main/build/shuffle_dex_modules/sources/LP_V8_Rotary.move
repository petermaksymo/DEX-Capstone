module Sender::LP_V8_Rotary {

    	use Std::FixedPoint32;
	use DiemFramework::Diem;

    	struct LP_V8_Rotary has key, store, drop {
        	to_xdx_exchange_rate : FixedPoint32::FixedPoint32,
		is_synthetic : bool,
		scaling_factor : u64,
		fractional_part : u64,
		currency_code : vector<u8>,
		total_value : u64,
		can_mint : u64
    	}

    	public(script) fun initialize_lp_v8_rotary(dr_acct: signer, tc_acct: signer) {
		//TODO: Need to Decide on values we want to use to init these coins
		let to_xdx_exchange_rate = FixedPoint32::create_from_raw_value(100);
		let scaling_factor: u64 = 10;
		let fractional_part: u64 = 10;
		
		//Register Name as currency code
		let currency_code: vector<u8> = b"LP_V8_Rotary";

		//Register Currency on Diem Chain
		Diem::register_SCS_currency<LP_V8_Rotary>(&dr_acct,
						&tc_acct,
						to_xdx_exchange_rate,
						scaling_factor,
						fractional_part,
						currency_code);
    	}
}
