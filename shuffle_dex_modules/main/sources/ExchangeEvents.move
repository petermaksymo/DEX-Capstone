module Sender::ExchangeEvents {
    use DiemFramework::DiemTimestamp;
    use Std::Event;

    struct ExchangeMetadata<phantom ExchangeType> has key {
        exchange_price_change_events: Event::EventHandle<Self::ExchangePriceEvent>,
        add_liquidity_events: Event::EventHandle<Self::AddLiquidityEvent>,
        remove_liquidity_events: Event::EventHandle<Self::RemoveLiquidityEvent>,
    }

    struct ExchangePriceEvent has drop, store {
        exchange: vector<u8>,
        ratio_a_to_b: u64,
        timestamp: u64,
    }

    struct AddLiquidityEvent has drop, store {
        exchange: vector<u8>,
        a_amount: u64,
        b_amount: u64,
        lp_amount: u64,
        addr: address,
        timestamp: u64,
    }

    struct RemoveLiquidityEvent has drop, store {
        exchange: vector<u8>,
        a_amount: u64,
        b_amount: u64,
        lp_amount: u64,
        addr: address,
        timestamp: u64,
    }

    public fun init_metadata<ExchangeType>(account: &signer) {
        move_to<ExchangeMetadata<ExchangeType>>(
            account,
            ExchangeMetadata<ExchangeType> {
                 exchange_price_change_events: Event::new_event_handle<Self::ExchangePriceEvent>(account),
                 add_liquidity_events: Event::new_event_handle<Self::AddLiquidityEvent>(account),
                 remove_liquidity_events: Event::new_event_handle<Self::RemoveLiquidityEvent>(account),
            }
        )
    }

    public fun emit_exchange_price_change_event<ExchangeType>(exchange: vector<u8>, ratio_a_to_b: u64) acquires ExchangeMetadata {
        let metadata_ref = borrow_global_mut<ExchangeMetadata<ExchangeType>>(@Sender);
        Event::emit_event<ExchangePriceEvent>(
            &mut metadata_ref.exchange_price_change_events,
            ExchangePriceEvent {
                exchange,
                ratio_a_to_b,
                timestamp: DiemTimestamp::now_seconds(),
            }
        );
    }

    public fun emit_add_liquidity_event<ExchangeType>(exchange: vector<u8>, a_amount: u64, b_amount: u64, lp_amount: u64, addr: address) acquires ExchangeMetadata {
        let metadata_ref = borrow_global_mut<ExchangeMetadata<ExchangeType>>(@Sender);
        Event::emit_event<AddLiquidityEvent>(
            &mut metadata_ref.add_liquidity_events,
            AddLiquidityEvent {
                exchange,
                a_amount,
                b_amount,
                lp_amount,
                addr,
                timestamp: DiemTimestamp::now_seconds(),
            }
        );
    }

    public fun emit_remove_liquidity_event<ExchangeType>(exchange: vector<u8>, a_amount: u64, b_amount: u64, lp_amount: u64, addr: address) acquires ExchangeMetadata {
        let metadata_ref = borrow_global_mut<ExchangeMetadata<ExchangeType>>(@Sender);
        Event::emit_event<RemoveLiquidityEvent>(
            &mut metadata_ref.remove_liquidity_events,
            RemoveLiquidityEvent {
                exchange,
                a_amount,
                b_amount,
                lp_amount,
                addr,
                timestamp: DiemTimestamp::now_seconds(),
            }
        );
    }
}