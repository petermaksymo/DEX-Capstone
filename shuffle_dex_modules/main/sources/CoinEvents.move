module Sender::CoinEvents {
    use DiemFramework::DiemTimestamp;
    use Std::Event;

    struct CoinMetadata<phantom CoinType> has key {
        mint_coin_events: Event::EventHandle<Self::MintCoinEvent>,
        burn_coin_events: Event::EventHandle<Self::BurnCoinEvent>,
        transfer_coin_events: Event::EventHandle<Self::TransferCoinEvent>,
    }

    struct MintCoinEvent has drop, store {
        coin: vector<u8>,
        amount: u64,
        addr: address,
        timestamp: u64,
    }

    struct BurnCoinEvent has drop, store {
        coin: vector<u8>,
        amount: u64,
        addr: address,
        timestamp: u64,
    }

    struct TransferCoinEvent has drop, store {
        coin: vector<u8>,
        amount: u64,
        from_addr: address,
        to_addr: address,
        timestamp: u64,
    }

    public fun init_metadata<CoinType>(account: &signer) {
        move_to<CoinMetadata<CoinType>> (
            account,
            CoinMetadata<CoinType> {
                 mint_coin_events: Event::new_event_handle<Self::MintCoinEvent>(account),
                 burn_coin_events: Event::new_event_handle<Self::BurnCoinEvent>(account),
                 transfer_coin_events: Event::new_event_handle<Self::TransferCoinEvent>(account),
            }
        );
    }

    public fun emit_mint_event<CoinType>(coin: vector<u8>, amount: u64, addr: address) acquires CoinMetadata {
        let metadata_ref = borrow_global_mut<CoinMetadata<CoinType>>(@Sender);
        Event::emit_event<MintCoinEvent>(
            &mut metadata_ref.mint_coin_events,
            MintCoinEvent {
                coin,
                amount,
                addr,
                timestamp: DiemTimestamp::now_seconds(),
            }
        );
    }

    public fun emit_burn_event<CoinType>(coin: vector<u8>, amount: u64, addr: address) acquires CoinMetadata {
        let metadata_ref = borrow_global_mut<CoinMetadata<CoinType>>(@Sender);
        Event::emit_event<BurnCoinEvent>(
            &mut metadata_ref.burn_coin_events,
            BurnCoinEvent {
                coin,
                amount,
                addr,
                timestamp: DiemTimestamp::now_seconds(),
            }
        );
    }

    public fun emit_transfer_event<CoinType>(coin: vector<u8>, amount: u64, from_addr: address, to_addr: address) acquires CoinMetadata {
        let metadata_ref = borrow_global_mut<CoinMetadata<CoinType>>(@Sender);
        Event::emit_event<TransferCoinEvent>(
            &mut metadata_ref.transfer_coin_events,
            TransferCoinEvent {
                coin,
                amount,
                from_addr,
                to_addr,
                timestamp: DiemTimestamp::now_seconds(),
            }
        );
    }
}