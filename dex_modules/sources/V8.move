module 0x2::V8 {

    use Std::FixedPoint32;

    struct V8 has key, store, drop {
        to_xdx_exchange_rate : FixedPoint32::FixedPoint32,
	is_synthetic : bool,
	scaling_factor : u64,
	fractional_part : u64,
	currency_code : vector<u8>,
	total_value : u64,
	can_mint : u64
    }
}
