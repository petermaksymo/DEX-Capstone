
import { Serializer, Deserializer } from '../serde/mod.ts';
import { BcsSerializer, BcsDeserializer } from '../bcs/mod.ts';
import { Optional, Seq, Tuple, ListTuple, unit, bool, int8, int16, int32, int64, int128, uint8, uint16, uint32, uint64, uint128, float32, float64, char, str, bytes } from '../serde/mod.ts';

import * as DiemTypes from '../diemTypes/mod.ts';

/**
 * Structured representation of a call into a known Move script.
 */
export abstract class ScriptCall {
}


export class ScriptCallVariantAddLiquidity extends ScriptCall {

constructor (public amt: uint64) {
  super();
}

}

export class ScriptCallVariantMintCoinA extends ScriptCall {

constructor (public amt: uint64) {
  super();
}

}

export class ScriptCallVariantMintCoinB extends ScriptCall {

constructor (public amt: uint64) {
  super();
}

}

export class ScriptCallVariantRemoveLiquidity extends ScriptCall {

constructor (public amt: uint64) {
  super();
}

}
/**
 * Structured representation of a call into a known Move script function.
 */
export abstract class ScriptFunctionCall {
}


export class ScriptFunctionCallVariantAddCurrencyToAccount extends ScriptFunctionCall {

constructor (public currency: DiemTypes.TypeTag) {
  super();
}

}

export class ScriptFunctionCallVariantAddExchangeLiquidity extends ScriptFunctionCall {

constructor (public exchange: DiemTypes.AccountAddress, public provider: DiemTypes.AccountAddress, public coin_a_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantAddExchangeLiquidity extends ScriptFunctionCall {

constructor (public exchange: DiemTypes.AccountAddress, public provider: DiemTypes.AccountAddress, public coin_b_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantAddExchangeLiquidity extends ScriptFunctionCall {

constructor (public exchange: DiemTypes.AccountAddress, public provider: DiemTypes.AccountAddress, public coin_a_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantAddExchangeLiquidity extends ScriptFunctionCall {

constructor (public exchange: DiemTypes.AccountAddress, public provider: DiemTypes.AccountAddress, public coin_a_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantAddExchangeLiquidity extends ScriptFunctionCall {

constructor (public exchange: DiemTypes.AccountAddress, public provider: DiemTypes.AccountAddress, public coin_b_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantAddExchangeLiquidity extends ScriptFunctionCall {

constructor (public exchange: DiemTypes.AccountAddress, public provider: DiemTypes.AccountAddress, public coin_c_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantAddRecoveryRotationCapability extends ScriptFunctionCall {

constructor (public recovery_address: DiemTypes.AccountAddress) {
  super();
}

}

export class ScriptFunctionCallVariantAddValidatorAndReconfigure extends ScriptFunctionCall {

constructor (public sliding_nonce: uint64, public validator_name: bytes, public validator_address: DiemTypes.AccountAddress) {
  super();
}

}

export class ScriptFunctionCallVariantAddVaspDomain extends ScriptFunctionCall {

constructor (public address: DiemTypes.AccountAddress, public domain: bytes) {
  super();
}

}

export class ScriptFunctionCallVariantBurnTxnFees extends ScriptFunctionCall {

constructor (public coin_type: DiemTypes.TypeTag) {
  super();
}

}

export class ScriptFunctionCallVariantBurnWithAmount extends ScriptFunctionCall {

constructor (public token: DiemTypes.TypeTag, public sliding_nonce: uint64, public preburn_address: DiemTypes.AccountAddress, public amount: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantCancelBurnWithAmount extends ScriptFunctionCall {

constructor (public token: DiemTypes.TypeTag, public preburn_address: DiemTypes.AccountAddress, public amount: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantCreateChildVaspAccount extends ScriptFunctionCall {

constructor (public coin_type: DiemTypes.TypeTag, public child_address: DiemTypes.AccountAddress, public auth_key_prefix: bytes, public add_all_currencies: bool, public child_initial_balance: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantCreateDesignatedDealer extends ScriptFunctionCall {

constructor (public currency: DiemTypes.TypeTag, public sliding_nonce: uint64, public addr: DiemTypes.AccountAddress, public auth_key_prefix: bytes, public human_name: bytes, public add_all_currencies: bool) {
  super();
}

}

export class ScriptFunctionCallVariantCreateParentVaspAccount extends ScriptFunctionCall {

constructor (public coin_type: DiemTypes.TypeTag, public sliding_nonce: uint64, public new_account_address: DiemTypes.AccountAddress, public auth_key_prefix: bytes, public human_name: bytes, public add_all_currencies: bool) {
  super();
}

}

export class ScriptFunctionCallVariantCreateRecoveryAddress extends ScriptFunctionCall {
constructor () {
  super();
}

}

export class ScriptFunctionCallVariantCreateValidatorAccount extends ScriptFunctionCall {

constructor (public sliding_nonce: uint64, public new_account_address: DiemTypes.AccountAddress, public auth_key_prefix: bytes, public human_name: bytes) {
  super();
}

}

export class ScriptFunctionCallVariantCreateValidatorOperatorAccount extends ScriptFunctionCall {

constructor (public sliding_nonce: uint64, public new_account_address: DiemTypes.AccountAddress, public auth_key_prefix: bytes, public human_name: bytes) {
  super();
}

}

export class ScriptFunctionCallVariantCreateVaspDomains extends ScriptFunctionCall {
constructor () {
  super();
}

}

export class ScriptFunctionCallVariantExchangeCoinAToCoinB extends ScriptFunctionCall {

constructor (public swapper: DiemTypes.AccountAddress, public exchange: DiemTypes.AccountAddress, public coin_a_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantExchangeCoinAToCoinC extends ScriptFunctionCall {

constructor (public swapper: DiemTypes.AccountAddress, public exchange: DiemTypes.AccountAddress, public coin_a_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantExchangeCoinAToCoinD extends ScriptFunctionCall {

constructor (public swapper: DiemTypes.AccountAddress, public exchange: DiemTypes.AccountAddress, public coin_a_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantExchangeCoinBToCoinA extends ScriptFunctionCall {

constructor (public swapper: DiemTypes.AccountAddress, public exchange: DiemTypes.AccountAddress, public coin_b_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantExchangeCoinBToCoinC extends ScriptFunctionCall {

constructor (public swapper: DiemTypes.AccountAddress, public exchange: DiemTypes.AccountAddress, public coin_b_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantExchangeCoinBToCoinD extends ScriptFunctionCall {

constructor (public swapper: DiemTypes.AccountAddress, public exchange: DiemTypes.AccountAddress, public coin_b_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantExchangeCoinCToCoinA extends ScriptFunctionCall {

constructor (public swapper: DiemTypes.AccountAddress, public exchange: DiemTypes.AccountAddress, public coin_c_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantExchangeCoinCToCoinB extends ScriptFunctionCall {

constructor (public swapper: DiemTypes.AccountAddress, public exchange: DiemTypes.AccountAddress, public coin_c_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantExchangeCoinCToCoinD extends ScriptFunctionCall {

constructor (public swapper: DiemTypes.AccountAddress, public exchange: DiemTypes.AccountAddress, public coin_c_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantExchangeCoinDToCoinA extends ScriptFunctionCall {

constructor (public swapper: DiemTypes.AccountAddress, public exchange: DiemTypes.AccountAddress, public coin_d_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantExchangeCoinDToCoinB extends ScriptFunctionCall {

constructor (public swapper: DiemTypes.AccountAddress, public exchange: DiemTypes.AccountAddress, public coin_d_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantExchangeCoinDToCoinC extends ScriptFunctionCall {

constructor (public swapper: DiemTypes.AccountAddress, public exchange: DiemTypes.AccountAddress, public coin_d_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantForceExpire extends ScriptFunctionCall {

constructor (public shift_amount: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantFreezeAccount extends ScriptFunctionCall {

constructor (public sliding_nonce: uint64, public to_freeze_account: DiemTypes.AccountAddress) {
  super();
}

}

export class ScriptFunctionCallVariantInitializeDiemConsensusConfig extends ScriptFunctionCall {

constructor (public sliding_nonce: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantInitializeExchange extends ScriptFunctionCall {

constructor (public initializer: DiemTypes.AccountAddress, public comm_rate: uint64, public coin_a_amt: uint64, public coin_b_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantInitializeExchange extends ScriptFunctionCall {

constructor (public initializer: DiemTypes.AccountAddress, public comm_rate: uint64, public coin_b_amt: uint64, public coin_c_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantInitializeExchange extends ScriptFunctionCall {

constructor (public initializer: DiemTypes.AccountAddress, public comm_rate: uint64, public coin_a_amt: uint64, public coin_c_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantInitializeExchange extends ScriptFunctionCall {

constructor (public initializer: DiemTypes.AccountAddress, public comm_rate: uint64, public coin_a_amt: uint64, public coin_d_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantInitializeExchange extends ScriptFunctionCall {

constructor (public initializer: DiemTypes.AccountAddress, public comm_rate: uint64, public coin_b_amt: uint64, public coin_d_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantInitializeExchange extends ScriptFunctionCall {

constructor (public initializer: DiemTypes.AccountAddress, public comm_rate: uint64, public coin_c_amt: uint64, public coin_d_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantInitializeLpV8Rotary extends ScriptFunctionCall {
constructor () {
  super();
}

}

export class ScriptFunctionCallVariantInitializeRotary extends ScriptFunctionCall {
constructor () {
  super();
}

}

export class ScriptFunctionCallVariantInitializeV8 extends ScriptFunctionCall {
constructor () {
  super();
}

}

export class ScriptFunctionCallVariantMintCoinA extends ScriptFunctionCall {

constructor (public amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantMintCoinB extends ScriptFunctionCall {

constructor (public amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantMintCoinC extends ScriptFunctionCall {

constructor (public amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantMintCoinD extends ScriptFunctionCall {

constructor (public amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantOptInToCrsn extends ScriptFunctionCall {

constructor (public crsn_size: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantPeerToPeerBySigners extends ScriptFunctionCall {

constructor (public currency: DiemTypes.TypeTag, public amount: uint64, public metadata: bytes) {
  super();
}

}

export class ScriptFunctionCallVariantPeerToPeerWithMetadata extends ScriptFunctionCall {

constructor (public currency: DiemTypes.TypeTag, public payee: DiemTypes.AccountAddress, public amount: uint64, public metadata: bytes, public metadata_signature: bytes) {
  super();
}

}

export class ScriptFunctionCallVariantPreburn extends ScriptFunctionCall {

constructor (public token: DiemTypes.TypeTag, public amount: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantPublishSharedEd25519PublicKey extends ScriptFunctionCall {

constructor (public public_key: bytes) {
  super();
}

}

export class ScriptFunctionCallVariantRegisterValidatorConfig extends ScriptFunctionCall {

constructor (public validator_account: DiemTypes.AccountAddress, public consensus_pubkey: bytes, public validator_network_addresses: bytes, public fullnode_network_addresses: bytes) {
  super();
}

}

export class ScriptFunctionCallVariantRemoveExchangeLiquidity extends ScriptFunctionCall {

constructor (public exchange: DiemTypes.AccountAddress, public provider: DiemTypes.AccountAddress, public lp_coin_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantRemoveExchangeLiquidity extends ScriptFunctionCall {

constructor (public exchange: DiemTypes.AccountAddress, public provider: DiemTypes.AccountAddress, public lp_coin_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantRemoveExchangeLiquidity extends ScriptFunctionCall {

constructor (public exchange: DiemTypes.AccountAddress, public provider: DiemTypes.AccountAddress, public lp_coin_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantRemoveExchangeLiquidity extends ScriptFunctionCall {

constructor (public exchange: DiemTypes.AccountAddress, public provider: DiemTypes.AccountAddress, public lp_coin_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantRemoveExchangeLiquidity extends ScriptFunctionCall {

constructor (public exchange: DiemTypes.AccountAddress, public provider: DiemTypes.AccountAddress, public lp_coin_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantRemoveExchangeLiquidity extends ScriptFunctionCall {

constructor (public exchange: DiemTypes.AccountAddress, public provider: DiemTypes.AccountAddress, public lp_coin_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantRemoveValidatorAndReconfigure extends ScriptFunctionCall {

constructor (public sliding_nonce: uint64, public validator_name: bytes, public validator_address: DiemTypes.AccountAddress) {
  super();
}

}

export class ScriptFunctionCallVariantRemoveVaspDomain extends ScriptFunctionCall {

constructor (public address: DiemTypes.AccountAddress, public domain: bytes) {
  super();
}

}

export class ScriptFunctionCallVariantRotateAuthenticationKey extends ScriptFunctionCall {

constructor (public new_key: bytes) {
  super();
}

}

export class ScriptFunctionCallVariantRotateAuthenticationKeyWithNonce extends ScriptFunctionCall {

constructor (public sliding_nonce: uint64, public new_key: bytes) {
  super();
}

}

export class ScriptFunctionCallVariantRotateAuthenticationKeyWithNonceAdmin extends ScriptFunctionCall {

constructor (public sliding_nonce: uint64, public new_key: bytes) {
  super();
}

}

export class ScriptFunctionCallVariantRotateAuthenticationKeyWithRecoveryAddress extends ScriptFunctionCall {

constructor (public recovery_address: DiemTypes.AccountAddress, public to_recover: DiemTypes.AccountAddress, public new_key: bytes) {
  super();
}

}

export class ScriptFunctionCallVariantRotateDualAttestationInfo extends ScriptFunctionCall {

constructor (public new_url: bytes, public new_key: bytes) {
  super();
}

}

export class ScriptFunctionCallVariantRotateSharedEd25519PublicKey extends ScriptFunctionCall {

constructor (public public_key: bytes) {
  super();
}

}

export class ScriptFunctionCallVariantSetGasConstants extends ScriptFunctionCall {

constructor (public sliding_nonce: uint64, public global_memory_per_byte_cost: uint64, public global_memory_per_byte_write_cost: uint64, public min_transaction_gas_units: uint64, public large_transaction_cutoff: uint64, public intrinsic_gas_per_byte: uint64, public maximum_number_of_gas_units: uint64, public min_price_per_gas_unit: uint64, public max_price_per_gas_unit: uint64, public max_transaction_size_in_bytes: uint64, public gas_unit_scaling_factor: uint64, public default_account_size: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantSetValidatorConfigAndReconfigure extends ScriptFunctionCall {

constructor (public validator_account: DiemTypes.AccountAddress, public consensus_pubkey: bytes, public validator_network_addresses: bytes, public fullnode_network_addresses: bytes) {
  super();
}

}

export class ScriptFunctionCallVariantSetValidatorOperator extends ScriptFunctionCall {

constructor (public operator_name: bytes, public operator_account: DiemTypes.AccountAddress) {
  super();
}

}

export class ScriptFunctionCallVariantSetValidatorOperatorWithNonceAdmin extends ScriptFunctionCall {

constructor (public sliding_nonce: uint64, public operator_name: bytes, public operator_account: DiemTypes.AccountAddress) {
  super();
}

}

export class ScriptFunctionCallVariantTieredMint extends ScriptFunctionCall {

constructor (public coin_type: DiemTypes.TypeTag, public sliding_nonce: uint64, public designated_dealer_address: DiemTypes.AccountAddress, public mint_amount: uint64, public tier_index: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantUnfreezeAccount extends ScriptFunctionCall {

constructor (public sliding_nonce: uint64, public to_unfreeze_account: DiemTypes.AccountAddress) {
  super();
}

}

export class ScriptFunctionCallVariantUpdateDiemConsensusConfig extends ScriptFunctionCall {

constructor (public sliding_nonce: uint64, public config: bytes) {
  super();
}

}

export class ScriptFunctionCallVariantUpdateDiemVersion extends ScriptFunctionCall {

constructor (public sliding_nonce: uint64, public major: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantUpdateDualAttestationLimit extends ScriptFunctionCall {

constructor (public sliding_nonce: uint64, public new_micro_xdx_limit: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantUpdateExchangeRate extends ScriptFunctionCall {

constructor (public currency: DiemTypes.TypeTag, public sliding_nonce: uint64, public new_exchange_rate_numerator: uint64, public new_exchange_rate_denominator: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantUpdateMintingAbility extends ScriptFunctionCall {

constructor (public currency: DiemTypes.TypeTag, public allow_minting: bool) {
  super();
}

}

export interface TypeTagDef {
  type: Types;
  arrayType?: TypeTagDef;
  name?: string;
  moduleName?: string;
  address?: string;
  typeParams?: TypeTagDef[];
}

export interface ArgDef {
  readonly name: string;
  readonly type: TypeTagDef;
  readonly choices?: string[];
  readonly mandatory?: boolean;
}

export interface ScriptDef {
  readonly stdlibEncodeFunction: (...args: any[]) => DiemTypes.Script;
  readonly stdlibDecodeFunction: (script: DiemTypes.Script) => ScriptCall;
  readonly codeName: string;
  readonly description: string;
  readonly typeArgs: string[];
  readonly args: ArgDef[];
}

export interface ScriptFunctionDef {
  readonly stdlibEncodeFunction: (...args: any[]) => DiemTypes.TransactionPayload;
  readonly description: string;
  readonly typeArgs: string[];
  readonly args: ArgDef[];
}

export enum Types {
  Boolean,
  U8,
  U64,
  U128,
  Address,
  Array,
  Struct
}


export class Stdlib {
  private static fromHexString(hexString: string): Uint8Array { return new Uint8Array(hexString.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16)));}

  /**

   */
  static encodeAddLiquidityScript(amt: bigint): DiemTypes.Script {
    const code = Stdlib.ADD_LIQUIDITY_CODE;
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    const args: Seq<DiemTypes.TransactionArgument> = [new DiemTypes.TransactionArgumentVariantU64(amt)];
    return new DiemTypes.Script(code, tyArgs, args);
  }

  /**

   */
  static encodeMintCoinAScript(amt: bigint): DiemTypes.Script {
    const code = Stdlib.MINT_COIN_A_CODE;
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    const args: Seq<DiemTypes.TransactionArgument> = [new DiemTypes.TransactionArgumentVariantU64(amt)];
    return new DiemTypes.Script(code, tyArgs, args);
  }

  /**

   */
  static encodeMintCoinBScript(amt: bigint): DiemTypes.Script {
    const code = Stdlib.MINT_COIN_B_CODE;
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    const args: Seq<DiemTypes.TransactionArgument> = [new DiemTypes.TransactionArgumentVariantU64(amt)];
    return new DiemTypes.Script(code, tyArgs, args);
  }

  /**

   */
  static encodeRemoveLiquidityScript(amt: bigint): DiemTypes.Script {
    const code = Stdlib.REMOVE_LIQUIDITY_CODE;
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    const args: Seq<DiemTypes.TransactionArgument> = [new DiemTypes.TransactionArgumentVariantU64(amt)];
    return new DiemTypes.Script(code, tyArgs, args);
  }

  static decodeAddLiquidityScript(script: DiemTypes.Script): ScriptCallVariantAddLiquidity {
    return new ScriptCallVariantAddLiquidity(
      (script.args[0] as DiemTypes.TransactionArgumentVariantU64).value
    );
  }

  static decodeMintCoinAScript(script: DiemTypes.Script): ScriptCallVariantMintCoinA {
    return new ScriptCallVariantMintCoinA(
      (script.args[0] as DiemTypes.TransactionArgumentVariantU64).value
    );
  }

  static decodeMintCoinBScript(script: DiemTypes.Script): ScriptCallVariantMintCoinB {
    return new ScriptCallVariantMintCoinB(
      (script.args[0] as DiemTypes.TransactionArgumentVariantU64).value
    );
  }

  static decodeRemoveLiquidityScript(script: DiemTypes.Script): ScriptCallVariantRemoveLiquidity {
    return new ScriptCallVariantRemoveLiquidity(
      (script.args[0] as DiemTypes.TransactionArgumentVariantU64).value
    );
  }

  /**
   * # Summary
   * Adds a zero `Currency` balance to the sending `account`. This will enable `account` to
   * send, receive, and hold `Diem::Diem<Currency>` coins. This transaction can be
   * successfully sent by any account that is allowed to hold balances
   * (e.g., VASP, Designated Dealer).
   *
   * # Technical Description
   * After the successful execution of this transaction the sending account will have a
   * `DiemAccount::Balance<Currency>` resource with zero balance published under it. Only
   * accounts that can hold balances can send this transaction, the sending account cannot
   * already have a `DiemAccount::Balance<Currency>` published under it.
   *
   * # Parameters
   * | Name       | Type     | Description                                                                                                                                         |
   * | ------     | ------   | -------------                                                                                                                                       |
   * | `Currency` | Type     | The Move type for the `Currency` being added to the sending account of the transaction. `Currency` must be an already-registered currency on-chain. |
   * | `account`  | `signer` | The signer of the sending account of the transaction.                                                                                               |
   *
   * # Common Abort Conditions
   * | Error Category              | Error Reason                             | Description                                                                |
   * | ----------------            | --------------                           | -------------                                                              |
   * | `Errors::NOT_PUBLISHED`     | `Diem::ECURRENCY_INFO`                  | The `Currency` is not a registered currency on-chain.                      |
   * | `Errors::INVALID_ARGUMENT`  | `DiemAccount::EROLE_CANT_STORE_BALANCE` | The sending `account`'s role does not permit balances.                     |
   * | `Errors::ALREADY_PUBLISHED` | `DiemAccount::EADD_EXISTING_CURRENCY`   | A balance for `Currency` is already published under the sending `account`. |
   *
   * # Related Scripts
   * * `AccountCreationScripts::create_child_vasp_account`
   * * `AccountCreationScripts::create_parent_vasp_account`
   * * `PaymentScripts::peer_to_peer_with_metadata`
   */
  static encodeAddCurrencyToAccountScriptFunction(currency: DiemTypes.TypeTag): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [currency];
    const args: Seq<bytes> = [];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("AccountAdministrationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("add_currency_to_account");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeAddExchangeLiquidityScriptFunction(exchange: DiemTypes.AccountAddress, provider: DiemTypes.AccountAddress, coin_a_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    exchange.serialize(serializer);
    const exchange_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    provider.serialize(serializer);
    const provider_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_a_amt);
    const coin_a_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [exchange_serialized, provider_serialized, coin_a_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeAB"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("add_exchange_liquidity");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeAddExchangeLiquidityScriptFunction(exchange: DiemTypes.AccountAddress, provider: DiemTypes.AccountAddress, coin_b_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    exchange.serialize(serializer);
    const exchange_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    provider.serialize(serializer);
    const provider_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_b_amt);
    const coin_b_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [exchange_serialized, provider_serialized, coin_b_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeBC"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("add_exchange_liquidity");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeAddExchangeLiquidityScriptFunction(exchange: DiemTypes.AccountAddress, provider: DiemTypes.AccountAddress, coin_a_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    exchange.serialize(serializer);
    const exchange_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    provider.serialize(serializer);
    const provider_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_a_amt);
    const coin_a_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [exchange_serialized, provider_serialized, coin_a_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeAC"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("add_exchange_liquidity");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeAddExchangeLiquidityScriptFunction(exchange: DiemTypes.AccountAddress, provider: DiemTypes.AccountAddress, coin_a_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    exchange.serialize(serializer);
    const exchange_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    provider.serialize(serializer);
    const provider_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_a_amt);
    const coin_a_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [exchange_serialized, provider_serialized, coin_a_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeAD"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("add_exchange_liquidity");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeAddExchangeLiquidityScriptFunction(exchange: DiemTypes.AccountAddress, provider: DiemTypes.AccountAddress, coin_b_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    exchange.serialize(serializer);
    const exchange_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    provider.serialize(serializer);
    const provider_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_b_amt);
    const coin_b_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [exchange_serialized, provider_serialized, coin_b_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeBD"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("add_exchange_liquidity");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeAddExchangeLiquidityScriptFunction(exchange: DiemTypes.AccountAddress, provider: DiemTypes.AccountAddress, coin_c_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    exchange.serialize(serializer);
    const exchange_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    provider.serialize(serializer);
    const provider_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_c_amt);
    const coin_c_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [exchange_serialized, provider_serialized, coin_c_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeCD"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("add_exchange_liquidity");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Stores the sending accounts ability to rotate its authentication key with a designated recovery
   * account. Both the sending and recovery accounts need to belong to the same VASP and
   * both be VASP accounts. After this transaction both the sending account and the
   * specified recovery account can rotate the sender account's authentication key.
   *
   * # Technical Description
   * Adds the `DiemAccount::KeyRotationCapability` for the sending account
   * (`to_recover_account`) to the `RecoveryAddress::RecoveryAddress` resource under
   * `recovery_address`. After this transaction has been executed successfully the account at
   * `recovery_address` and the `to_recover_account` may rotate the authentication key of
   * `to_recover_account` (the sender of this transaction).
   *
   * The sending account of this transaction (`to_recover_account`) must not have previously given away its unique key
   * rotation capability, and must be a VASP account. The account at `recovery_address`
   * must also be a VASP account belonging to the same VASP as the `to_recover_account`.
   * Additionally the account at `recovery_address` must have already initialized itself as
   * a recovery account address using the `AccountAdministrationScripts::create_recovery_address` transaction script.
   *
   * The sending account's (`to_recover_account`) key rotation capability is
   * removed in this transaction and stored in the `RecoveryAddress::RecoveryAddress`
   * resource stored under the account at `recovery_address`.
   *
   * # Parameters
   * | Name                 | Type      | Description                                                                                               |
   * | ------               | ------    | -------------                                                                                             |
   * | `to_recover_account` | `signer`  | The signer of the sending account of this transaction.                                                    |
   * | `recovery_address`   | `address` | The account address where the `to_recover_account`'s `DiemAccount::KeyRotationCapability` will be stored. |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                                              | Description                                                                                       |
   * | ----------------           | --------------                                            | -------------                                                                                     |
   * | `Errors::INVALID_STATE`    | `DiemAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` | `to_recover_account` has already delegated/extracted its `DiemAccount::KeyRotationCapability`.    |
   * | `Errors::NOT_PUBLISHED`    | `RecoveryAddress::ERECOVERY_ADDRESS`                      | `recovery_address` does not have a `RecoveryAddress` resource published under it.                 |
   * | `Errors::INVALID_ARGUMENT` | `RecoveryAddress::EINVALID_KEY_ROTATION_DELEGATION`       | `to_recover_account` and `recovery_address` do not belong to the same VASP.                       |
   * | `Errors::LIMIT_EXCEEDED`   | ` RecoveryAddress::EMAX_KEYS_REGISTERED`                  | `RecoveryAddress::MAX_REGISTERED_KEYS` have already been registered with this `recovery_address`. |
   *
   * # Related Scripts
   * * `AccountAdministrationScripts::create_recovery_address`
   * * `AccountAdministrationScripts::rotate_authentication_key_with_recovery_address`
   */
  static encodeAddRecoveryRotationCapabilityScriptFunction(recovery_address: DiemTypes.AccountAddress): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    recovery_address.serialize(serializer);
    const recovery_address_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [recovery_address_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("AccountAdministrationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("add_recovery_rotation_capability");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Adds a validator account to the validator set, and triggers a
   * reconfiguration of the system to admit the account to the validator set for the system. This
   * transaction can only be successfully called by the Diem Root account.
   *
   * # Technical Description
   * This script adds the account at `validator_address` to the validator set.
   * This transaction emits a `DiemConfig::NewEpochEvent` event and triggers a
   * reconfiguration. Once the reconfiguration triggered by this script's
   * execution has been performed, the account at the `validator_address` is
   * considered to be a validator in the network.
   *
   * This transaction script will fail if the `validator_address` address is already in the validator set
   * or does not have a `ValidatorConfig::ValidatorConfig` resource already published under it.
   *
   * # Parameters
   * | Name                | Type         | Description                                                                                                                        |
   * | ------              | ------       | -------------                                                                                                                      |
   * | `dr_account`        | `signer`     | The signer of the sending account of this transaction. Must be the Diem Root signer.                                               |
   * | `sliding_nonce`     | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                                         |
   * | `validator_name`    | `vector<u8>` | ASCII-encoded human name for the validator. Must match the human name in the `ValidatorConfig::ValidatorConfig` for the validator. |
   * | `validator_address` | `address`    | The validator account address to be added to the validator set.                                                                    |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                                 | Description                                                                                                                               |
   * | ----------------           | --------------                               | -------------                                                                                                                             |
   * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`               | A `SlidingNonce` resource is not published under `dr_account`.                                                                            |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`               | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not.                                                |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`               | The `sliding_nonce` is too far in the future.                                                                                             |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`      | The `sliding_nonce` has been previously recorded.                                                                                         |
   * | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::EDIEM_ROOT`                  | The sending account is not the Diem Root account.                                                                                         |
   * | `Errors::REQUIRES_ROLE`    | `Roles::EDIEM_ROOT`                          | The sending account is not the Diem Root account.                                                                                         |
   * | 0                          | 0                                            | The provided `validator_name` does not match the already-recorded human name for the validator.                                           |
   * | `Errors::INVALID_ARGUMENT` | `DiemSystem::EINVALID_PROSPECTIVE_VALIDATOR` | The validator to be added does not have a `ValidatorConfig::ValidatorConfig` resource published under it, or its `config` field is empty. |
   * | `Errors::INVALID_ARGUMENT` | `DiemSystem::EALREADY_A_VALIDATOR`           | The `validator_address` account is already a registered validator.                                                                        |
   * | `Errors::INVALID_STATE`    | `DiemConfig::EINVALID_BLOCK_TIME`            | An invalid time value was encountered in reconfiguration. Unlikely to occur.                                                              |
   * | `Errors::LIMIT_EXCEEDED`   | `DiemSystem::EMAX_VALIDATORS`                | The validator set is already at its maximum size. The validator could not be added.                                                       |
   *
   * # Related Scripts
   * * `AccountCreationScripts::create_validator_account`
   * * `AccountCreationScripts::create_validator_operator_account`
   * * `ValidatorAdministrationScripts::register_validator_config`
   * * `ValidatorAdministrationScripts::remove_validator_and_reconfigure`
   * * `ValidatorAdministrationScripts::set_validator_operator`
   * * `ValidatorAdministrationScripts::set_validator_operator_with_nonce_admin`
   * * `ValidatorAdministrationScripts::set_validator_config_and_reconfigure`
   */
  static encodeAddValidatorAndReconfigureScriptFunction(sliding_nonce: bigint, validator_name: Uint8Array, validator_address: DiemTypes.AccountAddress): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeU64(sliding_nonce);
    const sliding_nonce_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(validator_name);
    const validator_name_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    validator_address.serialize(serializer);
    const validator_address_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [sliding_nonce_serialized, validator_name_serialized, validator_address_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("ValidatorAdministrationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("add_validator_and_reconfigure");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Add a VASP domain to parent VASP account. The transaction can only be sent by
   * the Treasury Compliance account.
   *
   * # Technical Description
   * Adds a `VASPDomain::VASPDomain` to the `domains` field of the `VASPDomain::VASPDomains` resource published under
   * the account at `address`.
   *
   * # Parameters
   * | Name         | Type         | Description                                                                                     |
   * | ------       | ------       | -------------                                                                                   |
   * | `tc_account` | `signer`     | The signer of the sending account of this transaction. Must be the Treasury Compliance account. |
   * | `address`    | `address`    | The `address` of the parent VASP account that will have have `domain` added to its domains.     |
   * | `domain`     | `vector<u8>` | The domain to be added.                                                                         |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                             | Description                                                                                                                            |
   * | ----------------           | --------------                           | -------------                                                                                                                          |
   * | `Errors::REQUIRES_ROLE`    | `Roles::ETREASURY_COMPLIANCE`            | The sending account is not the Treasury Compliance account.                                                                            |
   * | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE`    | `tc_account` is not the Treasury Compliance account.                                                                                   |
   * | `Errors::NOT_PUBLISHED`    | `VASPDomain::EVASP_DOMAIN_MANAGER`        | The `VASPDomain::VASPDomainManager` resource is not yet published under the Treasury Compliance account.                                 |
   * | `Errors::NOT_PUBLISHED`    | `VASPDomain::EVASP_DOMAINS_NOT_PUBLISHED` | `address` does not have a `VASPDomain::VASPDomains` resource published under it.                                                         |
   * | `Errors::INVALID_ARGUMENT` | `VASPDomain::EDOMAIN_ALREADY_EXISTS`         | The `domain` already exists in the list of `VASPDomain::VASPDomain`s  in the `VASPDomain::VASPDomains` resource published under `address`. |
   * | `Errors::INVALID_ARGUMENT` | `VASPDomain::EINVALID_VASP_DOMAIN`        | The `domain` is greater in length than `VASPDomain::DOMAIN_LENGTH`.                                                                        |
   */
  static encodeAddVaspDomainScriptFunction(address: DiemTypes.AccountAddress, domain: Uint8Array): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    address.serialize(serializer);
    const address_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(domain);
    const domain_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [address_serialized, domain_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("TreasuryComplianceScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("add_vasp_domain");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Burns the transaction fees collected in the `CoinType` currency so that the
   * Diem association may reclaim the backing coins off-chain. May only be sent
   * by the Treasury Compliance account.
   *
   * # Technical Description
   * Burns the transaction fees collected in `CoinType` so that the
   * association may reclaim the backing coins. Once this transaction has executed
   * successfully all transaction fees that will have been collected in
   * `CoinType` since the last time this script was called with that specific
   * currency. Both `balance` and `preburn` fields in the
   * `TransactionFee::TransactionFee<CoinType>` resource published under the `0xB1E55ED`
   * account address will have a value of 0 after the successful execution of this script.
   *
   * # Events
   * The successful execution of this transaction will emit a `Diem::BurnEvent` on the event handle
   * held in the `Diem::CurrencyInfo<CoinType>` resource's `burn_events` published under
   * `0xA550C18`.
   *
   * # Parameters
   * | Name         | Type     | Description                                                                                                                                         |
   * | ------       | ------   | -------------                                                                                                                                       |
   * | `CoinType`   | Type     | The Move type for the `CoinType` being added to the sending account of the transaction. `CoinType` must be an already-registered currency on-chain. |
   * | `tc_account` | `signer` | The signer of the sending account of this transaction. Must be the Treasury Compliance account.                                                     |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                          | Description                                                 |
   * | ----------------           | --------------                        | -------------                                               |
   * | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE` | The sending account is not the Treasury Compliance account. |
   * | `Errors::NOT_PUBLISHED`    | `TransactionFee::ETRANSACTION_FEE`    | `CoinType` is not an accepted transaction fee currency.     |
   * | `Errors::INVALID_ARGUMENT` | `Diem::ECOIN`                        | The collected fees in `CoinType` are zero.                  |
   *
   * # Related Scripts
   * * `TreasuryComplianceScripts::burn_with_amount`
   * * `TreasuryComplianceScripts::cancel_burn_with_amount`
   */
  static encodeBurnTxnFeesScriptFunction(coin_type: DiemTypes.TypeTag): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [coin_type];
    const args: Seq<bytes> = [];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("TreasuryComplianceScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("burn_txn_fees");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Burns the coins held in a preburn resource in the preburn queue at the
   * specified preburn address, which are equal to the `amount` specified in the
   * transaction. Finds the first relevant outstanding preburn request with
   * matching amount and removes the contained coins from the system. The sending
   * account must be the Treasury Compliance account.
   * The account that holds the preburn queue resource will normally be a Designated
   * Dealer, but there are no enforced requirements that it be one.
   *
   * # Technical Description
   * This transaction permanently destroys all the coins of `Token` type
   * stored in the `Diem::Preburn<Token>` resource published under the
   * `preburn_address` account address.
   *
   * This transaction will only succeed if the sending `account` has a
   * `Diem::BurnCapability<Token>`, and a `Diem::Preburn<Token>` resource
   * exists under `preburn_address`, with a non-zero `to_burn` field. After the successful execution
   * of this transaction the `total_value` field in the
   * `Diem::CurrencyInfo<Token>` resource published under `0xA550C18` will be
   * decremented by the value of the `to_burn` field of the preburn resource
   * under `preburn_address` immediately before this transaction, and the
   * `to_burn` field of the preburn resource will have a zero value.
   *
   * # Events
   * The successful execution of this transaction will emit a `Diem::BurnEvent` on the event handle
   * held in the `Diem::CurrencyInfo<Token>` resource's `burn_events` published under
   * `0xA550C18`.
   *
   * # Parameters
   * | Name              | Type      | Description                                                                                                        |
   * | ------            | ------    | -------------                                                                                                      |
   * | `Token`           | Type      | The Move type for the `Token` currency being burned. `Token` must be an already-registered currency on-chain.      |
   * | `tc_account`      | `signer`  | The signer of the sending account of this transaction, must have a burn capability for `Token` published under it. |
   * | `sliding_nonce`   | `u64`     | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                         |
   * | `preburn_address` | `address` | The address where the coins to-be-burned are currently held.                                                       |
   * | `amount`          | `u64`     | The amount to be burned.                                                                                           |
   *
   * # Common Abort Conditions
   * | Error Category                | Error Reason                            | Description                                                                                                                         |
   * | ----------------              | --------------                          | -------------                                                                                                                       |
   * | `Errors::NOT_PUBLISHED`       | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `account`.                                                                         |
   * | `Errors::INVALID_ARGUMENT`    | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not.                                          |
   * | `Errors::INVALID_ARGUMENT`    | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                                                                       |
   * | `Errors::INVALID_ARGUMENT`    | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                                                                   |
   * | `Errors::REQUIRES_CAPABILITY` | `Diem::EBURN_CAPABILITY`                | The sending `account` does not have a `Diem::BurnCapability<Token>` published under it.                                             |
   * | `Errors::INVALID_STATE`       | `Diem::EPREBURN_NOT_FOUND`              | The `Diem::PreburnQueue<Token>` resource under `preburn_address` does not contain a preburn request with a value matching `amount`. |
   * | `Errors::NOT_PUBLISHED`       | `Diem::EPREBURN_QUEUE`                  | The account at `preburn_address` does not have a `Diem::PreburnQueue<Token>` resource published under it.                           |
   * | `Errors::NOT_PUBLISHED`       | `Diem::ECURRENCY_INFO`                  | The specified `Token` is not a registered currency on-chain.                                                                        |
   *
   * # Related Scripts
   * * `TreasuryComplianceScripts::burn_txn_fees`
   * * `TreasuryComplianceScripts::cancel_burn_with_amount`
   * * `TreasuryComplianceScripts::preburn`
   */
  static encodeBurnWithAmountScriptFunction(token: DiemTypes.TypeTag, sliding_nonce: bigint, preburn_address: DiemTypes.AccountAddress, amount: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [token];
    var serializer = new BcsSerializer();
    serializer.serializeU64(sliding_nonce);
    const sliding_nonce_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    preburn_address.serialize(serializer);
    const preburn_address_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(amount);
    const amount_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [sliding_nonce_serialized, preburn_address_serialized, amount_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("TreasuryComplianceScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("burn_with_amount");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Cancels and returns the coins held in the preburn area under
   * `preburn_address`, which are equal to the `amount` specified in the transaction. Finds the first preburn
   * resource with the matching amount and returns the funds to the `preburn_address`'s balance.
   * Can only be successfully sent by an account with Treasury Compliance role.
   *
   * # Technical Description
   * Cancels and returns all coins held in the `Diem::Preburn<Token>` resource under the `preburn_address` and
   * return the funds to the `preburn_address` account's `DiemAccount::Balance<Token>`.
   * The transaction must be sent by an `account` with a `Diem::BurnCapability<Token>`
   * resource published under it. The account at `preburn_address` must have a
   * `Diem::Preburn<Token>` resource published under it, and its value must be nonzero. The transaction removes
   * the entire balance held in the `Diem::Preburn<Token>` resource, and returns it back to the account's
   * `DiemAccount::Balance<Token>` under `preburn_address`. Due to this, the account at
   * `preburn_address` must already have a balance in the `Token` currency published
   * before this script is called otherwise the transaction will fail.
   *
   * # Events
   * The successful execution of this transaction will emit:
   * * A `Diem::CancelBurnEvent` on the event handle held in the `Diem::CurrencyInfo<Token>`
   * resource's `burn_events` published under `0xA550C18`.
   * * A `DiemAccount::ReceivedPaymentEvent` on the `preburn_address`'s
   * `DiemAccount::DiemAccount` `received_events` event handle with both the `payer` and `payee`
   * being `preburn_address`.
   *
   * # Parameters
   * | Name              | Type      | Description                                                                                                                          |
   * | ------            | ------    | -------------                                                                                                                        |
   * | `Token`           | Type      | The Move type for the `Token` currenty that burning is being cancelled for. `Token` must be an already-registered currency on-chain. |
   * | `account`         | `signer`  | The signer of the sending account of this transaction, must have a burn capability for `Token` published under it.                   |
   * | `preburn_address` | `address` | The address where the coins to-be-burned are currently held.                                                                         |
   * | `amount`          | `u64`     | The amount to be cancelled.                                                                                                          |
   *
   * # Common Abort Conditions
   * | Error Category                | Error Reason                                     | Description                                                                                                                         |
   * | ----------------              | --------------                                   | -------------                                                                                                                       |
   * | `Errors::REQUIRES_CAPABILITY` | `Diem::EBURN_CAPABILITY`                         | The sending `account` does not have a `Diem::BurnCapability<Token>` published under it.                                             |
   * | `Errors::INVALID_STATE`       | `Diem::EPREBURN_NOT_FOUND`                       | The `Diem::PreburnQueue<Token>` resource under `preburn_address` does not contain a preburn request with a value matching `amount`. |
   * | `Errors::NOT_PUBLISHED`       | `Diem::EPREBURN_QUEUE`                           | The account at `preburn_address` does not have a `Diem::PreburnQueue<Token>` resource published under it.                           |
   * | `Errors::NOT_PUBLISHED`       | `Diem::ECURRENCY_INFO`                           | The specified `Token` is not a registered currency on-chain.                                                                        |
   * | `Errors::INVALID_ARGUMENT`    | `DiemAccount::EPAYEE_CANT_ACCEPT_CURRENCY_TYPE`  | The account at `preburn_address` doesn't have a balance resource for `Token`.                                                       |
   * | `Errors::LIMIT_EXCEEDED`      | `DiemAccount::EDEPOSIT_EXCEEDS_LIMITS`           | The depositing of the funds held in the prebun area would exceed the `account`'s account limits.                                    |
   * | `Errors::INVALID_STATE`       | `DualAttestation::EPAYEE_COMPLIANCE_KEY_NOT_SET` | The `account` does not have a compliance key set on it but dual attestion checking was performed.                                   |
   *
   * # Related Scripts
   * * `TreasuryComplianceScripts::burn_txn_fees`
   * * `TreasuryComplianceScripts::burn_with_amount`
   * * `TreasuryComplianceScripts::preburn`
   */
  static encodeCancelBurnWithAmountScriptFunction(token: DiemTypes.TypeTag, preburn_address: DiemTypes.AccountAddress, amount: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [token];
    var serializer = new BcsSerializer();
    preburn_address.serialize(serializer);
    const preburn_address_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(amount);
    const amount_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [preburn_address_serialized, amount_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("TreasuryComplianceScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("cancel_burn_with_amount");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Creates a Child VASP account with its parent being the sending account of the transaction.
   * The sender of the transaction must be a Parent VASP account.
   *
   * # Technical Description
   * Creates a `ChildVASP` account for the sender `parent_vasp` at `child_address` with a balance of
   * `child_initial_balance` in `CoinType` and an initial authentication key of
   * `auth_key_prefix | child_address`. Authentication key prefixes, and how to construct them from an ed25519 public key is described
   * [here](https://developers.diem.com/docs/core/accounts/#addresses-authentication-keys-and-cryptographic-keys).
   *
   * If `add_all_currencies` is true, the child address will have a zero balance in all available
   * currencies in the system.
   *
   * The new account will be a child account of the transaction sender, which must be a
   * Parent VASP account. The child account will be recorded against the limit of
   * child accounts of the creating Parent VASP account.
   *
   * # Events
   * Successful execution will emit:
   * * A `DiemAccount::CreateAccountEvent` with the `created` field being `child_address`,
   * and the `rold_id` field being `Roles::CHILD_VASP_ROLE_ID`. This is emitted on the
   * `DiemAccount::AccountOperationsCapability` `creation_events` handle.
   *
   * Successful execution with a `child_initial_balance` greater than zero will additionaly emit:
   * * A `DiemAccount::SentPaymentEvent` with the `payee` field being `child_address`.
   * This is emitted on the Parent VASP's `DiemAccount::DiemAccount` `sent_events` handle.
   * * A `DiemAccount::ReceivedPaymentEvent` with the  `payer` field being the Parent VASP's address.
   * This is emitted on the new Child VASPS's `DiemAccount::DiemAccount` `received_events` handle.
   *
   * # Parameters
   * | Name                    | Type         | Description                                                                                                                                 |
   * | ------                  | ------       | -------------                                                                                                                               |
   * | `CoinType`              | Type         | The Move type for the `CoinType` that the child account should be created with. `CoinType` must be an already-registered currency on-chain. |
   * | `parent_vasp`           | `signer`     | The reference of the sending account. Must be a Parent VASP account.                                                                        |
   * | `child_address`         | `address`    | Address of the to-be-created Child VASP account.                                                                                            |
   * | `auth_key_prefix`       | `vector<u8>` | The authentication key prefix that will be used initially for the newly created account.                                                    |
   * | `add_all_currencies`    | `bool`       | Whether to publish balance resources for all known currencies when the account is created.                                                  |
   * | `child_initial_balance` | `u64`        | The initial balance in `CoinType` to give the child account when it's created.                                                              |
   *
   * # Common Abort Conditions
   * | Error Category              | Error Reason                                             | Description                                                                              |
   * | ----------------            | --------------                                           | -------------                                                                            |
   * | `Errors::INVALID_ARGUMENT`  | `DiemAccount::EMALFORMED_AUTHENTICATION_KEY`            | The `auth_key_prefix` was not of length 32.                                              |
   * | `Errors::REQUIRES_ROLE`     | `Roles::EPARENT_VASP`                                    | The sending account wasn't a Parent VASP account.                                        |
   * | `Errors::ALREADY_PUBLISHED` | `Roles::EROLE_ID`                                        | The `child_address` address is already taken.                                            |
   * | `Errors::LIMIT_EXCEEDED`    | `VASP::ETOO_MANY_CHILDREN`                               | The sending account has reached the maximum number of allowed child accounts.            |
   * | `Errors::NOT_PUBLISHED`     | `Diem::ECURRENCY_INFO`                                  | The `CoinType` is not a registered currency on-chain.                                    |
   * | `Errors::INVALID_STATE`     | `DiemAccount::EWITHDRAWAL_CAPABILITY_ALREADY_EXTRACTED` | The withdrawal capability for the sending account has already been extracted.            |
   * | `Errors::NOT_PUBLISHED`     | `DiemAccount::EPAYER_DOESNT_HOLD_CURRENCY`              | The sending account doesn't have a balance in `CoinType`.                                |
   * | `Errors::LIMIT_EXCEEDED`    | `DiemAccount::EINSUFFICIENT_BALANCE`                    | The sending account doesn't have at least `child_initial_balance` of `CoinType` balance. |
   * | `Errors::INVALID_ARGUMENT`  | `DiemAccount::ECANNOT_CREATE_AT_VM_RESERVED`            | The `child_address` is the reserved address 0x0.                                         |
   *
   * # Related Scripts
   * * `AccountCreationScripts::create_parent_vasp_account`
   * * `AccountAdministrationScripts::add_currency_to_account`
   * * `AccountAdministrationScripts::rotate_authentication_key`
   * * `AccountAdministrationScripts::add_recovery_rotation_capability`
   * * `AccountAdministrationScripts::create_recovery_address`
   */
  static encodeCreateChildVaspAccountScriptFunction(coin_type: DiemTypes.TypeTag, child_address: DiemTypes.AccountAddress, auth_key_prefix: Uint8Array, add_all_currencies: boolean, child_initial_balance: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [coin_type];
    var serializer = new BcsSerializer();
    child_address.serialize(serializer);
    const child_address_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(auth_key_prefix);
    const auth_key_prefix_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBool(add_all_currencies);
    const add_all_currencies_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(child_initial_balance);
    const child_initial_balance_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [child_address_serialized, auth_key_prefix_serialized, add_all_currencies_serialized, child_initial_balance_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("AccountCreationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("create_child_vasp_account");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Creates a Designated Dealer account with the provided information, and initializes it with
   * default mint tiers. The transaction can only be sent by the Treasury Compliance account.
   *
   * # Technical Description
   * Creates an account with the Designated Dealer role at `addr` with authentication key
   * `auth_key_prefix` | `addr` and a 0 balance of type `Currency`. If `add_all_currencies` is true,
   * 0 balances for all available currencies in the system will also be added. This can only be
   * invoked by an account with the TreasuryCompliance role.
   * Authentication keys, prefixes, and how to construct them from an ed25519 public key are described
   * [here](https://developers.diem.com/docs/core/accounts/#addresses-authentication-keys-and-cryptographic-keys).
   *
   * At the time of creation the account is also initialized with default mint tiers of (500_000,
   * 5000_000, 50_000_000, 500_000_000), and preburn areas for each currency that is added to the
   * account.
   *
   * # Events
   * Successful execution will emit:
   * * A `DiemAccount::CreateAccountEvent` with the `created` field being `addr`,
   * and the `rold_id` field being `Roles::DESIGNATED_DEALER_ROLE_ID`. This is emitted on the
   * `DiemAccount::AccountOperationsCapability` `creation_events` handle.
   *
   * # Parameters
   * | Name                 | Type         | Description                                                                                                                                         |
   * | ------               | ------       | -------------                                                                                                                                       |
   * | `Currency`           | Type         | The Move type for the `Currency` that the Designated Dealer should be initialized with. `Currency` must be an already-registered currency on-chain. |
   * | `tc_account`         | `signer`     | The signer of the sending account of this transaction. Must be the Treasury Compliance account.                                                     |
   * | `sliding_nonce`      | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                                                          |
   * | `addr`               | `address`    | Address of the to-be-created Designated Dealer account.                                                                                             |
   * | `auth_key_prefix`    | `vector<u8>` | The authentication key prefix that will be used initially for the newly created account.                                                            |
   * | `human_name`         | `vector<u8>` | ASCII-encoded human name for the Designated Dealer.                                                                                                 |
   * | `add_all_currencies` | `bool`       | Whether to publish preburn, balance, and tier info resources for all known (SCS) currencies or just `Currency` when the account is created.         |
   *

   * # Common Abort Conditions
   * | Error Category              | Error Reason                            | Description                                                                                |
   * | ----------------            | --------------                          | -------------                                                                              |
   * | `Errors::NOT_PUBLISHED`     | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `tc_account`.                             |
   * | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |
   * | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |
   * | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |
   * | `Errors::REQUIRES_ADDRESS`  | `CoreAddresses::ETREASURY_COMPLIANCE`   | The sending account is not the Treasury Compliance account.                                |
   * | `Errors::REQUIRES_ROLE`     | `Roles::ETREASURY_COMPLIANCE`           | The sending account is not the Treasury Compliance account.                                |
   * | `Errors::NOT_PUBLISHED`     | `Diem::ECURRENCY_INFO`                 | The `Currency` is not a registered currency on-chain.                                      |
   * | `Errors::ALREADY_PUBLISHED` | `Roles::EROLE_ID`                       | The `addr` address is already taken.                                                       |
   *
   * # Related Scripts
   * * `TreasuryComplianceScripts::tiered_mint`
   * * `PaymentScripts::peer_to_peer_with_metadata`
   * * `AccountAdministrationScripts::rotate_dual_attestation_info`
   */
  static encodeCreateDesignatedDealerScriptFunction(currency: DiemTypes.TypeTag, sliding_nonce: bigint, addr: DiemTypes.AccountAddress, auth_key_prefix: Uint8Array, human_name: Uint8Array, add_all_currencies: boolean): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [currency];
    var serializer = new BcsSerializer();
    serializer.serializeU64(sliding_nonce);
    const sliding_nonce_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    addr.serialize(serializer);
    const addr_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(auth_key_prefix);
    const auth_key_prefix_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(human_name);
    const human_name_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBool(add_all_currencies);
    const add_all_currencies_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [sliding_nonce_serialized, addr_serialized, auth_key_prefix_serialized, human_name_serialized, add_all_currencies_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("AccountCreationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("create_designated_dealer");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Creates a Parent VASP account with the specified human name. Must be called by the Treasury Compliance account.
   *
   * # Technical Description
   * Creates an account with the Parent VASP role at `address` with authentication key
   * `auth_key_prefix` | `new_account_address` and a 0 balance of type `CoinType`. If
   * `add_all_currencies` is true, 0 balances for all available currencies in the system will
   * also be added. This can only be invoked by an TreasuryCompliance account.
   * `sliding_nonce` is a unique nonce for operation, see `SlidingNonce` for details.
   * Authentication keys, prefixes, and how to construct them from an ed25519 public key are described
   * [here](https://developers.diem.com/docs/core/accounts/#addresses-authentication-keys-and-cryptographic-keys).
   *
   * # Events
   * Successful execution will emit:
   * * A `DiemAccount::CreateAccountEvent` with the `created` field being `new_account_address`,
   * and the `rold_id` field being `Roles::PARENT_VASP_ROLE_ID`. This is emitted on the
   * `DiemAccount::AccountOperationsCapability` `creation_events` handle.
   *
   * # Parameters
   * | Name                  | Type         | Description                                                                                                                                                    |
   * | ------                | ------       | -------------                                                                                                                                                  |
   * | `CoinType`            | Type         | The Move type for the `CoinType` currency that the Parent VASP account should be initialized with. `CoinType` must be an already-registered currency on-chain. |
   * | `tc_account`          | `signer`     | The signer of the sending account of this transaction. Must be the Treasury Compliance account.                                                                |
   * | `sliding_nonce`       | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                                                                     |
   * | `new_account_address` | `address`    | Address of the to-be-created Parent VASP account.                                                                                                              |
   * | `auth_key_prefix`     | `vector<u8>` | The authentication key prefix that will be used initially for the newly created account.                                                                       |
   * | `human_name`          | `vector<u8>` | ASCII-encoded human name for the Parent VASP.                                                                                                                  |
   * | `add_all_currencies`  | `bool`       | Whether to publish balance resources for all known currencies when the account is created.                                                                     |
   *
   * # Common Abort Conditions
   * | Error Category              | Error Reason                            | Description                                                                                |
   * | ----------------            | --------------                          | -------------                                                                              |
   * | `Errors::NOT_PUBLISHED`     | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `tc_account`.                             |
   * | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |
   * | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |
   * | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |
   * | `Errors::REQUIRES_ADDRESS`  | `CoreAddresses::ETREASURY_COMPLIANCE`   | The sending account is not the Treasury Compliance account.                                |
   * | `Errors::REQUIRES_ROLE`     | `Roles::ETREASURY_COMPLIANCE`           | The sending account is not the Treasury Compliance account.                                |
   * | `Errors::NOT_PUBLISHED`     | `Diem::ECURRENCY_INFO`                 | The `CoinType` is not a registered currency on-chain.                                      |
   * | `Errors::ALREADY_PUBLISHED` | `Roles::EROLE_ID`                       | The `new_account_address` address is already taken.                                        |
   *
   * # Related Scripts
   * * `AccountCreationScripts::create_child_vasp_account`
   * * `AccountAdministrationScripts::add_currency_to_account`
   * * `AccountAdministrationScripts::rotate_authentication_key`
   * * `AccountAdministrationScripts::add_recovery_rotation_capability`
   * * `AccountAdministrationScripts::create_recovery_address`
   * * `AccountAdministrationScripts::rotate_dual_attestation_info`
   */
  static encodeCreateParentVaspAccountScriptFunction(coin_type: DiemTypes.TypeTag, sliding_nonce: bigint, new_account_address: DiemTypes.AccountAddress, auth_key_prefix: Uint8Array, human_name: Uint8Array, add_all_currencies: boolean): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [coin_type];
    var serializer = new BcsSerializer();
    serializer.serializeU64(sliding_nonce);
    const sliding_nonce_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    new_account_address.serialize(serializer);
    const new_account_address_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(auth_key_prefix);
    const auth_key_prefix_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(human_name);
    const human_name_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBool(add_all_currencies);
    const add_all_currencies_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [sliding_nonce_serialized, new_account_address_serialized, auth_key_prefix_serialized, human_name_serialized, add_all_currencies_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("AccountCreationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("create_parent_vasp_account");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Initializes the sending account as a recovery address that may be used by
   * other accounts belonging to the same VASP as `account`.
   * The sending account must be a VASP account, and can be either a child or parent VASP account.
   * Multiple recovery addresses can exist for a single VASP, but accounts in
   * each must be disjoint.
   *
   * # Technical Description
   * Publishes a `RecoveryAddress::RecoveryAddress` resource under `account`. It then
   * extracts the `DiemAccount::KeyRotationCapability` for `account` and adds
   * it to the resource. After the successful execution of this transaction
   * other accounts may add their key rotation to this resource so that `account`
   * may be used as a recovery account for those accounts.
   *
   * # Parameters
   * | Name      | Type     | Description                                           |
   * | ------    | ------   | -------------                                         |
   * | `account` | `signer` | The signer of the sending account of the transaction. |
   *
   * # Common Abort Conditions
   * | Error Category              | Error Reason                                               | Description                                                                                   |
   * | ----------------            | --------------                                             | -------------                                                                                 |
   * | `Errors::INVALID_STATE`     | `DiemAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` | `account` has already delegated/extracted its `DiemAccount::KeyRotationCapability`.          |
   * | `Errors::INVALID_ARGUMENT`  | `RecoveryAddress::ENOT_A_VASP`                             | `account` is not a VASP account.                                                              |
   * | `Errors::INVALID_ARGUMENT`  | `RecoveryAddress::EKEY_ROTATION_DEPENDENCY_CYCLE`          | A key rotation recovery cycle would be created by adding `account`'s key rotation capability. |
   * | `Errors::ALREADY_PUBLISHED` | `RecoveryAddress::ERECOVERY_ADDRESS`                       | A `RecoveryAddress::RecoveryAddress` resource has already been published under `account`.     |
   *
   * # Related Scripts
   * * `Script::add_recovery_rotation_capability`
   * * `Script::rotate_authentication_key_with_recovery_address`
   */
  static encodeCreateRecoveryAddressScriptFunction(): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    const args: Seq<bytes> = [];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("AccountAdministrationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("create_recovery_address");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Creates a Validator account. This transaction can only be sent by the Diem
   * Root account.
   *
   * # Technical Description
   * Creates an account with a Validator role at `new_account_address`, with authentication key
   * `auth_key_prefix` | `new_account_address`. It publishes a
   * `ValidatorConfig::ValidatorConfig` resource with empty `config`, and
   * `operator_account` fields. The `human_name` field of the
   * `ValidatorConfig::ValidatorConfig` is set to the passed in `human_name`.
   * This script does not add the validator to the validator set or the system,
   * but only creates the account.
   * Authentication keys, prefixes, and how to construct them from an ed25519 public key are described
   * [here](https://developers.diem.com/docs/core/accounts/#addresses-authentication-keys-and-cryptographic-keys).
   *
   * # Events
   * Successful execution will emit:
   * * A `DiemAccount::CreateAccountEvent` with the `created` field being `new_account_address`,
   * and the `rold_id` field being `Roles::VALIDATOR_ROLE_ID`. This is emitted on the
   * `DiemAccount::AccountOperationsCapability` `creation_events` handle.
   *
   * # Parameters
   * | Name                  | Type         | Description                                                                              |
   * | ------                | ------       | -------------                                                                            |
   * | `dr_account`          | `signer`     | The signer of the sending account of this transaction. Must be the Diem Root signer.     |
   * | `sliding_nonce`       | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.               |
   * | `new_account_address` | `address`    | Address of the to-be-created Validator account.                                          |
   * | `auth_key_prefix`     | `vector<u8>` | The authentication key prefix that will be used initially for the newly created account. |
   * | `human_name`          | `vector<u8>` | ASCII-encoded human name for the validator.                                              |
   *
   * # Common Abort Conditions
   * | Error Category              | Error Reason                            | Description                                                                                |
   * | ----------------            | --------------                          | -------------                                                                              |
   * | `Errors::NOT_PUBLISHED`     | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `dr_account`.                             |
   * | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |
   * | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |
   * | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |
   * | `Errors::REQUIRES_ADDRESS`  | `CoreAddresses::EDIEM_ROOT`            | The sending account is not the Diem Root account.                                         |
   * | `Errors::REQUIRES_ROLE`     | `Roles::EDIEM_ROOT`                    | The sending account is not the Diem Root account.                                         |
   * | `Errors::ALREADY_PUBLISHED` | `Roles::EROLE_ID`                       | The `new_account_address` address is already taken.                                        |
   *
   * # Related Scripts
   * * `AccountCreationScripts::create_validator_operator_account`
   * * `ValidatorAdministrationScripts::add_validator_and_reconfigure`
   * * `ValidatorAdministrationScripts::register_validator_config`
   * * `ValidatorAdministrationScripts::remove_validator_and_reconfigure`
   * * `ValidatorAdministrationScripts::set_validator_operator`
   * * `ValidatorAdministrationScripts::set_validator_operator_with_nonce_admin`
   * * `ValidatorAdministrationScripts::set_validator_config_and_reconfigure`
   */
  static encodeCreateValidatorAccountScriptFunction(sliding_nonce: bigint, new_account_address: DiemTypes.AccountAddress, auth_key_prefix: Uint8Array, human_name: Uint8Array): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeU64(sliding_nonce);
    const sliding_nonce_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    new_account_address.serialize(serializer);
    const new_account_address_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(auth_key_prefix);
    const auth_key_prefix_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(human_name);
    const human_name_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [sliding_nonce_serialized, new_account_address_serialized, auth_key_prefix_serialized, human_name_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("AccountCreationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("create_validator_account");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Creates a Validator Operator account. This transaction can only be sent by the Diem
   * Root account.
   *
   * # Technical Description
   * Creates an account with a Validator Operator role at `new_account_address`, with authentication key
   * `auth_key_prefix` | `new_account_address`. It publishes a
   * `ValidatorOperatorConfig::ValidatorOperatorConfig` resource with the specified `human_name`.
   * This script does not assign the validator operator to any validator accounts but only creates the account.
   * Authentication key prefixes, and how to construct them from an ed25519 public key are described
   * [here](https://developers.diem.com/docs/core/accounts/#addresses-authentication-keys-and-cryptographic-keys).
   *
   * # Events
   * Successful execution will emit:
   * * A `DiemAccount::CreateAccountEvent` with the `created` field being `new_account_address`,
   * and the `rold_id` field being `Roles::VALIDATOR_OPERATOR_ROLE_ID`. This is emitted on the
   * `DiemAccount::AccountOperationsCapability` `creation_events` handle.
   *
   * # Parameters
   * | Name                  | Type         | Description                                                                              |
   * | ------                | ------       | -------------                                                                            |
   * | `dr_account`          | `signer`     | The signer of the sending account of this transaction. Must be the Diem Root signer.     |
   * | `sliding_nonce`       | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.               |
   * | `new_account_address` | `address`    | Address of the to-be-created Validator account.                                          |
   * | `auth_key_prefix`     | `vector<u8>` | The authentication key prefix that will be used initially for the newly created account. |
   * | `human_name`          | `vector<u8>` | ASCII-encoded human name for the validator.                                              |
   *
   * # Common Abort Conditions
   * | Error Category              | Error Reason                            | Description                                                                                |
   * | ----------------            | --------------                          | -------------                                                                              |
   * | `Errors::NOT_PUBLISHED`     | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `dr_account`.                             |
   * | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |
   * | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |
   * | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |
   * | `Errors::REQUIRES_ADDRESS`  | `CoreAddresses::EDIEM_ROOT`            | The sending account is not the Diem Root account.                                         |
   * | `Errors::REQUIRES_ROLE`     | `Roles::EDIEM_ROOT`                    | The sending account is not the Diem Root account.                                         |
   * | `Errors::ALREADY_PUBLISHED` | `Roles::EROLE_ID`                       | The `new_account_address` address is already taken.                                        |
   *
   * # Related Scripts
   * * `AccountCreationScripts::create_validator_account`
   * * `ValidatorAdministrationScripts::add_validator_and_reconfigure`
   * * `ValidatorAdministrationScripts::register_validator_config`
   * * `ValidatorAdministrationScripts::remove_validator_and_reconfigure`
   * * `ValidatorAdministrationScripts::set_validator_operator`
   * * `ValidatorAdministrationScripts::set_validator_operator_with_nonce_admin`
   * * `ValidatorAdministrationScripts::set_validator_config_and_reconfigure`
   */
  static encodeCreateValidatorOperatorAccountScriptFunction(sliding_nonce: bigint, new_account_address: DiemTypes.AccountAddress, auth_key_prefix: Uint8Array, human_name: Uint8Array): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeU64(sliding_nonce);
    const sliding_nonce_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    new_account_address.serialize(serializer);
    const new_account_address_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(auth_key_prefix);
    const auth_key_prefix_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(human_name);
    const human_name_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [sliding_nonce_serialized, new_account_address_serialized, auth_key_prefix_serialized, human_name_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("AccountCreationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("create_validator_operator_account");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Publishes a `VASPDomain::VASPDomains` resource under a parent VASP account.
   * The sending account must be a parent VASP account.
   *
   * # Technical Description
   * Publishes a `VASPDomain::VASPDomains` resource under `account`.
   * The The `VASPDomain::VASPDomains` resource's `domains` field is a vector
   * of VASPDomain, and will be empty on at the end of processing this transaction.
   *
   * # Parameters
   * | Name      | Type     | Description                                           |
   * | ------    | ------   | -------------                                         |
   * | `account` | `signer` | The signer of the sending account of the transaction. |
   *
   * # Common Abort Conditions
   * | Error Category              | Error Reason              | Description                                                                    |
   * | ----------------            | --------------            | -------------                                                                  |
   * | `Errors::ALREADY_PUBLISHED` | `VASPDomain::EVASP_DOMAINS` | A `VASPDomain::VASPDomains` resource has already been published under `account`. |
   * | `Errors::REQUIRES_ROLE`     | `Roles::EPARENT_VASP`     | The sending `account` was not a parent VASP account.                           |
   */
  static encodeCreateVaspDomainsScriptFunction(): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    const args: Seq<bytes> = [];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("AccountAdministrationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("create_vasp_domains");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeExchangeCoinAToCoinBScriptFunction(swapper: DiemTypes.AccountAddress, exchange: DiemTypes.AccountAddress, coin_a_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    swapper.serialize(serializer);
    const swapper_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    exchange.serialize(serializer);
    const exchange_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_a_amt);
    const coin_a_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [swapper_serialized, exchange_serialized, coin_a_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeAB"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("exchange_coinA_to_coinB");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeExchangeCoinAToCoinCScriptFunction(swapper: DiemTypes.AccountAddress, exchange: DiemTypes.AccountAddress, coin_a_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    swapper.serialize(serializer);
    const swapper_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    exchange.serialize(serializer);
    const exchange_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_a_amt);
    const coin_a_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [swapper_serialized, exchange_serialized, coin_a_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeAC"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("exchange_coinA_to_coinC");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeExchangeCoinAToCoinDScriptFunction(swapper: DiemTypes.AccountAddress, exchange: DiemTypes.AccountAddress, coin_a_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    swapper.serialize(serializer);
    const swapper_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    exchange.serialize(serializer);
    const exchange_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_a_amt);
    const coin_a_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [swapper_serialized, exchange_serialized, coin_a_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeAD"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("exchange_coinA_to_coinD");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeExchangeCoinBToCoinAScriptFunction(swapper: DiemTypes.AccountAddress, exchange: DiemTypes.AccountAddress, coin_b_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    swapper.serialize(serializer);
    const swapper_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    exchange.serialize(serializer);
    const exchange_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_b_amt);
    const coin_b_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [swapper_serialized, exchange_serialized, coin_b_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeAB"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("exchange_coinB_to_coinA");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeExchangeCoinBToCoinCScriptFunction(swapper: DiemTypes.AccountAddress, exchange: DiemTypes.AccountAddress, coin_b_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    swapper.serialize(serializer);
    const swapper_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    exchange.serialize(serializer);
    const exchange_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_b_amt);
    const coin_b_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [swapper_serialized, exchange_serialized, coin_b_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeBC"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("exchange_coinB_to_coinC");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeExchangeCoinBToCoinDScriptFunction(swapper: DiemTypes.AccountAddress, exchange: DiemTypes.AccountAddress, coin_b_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    swapper.serialize(serializer);
    const swapper_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    exchange.serialize(serializer);
    const exchange_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_b_amt);
    const coin_b_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [swapper_serialized, exchange_serialized, coin_b_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeBD"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("exchange_coinB_to_coinD");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeExchangeCoinCToCoinAScriptFunction(swapper: DiemTypes.AccountAddress, exchange: DiemTypes.AccountAddress, coin_c_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    swapper.serialize(serializer);
    const swapper_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    exchange.serialize(serializer);
    const exchange_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_c_amt);
    const coin_c_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [swapper_serialized, exchange_serialized, coin_c_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeAC"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("exchange_coinC_to_coinA");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeExchangeCoinCToCoinBScriptFunction(swapper: DiemTypes.AccountAddress, exchange: DiemTypes.AccountAddress, coin_c_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    swapper.serialize(serializer);
    const swapper_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    exchange.serialize(serializer);
    const exchange_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_c_amt);
    const coin_c_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [swapper_serialized, exchange_serialized, coin_c_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeBC"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("exchange_coinC_to_coinB");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeExchangeCoinCToCoinDScriptFunction(swapper: DiemTypes.AccountAddress, exchange: DiemTypes.AccountAddress, coin_c_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    swapper.serialize(serializer);
    const swapper_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    exchange.serialize(serializer);
    const exchange_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_c_amt);
    const coin_c_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [swapper_serialized, exchange_serialized, coin_c_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeCD"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("exchange_coinC_to_coinD");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeExchangeCoinDToCoinAScriptFunction(swapper: DiemTypes.AccountAddress, exchange: DiemTypes.AccountAddress, coin_d_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    swapper.serialize(serializer);
    const swapper_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    exchange.serialize(serializer);
    const exchange_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_d_amt);
    const coin_d_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [swapper_serialized, exchange_serialized, coin_d_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeAD"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("exchange_coinD_to_coinA");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeExchangeCoinDToCoinBScriptFunction(swapper: DiemTypes.AccountAddress, exchange: DiemTypes.AccountAddress, coin_d_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    swapper.serialize(serializer);
    const swapper_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    exchange.serialize(serializer);
    const exchange_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_d_amt);
    const coin_d_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [swapper_serialized, exchange_serialized, coin_d_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeBD"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("exchange_coinD_to_coinB");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeExchangeCoinDToCoinCScriptFunction(swapper: DiemTypes.AccountAddress, exchange: DiemTypes.AccountAddress, coin_d_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    swapper.serialize(serializer);
    const swapper_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    exchange.serialize(serializer);
    const exchange_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_d_amt);
    const coin_d_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [swapper_serialized, exchange_serialized, coin_d_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeCD"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("exchange_coinD_to_coinC");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Shifts the window held by the CRSN resource published under `account`
   * by `shift_amount`. This will expire all unused slots in the CRSN at the
   * time of processing that are less than `shift_amount`. The exact
   * semantics are defined in DIP-168.
   *
   * # Technical Description
   * This shifts the slots in the published `CRSN::CRSN` resource under
   * `account` by `shift_amount`, and increments the CRSN's `min_nonce` field
   * by `shift_amount` as well. After this, it will shift the window over
   * any set bits. It is important to note that the sequence nonce of the
   * sending transaction must still lie within the range of the window in
   * order for this transaction to be processed successfully.
   *
   * # Parameters
   * | Name           | Type     | Description                                                 |
   * | ------         | ------   | -------------                                               |
   * | `account`      | `signer` | The signer of the sending account of the transaction.       |
   * | `shift_amount` | `u64`    | The amount to shift the window in the CRSN under `account`. |
   *
   * # Common Abort Conditions
   * | Error Category          | Error Reason     | Description                                               |
   * | ----------------        | --------------   | -------------                                             |
   * | `Errors::INVALID_STATE` | `CRSN::ENO_CRSN` | A `CRSN::CRSN` resource is not published under `account`. |
   */
  static encodeForceExpireScriptFunction(shift_amount: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeU64(shift_amount);
    const shift_amount_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [shift_amount_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("AccountAdministrationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("force_expire");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Freezes the account at `address`. The sending account of this transaction
   * must be the Treasury Compliance account. The account being frozen cannot be
   * the Diem Root or Treasury Compliance account. After the successful
   * execution of this transaction no transactions may be sent from the frozen
   * account, and the frozen account may not send or receive coins.
   *
   * # Technical Description
   * Sets the `AccountFreezing::FreezingBit` to `true` and emits a
   * `AccountFreezing::FreezeAccountEvent`. The transaction sender must be the
   * Treasury Compliance account, but the account at `to_freeze_account` must
   * not be either `0xA550C18` (the Diem Root address), or `0xB1E55ED` (the
   * Treasury Compliance address). Note that this is a per-account property
   * e.g., freezing a Parent VASP will not effect the status any of its child
   * accounts and vice versa.
   *

   * # Events
   * Successful execution of this transaction will emit a `AccountFreezing::FreezeAccountEvent` on
   * the `freeze_event_handle` held in the `AccountFreezing::FreezeEventsHolder` resource published
   * under `0xA550C18` with the `frozen_address` being the `to_freeze_account`.
   *
   * # Parameters
   * | Name                | Type      | Description                                                                                     |
   * | ------              | ------    | -------------                                                                                   |
   * | `tc_account`        | `signer`  | The signer of the sending account of this transaction. Must be the Treasury Compliance account. |
   * | `sliding_nonce`     | `u64`     | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                      |
   * | `to_freeze_account` | `address` | The account address to be frozen.                                                               |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                                 | Description                                                                                |
   * | ----------------           | --------------                               | -------------                                                                              |
   * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`               | A `SlidingNonce` resource is not published under `tc_account`.                             |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`               | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`               | The `sliding_nonce` is too far in the future.                                              |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`      | The `sliding_nonce` has been previously recorded.                                          |
   * | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE`        | The sending account is not the Treasury Compliance account.                                |
   * | `Errors::REQUIRES_ROLE`    | `Roles::ETREASURY_COMPLIANCE`                | The sending account is not the Treasury Compliance account.                                |
   * | `Errors::INVALID_ARGUMENT` | `AccountFreezing::ECANNOT_FREEZE_TC`         | `to_freeze_account` was the Treasury Compliance account (`0xB1E55ED`).                     |
   * | `Errors::INVALID_ARGUMENT` | `AccountFreezing::ECANNOT_FREEZE_DIEM_ROOT` | `to_freeze_account` was the Diem Root account (`0xA550C18`).                              |
   *
   * # Related Scripts
   * * `TreasuryComplianceScripts::unfreeze_account`
   */
  static encodeFreezeAccountScriptFunction(sliding_nonce: bigint, to_freeze_account: DiemTypes.AccountAddress): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeU64(sliding_nonce);
    const sliding_nonce_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    to_freeze_account.serialize(serializer);
    const to_freeze_account_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [sliding_nonce_serialized, to_freeze_account_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("TreasuryComplianceScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("freeze_account");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Initializes the Diem consensus config that is stored on-chain.  This
   * transaction can only be sent from the Diem Root account.
   *
   * # Technical Description
   * Initializes the `DiemConsensusConfig` on-chain config to empty and allows future updates from DiemRoot via
   * `update_diem_consensus_config`. This doesn't emit a `DiemConfig::NewEpochEvent`.
   *
   * # Parameters
   * | Name            | Type      | Description                                                                |
   * | ------          | ------    | -------------                                                              |
   * | `account`       | `signer` | Signer of the sending account. Must be the Diem Root account.               |
   * | `sliding_nonce` | `u64`     | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction. |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                                  | Description                                                                                |
   * | ----------------           | --------------                                | -------------                                                                              |
   * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                | A `SlidingNonce` resource is not published under `account`.                                |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`                | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`                | The `sliding_nonce` is too far in the future.                                              |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`       | The `sliding_nonce` has been previously recorded.                                          |
   * | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::EDIEM_ROOT`                   | `account` is not the Diem Root account.                                                    |
   */
  static encodeInitializeDiemConsensusConfigScriptFunction(sliding_nonce: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeU64(sliding_nonce);
    const sliding_nonce_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [sliding_nonce_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("SystemAdministrationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("initialize_diem_consensus_config");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeInitializeExchangeScriptFunction(initializer: DiemTypes.AccountAddress, comm_rate: bigint, coin_a_amt: bigint, coin_b_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    initializer.serialize(serializer);
    const initializer_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(comm_rate);
    const comm_rate_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_a_amt);
    const coin_a_amt_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_b_amt);
    const coin_b_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [initializer_serialized, comm_rate_serialized, coin_a_amt_serialized, coin_b_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeAB"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("initialize_exchange");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeInitializeExchangeScriptFunction(initializer: DiemTypes.AccountAddress, comm_rate: bigint, coin_b_amt: bigint, coin_c_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    initializer.serialize(serializer);
    const initializer_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(comm_rate);
    const comm_rate_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_b_amt);
    const coin_b_amt_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_c_amt);
    const coin_c_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [initializer_serialized, comm_rate_serialized, coin_b_amt_serialized, coin_c_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeBC"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("initialize_exchange");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeInitializeExchangeScriptFunction(initializer: DiemTypes.AccountAddress, comm_rate: bigint, coin_a_amt: bigint, coin_c_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    initializer.serialize(serializer);
    const initializer_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(comm_rate);
    const comm_rate_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_a_amt);
    const coin_a_amt_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_c_amt);
    const coin_c_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [initializer_serialized, comm_rate_serialized, coin_a_amt_serialized, coin_c_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeAC"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("initialize_exchange");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeInitializeExchangeScriptFunction(initializer: DiemTypes.AccountAddress, comm_rate: bigint, coin_a_amt: bigint, coin_d_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    initializer.serialize(serializer);
    const initializer_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(comm_rate);
    const comm_rate_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_a_amt);
    const coin_a_amt_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_d_amt);
    const coin_d_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [initializer_serialized, comm_rate_serialized, coin_a_amt_serialized, coin_d_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeAD"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("initialize_exchange");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeInitializeExchangeScriptFunction(initializer: DiemTypes.AccountAddress, comm_rate: bigint, coin_b_amt: bigint, coin_d_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    initializer.serialize(serializer);
    const initializer_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(comm_rate);
    const comm_rate_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_b_amt);
    const coin_b_amt_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_d_amt);
    const coin_d_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [initializer_serialized, comm_rate_serialized, coin_b_amt_serialized, coin_d_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeBD"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("initialize_exchange");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeInitializeExchangeScriptFunction(initializer: DiemTypes.AccountAddress, comm_rate: bigint, coin_c_amt: bigint, coin_d_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    initializer.serialize(serializer);
    const initializer_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(comm_rate);
    const comm_rate_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_c_amt);
    const coin_c_amt_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_d_amt);
    const coin_d_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [initializer_serialized, comm_rate_serialized, coin_c_amt_serialized, coin_d_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeCD"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("initialize_exchange");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeInitializeLpV8RotaryScriptFunction(): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    const args: Seq<bytes> = [];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("LP_V8_Rotary"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("initialize_lp_v8_rotary");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeInitializeRotaryScriptFunction(): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    const args: Seq<bytes> = [];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("Rotary"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("initialize_rotary");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeInitializeV8ScriptFunction(): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    const args: Seq<bytes> = [];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("V8"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("initialize_v8");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeMintCoinAScriptFunction(amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeU64(amt);
    const amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("CoinA"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("mint_coin_a");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeMintCoinBScriptFunction(amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeU64(amt);
    const amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("CoinB"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("mint_coin_b");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeMintCoinCScriptFunction(amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeU64(amt);
    const amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("CoinC"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("mint_coin_c");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeMintCoinDScriptFunction(amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeU64(amt);
    const amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("CoinD"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("mint_coin_d");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Publishes a CRSN resource under `account` and opts the account in to
   * concurrent transaction processing. Upon successful execution of this
   * script, all further transactions sent from this account will be ordered
   * and processed according to DIP-168.
   *
   * # Technical Description
   * This publishes a `CRSN::CRSN` resource under `account` with `crsn_size`
   * number of slots. All slots will be initialized to the empty (unused)
   * state, and the CRSN resource's `min_nonce` field will be set to the transaction's
   * sequence number + 1.
   *
   * # Parameters
   * | Name        | Type     | Description                                           |
   * | ------      | ------   | -------------                                         |
   * | `account`   | `signer` | The signer of the sending account of the transaction. |
   * | `crsn_size` | `u64`    | The the number of slots the published CRSN will have. |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason            | Description                                                    |
   * | ----------------           | --------------          | -------------                                                  |
   * | `Errors::INVALID_STATE`    | `CRSN::EHAS_CRSN`       | A `CRSN::CRSN` resource was already published under `account`. |
   * | `Errors::INVALID_ARGUMENT` | `CRSN::EZERO_SIZE_CRSN` | The `crsn_size` was zero.                                      |
   */
  static encodeOptInToCrsnScriptFunction(crsn_size: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeU64(crsn_size);
    const crsn_size_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [crsn_size_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("AccountAdministrationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("opt_in_to_crsn");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Transfers a given number of coins in a specified currency from one account to another by multi-agent transaction.
   * Transfers over a specified amount defined on-chain that are between two different VASPs, or
   * other accounts that have opted-in will be subject to on-chain checks to ensure the receiver has
   * agreed to receive the coins.  This transaction can be sent by any account that can hold a
   * balance, and to any account that can hold a balance. Both accounts must hold balances in the
   * currency being transacted.
   *
   * # Technical Description
   *
   * Transfers `amount` coins of type `Currency` from `payer` to `payee` with (optional) associated
   * `metadata`.
   * Dual attestation is not applied to this script as payee is also a signer of the transaction.
   * Standardized `metadata` BCS format can be found in `diem_types::transaction::metadata::Metadata`.
   *
   * # Events
   * Successful execution of this script emits two events:
   * * A `DiemAccount::SentPaymentEvent` on `payer`'s `DiemAccount::DiemAccount` `sent_events` handle; and
   * * A `DiemAccount::ReceivedPaymentEvent` on `payee`'s `DiemAccount::DiemAccount` `received_events` handle.
   *
   * # Parameters
   * | Name                 | Type         | Description                                                                                                                  |
   * | ------               | ------       | -------------                                                                                                                |
   * | `Currency`           | Type         | The Move type for the `Currency` being sent in this transaction. `Currency` must be an already-registered currency on-chain. |
   * | `payer`              | `signer`     | The signer of the sending account that coins are being transferred from.                                                     |
   * | `payee`              | `signer`     | The signer of the receiving account that the coins are being transferred to.                                                 |
   * | `metadata`           | `vector<u8>` | Optional metadata about this payment.                                                                                        |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                                     | Description                                                                                                                         |
   * | ----------------           | --------------                                   | -------------                                                                                                                       |
   * | `Errors::NOT_PUBLISHED`    | `DiemAccount::EPAYER_DOESNT_HOLD_CURRENCY`       | `payer` doesn't hold a balance in `Currency`.                                                                                       |
   * | `Errors::LIMIT_EXCEEDED`   | `DiemAccount::EINSUFFICIENT_BALANCE`             | `amount` is greater than `payer`'s balance in `Currency`.                                                                           |
   * | `Errors::INVALID_ARGUMENT` | `DiemAccount::ECOIN_DEPOSIT_IS_ZERO`             | `amount` is zero.                                                                                                                   |
   * | `Errors::NOT_PUBLISHED`    | `DiemAccount::EPAYEE_DOES_NOT_EXIST`             | No account exists at the `payee` address.                                                                                           |
   * | `Errors::INVALID_ARGUMENT` | `DiemAccount::EPAYEE_CANT_ACCEPT_CURRENCY_TYPE`  | An account exists at `payee`, but it does not accept payments in `Currency`.                                                        |
   * | `Errors::INVALID_STATE`    | `AccountFreezing::EACCOUNT_FROZEN`               | The `payee` account is frozen.                                                                                                      |
   * | `Errors::LIMIT_EXCEEDED`   | `DiemAccount::EWITHDRAWAL_EXCEEDS_LIMITS`        | `payer` has exceeded its daily withdrawal limits for the backing coins of XDX.                                                      |
   * | `Errors::LIMIT_EXCEEDED`   | `DiemAccount::EDEPOSIT_EXCEEDS_LIMITS`           | `payee` has exceeded its daily deposit limits for XDX.                                                                              |
   *
   * # Related Scripts
   * * `AccountCreationScripts::create_child_vasp_account`
   * * `AccountCreationScripts::create_parent_vasp_account`
   * * `AccountAdministrationScripts::add_currency_to_account`
   * * `PaymentScripts::peer_to_peer_with_metadata`
   */
  static encodePeerToPeerBySignersScriptFunction(currency: DiemTypes.TypeTag, amount: bigint, metadata: Uint8Array): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [currency];
    var serializer = new BcsSerializer();
    serializer.serializeU64(amount);
    const amount_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(metadata);
    const metadata_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [amount_serialized, metadata_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("PaymentScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("peer_to_peer_by_signers");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Transfers a given number of coins in a specified currency from one account to another.
   * Transfers over a specified amount defined on-chain that are between two different VASPs, or
   * other accounts that have opted-in will be subject to on-chain checks to ensure the receiver has
   * agreed to receive the coins.  This transaction can be sent by any account that can hold a
   * balance, and to any account that can hold a balance. Both accounts must hold balances in the
   * currency being transacted.
   *
   * # Technical Description
   *
   * Transfers `amount` coins of type `Currency` from `payer` to `payee` with (optional) associated
   * `metadata` and an (optional) `metadata_signature` on the message of the form
   * `metadata` | `Signer::address_of(payer)` | `amount` | `DualAttestation::DOMAIN_SEPARATOR`, that
   * has been signed by the `payee`'s private key associated with the `compliance_public_key` held in
   * the `payee`'s `DualAttestation::Credential`. Both the `Signer::address_of(payer)` and `amount` fields
   * in the `metadata_signature` must be BCS-encoded bytes, and `|` denotes concatenation.
   * The `metadata` and `metadata_signature` parameters are only required if `amount` >=
   * `DualAttestation::get_cur_microdiem_limit` XDX and `payer` and `payee` are distinct VASPs.
   * However, a transaction sender can opt in to dual attestation even when it is not required
   * (e.g., a DesignatedDealer -> VASP payment) by providing a non-empty `metadata_signature`.
   * Standardized `metadata` BCS format can be found in `diem_types::transaction::metadata::Metadata`.
   *
   * # Events
   * Successful execution of this script emits two events:
   * * A `DiemAccount::SentPaymentEvent` on `payer`'s `DiemAccount::DiemAccount` `sent_events` handle; and
   * * A `DiemAccount::ReceivedPaymentEvent` on `payee`'s `DiemAccount::DiemAccount` `received_events` handle.
   *
   * # Parameters
   * | Name                 | Type         | Description                                                                                                                  |
   * | ------               | ------       | -------------                                                                                                                |
   * | `Currency`           | Type         | The Move type for the `Currency` being sent in this transaction. `Currency` must be an already-registered currency on-chain. |
   * | `payer`              | `signer`     | The signer of the sending account that coins are being transferred from.                                                     |
   * | `payee`              | `address`    | The address of the account the coins are being transferred to.                                                               |
   * | `metadata`           | `vector<u8>` | Optional metadata about this payment.                                                                                        |
   * | `metadata_signature` | `vector<u8>` | Optional signature over `metadata` and payment information. See                                                              |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                                     | Description                                                                                                                         |
   * | ----------------           | --------------                                   | -------------                                                                                                                       |
   * | `Errors::NOT_PUBLISHED`    | `DiemAccount::EPAYER_DOESNT_HOLD_CURRENCY`       | `payer` doesn't hold a balance in `Currency`.                                                                                       |
   * | `Errors::LIMIT_EXCEEDED`   | `DiemAccount::EINSUFFICIENT_BALANCE`             | `amount` is greater than `payer`'s balance in `Currency`.                                                                           |
   * | `Errors::INVALID_ARGUMENT` | `DiemAccount::ECOIN_DEPOSIT_IS_ZERO`             | `amount` is zero.                                                                                                                   |
   * | `Errors::NOT_PUBLISHED`    | `DiemAccount::EPAYEE_DOES_NOT_EXIST`             | No account exists at the `payee` address.                                                                                           |
   * | `Errors::INVALID_ARGUMENT` | `DiemAccount::EPAYEE_CANT_ACCEPT_CURRENCY_TYPE`  | An account exists at `payee`, but it does not accept payments in `Currency`.                                                        |
   * | `Errors::INVALID_STATE`    | `AccountFreezing::EACCOUNT_FROZEN`               | The `payee` account is frozen.                                                                                                      |
   * | `Errors::INVALID_ARGUMENT` | `DualAttestation::EMALFORMED_METADATA_SIGNATURE` | `metadata_signature` is not 64 bytes.                                                                                               |
   * | `Errors::INVALID_ARGUMENT` | `DualAttestation::EINVALID_METADATA_SIGNATURE`   | `metadata_signature` does not verify on the against the `payee'`s `DualAttestation::Credential` `compliance_public_key` public key. |
   * | `Errors::LIMIT_EXCEEDED`   | `DiemAccount::EWITHDRAWAL_EXCEEDS_LIMITS`        | `payer` has exceeded its daily withdrawal limits for the backing coins of XDX.                                                      |
   * | `Errors::LIMIT_EXCEEDED`   | `DiemAccount::EDEPOSIT_EXCEEDS_LIMITS`           | `payee` has exceeded its daily deposit limits for XDX.                                                                              |
   *
   * # Related Scripts
   * * `AccountCreationScripts::create_child_vasp_account`
   * * `AccountCreationScripts::create_parent_vasp_account`
   * * `AccountAdministrationScripts::add_currency_to_account`
   * * `PaymentScripts::peer_to_peer_by_signers`
   */
  static encodePeerToPeerWithMetadataScriptFunction(currency: DiemTypes.TypeTag, payee: DiemTypes.AccountAddress, amount: bigint, metadata: Uint8Array, metadata_signature: Uint8Array): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [currency];
    var serializer = new BcsSerializer();
    payee.serialize(serializer);
    const payee_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(amount);
    const amount_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(metadata);
    const metadata_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(metadata_signature);
    const metadata_signature_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [payee_serialized, amount_serialized, metadata_serialized, metadata_signature_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("PaymentScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("peer_to_peer_with_metadata");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Moves a specified number of coins in a given currency from the account's
   * balance to its preburn area after which the coins may be burned. This
   * transaction may be sent by any account that holds a balance and preburn area
   * in the specified currency.
   *
   * # Technical Description
   * Moves the specified `amount` of coins in `Token` currency from the sending `account`'s
   * `DiemAccount::Balance<Token>` to the `Diem::Preburn<Token>` published under the same
   * `account`. `account` must have both of these resources published under it at the start of this
   * transaction in order for it to execute successfully.
   *
   * # Events
   * Successful execution of this script emits two events:
   * * `DiemAccount::SentPaymentEvent ` on `account`'s `DiemAccount::DiemAccount` `sent_events`
   * handle with the `payee` and `payer` fields being `account`'s address; and
   * * A `Diem::PreburnEvent` with `Token`'s currency code on the
   * `Diem::CurrencyInfo<Token`'s `preburn_events` handle for `Token` and with
   * `preburn_address` set to `account`'s address.
   *
   * # Parameters
   * | Name      | Type     | Description                                                                                                                      |
   * | ------    | ------   | -------------                                                                                                                    |
   * | `Token`   | Type     | The Move type for the `Token` currency being moved to the preburn area. `Token` must be an already-registered currency on-chain. |
   * | `account` | `signer` | The signer of the sending account.                                                                                               |
   * | `amount`  | `u64`    | The amount in `Token` to be moved to the preburn area.                                                                           |
   *
   * # Common Abort Conditions
   * | Error Category           | Error Reason                                             | Description                                                                             |
   * | ----------------         | --------------                                           | -------------                                                                           |
   * | `Errors::NOT_PUBLISHED`  | `Diem::ECURRENCY_INFO`                                  | The `Token` is not a registered currency on-chain.                                      |
   * | `Errors::INVALID_STATE`  | `DiemAccount::EWITHDRAWAL_CAPABILITY_ALREADY_EXTRACTED` | The withdrawal capability for `account` has already been extracted.                     |
   * | `Errors::LIMIT_EXCEEDED` | `DiemAccount::EINSUFFICIENT_BALANCE`                    | `amount` is greater than `payer`'s balance in `Token`.                                  |
   * | `Errors::NOT_PUBLISHED`  | `DiemAccount::EPAYER_DOESNT_HOLD_CURRENCY`              | `account` doesn't hold a balance in `Token`.                                            |
   * | `Errors::NOT_PUBLISHED`  | `Diem::EPREBURN`                                        | `account` doesn't have a `Diem::Preburn<Token>` resource published under it.           |
   * | `Errors::INVALID_STATE`  | `Diem::EPREBURN_OCCUPIED`                               | The `value` field in the `Diem::Preburn<Token>` resource under the sender is non-zero. |
   * | `Errors::NOT_PUBLISHED`  | `Roles::EROLE_ID`                                        | The `account` did not have a role assigned to it.                                       |
   * | `Errors::REQUIRES_ROLE`  | `Roles::EDESIGNATED_DEALER`                              | The `account` did not have the role of DesignatedDealer.                                |
   *
   * # Related Scripts
   * * `TreasuryComplianceScripts::cancel_burn_with_amount`
   * * `TreasuryComplianceScripts::burn_with_amount`
   * * `TreasuryComplianceScripts::burn_txn_fees`
   */
  static encodePreburnScriptFunction(token: DiemTypes.TypeTag, amount: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [token];
    var serializer = new BcsSerializer();
    serializer.serializeU64(amount);
    const amount_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [amount_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("TreasuryComplianceScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("preburn");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Rotates the authentication key of the sending account to the newly-specified ed25519 public key and
   * publishes a new shared authentication key derived from that public key under the sender's account.
   * Any account can send this transaction.
   *
   * # Technical Description
   * Rotates the authentication key of the sending account to the
   * [authentication key derived from `public_key`](https://developers.diem.com/docs/core/accounts/#addresses-authentication-keys-and-cryptographic-keys)
   * and publishes a `SharedEd25519PublicKey::SharedEd25519PublicKey` resource
   * containing the 32-byte ed25519 `public_key` and the `DiemAccount::KeyRotationCapability` for
   * `account` under `account`.
   *
   * # Parameters
   * | Name         | Type         | Description                                                                                        |
   * | ------       | ------       | -------------                                                                                      |
   * | `account`    | `signer`     | The signer of the sending account of the transaction.                                              |
   * | `public_key` | `vector<u8>` | A valid 32-byte Ed25519 public key for `account`'s authentication key to be rotated to and stored. |
   *
   * # Common Abort Conditions
   * | Error Category              | Error Reason                                               | Description                                                                                         |
   * | ----------------            | --------------                                             | -------------                                                                                       |
   * | `Errors::INVALID_STATE`     | `DiemAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` | `account` has already delegated/extracted its `DiemAccount::KeyRotationCapability` resource.       |
   * | `Errors::ALREADY_PUBLISHED` | `SharedEd25519PublicKey::ESHARED_KEY`                      | The `SharedEd25519PublicKey::SharedEd25519PublicKey` resource is already published under `account`. |
   * | `Errors::INVALID_ARGUMENT`  | `SharedEd25519PublicKey::EMALFORMED_PUBLIC_KEY`            | `public_key` is an invalid ed25519 public key.                                                      |
   *
   * # Related Scripts
   * * `AccountAdministrationScripts::rotate_shared_ed25519_public_key`
   */
  static encodePublishSharedEd25519PublicKeyScriptFunction(public_key: Uint8Array): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeBytes(public_key);
    const public_key_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [public_key_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("AccountAdministrationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("publish_shared_ed25519_public_key");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Updates a validator's configuration. This does not reconfigure the system and will not update
   * the configuration in the validator set that is seen by other validators in the network. Can
   * only be successfully sent by a Validator Operator account that is already registered with a
   * validator.
   *
   * # Technical Description
   * This updates the fields with corresponding names held in the `ValidatorConfig::ValidatorConfig`
   * config resource held under `validator_account`. It does not emit a `DiemConfig::NewEpochEvent`
   * so the copy of this config held in the validator set will not be updated, and the changes are
   * only "locally" under the `validator_account` account address.
   *
   * # Parameters
   * | Name                          | Type         | Description                                                                                                        |
   * | ------                        | ------       | -------------                                                                                                      |
   * | `validator_operator_account`  | `signer`     | Signer of the sending account. Must be the registered validator operator for the validator at `validator_address`. |
   * | `validator_account`           | `address`    | The address of the validator's `ValidatorConfig::ValidatorConfig` resource being updated.                          |
   * | `consensus_pubkey`            | `vector<u8>` | New Ed25519 public key to be used in the updated `ValidatorConfig::ValidatorConfig`.                               |
   * | `validator_network_addresses` | `vector<u8>` | New set of `validator_network_addresses` to be used in the updated `ValidatorConfig::ValidatorConfig`.             |
   * | `fullnode_network_addresses`  | `vector<u8>` | New set of `fullnode_network_addresses` to be used in the updated `ValidatorConfig::ValidatorConfig`.              |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                                   | Description                                                                                           |
   * | ----------------           | --------------                                 | -------------                                                                                         |
   * | `Errors::NOT_PUBLISHED`    | `ValidatorConfig::EVALIDATOR_CONFIG`           | `validator_address` does not have a `ValidatorConfig::ValidatorConfig` resource published under it.   |
   * | `Errors::INVALID_ARGUMENT` | `ValidatorConfig::EINVALID_TRANSACTION_SENDER` | `validator_operator_account` is not the registered operator for the validator at `validator_address`. |
   * | `Errors::INVALID_ARGUMENT` | `ValidatorConfig::EINVALID_CONSENSUS_KEY`      | `consensus_pubkey` is not a valid ed25519 public key.                                                 |
   *
   * # Related Scripts
   * * `AccountCreationScripts::create_validator_account`
   * * `AccountCreationScripts::create_validator_operator_account`
   * * `ValidatorAdministrationScripts::add_validator_and_reconfigure`
   * * `ValidatorAdministrationScripts::remove_validator_and_reconfigure`
   * * `ValidatorAdministrationScripts::set_validator_operator`
   * * `ValidatorAdministrationScripts::set_validator_operator_with_nonce_admin`
   * * `ValidatorAdministrationScripts::set_validator_config_and_reconfigure`
   */
  static encodeRegisterValidatorConfigScriptFunction(validator_account: DiemTypes.AccountAddress, consensus_pubkey: Uint8Array, validator_network_addresses: Uint8Array, fullnode_network_addresses: Uint8Array): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    validator_account.serialize(serializer);
    const validator_account_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(consensus_pubkey);
    const consensus_pubkey_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(validator_network_addresses);
    const validator_network_addresses_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(fullnode_network_addresses);
    const fullnode_network_addresses_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [validator_account_serialized, consensus_pubkey_serialized, validator_network_addresses_serialized, fullnode_network_addresses_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("ValidatorAdministrationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("register_validator_config");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeRemoveExchangeLiquidityScriptFunction(exchange: DiemTypes.AccountAddress, provider: DiemTypes.AccountAddress, lp_coin_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    exchange.serialize(serializer);
    const exchange_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    provider.serialize(serializer);
    const provider_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(lp_coin_amt);
    const lp_coin_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [exchange_serialized, provider_serialized, lp_coin_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeAB"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("remove_exchange_liquidity");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeRemoveExchangeLiquidityScriptFunction(exchange: DiemTypes.AccountAddress, provider: DiemTypes.AccountAddress, lp_coin_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    exchange.serialize(serializer);
    const exchange_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    provider.serialize(serializer);
    const provider_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(lp_coin_amt);
    const lp_coin_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [exchange_serialized, provider_serialized, lp_coin_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeBC"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("remove_exchange_liquidity");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeRemoveExchangeLiquidityScriptFunction(exchange: DiemTypes.AccountAddress, provider: DiemTypes.AccountAddress, lp_coin_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    exchange.serialize(serializer);
    const exchange_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    provider.serialize(serializer);
    const provider_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(lp_coin_amt);
    const lp_coin_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [exchange_serialized, provider_serialized, lp_coin_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeAC"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("remove_exchange_liquidity");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeRemoveExchangeLiquidityScriptFunction(exchange: DiemTypes.AccountAddress, provider: DiemTypes.AccountAddress, lp_coin_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    exchange.serialize(serializer);
    const exchange_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    provider.serialize(serializer);
    const provider_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(lp_coin_amt);
    const lp_coin_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [exchange_serialized, provider_serialized, lp_coin_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeAD"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("remove_exchange_liquidity");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeRemoveExchangeLiquidityScriptFunction(exchange: DiemTypes.AccountAddress, provider: DiemTypes.AccountAddress, lp_coin_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    exchange.serialize(serializer);
    const exchange_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    provider.serialize(serializer);
    const provider_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(lp_coin_amt);
    const lp_coin_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [exchange_serialized, provider_serialized, lp_coin_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeBD"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("remove_exchange_liquidity");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeRemoveExchangeLiquidityScriptFunction(exchange: DiemTypes.AccountAddress, provider: DiemTypes.AccountAddress, lp_coin_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    exchange.serialize(serializer);
    const exchange_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    provider.serialize(serializer);
    const provider_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(lp_coin_amt);
    const lp_coin_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [exchange_serialized, provider_serialized, lp_coin_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[245], [7], [78], [43], [233], [227], [134], [22], [3], [60], [42], [85], [64], [2], [7], [16]]), new DiemTypes.Identifier("ExchangeCD"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("remove_exchange_liquidity");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * This script removes a validator account from the validator set, and triggers a reconfiguration
   * of the system to remove the validator from the system. This transaction can only be
   * successfully called by the Diem Root account.
   *
   * # Technical Description
   * This script removes the account at `validator_address` from the validator set. This transaction
   * emits a `DiemConfig::NewEpochEvent` event. Once the reconfiguration triggered by this event
   * has been performed, the account at `validator_address` is no longer considered to be a
   * validator in the network. This transaction will fail if the validator at `validator_address`
   * is not in the validator set.
   *
   * # Parameters
   * | Name                | Type         | Description                                                                                                                        |
   * | ------              | ------       | -------------                                                                                                                      |
   * | `dr_account`        | `signer`     | The signer of the sending account of this transaction. Must be the Diem Root signer.                                               |
   * | `sliding_nonce`     | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                                         |
   * | `validator_name`    | `vector<u8>` | ASCII-encoded human name for the validator. Must match the human name in the `ValidatorConfig::ValidatorConfig` for the validator. |
   * | `validator_address` | `address`    | The validator account address to be removed from the validator set.                                                                |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                            | Description                                                                                     |
   * | ----------------           | --------------                          | -------------                                                                                   |
   * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `dr_account`.                                  |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not.      |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                                   |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                               |
   * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`          | The sending account is not the Diem Root account or Treasury Compliance account                |
   * | 0                          | 0                                       | The provided `validator_name` does not match the already-recorded human name for the validator. |
   * | `Errors::INVALID_ARGUMENT` | `DiemSystem::ENOT_AN_ACTIVE_VALIDATOR` | The validator to be removed is not in the validator set.                                        |
   * | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::EDIEM_ROOT`            | The sending account is not the Diem Root account.                                              |
   * | `Errors::REQUIRES_ROLE`    | `Roles::EDIEM_ROOT`                    | The sending account is not the Diem Root account.                                              |
   * | `Errors::INVALID_STATE`    | `DiemConfig::EINVALID_BLOCK_TIME`      | An invalid time value was encountered in reconfiguration. Unlikely to occur.                    |
   *
   * # Related Scripts
   * * `AccountCreationScripts::create_validator_account`
   * * `AccountCreationScripts::create_validator_operator_account`
   * * `ValidatorAdministrationScripts::register_validator_config`
   * * `ValidatorAdministrationScripts::add_validator_and_reconfigure`
   * * `ValidatorAdministrationScripts::set_validator_operator`
   * * `ValidatorAdministrationScripts::set_validator_operator_with_nonce_admin`
   * * `ValidatorAdministrationScripts::set_validator_config_and_reconfigure`
   */
  static encodeRemoveValidatorAndReconfigureScriptFunction(sliding_nonce: bigint, validator_name: Uint8Array, validator_address: DiemTypes.AccountAddress): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeU64(sliding_nonce);
    const sliding_nonce_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(validator_name);
    const validator_name_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    validator_address.serialize(serializer);
    const validator_address_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [sliding_nonce_serialized, validator_name_serialized, validator_address_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("ValidatorAdministrationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("remove_validator_and_reconfigure");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Remove a VASP domain from parent VASP account. The transaction can only be sent by
   * the Treasury Compliance account.
   *
   * # Technical Description
   * Removes a `VASPDomain::VASPDomain` from the `domains` field of the `VASPDomain::VASPDomains` resource published under
   * account with `address`.
   *
   * # Parameters
   * | Name         | Type         | Description                                                                                     |
   * | ------       | ------       | -------------                                                                                   |
   * | `tc_account` | `signer`     | The signer of the sending account of this transaction. Must be the Treasury Compliance account. |
   * | `address`    | `address`    | The `address` of parent VASP account that will update its domains.                              |
   * | `domain`     | `vector<u8>` | The domain name.                                                                                |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                             | Description                                                                                                                            |
   * | ----------------           | --------------                           | -------------                                                                                                                          |
   * | `Errors::REQUIRES_ROLE`    | `Roles::ETREASURY_COMPLIANCE`            | The sending account is not the Treasury Compliance account.                                                                            |
   * | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE`    | `tc_account` is not the Treasury Compliance account.                                                                                   |
   * | `Errors::NOT_PUBLISHED`    | `VASPDomain::EVASP_DOMAIN_MANAGER`        | The `VASPDomain::VASPDomainManager` resource is not yet published under the Treasury Compliance account.                                 |
   * | `Errors::NOT_PUBLISHED`    | `VASPDomain::EVASP_DOMAINS_NOT_PUBLISHED` | `address` does not have a `VASPDomain::VASPDomains` resource published under it.                                                         |
   * | `Errors::INVALID_ARGUMENT` | `VASPDomain::EINVALID_VASP_DOMAIN`        | The `domain` is greater in length than `VASPDomain::DOMAIN_LENGTH`.                                                                        |
   * | `Errors::INVALID_ARGUMENT` | `VASPDomain::EVASP_DOMAIN_NOT_FOUND`              | The `domain` does not exist in the list of `VASPDomain::VASPDomain`s  in the `VASPDomain::VASPDomains` resource published under `address`. |
   */
  static encodeRemoveVaspDomainScriptFunction(address: DiemTypes.AccountAddress, domain: Uint8Array): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    address.serialize(serializer);
    const address_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(domain);
    const domain_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [address_serialized, domain_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("TreasuryComplianceScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("remove_vasp_domain");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Rotates the `account`'s authentication key to the supplied new authentication key. May be sent by any account.
   *
   * # Technical Description
   * Rotate the `account`'s `DiemAccount::DiemAccount` `authentication_key`
   * field to `new_key`. `new_key` must be a valid authentication key that
   * corresponds to an ed25519 public key as described [here](https://developers.diem.com/docs/core/accounts/#addresses-authentication-keys-and-cryptographic-keys),
   * and `account` must not have previously delegated its `DiemAccount::KeyRotationCapability`.
   *
   * # Parameters
   * | Name      | Type         | Description                                       |
   * | ------    | ------       | -------------                                     |
   * | `account` | `signer`     | Signer of the sending account of the transaction. |
   * | `new_key` | `vector<u8>` | New authentication key to be used for `account`.  |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                                              | Description                                                                         |
   * | ----------------           | --------------                                            | -------------                                                                       |
   * | `Errors::INVALID_STATE`    | `DiemAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` | `account` has already delegated/extracted its `DiemAccount::KeyRotationCapability`. |
   * | `Errors::INVALID_ARGUMENT` | `DiemAccount::EMALFORMED_AUTHENTICATION_KEY`              | `new_key` was an invalid length.                                                    |
   *
   * # Related Scripts
   * * `AccountAdministrationScripts::rotate_authentication_key_with_nonce`
   * * `AccountAdministrationScripts::rotate_authentication_key_with_nonce_admin`
   * * `AccountAdministrationScripts::rotate_authentication_key_with_recovery_address`
   */
  static encodeRotateAuthenticationKeyScriptFunction(new_key: Uint8Array): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeBytes(new_key);
    const new_key_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [new_key_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("AccountAdministrationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("rotate_authentication_key");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Rotates the sender's authentication key to the supplied new authentication key. May be sent by
   * any account that has a sliding nonce resource published under it (usually this is Treasury
   * Compliance or Diem Root accounts).
   *
   * # Technical Description
   * Rotates the `account`'s `DiemAccount::DiemAccount` `authentication_key`
   * field to `new_key`. `new_key` must be a valid authentication key that
   * corresponds to an ed25519 public key as described [here](https://developers.diem.com/docs/core/accounts/#addresses-authentication-keys-and-cryptographic-keys),
   * and `account` must not have previously delegated its `DiemAccount::KeyRotationCapability`.
   *
   * # Parameters
   * | Name            | Type         | Description                                                                |
   * | ------          | ------       | -------------                                                              |
   * | `account`       | `signer`     | Signer of the sending account of the transaction.                          |
   * | `sliding_nonce` | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction. |
   * | `new_key`       | `vector<u8>` | New authentication key to be used for `account`.                           |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                                               | Description                                                                                |
   * | ----------------           | --------------                                             | -------------                                                                              |
   * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                             | A `SlidingNonce` resource is not published under `account`.                                |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`                             | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`                             | The `sliding_nonce` is too far in the future.                                              |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`                    | The `sliding_nonce` has been previously recorded.                                          |
   * | `Errors::INVALID_STATE`    | `DiemAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` | `account` has already delegated/extracted its `DiemAccount::KeyRotationCapability`.       |
   * | `Errors::INVALID_ARGUMENT` | `DiemAccount::EMALFORMED_AUTHENTICATION_KEY`              | `new_key` was an invalid length.                                                           |
   *
   * # Related Scripts
   * * `AccountAdministrationScripts::rotate_authentication_key`
   * * `AccountAdministrationScripts::rotate_authentication_key_with_nonce_admin`
   * * `AccountAdministrationScripts::rotate_authentication_key_with_recovery_address`
   */
  static encodeRotateAuthenticationKeyWithNonceScriptFunction(sliding_nonce: bigint, new_key: Uint8Array): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeU64(sliding_nonce);
    const sliding_nonce_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(new_key);
    const new_key_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [sliding_nonce_serialized, new_key_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("AccountAdministrationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("rotate_authentication_key_with_nonce");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Rotates the specified account's authentication key to the supplied new authentication key. May
   * only be sent by the Diem Root account as a write set transaction.
   *
   * # Technical Description
   * Rotate the `account`'s `DiemAccount::DiemAccount` `authentication_key` field to `new_key`.
   * `new_key` must be a valid authentication key that corresponds to an ed25519
   * public key as described [here](https://developers.diem.com/docs/core/accounts/#addresses-authentication-keys-and-cryptographic-keys),
   * and `account` must not have previously delegated its `DiemAccount::KeyRotationCapability`.
   *
   * # Parameters
   * | Name            | Type         | Description                                                                                       |
   * | ------          | ------       | -------------                                                                                     |
   * | `dr_account`    | `signer`     | The signer of the sending account of the write set transaction. May only be the Diem Root signer. |
   * | `account`       | `signer`     | Signer of account specified in the `execute_as` field of the write set transaction.               |
   * | `sliding_nonce` | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction for Diem Root.          |
   * | `new_key`       | `vector<u8>` | New authentication key to be used for `account`.                                                  |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                                              | Description                                                                                                |
   * | ----------------           | --------------                                            | -------------                                                                                              |
   * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                            | A `SlidingNonce` resource is not published under `dr_account`.                                             |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`                            | The `sliding_nonce` in `dr_account` is too old and it's impossible to determine if it's duplicated or not. |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`                            | The `sliding_nonce` in `dr_account` is too far in the future.                                              |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`                   | The `sliding_nonce` in` dr_account` has been previously recorded.                                          |
   * | `Errors::INVALID_STATE`    | `DiemAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` | `account` has already delegated/extracted its `DiemAccount::KeyRotationCapability`.                        |
   * | `Errors::INVALID_ARGUMENT` | `DiemAccount::EMALFORMED_AUTHENTICATION_KEY`              | `new_key` was an invalid length.                                                                           |
   *
   * # Related Scripts
   * * `AccountAdministrationScripts::rotate_authentication_key`
   * * `AccountAdministrationScripts::rotate_authentication_key_with_nonce`
   * * `AccountAdministrationScripts::rotate_authentication_key_with_recovery_address`
   */
  static encodeRotateAuthenticationKeyWithNonceAdminScriptFunction(sliding_nonce: bigint, new_key: Uint8Array): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeU64(sliding_nonce);
    const sliding_nonce_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(new_key);
    const new_key_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [sliding_nonce_serialized, new_key_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("AccountAdministrationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("rotate_authentication_key_with_nonce_admin");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Rotates the authentication key of a specified account that is part of a recovery address to a
   * new authentication key. Only used for accounts that are part of a recovery address (see
   * `AccountAdministrationScripts::add_recovery_rotation_capability` for account restrictions).
   *
   * # Technical Description
   * Rotates the authentication key of the `to_recover` account to `new_key` using the
   * `DiemAccount::KeyRotationCapability` stored in the `RecoveryAddress::RecoveryAddress` resource
   * published under `recovery_address`. `new_key` must be a valide authentication key as described
   * [here](https://developers.diem.com/docs/core/accounts/#addresses-authentication-keys-and-cryptographic-keys).
   * This transaction can be sent either by the `to_recover` account, or by the account where the
   * `RecoveryAddress::RecoveryAddress` resource is published that contains `to_recover`'s `DiemAccount::KeyRotationCapability`.
   *
   * # Parameters
   * | Name               | Type         | Description                                                                                                                   |
   * | ------             | ------       | -------------                                                                                                                 |
   * | `account`          | `signer`     | Signer of the sending account of the transaction.                                                                             |
   * | `recovery_address` | `address`    | Address where `RecoveryAddress::RecoveryAddress` that holds `to_recover`'s `DiemAccount::KeyRotationCapability` is published. |
   * | `to_recover`       | `address`    | The address of the account whose authentication key will be updated.                                                          |
   * | `new_key`          | `vector<u8>` | New authentication key to be used for the account at the `to_recover` address.                                                |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                                 | Description                                                                                                                                         |
   * | ----------------           | --------------                               | -------------                                                                                                                                       |
   * | `Errors::NOT_PUBLISHED`    | `RecoveryAddress::ERECOVERY_ADDRESS`         | `recovery_address` does not have a `RecoveryAddress::RecoveryAddress` resource published under it.                                                  |
   * | `Errors::INVALID_ARGUMENT` | `RecoveryAddress::ECANNOT_ROTATE_KEY`        | The address of `account` is not `recovery_address` or `to_recover`.                                                                                 |
   * | `Errors::INVALID_ARGUMENT` | `RecoveryAddress::EACCOUNT_NOT_RECOVERABLE`  | `to_recover`'s `DiemAccount::KeyRotationCapability`  is not in the `RecoveryAddress::RecoveryAddress`  resource published under `recovery_address`. |
   * | `Errors::INVALID_ARGUMENT` | `DiemAccount::EMALFORMED_AUTHENTICATION_KEY` | `new_key` was an invalid length.                                                                                                                    |
   *
   * # Related Scripts
   * * `AccountAdministrationScripts::rotate_authentication_key`
   * * `AccountAdministrationScripts::rotate_authentication_key_with_nonce`
   * * `AccountAdministrationScripts::rotate_authentication_key_with_nonce_admin`
   */
  static encodeRotateAuthenticationKeyWithRecoveryAddressScriptFunction(recovery_address: DiemTypes.AccountAddress, to_recover: DiemTypes.AccountAddress, new_key: Uint8Array): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    recovery_address.serialize(serializer);
    const recovery_address_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    to_recover.serialize(serializer);
    const to_recover_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(new_key);
    const new_key_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [recovery_address_serialized, to_recover_serialized, new_key_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("AccountAdministrationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("rotate_authentication_key_with_recovery_address");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Updates the url used for off-chain communication, and the public key used to verify dual
   * attestation on-chain. Transaction can be sent by any account that has dual attestation
   * information published under it. In practice the only such accounts are Designated Dealers and
   * Parent VASPs.
   *
   * # Technical Description
   * Updates the `base_url` and `compliance_public_key` fields of the `DualAttestation::Credential`
   * resource published under `account`. The `new_key` must be a valid ed25519 public key.
   *
   * # Events
   * Successful execution of this transaction emits two events:
   * * A `DualAttestation::ComplianceKeyRotationEvent` containing the new compliance public key, and
   * the blockchain time at which the key was updated emitted on the `DualAttestation::Credential`
   * `compliance_key_rotation_events` handle published under `account`; and
   * * A `DualAttestation::BaseUrlRotationEvent` containing the new base url to be used for
   * off-chain communication, and the blockchain time at which the url was updated emitted on the
   * `DualAttestation::Credential` `base_url_rotation_events` handle published under `account`.
   *
   * # Parameters
   * | Name      | Type         | Description                                                               |
   * | ------    | ------       | -------------                                                             |
   * | `account` | `signer`     | Signer of the sending account of the transaction.                         |
   * | `new_url` | `vector<u8>` | ASCII-encoded url to be used for off-chain communication with `account`.  |
   * | `new_key` | `vector<u8>` | New ed25519 public key to be used for on-chain dual attestation checking. |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                           | Description                                                                |
   * | ----------------           | --------------                         | -------------                                                              |
   * | `Errors::NOT_PUBLISHED`    | `DualAttestation::ECREDENTIAL`         | A `DualAttestation::Credential` resource is not published under `account`. |
   * | `Errors::INVALID_ARGUMENT` | `DualAttestation::EINVALID_PUBLIC_KEY` | `new_key` is not a valid ed25519 public key.                               |
   *
   * # Related Scripts
   * * `AccountCreationScripts::create_parent_vasp_account`
   * * `AccountCreationScripts::create_designated_dealer`
   * * `AccountAdministrationScripts::rotate_dual_attestation_info`
   */
  static encodeRotateDualAttestationInfoScriptFunction(new_url: Uint8Array, new_key: Uint8Array): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeBytes(new_url);
    const new_url_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(new_key);
    const new_key_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [new_url_serialized, new_key_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("AccountAdministrationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("rotate_dual_attestation_info");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Rotates the authentication key in a `SharedEd25519PublicKey`. This transaction can be sent by
   * any account that has previously published a shared ed25519 public key using
   * `AccountAdministrationScripts::publish_shared_ed25519_public_key`.
   *
   * # Technical Description
   * `public_key` must be a valid ed25519 public key.  This transaction first rotates the public key stored in `account`'s
   * `SharedEd25519PublicKey::SharedEd25519PublicKey` resource to `public_key`, after which it
   * rotates the `account`'s authentication key to the new authentication key derived from `public_key` as defined
   * [here](https://developers.diem.com/docs/core/accounts/#addresses-authentication-keys-and-cryptographic-keys)
   * using the `DiemAccount::KeyRotationCapability` stored in `account`'s `SharedEd25519PublicKey::SharedEd25519PublicKey`.
   *
   * # Parameters
   * | Name         | Type         | Description                                           |
   * | ------       | ------       | -------------                                         |
   * | `account`    | `signer`     | The signer of the sending account of the transaction. |
   * | `public_key` | `vector<u8>` | 32-byte Ed25519 public key.                           |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                                    | Description                                                                                   |
   * | ----------------           | --------------                                  | -------------                                                                                 |
   * | `Errors::NOT_PUBLISHED`    | `SharedEd25519PublicKey::ESHARED_KEY`           | A `SharedEd25519PublicKey::SharedEd25519PublicKey` resource is not published under `account`. |
   * | `Errors::INVALID_ARGUMENT` | `SharedEd25519PublicKey::EMALFORMED_PUBLIC_KEY` | `public_key` is an invalid ed25519 public key.                                                |
   *
   * # Related Scripts
   * * `AccountAdministrationScripts::publish_shared_ed25519_public_key`
   */
  static encodeRotateSharedEd25519PublicKeyScriptFunction(public_key: Uint8Array): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeBytes(public_key);
    const public_key_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [public_key_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("AccountAdministrationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("rotate_shared_ed25519_public_key");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Updates the gas constants stored on chain and used by the VM for gas
   * metering. This transaction can only be sent from the Diem Root account.
   *
   * # Technical Description
   * Updates the on-chain config holding the `DiemVMConfig` and emits a
   * `DiemConfig::NewEpochEvent` to trigger a reconfiguration of the system.
   *
   * # Parameters
   * | Name                                | Type     | Description                                                                                            |
   * | ------                              | ------   | -------------                                                                                          |
   * | `account`                           | `signer` | Signer of the sending account. Must be the Diem Root account.                                          |
   * | `sliding_nonce`                     | `u64`    | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                             |
   * | `global_memory_per_byte_cost`       | `u64`    | The new cost to read global memory per-byte to be used for gas metering.                               |
   * | `global_memory_per_byte_write_cost` | `u64`    | The new cost to write global memory per-byte to be used for gas metering.                              |
   * | `min_transaction_gas_units`         | `u64`    | The new flat minimum amount of gas required for any transaction.                                       |
   * | `large_transaction_cutoff`          | `u64`    | The new size over which an additional charge will be assessed for each additional byte.                |
   * | `intrinsic_gas_per_byte`            | `u64`    | The new number of units of gas that to be charged per-byte over the new `large_transaction_cutoff`.    |
   * | `maximum_number_of_gas_units`       | `u64`    | The new maximum number of gas units that can be set in a transaction.                                  |
   * | `min_price_per_gas_unit`            | `u64`    | The new minimum gas price that can be set for a transaction.                                           |
   * | `max_price_per_gas_unit`            | `u64`    | The new maximum gas price that can be set for a transaction.                                           |
   * | `max_transaction_size_in_bytes`     | `u64`    | The new maximum size of a transaction that can be processed.                                           |
   * | `gas_unit_scaling_factor`           | `u64`    | The new scaling factor to use when scaling between external and internal gas units.                    |
   * | `default_account_size`              | `u64`    | The new default account size to use when assessing final costs for reads and writes to global storage. |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                                | Description                                                                                |
   * | ----------------           | --------------                              | -------------                                                                              |
   * | `Errors::INVALID_ARGUMENT` | `DiemVMConfig::EGAS_CONSTANT_INCONSISTENCY` | The provided gas constants are inconsistent.                                               |
   * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`              | A `SlidingNonce` resource is not published under `account`.                                |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`              | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`              | The `sliding_nonce` is too far in the future.                                              |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`     | The `sliding_nonce` has been previously recorded.                                          |
   * | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::EDIEM_ROOT`                 | `account` is not the Diem Root account.                                                    |
   */
  static encodeSetGasConstantsScriptFunction(sliding_nonce: bigint, global_memory_per_byte_cost: bigint, global_memory_per_byte_write_cost: bigint, min_transaction_gas_units: bigint, large_transaction_cutoff: bigint, intrinsic_gas_per_byte: bigint, maximum_number_of_gas_units: bigint, min_price_per_gas_unit: bigint, max_price_per_gas_unit: bigint, max_transaction_size_in_bytes: bigint, gas_unit_scaling_factor: bigint, default_account_size: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeU64(sliding_nonce);
    const sliding_nonce_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(global_memory_per_byte_cost);
    const global_memory_per_byte_cost_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(global_memory_per_byte_write_cost);
    const global_memory_per_byte_write_cost_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(min_transaction_gas_units);
    const min_transaction_gas_units_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(large_transaction_cutoff);
    const large_transaction_cutoff_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(intrinsic_gas_per_byte);
    const intrinsic_gas_per_byte_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(maximum_number_of_gas_units);
    const maximum_number_of_gas_units_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(min_price_per_gas_unit);
    const min_price_per_gas_unit_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(max_price_per_gas_unit);
    const max_price_per_gas_unit_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(max_transaction_size_in_bytes);
    const max_transaction_size_in_bytes_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(gas_unit_scaling_factor);
    const gas_unit_scaling_factor_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(default_account_size);
    const default_account_size_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [sliding_nonce_serialized, global_memory_per_byte_cost_serialized, global_memory_per_byte_write_cost_serialized, min_transaction_gas_units_serialized, large_transaction_cutoff_serialized, intrinsic_gas_per_byte_serialized, maximum_number_of_gas_units_serialized, min_price_per_gas_unit_serialized, max_price_per_gas_unit_serialized, max_transaction_size_in_bytes_serialized, gas_unit_scaling_factor_serialized, default_account_size_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("SystemAdministrationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("set_gas_constants");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Updates a validator's configuration, and triggers a reconfiguration of the system to update the
   * validator set with this new validator configuration.  Can only be successfully sent by a
   * Validator Operator account that is already registered with a validator.
   *
   * # Technical Description
   * This updates the fields with corresponding names held in the `ValidatorConfig::ValidatorConfig`
   * config resource held under `validator_account`. It then emits a `DiemConfig::NewEpochEvent` to
   * trigger a reconfiguration of the system.  This reconfiguration will update the validator set
   * on-chain with the updated `ValidatorConfig::ValidatorConfig`.
   *
   * # Parameters
   * | Name                          | Type         | Description                                                                                                        |
   * | ------                        | ------       | -------------                                                                                                      |
   * | `validator_operator_account`  | `signer`     | Signer of the sending account. Must be the registered validator operator for the validator at `validator_address`. |
   * | `validator_account`           | `address`    | The address of the validator's `ValidatorConfig::ValidatorConfig` resource being updated.                          |
   * | `consensus_pubkey`            | `vector<u8>` | New Ed25519 public key to be used in the updated `ValidatorConfig::ValidatorConfig`.                               |
   * | `validator_network_addresses` | `vector<u8>` | New set of `validator_network_addresses` to be used in the updated `ValidatorConfig::ValidatorConfig`.             |
   * | `fullnode_network_addresses`  | `vector<u8>` | New set of `fullnode_network_addresses` to be used in the updated `ValidatorConfig::ValidatorConfig`.              |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                                   | Description                                                                                           |
   * | ----------------           | --------------                                 | -------------                                                                                         |
   * | `Errors::NOT_PUBLISHED`    | `ValidatorConfig::EVALIDATOR_CONFIG`           | `validator_address` does not have a `ValidatorConfig::ValidatorConfig` resource published under it.   |
   * | `Errors::REQUIRES_ROLE`    | `Roles::EVALIDATOR_OPERATOR`                   | `validator_operator_account` does not have a Validator Operator role.                                 |
   * | `Errors::INVALID_ARGUMENT` | `ValidatorConfig::EINVALID_TRANSACTION_SENDER` | `validator_operator_account` is not the registered operator for the validator at `validator_address`. |
   * | `Errors::INVALID_ARGUMENT` | `ValidatorConfig::EINVALID_CONSENSUS_KEY`      | `consensus_pubkey` is not a valid ed25519 public key.                                                 |
   * | `Errors::INVALID_STATE`    | `DiemConfig::EINVALID_BLOCK_TIME`             | An invalid time value was encountered in reconfiguration. Unlikely to occur.                          |
   *
   * # Related Scripts
   * * `AccountCreationScripts::create_validator_account`
   * * `AccountCreationScripts::create_validator_operator_account`
   * * `ValidatorAdministrationScripts::add_validator_and_reconfigure`
   * * `ValidatorAdministrationScripts::remove_validator_and_reconfigure`
   * * `ValidatorAdministrationScripts::set_validator_operator`
   * * `ValidatorAdministrationScripts::set_validator_operator_with_nonce_admin`
   * * `ValidatorAdministrationScripts::register_validator_config`
   */
  static encodeSetValidatorConfigAndReconfigureScriptFunction(validator_account: DiemTypes.AccountAddress, consensus_pubkey: Uint8Array, validator_network_addresses: Uint8Array, fullnode_network_addresses: Uint8Array): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    validator_account.serialize(serializer);
    const validator_account_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(consensus_pubkey);
    const consensus_pubkey_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(validator_network_addresses);
    const validator_network_addresses_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(fullnode_network_addresses);
    const fullnode_network_addresses_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [validator_account_serialized, consensus_pubkey_serialized, validator_network_addresses_serialized, fullnode_network_addresses_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("ValidatorAdministrationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("set_validator_config_and_reconfigure");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Sets the validator operator for a validator in the validator's configuration resource "locally"
   * and does not reconfigure the system. Changes from this transaction will not picked up by the
   * system until a reconfiguration of the system is triggered. May only be sent by an account with
   * Validator role.
   *
   * # Technical Description
   * Sets the account at `operator_account` address and with the specified `human_name` as an
   * operator for the sending validator account. The account at `operator_account` address must have
   * a Validator Operator role and have a `ValidatorOperatorConfig::ValidatorOperatorConfig`
   * resource published under it. The sending `account` must be a Validator and have a
   * `ValidatorConfig::ValidatorConfig` resource published under it. This script does not emit a
   * `DiemConfig::NewEpochEvent` and no reconfiguration of the system is initiated by this script.
   *
   * # Parameters
   * | Name               | Type         | Description                                                                                  |
   * | ------             | ------       | -------------                                                                                |
   * | `account`          | `signer`     | The signer of the sending account of the transaction.                                        |
   * | `operator_name`    | `vector<u8>` | Validator operator's human name.                                                             |
   * | `operator_account` | `address`    | Address of the validator operator account to be added as the `account` validator's operator. |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                                          | Description                                                                                                                                                  |
   * | ----------------           | --------------                                        | -------------                                                                                                                                                |
   * | `Errors::NOT_PUBLISHED`    | `ValidatorOperatorConfig::EVALIDATOR_OPERATOR_CONFIG` | The `ValidatorOperatorConfig::ValidatorOperatorConfig` resource is not published under `operator_account`.                                                   |
   * | 0                          | 0                                                     | The `human_name` field of the `ValidatorOperatorConfig::ValidatorOperatorConfig` resource under `operator_account` does not match the provided `human_name`. |
   * | `Errors::REQUIRES_ROLE`    | `Roles::EVALIDATOR`                                   | `account` does not have a Validator account role.                                                                                                            |
   * | `Errors::INVALID_ARGUMENT` | `ValidatorConfig::ENOT_A_VALIDATOR_OPERATOR`          | The account at `operator_account` does not have a `ValidatorOperatorConfig::ValidatorOperatorConfig` resource.                                               |
   * | `Errors::NOT_PUBLISHED`    | `ValidatorConfig::EVALIDATOR_CONFIG`                  | A `ValidatorConfig::ValidatorConfig` is not published under `account`.                                                                                       |
   *
   * # Related Scripts
   * * `AccountCreationScripts::create_validator_account`
   * * `AccountCreationScripts::create_validator_operator_account`
   * * `ValidatorAdministrationScripts::register_validator_config`
   * * `ValidatorAdministrationScripts::remove_validator_and_reconfigure`
   * * `ValidatorAdministrationScripts::add_validator_and_reconfigure`
   * * `ValidatorAdministrationScripts::set_validator_operator_with_nonce_admin`
   * * `ValidatorAdministrationScripts::set_validator_config_and_reconfigure`
   */
  static encodeSetValidatorOperatorScriptFunction(operator_name: Uint8Array, operator_account: DiemTypes.AccountAddress): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeBytes(operator_name);
    const operator_name_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    operator_account.serialize(serializer);
    const operator_account_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [operator_name_serialized, operator_account_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("ValidatorAdministrationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("set_validator_operator");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Sets the validator operator for a validator in the validator's configuration resource "locally"
   * and does not reconfigure the system. Changes from this transaction will not picked up by the
   * system until a reconfiguration of the system is triggered. May only be sent by the Diem Root
   * account as a write set transaction.
   *
   * # Technical Description
   * Sets the account at `operator_account` address and with the specified `human_name` as an
   * operator for the validator `account`. The account at `operator_account` address must have a
   * Validator Operator role and have a `ValidatorOperatorConfig::ValidatorOperatorConfig` resource
   * published under it. The account represented by the `account` signer must be a Validator and
   * have a `ValidatorConfig::ValidatorConfig` resource published under it. No reconfiguration of
   * the system is initiated by this script.
   *
   * # Parameters
   * | Name               | Type         | Description                                                                                   |
   * | ------             | ------       | -------------                                                                                 |
   * | `dr_account`       | `signer`     | Signer of the sending account of the write set transaction. May only be the Diem Root signer. |
   * | `account`          | `signer`     | Signer of account specified in the `execute_as` field of the write set transaction.           |
   * | `sliding_nonce`    | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction for Diem Root.      |
   * | `operator_name`    | `vector<u8>` | Validator operator's human name.                                                              |
   * | `operator_account` | `address`    | Address of the validator operator account to be added as the `account` validator's operator.  |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                                          | Description                                                                                                                                                  |
   * | ----------------           | --------------                                        | -------------                                                                                                                                                |
   * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                        | A `SlidingNonce` resource is not published under `dr_account`.                                                                                               |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`                        | The `sliding_nonce` in `dr_account` is too old and it's impossible to determine if it's duplicated or not.                                                   |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`                        | The `sliding_nonce` in `dr_account` is too far in the future.                                                                                                |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`               | The `sliding_nonce` in` dr_account` has been previously recorded.                                                                                            |
   * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                        | The sending account is not the Diem Root account or Treasury Compliance account                                                                             |
   * | `Errors::NOT_PUBLISHED`    | `ValidatorOperatorConfig::EVALIDATOR_OPERATOR_CONFIG` | The `ValidatorOperatorConfig::ValidatorOperatorConfig` resource is not published under `operator_account`.                                                   |
   * | 0                          | 0                                                     | The `human_name` field of the `ValidatorOperatorConfig::ValidatorOperatorConfig` resource under `operator_account` does not match the provided `human_name`. |
   * | `Errors::REQUIRES_ROLE`    | `Roles::EVALIDATOR`                                   | `account` does not have a Validator account role.                                                                                                            |
   * | `Errors::INVALID_ARGUMENT` | `ValidatorConfig::ENOT_A_VALIDATOR_OPERATOR`          | The account at `operator_account` does not have a `ValidatorOperatorConfig::ValidatorOperatorConfig` resource.                                               |
   * | `Errors::NOT_PUBLISHED`    | `ValidatorConfig::EVALIDATOR_CONFIG`                  | A `ValidatorConfig::ValidatorConfig` is not published under `account`.                                                                                       |
   *
   * # Related Scripts
   * * `AccountCreationScripts::create_validator_account`
   * * `AccountCreationScripts::create_validator_operator_account`
   * * `ValidatorAdministrationScripts::register_validator_config`
   * * `ValidatorAdministrationScripts::remove_validator_and_reconfigure`
   * * `ValidatorAdministrationScripts::add_validator_and_reconfigure`
   * * `ValidatorAdministrationScripts::set_validator_operator`
   * * `ValidatorAdministrationScripts::set_validator_config_and_reconfigure`
   */
  static encodeSetValidatorOperatorWithNonceAdminScriptFunction(sliding_nonce: bigint, operator_name: Uint8Array, operator_account: DiemTypes.AccountAddress): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeU64(sliding_nonce);
    const sliding_nonce_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(operator_name);
    const operator_name_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    operator_account.serialize(serializer);
    const operator_account_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [sliding_nonce_serialized, operator_name_serialized, operator_account_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("ValidatorAdministrationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("set_validator_operator_with_nonce_admin");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Mints a specified number of coins in a currency to a Designated Dealer. The sending account
   * must be the Treasury Compliance account, and coins can only be minted to a Designated Dealer
   * account.
   *
   * # Technical Description
   * Mints `mint_amount` of coins in the `CoinType` currency to Designated Dealer account at
   * `designated_dealer_address`. The `tier_index` parameter specifies which tier should be used to
   * check verify the off-chain approval policy, and is based in part on the on-chain tier values
   * for the specific Designated Dealer, and the number of `CoinType` coins that have been minted to
   * the dealer over the past 24 hours. Every Designated Dealer has 4 tiers for each currency that
   * they support. The sending `tc_account` must be the Treasury Compliance account, and the
   * receiver an authorized Designated Dealer account.
   *
   * # Events
   * Successful execution of the transaction will emit two events:
   * * A `Diem::MintEvent` with the amount and currency code minted is emitted on the
   * `mint_event_handle` in the stored `Diem::CurrencyInfo<CoinType>` resource stored under
   * `0xA550C18`; and
   * * A `DesignatedDealer::ReceivedMintEvent` with the amount, currency code, and Designated
   * Dealer's address is emitted on the `mint_event_handle` in the stored `DesignatedDealer::Dealer`
   * resource published under the `designated_dealer_address`.
   *
   * # Parameters
   * | Name                        | Type      | Description                                                                                                |
   * | ------                      | ------    | -------------                                                                                              |
   * | `CoinType`                  | Type      | The Move type for the `CoinType` being minted. `CoinType` must be an already-registered currency on-chain. |
   * | `tc_account`                | `signer`  | The signer of the sending account of this transaction. Must be the Treasury Compliance account.            |
   * | `sliding_nonce`             | `u64`     | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                 |
   * | `designated_dealer_address` | `address` | The address of the Designated Dealer account being minted to.                                              |
   * | `mint_amount`               | `u64`     | The number of coins to be minted.                                                                          |
   * | `tier_index`                | `u64`     | [Deprecated] The mint tier index to use for the Designated Dealer account. Will be ignored                 |
   *
   * # Common Abort Conditions
   * | Error Category                | Error Reason                                 | Description                                                                                                                  |
   * | ----------------              | --------------                               | -------------                                                                                                                |
   * | `Errors::NOT_PUBLISHED`       | `SlidingNonce::ESLIDING_NONCE`               | A `SlidingNonce` resource is not published under `tc_account`.                                                               |
   * | `Errors::INVALID_ARGUMENT`    | `SlidingNonce::ENONCE_TOO_OLD`               | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not.                                   |
   * | `Errors::INVALID_ARGUMENT`    | `SlidingNonce::ENONCE_TOO_NEW`               | The `sliding_nonce` is too far in the future.                                                                                |
   * | `Errors::INVALID_ARGUMENT`    | `SlidingNonce::ENONCE_ALREADY_RECORDED`      | The `sliding_nonce` has been previously recorded.                                                                            |
   * | `Errors::REQUIRES_ADDRESS`    | `CoreAddresses::ETREASURY_COMPLIANCE`        | `tc_account` is not the Treasury Compliance account.                                                                         |
   * | `Errors::REQUIRES_ROLE`       | `Roles::ETREASURY_COMPLIANCE`                | `tc_account` is not the Treasury Compliance account.                                                                         |
   * | `Errors::INVALID_ARGUMENT`    | `DesignatedDealer::EINVALID_MINT_AMOUNT`     | `mint_amount` is zero.                                                                                                       |
   * | `Errors::NOT_PUBLISHED`       | `DesignatedDealer::EDEALER`                  | `DesignatedDealer::Dealer` or `DesignatedDealer::TierInfo<CoinType>` resource does not exist at `designated_dealer_address`. |
   * | `Errors::REQUIRES_CAPABILITY` | `Diem::EMINT_CAPABILITY`                    | `tc_account` does not have a `Diem::MintCapability<CoinType>` resource published under it.                                  |
   * | `Errors::INVALID_STATE`       | `Diem::EMINTING_NOT_ALLOWED`                | Minting is not currently allowed for `CoinType` coins.                                                                       |
   * | `Errors::LIMIT_EXCEEDED`      | `DiemAccount::EDEPOSIT_EXCEEDS_LIMITS`      | The depositing of the funds would exceed the `account`'s account limits.                                                     |
   *
   * # Related Scripts
   * * `AccountCreationScripts::create_designated_dealer`
   * * `PaymentScripts::peer_to_peer_with_metadata`
   * * `AccountAdministrationScripts::rotate_dual_attestation_info`
   */
  static encodeTieredMintScriptFunction(coin_type: DiemTypes.TypeTag, sliding_nonce: bigint, designated_dealer_address: DiemTypes.AccountAddress, mint_amount: bigint, tier_index: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [coin_type];
    var serializer = new BcsSerializer();
    serializer.serializeU64(sliding_nonce);
    const sliding_nonce_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    designated_dealer_address.serialize(serializer);
    const designated_dealer_address_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(mint_amount);
    const mint_amount_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(tier_index);
    const tier_index_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [sliding_nonce_serialized, designated_dealer_address_serialized, mint_amount_serialized, tier_index_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("TreasuryComplianceScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("tiered_mint");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Unfreezes the account at `address`. The sending account of this transaction must be the
   * Treasury Compliance account. After the successful execution of this transaction transactions
   * may be sent from the previously frozen account, and coins may be sent and received.
   *
   * # Technical Description
   * Sets the `AccountFreezing::FreezingBit` to `false` and emits a
   * `AccountFreezing::UnFreezeAccountEvent`. The transaction sender must be the Treasury Compliance
   * account. Note that this is a per-account property so unfreezing a Parent VASP will not effect
   * the status any of its child accounts and vice versa.
   *
   * # Events
   * Successful execution of this script will emit a `AccountFreezing::UnFreezeAccountEvent` with
   * the `unfrozen_address` set the `to_unfreeze_account`'s address.
   *
   * # Parameters
   * | Name                  | Type      | Description                                                                                     |
   * | ------                | ------    | -------------                                                                                   |
   * | `tc_account`          | `signer`  | The signer of the sending account of this transaction. Must be the Treasury Compliance account. |
   * | `sliding_nonce`       | `u64`     | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                      |
   * | `to_unfreeze_account` | `address` | The account address to be frozen.                                                               |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                            | Description                                                                                |
   * | ----------------           | --------------                          | -------------                                                                              |
   * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `account`.                                |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |
   * | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE`   | The sending account is not the Treasury Compliance account.                                |
   *
   * # Related Scripts
   * * `TreasuryComplianceScripts::freeze_account`
   */
  static encodeUnfreezeAccountScriptFunction(sliding_nonce: bigint, to_unfreeze_account: DiemTypes.AccountAddress): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeU64(sliding_nonce);
    const sliding_nonce_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    to_unfreeze_account.serialize(serializer);
    const to_unfreeze_account_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [sliding_nonce_serialized, to_unfreeze_account_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("TreasuryComplianceScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("unfreeze_account");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Updates the Diem consensus config that is stored on-chain and is used by the Consensus.  This
   * transaction can only be sent from the Diem Root account.
   *
   * # Technical Description
   * Updates the `DiemConsensusConfig` on-chain config and emits a `DiemConfig::NewEpochEvent` to trigger
   * a reconfiguration of the system.
   *
   * # Parameters
   * | Name            | Type          | Description                                                                |
   * | ------          | ------        | -------------                                                              |
   * | `account`       | `signer`      | Signer of the sending account. Must be the Diem Root account.              |
   * | `sliding_nonce` | `u64`         | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction. |
   * | `config`        | `vector<u8>`  | The serialized bytes of consensus config.                                  |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                                  | Description                                                                                |
   * | ----------------           | --------------                                | -------------                                                                              |
   * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                | A `SlidingNonce` resource is not published under `account`.                                |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`                | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`                | The `sliding_nonce` is too far in the future.                                              |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`       | The `sliding_nonce` has been previously recorded.                                          |
   * | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::EDIEM_ROOT`                   | `account` is not the Diem Root account.                                                    |
   */
  static encodeUpdateDiemConsensusConfigScriptFunction(sliding_nonce: bigint, config: Uint8Array): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeU64(sliding_nonce);
    const sliding_nonce_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeBytes(config);
    const config_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [sliding_nonce_serialized, config_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("SystemAdministrationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("update_diem_consensus_config");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Updates the Diem major version that is stored on-chain and is used by the VM.  This
   * transaction can only be sent from the Diem Root account.
   *
   * # Technical Description
   * Updates the `DiemVersion` on-chain config and emits a `DiemConfig::NewEpochEvent` to trigger
   * a reconfiguration of the system. The `major` version that is passed in must be strictly greater
   * than the current major version held on-chain. The VM reads this information and can use it to
   * preserve backwards compatibility with previous major versions of the VM.
   *
   * # Parameters
   * | Name            | Type     | Description                                                                |
   * | ------          | ------   | -------------                                                              |
   * | `account`       | `signer` | Signer of the sending account. Must be the Diem Root account.              |
   * | `sliding_nonce` | `u64`    | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction. |
   * | `major`         | `u64`    | The `major` version of the VM to be used from this transaction on.         |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                                  | Description                                                                                |
   * | ----------------           | --------------                                | -------------                                                                              |
   * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                | A `SlidingNonce` resource is not published under `account`.                                |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`                | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`                | The `sliding_nonce` is too far in the future.                                              |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`       | The `sliding_nonce` has been previously recorded.                                          |
   * | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::EDIEM_ROOT`                   | `account` is not the Diem Root account.                                                    |
   * | `Errors::INVALID_ARGUMENT` | `DiemVersion::EINVALID_MAJOR_VERSION_NUMBER`  | `major` is less-than or equal to the current major version stored on-chain.                |
   */
  static encodeUpdateDiemVersionScriptFunction(sliding_nonce: bigint, major: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeU64(sliding_nonce);
    const sliding_nonce_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(major);
    const major_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [sliding_nonce_serialized, major_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("SystemAdministrationScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("update_diem_version");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Update the dual attestation limit on-chain. Defined in terms of micro-XDX.  The transaction can
   * only be sent by the Treasury Compliance account.  After this transaction all inter-VASP
   * payments over this limit must be checked for dual attestation.
   *
   * # Technical Description
   * Updates the `micro_xdx_limit` field of the `DualAttestation::Limit` resource published under
   * `0xA550C18`. The amount is set in micro-XDX.
   *
   * # Parameters
   * | Name                  | Type     | Description                                                                                     |
   * | ------                | ------   | -------------                                                                                   |
   * | `tc_account`          | `signer` | The signer of the sending account of this transaction. Must be the Treasury Compliance account. |
   * | `sliding_nonce`       | `u64`    | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                      |
   * | `new_micro_xdx_limit` | `u64`    | The new dual attestation limit to be used on-chain.                                             |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                            | Description                                                                                |
   * | ----------------           | --------------                          | -------------                                                                              |
   * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `tc_account`.                             |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |
   * | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE`   | `tc_account` is not the Treasury Compliance account.                                       |
   *
   * # Related Scripts
   * * `TreasuryComplianceScripts::update_exchange_rate`
   * * `TreasuryComplianceScripts::update_minting_ability`
   */
  static encodeUpdateDualAttestationLimitScriptFunction(sliding_nonce: bigint, new_micro_xdx_limit: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeU64(sliding_nonce);
    const sliding_nonce_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(new_micro_xdx_limit);
    const new_micro_xdx_limit_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [sliding_nonce_serialized, new_micro_xdx_limit_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("TreasuryComplianceScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("update_dual_attestation_limit");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Update the rough on-chain exchange rate between a specified currency and XDX (as a conversion
   * to micro-XDX). The transaction can only be sent by the Treasury Compliance account. After this
   * transaction the updated exchange rate will be used for normalization of gas prices, and for
   * dual attestation checking.
   *
   * # Technical Description
   * Updates the on-chain exchange rate from the given `Currency` to micro-XDX.  The exchange rate
   * is given by `new_exchange_rate_numerator/new_exchange_rate_denominator`.
   *
   * # Parameters
   * | Name                            | Type     | Description                                                                                                                        |
   * | ------                          | ------   | -------------                                                                                                                      |
   * | `Currency`                      | Type     | The Move type for the `Currency` whose exchange rate is being updated. `Currency` must be an already-registered currency on-chain. |
   * | `tc_account`                    | `signer` | The signer of the sending account of this transaction. Must be the Treasury Compliance account.                                    |
   * | `sliding_nonce`                 | `u64`    | The `sliding_nonce` (see: `SlidingNonce`) to be used for the transaction.                                                          |
   * | `new_exchange_rate_numerator`   | `u64`    | The numerator for the new to micro-XDX exchange rate for `Currency`.                                                               |
   * | `new_exchange_rate_denominator` | `u64`    | The denominator for the new to micro-XDX exchange rate for `Currency`.                                                             |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                            | Description                                                                                |
   * | ----------------           | --------------                          | -------------                                                                              |
   * | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `tc_account`.                             |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |
   * | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |
   * | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE`   | `tc_account` is not the Treasury Compliance account.                                       |
   * | `Errors::REQUIRES_ROLE`    | `Roles::ETREASURY_COMPLIANCE`           | `tc_account` is not the Treasury Compliance account.                                       |
   * | `Errors::INVALID_ARGUMENT` | `FixedPoint32::EDENOMINATOR`            | `new_exchange_rate_denominator` is zero.                                                   |
   * | `Errors::INVALID_ARGUMENT` | `FixedPoint32::ERATIO_OUT_OF_RANGE`     | The quotient is unrepresentable as a `FixedPoint32`.                                       |
   * | `Errors::LIMIT_EXCEEDED`   | `FixedPoint32::ERATIO_OUT_OF_RANGE`     | The quotient is unrepresentable as a `FixedPoint32`.                                       |
   *
   * # Related Scripts
   * * `TreasuryComplianceScripts::update_dual_attestation_limit`
   * * `TreasuryComplianceScripts::update_minting_ability`
   */
  static encodeUpdateExchangeRateScriptFunction(currency: DiemTypes.TypeTag, sliding_nonce: bigint, new_exchange_rate_numerator: bigint, new_exchange_rate_denominator: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [currency];
    var serializer = new BcsSerializer();
    serializer.serializeU64(sliding_nonce);
    const sliding_nonce_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(new_exchange_rate_numerator);
    const new_exchange_rate_numerator_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(new_exchange_rate_denominator);
    const new_exchange_rate_denominator_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [sliding_nonce_serialized, new_exchange_rate_numerator_serialized, new_exchange_rate_denominator_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("TreasuryComplianceScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("update_exchange_rate");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**
   * # Summary
   * Script to allow or disallow minting of new coins in a specified currency.  This transaction can
   * only be sent by the Treasury Compliance account.  Turning minting off for a currency will have
   * no effect on coins already in circulation, and coins may still be removed from the system.
   *
   * # Technical Description
   * This transaction sets the `can_mint` field of the `Diem::CurrencyInfo<Currency>` resource
   * published under `0xA550C18` to the value of `allow_minting`. Minting of coins if allowed if
   * this field is set to `true` and minting of new coins in `Currency` is disallowed otherwise.
   * This transaction needs to be sent by the Treasury Compliance account.
   *
   * # Parameters
   * | Name            | Type     | Description                                                                                                                          |
   * | ------          | ------   | -------------                                                                                                                        |
   * | `Currency`      | Type     | The Move type for the `Currency` whose minting ability is being updated. `Currency` must be an already-registered currency on-chain. |
   * | `account`       | `signer` | Signer of the sending account. Must be the Diem Root account.                                                                        |
   * | `allow_minting` | `bool`   | Whether to allow minting of new coins in `Currency`.                                                                                 |
   *
   * # Common Abort Conditions
   * | Error Category             | Error Reason                          | Description                                          |
   * | ----------------           | --------------                        | -------------                                        |
   * | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE` | `tc_account` is not the Treasury Compliance account. |
   * | `Errors::NOT_PUBLISHED`    | `Diem::ECURRENCY_INFO`               | `Currency` is not a registered currency on-chain.    |
   *
   * # Related Scripts
   * * `TreasuryComplianceScripts::update_dual_attestation_limit`
   * * `TreasuryComplianceScripts::update_exchange_rate`
   */
  static encodeUpdateMintingAbilityScriptFunction(currency: DiemTypes.TypeTag, allow_minting: boolean): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [currency];
    var serializer = new BcsSerializer();
    serializer.serializeBool(allow_minting);
    const allow_minting_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [allow_minting_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [1]]), new DiemTypes.Identifier("TreasuryComplianceScripts"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("update_minting_ability");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  static decodeAddCurrencyToAccountScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantAddCurrencyToAccount {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      return new ScriptFunctionCallVariantAddCurrencyToAccount(
        script_fun.value.ty_args[0]
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeAddExchangeLiquidityScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantAddExchangeLiquidity {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const exchange: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const provider: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const coin_a_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantAddExchangeLiquidity(
        exchange,
        provider,
        coin_a_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeAddExchangeLiquidityScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantAddExchangeLiquidity {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const exchange: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const provider: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const coin_b_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantAddExchangeLiquidity(
        exchange,
        provider,
        coin_b_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeAddExchangeLiquidityScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantAddExchangeLiquidity {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const exchange: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const provider: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const coin_a_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantAddExchangeLiquidity(
        exchange,
        provider,
        coin_a_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeAddExchangeLiquidityScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantAddExchangeLiquidity {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const exchange: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const provider: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const coin_a_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantAddExchangeLiquidity(
        exchange,
        provider,
        coin_a_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeAddExchangeLiquidityScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantAddExchangeLiquidity {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const exchange: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const provider: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const coin_b_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantAddExchangeLiquidity(
        exchange,
        provider,
        coin_b_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeAddExchangeLiquidityScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantAddExchangeLiquidity {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const exchange: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const provider: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const coin_c_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantAddExchangeLiquidity(
        exchange,
        provider,
        coin_c_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeAddRecoveryRotationCapabilityScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantAddRecoveryRotationCapability {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const recovery_address: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      return new ScriptFunctionCallVariantAddRecoveryRotationCapability(
        recovery_address
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeAddValidatorAndReconfigureScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantAddValidatorAndReconfigure {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const sliding_nonce: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const validator_name: Uint8Array = deserializer.deserializeBytes();

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const validator_address: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      return new ScriptFunctionCallVariantAddValidatorAndReconfigure(
        sliding_nonce,
        validator_name,
        validator_address
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeAddVaspDomainScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantAddVaspDomain {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const address: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const domain: Uint8Array = deserializer.deserializeBytes();

      return new ScriptFunctionCallVariantAddVaspDomain(
        address,
        domain
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeBurnTxnFeesScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantBurnTxnFees {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      return new ScriptFunctionCallVariantBurnTxnFees(
        script_fun.value.ty_args[0]
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeBurnWithAmountScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantBurnWithAmount {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const sliding_nonce: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const preburn_address: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const amount: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantBurnWithAmount(
        script_fun.value.ty_args[0],
        sliding_nonce,
        preburn_address,
        amount
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeCancelBurnWithAmountScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantCancelBurnWithAmount {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const preburn_address: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const amount: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantCancelBurnWithAmount(
        script_fun.value.ty_args[0],
        preburn_address,
        amount
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeCreateChildVaspAccountScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantCreateChildVaspAccount {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const child_address: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const auth_key_prefix: Uint8Array = deserializer.deserializeBytes();

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const add_all_currencies: boolean = deserializer.deserializeBool();

      var deserializer = new BcsDeserializer(script_fun.value.args[3]);
      const child_initial_balance: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantCreateChildVaspAccount(
        script_fun.value.ty_args[0],
        child_address,
        auth_key_prefix,
        add_all_currencies,
        child_initial_balance
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeCreateDesignatedDealerScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantCreateDesignatedDealer {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const sliding_nonce: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const addr: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const auth_key_prefix: Uint8Array = deserializer.deserializeBytes();

      var deserializer = new BcsDeserializer(script_fun.value.args[3]);
      const human_name: Uint8Array = deserializer.deserializeBytes();

      var deserializer = new BcsDeserializer(script_fun.value.args[4]);
      const add_all_currencies: boolean = deserializer.deserializeBool();

      return new ScriptFunctionCallVariantCreateDesignatedDealer(
        script_fun.value.ty_args[0],
        sliding_nonce,
        addr,
        auth_key_prefix,
        human_name,
        add_all_currencies
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeCreateParentVaspAccountScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantCreateParentVaspAccount {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const sliding_nonce: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const new_account_address: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const auth_key_prefix: Uint8Array = deserializer.deserializeBytes();

      var deserializer = new BcsDeserializer(script_fun.value.args[3]);
      const human_name: Uint8Array = deserializer.deserializeBytes();

      var deserializer = new BcsDeserializer(script_fun.value.args[4]);
      const add_all_currencies: boolean = deserializer.deserializeBool();

      return new ScriptFunctionCallVariantCreateParentVaspAccount(
        script_fun.value.ty_args[0],
        sliding_nonce,
        new_account_address,
        auth_key_prefix,
        human_name,
        add_all_currencies
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeCreateRecoveryAddressScriptFunction(_script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantCreateRecoveryAddress {
  if (_script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      return new ScriptFunctionCallVariantCreateRecoveryAddress(

      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeCreateValidatorAccountScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantCreateValidatorAccount {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const sliding_nonce: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const new_account_address: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const auth_key_prefix: Uint8Array = deserializer.deserializeBytes();

      var deserializer = new BcsDeserializer(script_fun.value.args[3]);
      const human_name: Uint8Array = deserializer.deserializeBytes();

      return new ScriptFunctionCallVariantCreateValidatorAccount(
        sliding_nonce,
        new_account_address,
        auth_key_prefix,
        human_name
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeCreateValidatorOperatorAccountScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantCreateValidatorOperatorAccount {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const sliding_nonce: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const new_account_address: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const auth_key_prefix: Uint8Array = deserializer.deserializeBytes();

      var deserializer = new BcsDeserializer(script_fun.value.args[3]);
      const human_name: Uint8Array = deserializer.deserializeBytes();

      return new ScriptFunctionCallVariantCreateValidatorOperatorAccount(
        sliding_nonce,
        new_account_address,
        auth_key_prefix,
        human_name
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeCreateVaspDomainsScriptFunction(_script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantCreateVaspDomains {
  if (_script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      return new ScriptFunctionCallVariantCreateVaspDomains(

      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeExchangeCoinAToCoinBScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantExchangeCoinAToCoinB {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const swapper: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const exchange: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const coin_a_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantExchangeCoinAToCoinB(
        swapper,
        exchange,
        coin_a_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeExchangeCoinAToCoinCScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantExchangeCoinAToCoinC {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const swapper: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const exchange: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const coin_a_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantExchangeCoinAToCoinC(
        swapper,
        exchange,
        coin_a_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeExchangeCoinAToCoinDScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantExchangeCoinAToCoinD {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const swapper: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const exchange: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const coin_a_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantExchangeCoinAToCoinD(
        swapper,
        exchange,
        coin_a_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeExchangeCoinBToCoinAScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantExchangeCoinBToCoinA {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const swapper: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const exchange: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const coin_b_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantExchangeCoinBToCoinA(
        swapper,
        exchange,
        coin_b_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeExchangeCoinBToCoinCScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantExchangeCoinBToCoinC {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const swapper: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const exchange: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const coin_b_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantExchangeCoinBToCoinC(
        swapper,
        exchange,
        coin_b_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeExchangeCoinBToCoinDScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantExchangeCoinBToCoinD {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const swapper: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const exchange: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const coin_b_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantExchangeCoinBToCoinD(
        swapper,
        exchange,
        coin_b_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeExchangeCoinCToCoinAScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantExchangeCoinCToCoinA {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const swapper: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const exchange: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const coin_c_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantExchangeCoinCToCoinA(
        swapper,
        exchange,
        coin_c_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeExchangeCoinCToCoinBScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantExchangeCoinCToCoinB {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const swapper: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const exchange: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const coin_c_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantExchangeCoinCToCoinB(
        swapper,
        exchange,
        coin_c_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeExchangeCoinCToCoinDScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantExchangeCoinCToCoinD {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const swapper: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const exchange: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const coin_c_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantExchangeCoinCToCoinD(
        swapper,
        exchange,
        coin_c_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeExchangeCoinDToCoinAScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantExchangeCoinDToCoinA {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const swapper: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const exchange: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const coin_d_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantExchangeCoinDToCoinA(
        swapper,
        exchange,
        coin_d_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeExchangeCoinDToCoinBScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantExchangeCoinDToCoinB {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const swapper: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const exchange: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const coin_d_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantExchangeCoinDToCoinB(
        swapper,
        exchange,
        coin_d_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeExchangeCoinDToCoinCScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantExchangeCoinDToCoinC {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const swapper: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const exchange: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const coin_d_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantExchangeCoinDToCoinC(
        swapper,
        exchange,
        coin_d_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeForceExpireScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantForceExpire {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const shift_amount: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantForceExpire(
        shift_amount
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeFreezeAccountScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantFreezeAccount {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const sliding_nonce: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const to_freeze_account: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      return new ScriptFunctionCallVariantFreezeAccount(
        sliding_nonce,
        to_freeze_account
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeInitializeDiemConsensusConfigScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantInitializeDiemConsensusConfig {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const sliding_nonce: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantInitializeDiemConsensusConfig(
        sliding_nonce
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeInitializeExchangeScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantInitializeExchange {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const initializer: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const comm_rate: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const coin_a_amt: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[3]);
      const coin_b_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantInitializeExchange(
        initializer,
        comm_rate,
        coin_a_amt,
        coin_b_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeInitializeExchangeScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantInitializeExchange {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const initializer: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const comm_rate: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const coin_b_amt: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[3]);
      const coin_c_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantInitializeExchange(
        initializer,
        comm_rate,
        coin_b_amt,
        coin_c_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeInitializeExchangeScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantInitializeExchange {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const initializer: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const comm_rate: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const coin_a_amt: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[3]);
      const coin_c_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantInitializeExchange(
        initializer,
        comm_rate,
        coin_a_amt,
        coin_c_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeInitializeExchangeScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantInitializeExchange {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const initializer: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const comm_rate: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const coin_a_amt: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[3]);
      const coin_d_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantInitializeExchange(
        initializer,
        comm_rate,
        coin_a_amt,
        coin_d_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeInitializeExchangeScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantInitializeExchange {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const initializer: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const comm_rate: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const coin_b_amt: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[3]);
      const coin_d_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantInitializeExchange(
        initializer,
        comm_rate,
        coin_b_amt,
        coin_d_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeInitializeExchangeScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantInitializeExchange {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const initializer: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const comm_rate: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const coin_c_amt: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[3]);
      const coin_d_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantInitializeExchange(
        initializer,
        comm_rate,
        coin_c_amt,
        coin_d_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeInitializeLpV8RotaryScriptFunction(_script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantInitializeLpV8Rotary {
  if (_script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      return new ScriptFunctionCallVariantInitializeLpV8Rotary(

      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeInitializeRotaryScriptFunction(_script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantInitializeRotary {
  if (_script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      return new ScriptFunctionCallVariantInitializeRotary(

      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeInitializeV8ScriptFunction(_script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantInitializeV8 {
  if (_script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      return new ScriptFunctionCallVariantInitializeV8(

      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeMintCoinAScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantMintCoinA {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantMintCoinA(
        amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeMintCoinBScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantMintCoinB {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantMintCoinB(
        amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeMintCoinCScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantMintCoinC {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantMintCoinC(
        amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeMintCoinDScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantMintCoinD {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantMintCoinD(
        amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeOptInToCrsnScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantOptInToCrsn {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const crsn_size: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantOptInToCrsn(
        crsn_size
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodePeerToPeerBySignersScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantPeerToPeerBySigners {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const amount: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const metadata: Uint8Array = deserializer.deserializeBytes();

      return new ScriptFunctionCallVariantPeerToPeerBySigners(
        script_fun.value.ty_args[0],
        amount,
        metadata
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodePeerToPeerWithMetadataScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantPeerToPeerWithMetadata {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const payee: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const amount: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const metadata: Uint8Array = deserializer.deserializeBytes();

      var deserializer = new BcsDeserializer(script_fun.value.args[3]);
      const metadata_signature: Uint8Array = deserializer.deserializeBytes();

      return new ScriptFunctionCallVariantPeerToPeerWithMetadata(
        script_fun.value.ty_args[0],
        payee,
        amount,
        metadata,
        metadata_signature
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodePreburnScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantPreburn {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const amount: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantPreburn(
        script_fun.value.ty_args[0],
        amount
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodePublishSharedEd25519PublicKeyScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantPublishSharedEd25519PublicKey {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const public_key: Uint8Array = deserializer.deserializeBytes();

      return new ScriptFunctionCallVariantPublishSharedEd25519PublicKey(
        public_key
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeRegisterValidatorConfigScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantRegisterValidatorConfig {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const validator_account: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const consensus_pubkey: Uint8Array = deserializer.deserializeBytes();

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const validator_network_addresses: Uint8Array = deserializer.deserializeBytes();

      var deserializer = new BcsDeserializer(script_fun.value.args[3]);
      const fullnode_network_addresses: Uint8Array = deserializer.deserializeBytes();

      return new ScriptFunctionCallVariantRegisterValidatorConfig(
        validator_account,
        consensus_pubkey,
        validator_network_addresses,
        fullnode_network_addresses
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeRemoveExchangeLiquidityScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantRemoveExchangeLiquidity {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const exchange: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const provider: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const lp_coin_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantRemoveExchangeLiquidity(
        exchange,
        provider,
        lp_coin_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeRemoveExchangeLiquidityScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantRemoveExchangeLiquidity {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const exchange: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const provider: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const lp_coin_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantRemoveExchangeLiquidity(
        exchange,
        provider,
        lp_coin_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeRemoveExchangeLiquidityScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantRemoveExchangeLiquidity {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const exchange: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const provider: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const lp_coin_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantRemoveExchangeLiquidity(
        exchange,
        provider,
        lp_coin_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeRemoveExchangeLiquidityScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantRemoveExchangeLiquidity {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const exchange: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const provider: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const lp_coin_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantRemoveExchangeLiquidity(
        exchange,
        provider,
        lp_coin_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeRemoveExchangeLiquidityScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantRemoveExchangeLiquidity {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const exchange: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const provider: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const lp_coin_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantRemoveExchangeLiquidity(
        exchange,
        provider,
        lp_coin_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeRemoveExchangeLiquidityScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantRemoveExchangeLiquidity {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const exchange: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const provider: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const lp_coin_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantRemoveExchangeLiquidity(
        exchange,
        provider,
        lp_coin_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeRemoveValidatorAndReconfigureScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantRemoveValidatorAndReconfigure {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const sliding_nonce: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const validator_name: Uint8Array = deserializer.deserializeBytes();

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const validator_address: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      return new ScriptFunctionCallVariantRemoveValidatorAndReconfigure(
        sliding_nonce,
        validator_name,
        validator_address
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeRemoveVaspDomainScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantRemoveVaspDomain {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const address: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const domain: Uint8Array = deserializer.deserializeBytes();

      return new ScriptFunctionCallVariantRemoveVaspDomain(
        address,
        domain
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeRotateAuthenticationKeyScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantRotateAuthenticationKey {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const new_key: Uint8Array = deserializer.deserializeBytes();

      return new ScriptFunctionCallVariantRotateAuthenticationKey(
        new_key
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeRotateAuthenticationKeyWithNonceScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantRotateAuthenticationKeyWithNonce {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const sliding_nonce: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const new_key: Uint8Array = deserializer.deserializeBytes();

      return new ScriptFunctionCallVariantRotateAuthenticationKeyWithNonce(
        sliding_nonce,
        new_key
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeRotateAuthenticationKeyWithNonceAdminScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantRotateAuthenticationKeyWithNonceAdmin {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const sliding_nonce: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const new_key: Uint8Array = deserializer.deserializeBytes();

      return new ScriptFunctionCallVariantRotateAuthenticationKeyWithNonceAdmin(
        sliding_nonce,
        new_key
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeRotateAuthenticationKeyWithRecoveryAddressScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantRotateAuthenticationKeyWithRecoveryAddress {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const recovery_address: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const to_recover: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const new_key: Uint8Array = deserializer.deserializeBytes();

      return new ScriptFunctionCallVariantRotateAuthenticationKeyWithRecoveryAddress(
        recovery_address,
        to_recover,
        new_key
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeRotateDualAttestationInfoScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantRotateDualAttestationInfo {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const new_url: Uint8Array = deserializer.deserializeBytes();

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const new_key: Uint8Array = deserializer.deserializeBytes();

      return new ScriptFunctionCallVariantRotateDualAttestationInfo(
        new_url,
        new_key
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeRotateSharedEd25519PublicKeyScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantRotateSharedEd25519PublicKey {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const public_key: Uint8Array = deserializer.deserializeBytes();

      return new ScriptFunctionCallVariantRotateSharedEd25519PublicKey(
        public_key
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeSetGasConstantsScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantSetGasConstants {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const sliding_nonce: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const global_memory_per_byte_cost: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const global_memory_per_byte_write_cost: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[3]);
      const min_transaction_gas_units: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[4]);
      const large_transaction_cutoff: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[5]);
      const intrinsic_gas_per_byte: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[6]);
      const maximum_number_of_gas_units: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[7]);
      const min_price_per_gas_unit: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[8]);
      const max_price_per_gas_unit: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[9]);
      const max_transaction_size_in_bytes: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[10]);
      const gas_unit_scaling_factor: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[11]);
      const default_account_size: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantSetGasConstants(
        sliding_nonce,
        global_memory_per_byte_cost,
        global_memory_per_byte_write_cost,
        min_transaction_gas_units,
        large_transaction_cutoff,
        intrinsic_gas_per_byte,
        maximum_number_of_gas_units,
        min_price_per_gas_unit,
        max_price_per_gas_unit,
        max_transaction_size_in_bytes,
        gas_unit_scaling_factor,
        default_account_size
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeSetValidatorConfigAndReconfigureScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantSetValidatorConfigAndReconfigure {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const validator_account: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const consensus_pubkey: Uint8Array = deserializer.deserializeBytes();

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const validator_network_addresses: Uint8Array = deserializer.deserializeBytes();

      var deserializer = new BcsDeserializer(script_fun.value.args[3]);
      const fullnode_network_addresses: Uint8Array = deserializer.deserializeBytes();

      return new ScriptFunctionCallVariantSetValidatorConfigAndReconfigure(
        validator_account,
        consensus_pubkey,
        validator_network_addresses,
        fullnode_network_addresses
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeSetValidatorOperatorScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantSetValidatorOperator {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const operator_name: Uint8Array = deserializer.deserializeBytes();

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const operator_account: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      return new ScriptFunctionCallVariantSetValidatorOperator(
        operator_name,
        operator_account
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeSetValidatorOperatorWithNonceAdminScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantSetValidatorOperatorWithNonceAdmin {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const sliding_nonce: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const operator_name: Uint8Array = deserializer.deserializeBytes();

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const operator_account: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      return new ScriptFunctionCallVariantSetValidatorOperatorWithNonceAdmin(
        sliding_nonce,
        operator_name,
        operator_account
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeTieredMintScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantTieredMint {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const sliding_nonce: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const designated_dealer_address: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const mint_amount: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[3]);
      const tier_index: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantTieredMint(
        script_fun.value.ty_args[0],
        sliding_nonce,
        designated_dealer_address,
        mint_amount,
        tier_index
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeUnfreezeAccountScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantUnfreezeAccount {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const sliding_nonce: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const to_unfreeze_account: DiemTypes.AccountAddress = DiemTypes.AccountAddress.deserialize(deserializer);

      return new ScriptFunctionCallVariantUnfreezeAccount(
        sliding_nonce,
        to_unfreeze_account
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeUpdateDiemConsensusConfigScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantUpdateDiemConsensusConfig {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const sliding_nonce: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const config: Uint8Array = deserializer.deserializeBytes();

      return new ScriptFunctionCallVariantUpdateDiemConsensusConfig(
        sliding_nonce,
        config
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeUpdateDiemVersionScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantUpdateDiemVersion {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const sliding_nonce: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const major: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantUpdateDiemVersion(
        sliding_nonce,
        major
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeUpdateDualAttestationLimitScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantUpdateDualAttestationLimit {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const sliding_nonce: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const new_micro_xdx_limit: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantUpdateDualAttestationLimit(
        sliding_nonce,
        new_micro_xdx_limit
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeUpdateExchangeRateScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantUpdateExchangeRate {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const sliding_nonce: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const new_exchange_rate_numerator: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[2]);
      const new_exchange_rate_denominator: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantUpdateExchangeRate(
        script_fun.value.ty_args[0],
        sliding_nonce,
        new_exchange_rate_numerator,
        new_exchange_rate_denominator
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeUpdateMintingAbilityScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantUpdateMintingAbility {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const allow_minting: boolean = deserializer.deserializeBool();

      return new ScriptFunctionCallVariantUpdateMintingAbility(
        script_fun.value.ty_args[0],
        allow_minting
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static ADD_LIQUIDITY_CODE = Stdlib.fromHexString('a11ceb0b040000000501000403040a050e1307212b084c200000010101020304000003050600030c0c030205050001060c01050303050501030a45786368616e67654142065369676e65720a616464726573735f6f660d6164645f6c6971756964697479f5074e2be9e38616033c2a5540020710000000000000000000000000000000010000010c0e0111000c030e0011000c040a020a030a0411010102');

  static MINT_COIN_A_CODE = Stdlib.fromHexString('a11ceb0b040000000501000203020505070a07110b081c1000000001020300020c03000203060c010305436f696e41046d696e74f5074e2be9e38616033c2a5540020710000001050a010e0011000102');

  static MINT_COIN_B_CODE = Stdlib.fromHexString('a11ceb0b040000000501000203020505070a07110b081c1000000001020300020c03000203060c010305436f696e42046d696e74f5074e2be9e38616033c2a5540020710000001050a010e0011000102');

  static REMOVE_LIQUIDITY_CODE = Stdlib.fromHexString('a11ceb0b040000000501000403040a050e1407222e0850200000010101020304000003050600030c0c030205050001060c0105030305050203030a45786368616e67654142065369676e65720a616464726573735f6f661072656d6f76655f6c6971756964697479f5074e2be9e38616033c2a5540020710000000000000000000000000000000010000010d0e0111000c030e0011000c040a020a030a041101010102');

  static ScriptArgs: {[name: string]: ScriptDef} = {
    AddLiquidity: {
      stdlibEncodeFunction: Stdlib.encodeAddLiquidityScript,
      stdlibDecodeFunction: Stdlib.decodeAddLiquidityScript,
      codeName: 'ADD_LIQUIDITY',
      description: "",
      typeArgs: [],
      args: [
    {name: "amt", type: {type: Types.U64}}
      ]
    },
    MintCoinA: {
      stdlibEncodeFunction: Stdlib.encodeMintCoinAScript,
      stdlibDecodeFunction: Stdlib.decodeMintCoinAScript,
      codeName: 'MINT_COIN_A',
      description: "",
      typeArgs: [],
      args: [
    {name: "amt", type: {type: Types.U64}}
      ]
    },
    MintCoinB: {
      stdlibEncodeFunction: Stdlib.encodeMintCoinBScript,
      stdlibDecodeFunction: Stdlib.decodeMintCoinBScript,
      codeName: 'MINT_COIN_B',
      description: "",
      typeArgs: [],
      args: [
    {name: "amt", type: {type: Types.U64}}
      ]
    },
    RemoveLiquidity: {
      stdlibEncodeFunction: Stdlib.encodeRemoveLiquidityScript,
      stdlibDecodeFunction: Stdlib.decodeRemoveLiquidityScript,
      codeName: 'REMOVE_LIQUIDITY',
      description: "",
      typeArgs: [],
      args: [
    {name: "amt", type: {type: Types.U64}}
      ]
    },
  }

  static ScriptFunctionArgs: {[name: string]: ScriptFunctionDef} = {

                AddCurrencyToAccount: {
      stdlibEncodeFunction: Stdlib.encodeAddCurrencyToAccountScriptFunction,
      description: " # Summary" + 
     " Adds a zero `Currency` balance to the sending `account`. This will enable `account` to" + 
     " send, receive, and hold `Diem::Diem<Currency>` coins. This transaction can be" + 
     " successfully sent by any account that is allowed to hold balances" + 
     " (e.g., VASP, Designated Dealer)." + 
     "" + 
     " # Technical Description" + 
     " After the successful execution of this transaction the sending account will have a" + 
     " `DiemAccount::Balance<Currency>` resource with zero balance published under it. Only" + 
     " accounts that can hold balances can send this transaction, the sending account cannot" + 
     " already have a `DiemAccount::Balance<Currency>` published under it." + 
     "" + 
     " # Parameters" + 
     " | Name       | Type     | Description                                                                                                                                         |" + 
     " | ------     | ------   | -------------                                                                                                                                       |" + 
     " | `Currency` | Type     | The Move type for the `Currency` being added to the sending account of the transaction. `Currency` must be an already-registered currency on-chain. |" + 
     " | `account`  | `signer` | The signer of the sending account of the transaction.                                                                                               |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category              | Error Reason                             | Description                                                                |" + 
     " | ----------------            | --------------                           | -------------                                                              |" + 
     " | `Errors::NOT_PUBLISHED`     | `Diem::ECURRENCY_INFO`                  | The `Currency` is not a registered currency on-chain.                      |" + 
     " | `Errors::INVALID_ARGUMENT`  | `DiemAccount::EROLE_CANT_STORE_BALANCE` | The sending `account`'s role does not permit balances.                     |" + 
     " | `Errors::ALREADY_PUBLISHED` | `DiemAccount::EADD_EXISTING_CURRENCY`   | A balance for `Currency` is already published under the sending `account`. |" + 
     "" + 
     " # Related Scripts" + 
     " * `AccountCreationScripts::create_child_vasp_account`" + 
     " * `AccountCreationScripts::create_parent_vasp_account`" + 
     " * `PaymentScripts::peer_to_peer_with_metadata`",
      typeArgs: ["currency"],
      args: [
        
      ]
    },
                

                AddExchangeLiquidity: {
      stdlibEncodeFunction: Stdlib.encodeAddExchangeLiquidityScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "exchange", type: {type: Types.Address}}, {name: "provider", type: {type: Types.Address}}, {name: "coin_a_amt", type: {type: Types.U64}}
      ]
    },
                

                AddExchangeLiquidity: {
      stdlibEncodeFunction: Stdlib.encodeAddExchangeLiquidityScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "exchange", type: {type: Types.Address}}, {name: "provider", type: {type: Types.Address}}, {name: "coin_b_amt", type: {type: Types.U64}}
      ]
    },
                

                AddExchangeLiquidity: {
      stdlibEncodeFunction: Stdlib.encodeAddExchangeLiquidityScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "exchange", type: {type: Types.Address}}, {name: "provider", type: {type: Types.Address}}, {name: "coin_a_amt", type: {type: Types.U64}}
      ]
    },
                

                AddExchangeLiquidity: {
      stdlibEncodeFunction: Stdlib.encodeAddExchangeLiquidityScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "exchange", type: {type: Types.Address}}, {name: "provider", type: {type: Types.Address}}, {name: "coin_a_amt", type: {type: Types.U64}}
      ]
    },
                

                AddExchangeLiquidity: {
      stdlibEncodeFunction: Stdlib.encodeAddExchangeLiquidityScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "exchange", type: {type: Types.Address}}, {name: "provider", type: {type: Types.Address}}, {name: "coin_b_amt", type: {type: Types.U64}}
      ]
    },
                

                AddExchangeLiquidity: {
      stdlibEncodeFunction: Stdlib.encodeAddExchangeLiquidityScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "exchange", type: {type: Types.Address}}, {name: "provider", type: {type: Types.Address}}, {name: "coin_c_amt", type: {type: Types.U64}}
      ]
    },
                

                AddRecoveryRotationCapability: {
      stdlibEncodeFunction: Stdlib.encodeAddRecoveryRotationCapabilityScriptFunction,
      description: " # Summary" + 
     " Stores the sending accounts ability to rotate its authentication key with a designated recovery" + 
     " account. Both the sending and recovery accounts need to belong to the same VASP and" + 
     " both be VASP accounts. After this transaction both the sending account and the" + 
     " specified recovery account can rotate the sender account's authentication key." + 
     "" + 
     " # Technical Description" + 
     " Adds the `DiemAccount::KeyRotationCapability` for the sending account" + 
     " (`to_recover_account`) to the `RecoveryAddress::RecoveryAddress` resource under" + 
     " `recovery_address`. After this transaction has been executed successfully the account at" + 
     " `recovery_address` and the `to_recover_account` may rotate the authentication key of" + 
     " `to_recover_account` (the sender of this transaction)." + 
     "" + 
     " The sending account of this transaction (`to_recover_account`) must not have previously given away its unique key" + 
     " rotation capability, and must be a VASP account. The account at `recovery_address`" + 
     " must also be a VASP account belonging to the same VASP as the `to_recover_account`." + 
     " Additionally the account at `recovery_address` must have already initialized itself as" + 
     " a recovery account address using the `AccountAdministrationScripts::create_recovery_address` transaction script." + 
     "" + 
     " The sending account's (`to_recover_account`) key rotation capability is" + 
     " removed in this transaction and stored in the `RecoveryAddress::RecoveryAddress`" + 
     " resource stored under the account at `recovery_address`." + 
     "" + 
     " # Parameters" + 
     " | Name                 | Type      | Description                                                                                               |" + 
     " | ------               | ------    | -------------                                                                                             |" + 
     " | `to_recover_account` | `signer`  | The signer of the sending account of this transaction.                                                    |" + 
     " | `recovery_address`   | `address` | The account address where the `to_recover_account`'s `DiemAccount::KeyRotationCapability` will be stored. |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                                              | Description                                                                                       |" + 
     " | ----------------           | --------------                                            | -------------                                                                                     |" + 
     " | `Errors::INVALID_STATE`    | `DiemAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` | `to_recover_account` has already delegated/extracted its `DiemAccount::KeyRotationCapability`.    |" + 
     " | `Errors::NOT_PUBLISHED`    | `RecoveryAddress::ERECOVERY_ADDRESS`                      | `recovery_address` does not have a `RecoveryAddress` resource published under it.                 |" + 
     " | `Errors::INVALID_ARGUMENT` | `RecoveryAddress::EINVALID_KEY_ROTATION_DELEGATION`       | `to_recover_account` and `recovery_address` do not belong to the same VASP.                       |" + 
     " | `Errors::LIMIT_EXCEEDED`   | ` RecoveryAddress::EMAX_KEYS_REGISTERED`                  | `RecoveryAddress::MAX_REGISTERED_KEYS` have already been registered with this `recovery_address`. |" + 
     "" + 
     " # Related Scripts" + 
     " * `AccountAdministrationScripts::create_recovery_address`" + 
     " * `AccountAdministrationScripts::rotate_authentication_key_with_recovery_address`",
      typeArgs: [],
      args: [
        {name: "recovery_address", type: {type: Types.Address}}
      ]
    },
                

                AddValidatorAndReconfigure: {
      stdlibEncodeFunction: Stdlib.encodeAddValidatorAndReconfigureScriptFunction,
      description: " # Summary" + 
     " Adds a validator account to the validator set, and triggers a" + 
     " reconfiguration of the system to admit the account to the validator set for the system. This" + 
     " transaction can only be successfully called by the Diem Root account." + 
     "" + 
     " # Technical Description" + 
     " This script adds the account at `validator_address` to the validator set." + 
     " This transaction emits a `DiemConfig::NewEpochEvent` event and triggers a" + 
     " reconfiguration. Once the reconfiguration triggered by this script's" + 
     " execution has been performed, the account at the `validator_address` is" + 
     " considered to be a validator in the network." + 
     "" + 
     " This transaction script will fail if the `validator_address` address is already in the validator set" + 
     " or does not have a `ValidatorConfig::ValidatorConfig` resource already published under it." + 
     "" + 
     " # Parameters" + 
     " | Name                | Type         | Description                                                                                                                        |" + 
     " | ------              | ------       | -------------                                                                                                                      |" + 
     " | `dr_account`        | `signer`     | The signer of the sending account of this transaction. Must be the Diem Root signer.                                               |" + 
     " | `sliding_nonce`     | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                                         |" + 
     " | `validator_name`    | `vector<u8>` | ASCII-encoded human name for the validator. Must match the human name in the `ValidatorConfig::ValidatorConfig` for the validator. |" + 
     " | `validator_address` | `address`    | The validator account address to be added to the validator set.                                                                    |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                                 | Description                                                                                                                               |" + 
     " | ----------------           | --------------                               | -------------                                                                                                                             |" + 
     " | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`               | A `SlidingNonce` resource is not published under `dr_account`.                                                                            |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`               | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not.                                                |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`               | The `sliding_nonce` is too far in the future.                                                                                             |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`      | The `sliding_nonce` has been previously recorded.                                                                                         |" + 
     " | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::EDIEM_ROOT`                  | The sending account is not the Diem Root account.                                                                                         |" + 
     " | `Errors::REQUIRES_ROLE`    | `Roles::EDIEM_ROOT`                          | The sending account is not the Diem Root account.                                                                                         |" + 
     " | 0                          | 0                                            | The provided `validator_name` does not match the already-recorded human name for the validator.                                           |" + 
     " | `Errors::INVALID_ARGUMENT` | `DiemSystem::EINVALID_PROSPECTIVE_VALIDATOR` | The validator to be added does not have a `ValidatorConfig::ValidatorConfig` resource published under it, or its `config` field is empty. |" + 
     " | `Errors::INVALID_ARGUMENT` | `DiemSystem::EALREADY_A_VALIDATOR`           | The `validator_address` account is already a registered validator.                                                                        |" + 
     " | `Errors::INVALID_STATE`    | `DiemConfig::EINVALID_BLOCK_TIME`            | An invalid time value was encountered in reconfiguration. Unlikely to occur.                                                              |" + 
     " | `Errors::LIMIT_EXCEEDED`   | `DiemSystem::EMAX_VALIDATORS`                | The validator set is already at its maximum size. The validator could not be added.                                                       |" + 
     "" + 
     " # Related Scripts" + 
     " * `AccountCreationScripts::create_validator_account`" + 
     " * `AccountCreationScripts::create_validator_operator_account`" + 
     " * `ValidatorAdministrationScripts::register_validator_config`" + 
     " * `ValidatorAdministrationScripts::remove_validator_and_reconfigure`" + 
     " * `ValidatorAdministrationScripts::set_validator_operator`" + 
     " * `ValidatorAdministrationScripts::set_validator_operator_with_nonce_admin`" + 
     " * `ValidatorAdministrationScripts::set_validator_config_and_reconfigure`",
      typeArgs: [],
      args: [
        {name: "sliding_nonce", type: {type: Types.U64}}, {name: "validator_name", type: {type: Types.Array, arrayType: {type: Types.U8}}}, {name: "validator_address", type: {type: Types.Address}}
      ]
    },
                

                AddVaspDomain: {
      stdlibEncodeFunction: Stdlib.encodeAddVaspDomainScriptFunction,
      description: " # Summary" + 
     " Add a VASP domain to parent VASP account. The transaction can only be sent by" + 
     " the Treasury Compliance account." + 
     "" + 
     " # Technical Description" + 
     " Adds a `VASPDomain::VASPDomain` to the `domains` field of the `VASPDomain::VASPDomains` resource published under" + 
     " the account at `address`." + 
     "" + 
     " # Parameters" + 
     " | Name         | Type         | Description                                                                                     |" + 
     " | ------       | ------       | -------------                                                                                   |" + 
     " | `tc_account` | `signer`     | The signer of the sending account of this transaction. Must be the Treasury Compliance account. |" + 
     " | `address`    | `address`    | The `address` of the parent VASP account that will have have `domain` added to its domains.     |" + 
     " | `domain`     | `vector<u8>` | The domain to be added.                                                                         |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                             | Description                                                                                                                            |" + 
     " | ----------------           | --------------                           | -------------                                                                                                                          |" + 
     " | `Errors::REQUIRES_ROLE`    | `Roles::ETREASURY_COMPLIANCE`            | The sending account is not the Treasury Compliance account.                                                                            |" + 
     " | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE`    | `tc_account` is not the Treasury Compliance account.                                                                                   |" + 
     " | `Errors::NOT_PUBLISHED`    | `VASPDomain::EVASP_DOMAIN_MANAGER`        | The `VASPDomain::VASPDomainManager` resource is not yet published under the Treasury Compliance account.                                 |" + 
     " | `Errors::NOT_PUBLISHED`    | `VASPDomain::EVASP_DOMAINS_NOT_PUBLISHED` | `address` does not have a `VASPDomain::VASPDomains` resource published under it.                                                         |" + 
     " | `Errors::INVALID_ARGUMENT` | `VASPDomain::EDOMAIN_ALREADY_EXISTS`         | The `domain` already exists in the list of `VASPDomain::VASPDomain`s  in the `VASPDomain::VASPDomains` resource published under `address`. |" + 
     " | `Errors::INVALID_ARGUMENT` | `VASPDomain::EINVALID_VASP_DOMAIN`        | The `domain` is greater in length than `VASPDomain::DOMAIN_LENGTH`.                                                                        |",
      typeArgs: [],
      args: [
        {name: "address", type: {type: Types.Address}}, {name: "domain", type: {type: Types.Array, arrayType: {type: Types.U8}}}
      ]
    },
                

                BurnTxnFees: {
      stdlibEncodeFunction: Stdlib.encodeBurnTxnFeesScriptFunction,
      description: " # Summary" + 
     " Burns the transaction fees collected in the `CoinType` currency so that the" + 
     " Diem association may reclaim the backing coins off-chain. May only be sent" + 
     " by the Treasury Compliance account." + 
     "" + 
     " # Technical Description" + 
     " Burns the transaction fees collected in `CoinType` so that the" + 
     " association may reclaim the backing coins. Once this transaction has executed" + 
     " successfully all transaction fees that will have been collected in" + 
     " `CoinType` since the last time this script was called with that specific" + 
     " currency. Both `balance` and `preburn` fields in the" + 
     " `TransactionFee::TransactionFee<CoinType>` resource published under the `0xB1E55ED`" + 
     " account address will have a value of 0 after the successful execution of this script." + 
     "" + 
     " # Events" + 
     " The successful execution of this transaction will emit a `Diem::BurnEvent` on the event handle" + 
     " held in the `Diem::CurrencyInfo<CoinType>` resource's `burn_events` published under" + 
     " `0xA550C18`." + 
     "" + 
     " # Parameters" + 
     " | Name         | Type     | Description                                                                                                                                         |" + 
     " | ------       | ------   | -------------                                                                                                                                       |" + 
     " | `CoinType`   | Type     | The Move type for the `CoinType` being added to the sending account of the transaction. `CoinType` must be an already-registered currency on-chain. |" + 
     " | `tc_account` | `signer` | The signer of the sending account of this transaction. Must be the Treasury Compliance account.                                                     |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                          | Description                                                 |" + 
     " | ----------------           | --------------                        | -------------                                               |" + 
     " | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE` | The sending account is not the Treasury Compliance account. |" + 
     " | `Errors::NOT_PUBLISHED`    | `TransactionFee::ETRANSACTION_FEE`    | `CoinType` is not an accepted transaction fee currency.     |" + 
     " | `Errors::INVALID_ARGUMENT` | `Diem::ECOIN`                        | The collected fees in `CoinType` are zero.                  |" + 
     "" + 
     " # Related Scripts" + 
     " * `TreasuryComplianceScripts::burn_with_amount`" + 
     " * `TreasuryComplianceScripts::cancel_burn_with_amount`",
      typeArgs: ["coin_type"],
      args: [
        
      ]
    },
                

                BurnWithAmount: {
      stdlibEncodeFunction: Stdlib.encodeBurnWithAmountScriptFunction,
      description: " # Summary" + 
     " Burns the coins held in a preburn resource in the preburn queue at the" + 
     " specified preburn address, which are equal to the `amount` specified in the" + 
     " transaction. Finds the first relevant outstanding preburn request with" + 
     " matching amount and removes the contained coins from the system. The sending" + 
     " account must be the Treasury Compliance account." + 
     " The account that holds the preburn queue resource will normally be a Designated" + 
     " Dealer, but there are no enforced requirements that it be one." + 
     "" + 
     " # Technical Description" + 
     " This transaction permanently destroys all the coins of `Token` type" + 
     " stored in the `Diem::Preburn<Token>` resource published under the" + 
     " `preburn_address` account address." + 
     "" + 
     " This transaction will only succeed if the sending `account` has a" + 
     " `Diem::BurnCapability<Token>`, and a `Diem::Preburn<Token>` resource" + 
     " exists under `preburn_address`, with a non-zero `to_burn` field. After the successful execution" + 
     " of this transaction the `total_value` field in the" + 
     " `Diem::CurrencyInfo<Token>` resource published under `0xA550C18` will be" + 
     " decremented by the value of the `to_burn` field of the preburn resource" + 
     " under `preburn_address` immediately before this transaction, and the" + 
     " `to_burn` field of the preburn resource will have a zero value." + 
     "" + 
     " # Events" + 
     " The successful execution of this transaction will emit a `Diem::BurnEvent` on the event handle" + 
     " held in the `Diem::CurrencyInfo<Token>` resource's `burn_events` published under" + 
     " `0xA550C18`." + 
     "" + 
     " # Parameters" + 
     " | Name              | Type      | Description                                                                                                        |" + 
     " | ------            | ------    | -------------                                                                                                      |" + 
     " | `Token`           | Type      | The Move type for the `Token` currency being burned. `Token` must be an already-registered currency on-chain.      |" + 
     " | `tc_account`      | `signer`  | The signer of the sending account of this transaction, must have a burn capability for `Token` published under it. |" + 
     " | `sliding_nonce`   | `u64`     | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                         |" + 
     " | `preburn_address` | `address` | The address where the coins to-be-burned are currently held.                                                       |" + 
     " | `amount`          | `u64`     | The amount to be burned.                                                                                           |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category                | Error Reason                            | Description                                                                                                                         |" + 
     " | ----------------              | --------------                          | -------------                                                                                                                       |" + 
     " | `Errors::NOT_PUBLISHED`       | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `account`.                                                                         |" + 
     " | `Errors::INVALID_ARGUMENT`    | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not.                                          |" + 
     " | `Errors::INVALID_ARGUMENT`    | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                                                                       |" + 
     " | `Errors::INVALID_ARGUMENT`    | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                                                                   |" + 
     " | `Errors::REQUIRES_CAPABILITY` | `Diem::EBURN_CAPABILITY`                | The sending `account` does not have a `Diem::BurnCapability<Token>` published under it.                                             |" + 
     " | `Errors::INVALID_STATE`       | `Diem::EPREBURN_NOT_FOUND`              | The `Diem::PreburnQueue<Token>` resource under `preburn_address` does not contain a preburn request with a value matching `amount`. |" + 
     " | `Errors::NOT_PUBLISHED`       | `Diem::EPREBURN_QUEUE`                  | The account at `preburn_address` does not have a `Diem::PreburnQueue<Token>` resource published under it.                           |" + 
     " | `Errors::NOT_PUBLISHED`       | `Diem::ECURRENCY_INFO`                  | The specified `Token` is not a registered currency on-chain.                                                                        |" + 
     "" + 
     " # Related Scripts" + 
     " * `TreasuryComplianceScripts::burn_txn_fees`" + 
     " * `TreasuryComplianceScripts::cancel_burn_with_amount`" + 
     " * `TreasuryComplianceScripts::preburn`",
      typeArgs: ["token"],
      args: [
        {name: "sliding_nonce", type: {type: Types.U64}}, {name: "preburn_address", type: {type: Types.Address}}, {name: "amount", type: {type: Types.U64}}
      ]
    },
                

                CancelBurnWithAmount: {
      stdlibEncodeFunction: Stdlib.encodeCancelBurnWithAmountScriptFunction,
      description: " # Summary" + 
     " Cancels and returns the coins held in the preburn area under" + 
     " `preburn_address`, which are equal to the `amount` specified in the transaction. Finds the first preburn" + 
     " resource with the matching amount and returns the funds to the `preburn_address`'s balance." + 
     " Can only be successfully sent by an account with Treasury Compliance role." + 
     "" + 
     " # Technical Description" + 
     " Cancels and returns all coins held in the `Diem::Preburn<Token>` resource under the `preburn_address` and" + 
     " return the funds to the `preburn_address` account's `DiemAccount::Balance<Token>`." + 
     " The transaction must be sent by an `account` with a `Diem::BurnCapability<Token>`" + 
     " resource published under it. The account at `preburn_address` must have a" + 
     " `Diem::Preburn<Token>` resource published under it, and its value must be nonzero. The transaction removes" + 
     " the entire balance held in the `Diem::Preburn<Token>` resource, and returns it back to the account's" + 
     " `DiemAccount::Balance<Token>` under `preburn_address`. Due to this, the account at" + 
     " `preburn_address` must already have a balance in the `Token` currency published" + 
     " before this script is called otherwise the transaction will fail." + 
     "" + 
     " # Events" + 
     " The successful execution of this transaction will emit:" + 
     " * A `Diem::CancelBurnEvent` on the event handle held in the `Diem::CurrencyInfo<Token>`" + 
     " resource's `burn_events` published under `0xA550C18`." + 
     " * A `DiemAccount::ReceivedPaymentEvent` on the `preburn_address`'s" + 
     " `DiemAccount::DiemAccount` `received_events` event handle with both the `payer` and `payee`" + 
     " being `preburn_address`." + 
     "" + 
     " # Parameters" + 
     " | Name              | Type      | Description                                                                                                                          |" + 
     " | ------            | ------    | -------------                                                                                                                        |" + 
     " | `Token`           | Type      | The Move type for the `Token` currenty that burning is being cancelled for. `Token` must be an already-registered currency on-chain. |" + 
     " | `account`         | `signer`  | The signer of the sending account of this transaction, must have a burn capability for `Token` published under it.                   |" + 
     " | `preburn_address` | `address` | The address where the coins to-be-burned are currently held.                                                                         |" + 
     " | `amount`          | `u64`     | The amount to be cancelled.                                                                                                          |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category                | Error Reason                                     | Description                                                                                                                         |" + 
     " | ----------------              | --------------                                   | -------------                                                                                                                       |" + 
     " | `Errors::REQUIRES_CAPABILITY` | `Diem::EBURN_CAPABILITY`                         | The sending `account` does not have a `Diem::BurnCapability<Token>` published under it.                                             |" + 
     " | `Errors::INVALID_STATE`       | `Diem::EPREBURN_NOT_FOUND`                       | The `Diem::PreburnQueue<Token>` resource under `preburn_address` does not contain a preburn request with a value matching `amount`. |" + 
     " | `Errors::NOT_PUBLISHED`       | `Diem::EPREBURN_QUEUE`                           | The account at `preburn_address` does not have a `Diem::PreburnQueue<Token>` resource published under it.                           |" + 
     " | `Errors::NOT_PUBLISHED`       | `Diem::ECURRENCY_INFO`                           | The specified `Token` is not a registered currency on-chain.                                                                        |" + 
     " | `Errors::INVALID_ARGUMENT`    | `DiemAccount::EPAYEE_CANT_ACCEPT_CURRENCY_TYPE`  | The account at `preburn_address` doesn't have a balance resource for `Token`.                                                       |" + 
     " | `Errors::LIMIT_EXCEEDED`      | `DiemAccount::EDEPOSIT_EXCEEDS_LIMITS`           | The depositing of the funds held in the prebun area would exceed the `account`'s account limits.                                    |" + 
     " | `Errors::INVALID_STATE`       | `DualAttestation::EPAYEE_COMPLIANCE_KEY_NOT_SET` | The `account` does not have a compliance key set on it but dual attestion checking was performed.                                   |" + 
     "" + 
     " # Related Scripts" + 
     " * `TreasuryComplianceScripts::burn_txn_fees`" + 
     " * `TreasuryComplianceScripts::burn_with_amount`" + 
     " * `TreasuryComplianceScripts::preburn`",
      typeArgs: ["token"],
      args: [
        {name: "preburn_address", type: {type: Types.Address}}, {name: "amount", type: {type: Types.U64}}
      ]
    },
                

                CreateChildVaspAccount: {
      stdlibEncodeFunction: Stdlib.encodeCreateChildVaspAccountScriptFunction,
      description: " # Summary" + 
     " Creates a Child VASP account with its parent being the sending account of the transaction." + 
     " The sender of the transaction must be a Parent VASP account." + 
     "" + 
     " # Technical Description" + 
     " Creates a `ChildVASP` account for the sender `parent_vasp` at `child_address` with a balance of" + 
     " `child_initial_balance` in `CoinType` and an initial authentication key of" + 
     " `auth_key_prefix | child_address`. Authentication key prefixes, and how to construct them from an ed25519 public key is described" + 
     " [here](https://developers.diem.com/docs/core/accounts/#addresses-authentication-keys-and-cryptographic-keys)." + 
     "" + 
     " If `add_all_currencies` is true, the child address will have a zero balance in all available" + 
     " currencies in the system." + 
     "" + 
     " The new account will be a child account of the transaction sender, which must be a" + 
     " Parent VASP account. The child account will be recorded against the limit of" + 
     " child accounts of the creating Parent VASP account." + 
     "" + 
     " # Events" + 
     " Successful execution will emit:" + 
     " * A `DiemAccount::CreateAccountEvent` with the `created` field being `child_address`," + 
     " and the `rold_id` field being `Roles::CHILD_VASP_ROLE_ID`. This is emitted on the" + 
     " `DiemAccount::AccountOperationsCapability` `creation_events` handle." + 
     "" + 
     " Successful execution with a `child_initial_balance` greater than zero will additionaly emit:" + 
     " * A `DiemAccount::SentPaymentEvent` with the `payee` field being `child_address`." + 
     " This is emitted on the Parent VASP's `DiemAccount::DiemAccount` `sent_events` handle." + 
     " * A `DiemAccount::ReceivedPaymentEvent` with the  `payer` field being the Parent VASP's address." + 
     " This is emitted on the new Child VASPS's `DiemAccount::DiemAccount` `received_events` handle." + 
     "" + 
     " # Parameters" + 
     " | Name                    | Type         | Description                                                                                                                                 |" + 
     " | ------                  | ------       | -------------                                                                                                                               |" + 
     " | `CoinType`              | Type         | The Move type for the `CoinType` that the child account should be created with. `CoinType` must be an already-registered currency on-chain. |" + 
     " | `parent_vasp`           | `signer`     | The reference of the sending account. Must be a Parent VASP account.                                                                        |" + 
     " | `child_address`         | `address`    | Address of the to-be-created Child VASP account.                                                                                            |" + 
     " | `auth_key_prefix`       | `vector<u8>` | The authentication key prefix that will be used initially for the newly created account.                                                    |" + 
     " | `add_all_currencies`    | `bool`       | Whether to publish balance resources for all known currencies when the account is created.                                                  |" + 
     " | `child_initial_balance` | `u64`        | The initial balance in `CoinType` to give the child account when it's created.                                                              |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category              | Error Reason                                             | Description                                                                              |" + 
     " | ----------------            | --------------                                           | -------------                                                                            |" + 
     " | `Errors::INVALID_ARGUMENT`  | `DiemAccount::EMALFORMED_AUTHENTICATION_KEY`            | The `auth_key_prefix` was not of length 32.                                              |" + 
     " | `Errors::REQUIRES_ROLE`     | `Roles::EPARENT_VASP`                                    | The sending account wasn't a Parent VASP account.                                        |" + 
     " | `Errors::ALREADY_PUBLISHED` | `Roles::EROLE_ID`                                        | The `child_address` address is already taken.                                            |" + 
     " | `Errors::LIMIT_EXCEEDED`    | `VASP::ETOO_MANY_CHILDREN`                               | The sending account has reached the maximum number of allowed child accounts.            |" + 
     " | `Errors::NOT_PUBLISHED`     | `Diem::ECURRENCY_INFO`                                  | The `CoinType` is not a registered currency on-chain.                                    |" + 
     " | `Errors::INVALID_STATE`     | `DiemAccount::EWITHDRAWAL_CAPABILITY_ALREADY_EXTRACTED` | The withdrawal capability for the sending account has already been extracted.            |" + 
     " | `Errors::NOT_PUBLISHED`     | `DiemAccount::EPAYER_DOESNT_HOLD_CURRENCY`              | The sending account doesn't have a balance in `CoinType`.                                |" + 
     " | `Errors::LIMIT_EXCEEDED`    | `DiemAccount::EINSUFFICIENT_BALANCE`                    | The sending account doesn't have at least `child_initial_balance` of `CoinType` balance. |" + 
     " | `Errors::INVALID_ARGUMENT`  | `DiemAccount::ECANNOT_CREATE_AT_VM_RESERVED`            | The `child_address` is the reserved address 0x0.                                         |" + 
     "" + 
     " # Related Scripts" + 
     " * `AccountCreationScripts::create_parent_vasp_account`" + 
     " * `AccountAdministrationScripts::add_currency_to_account`" + 
     " * `AccountAdministrationScripts::rotate_authentication_key`" + 
     " * `AccountAdministrationScripts::add_recovery_rotation_capability`" + 
     " * `AccountAdministrationScripts::create_recovery_address`",
      typeArgs: ["coin_type"],
      args: [
        {name: "child_address", type: {type: Types.Address}}, {name: "auth_key_prefix", type: {type: Types.Array, arrayType: {type: Types.U8}}}, {name: "add_all_currencies", type: {type: Types.Boolean}}, {name: "child_initial_balance", type: {type: Types.U64}}
      ]
    },
                

                CreateDesignatedDealer: {
      stdlibEncodeFunction: Stdlib.encodeCreateDesignatedDealerScriptFunction,
      description: " # Summary" + 
     " Creates a Designated Dealer account with the provided information, and initializes it with" + 
     " default mint tiers. The transaction can only be sent by the Treasury Compliance account." + 
     "" + 
     " # Technical Description" + 
     " Creates an account with the Designated Dealer role at `addr` with authentication key" + 
     " `auth_key_prefix` | `addr` and a 0 balance of type `Currency`. If `add_all_currencies` is true," + 
     " 0 balances for all available currencies in the system will also be added. This can only be" + 
     " invoked by an account with the TreasuryCompliance role." + 
     " Authentication keys, prefixes, and how to construct them from an ed25519 public key are described" + 
     " [here](https://developers.diem.com/docs/core/accounts/#addresses-authentication-keys-and-cryptographic-keys)." + 
     "" + 
     " At the time of creation the account is also initialized with default mint tiers of (500_000," + 
     " 5000_000, 50_000_000, 500_000_000), and preburn areas for each currency that is added to the" + 
     " account." + 
     "" + 
     " # Events" + 
     " Successful execution will emit:" + 
     " * A `DiemAccount::CreateAccountEvent` with the `created` field being `addr`," + 
     " and the `rold_id` field being `Roles::DESIGNATED_DEALER_ROLE_ID`. This is emitted on the" + 
     " `DiemAccount::AccountOperationsCapability` `creation_events` handle." + 
     "" + 
     " # Parameters" + 
     " | Name                 | Type         | Description                                                                                                                                         |" + 
     " | ------               | ------       | -------------                                                                                                                                       |" + 
     " | `Currency`           | Type         | The Move type for the `Currency` that the Designated Dealer should be initialized with. `Currency` must be an already-registered currency on-chain. |" + 
     " | `tc_account`         | `signer`     | The signer of the sending account of this transaction. Must be the Treasury Compliance account.                                                     |" + 
     " | `sliding_nonce`      | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                                                          |" + 
     " | `addr`               | `address`    | Address of the to-be-created Designated Dealer account.                                                                                             |" + 
     " | `auth_key_prefix`    | `vector<u8>` | The authentication key prefix that will be used initially for the newly created account.                                                            |" + 
     " | `human_name`         | `vector<u8>` | ASCII-encoded human name for the Designated Dealer.                                                                                                 |" + 
     " | `add_all_currencies` | `bool`       | Whether to publish preburn, balance, and tier info resources for all known (SCS) currencies or just `Currency` when the account is created.         |" + 
     "" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category              | Error Reason                            | Description                                                                                |" + 
     " | ----------------            | --------------                          | -------------                                                                              |" + 
     " | `Errors::NOT_PUBLISHED`     | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `tc_account`.                             |" + 
     " | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |" + 
     " | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |" + 
     " | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |" + 
     " | `Errors::REQUIRES_ADDRESS`  | `CoreAddresses::ETREASURY_COMPLIANCE`   | The sending account is not the Treasury Compliance account.                                |" + 
     " | `Errors::REQUIRES_ROLE`     | `Roles::ETREASURY_COMPLIANCE`           | The sending account is not the Treasury Compliance account.                                |" + 
     " | `Errors::NOT_PUBLISHED`     | `Diem::ECURRENCY_INFO`                 | The `Currency` is not a registered currency on-chain.                                      |" + 
     " | `Errors::ALREADY_PUBLISHED` | `Roles::EROLE_ID`                       | The `addr` address is already taken.                                                       |" + 
     "" + 
     " # Related Scripts" + 
     " * `TreasuryComplianceScripts::tiered_mint`" + 
     " * `PaymentScripts::peer_to_peer_with_metadata`" + 
     " * `AccountAdministrationScripts::rotate_dual_attestation_info`",
      typeArgs: ["currency"],
      args: [
        {name: "sliding_nonce", type: {type: Types.U64}}, {name: "addr", type: {type: Types.Address}}, {name: "auth_key_prefix", type: {type: Types.Array, arrayType: {type: Types.U8}}}, {name: "human_name", type: {type: Types.Array, arrayType: {type: Types.U8}}}, {name: "add_all_currencies", type: {type: Types.Boolean}}
      ]
    },
                

                CreateParentVaspAccount: {
      stdlibEncodeFunction: Stdlib.encodeCreateParentVaspAccountScriptFunction,
      description: " # Summary" + 
     " Creates a Parent VASP account with the specified human name. Must be called by the Treasury Compliance account." + 
     "" + 
     " # Technical Description" + 
     " Creates an account with the Parent VASP role at `address` with authentication key" + 
     " `auth_key_prefix` | `new_account_address` and a 0 balance of type `CoinType`. If" + 
     " `add_all_currencies` is true, 0 balances for all available currencies in the system will" + 
     " also be added. This can only be invoked by an TreasuryCompliance account." + 
     " `sliding_nonce` is a unique nonce for operation, see `SlidingNonce` for details." + 
     " Authentication keys, prefixes, and how to construct them from an ed25519 public key are described" + 
     " [here](https://developers.diem.com/docs/core/accounts/#addresses-authentication-keys-and-cryptographic-keys)." + 
     "" + 
     " # Events" + 
     " Successful execution will emit:" + 
     " * A `DiemAccount::CreateAccountEvent` with the `created` field being `new_account_address`," + 
     " and the `rold_id` field being `Roles::PARENT_VASP_ROLE_ID`. This is emitted on the" + 
     " `DiemAccount::AccountOperationsCapability` `creation_events` handle." + 
     "" + 
     " # Parameters" + 
     " | Name                  | Type         | Description                                                                                                                                                    |" + 
     " | ------                | ------       | -------------                                                                                                                                                  |" + 
     " | `CoinType`            | Type         | The Move type for the `CoinType` currency that the Parent VASP account should be initialized with. `CoinType` must be an already-registered currency on-chain. |" + 
     " | `tc_account`          | `signer`     | The signer of the sending account of this transaction. Must be the Treasury Compliance account.                                                                |" + 
     " | `sliding_nonce`       | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                                                                     |" + 
     " | `new_account_address` | `address`    | Address of the to-be-created Parent VASP account.                                                                                                              |" + 
     " | `auth_key_prefix`     | `vector<u8>` | The authentication key prefix that will be used initially for the newly created account.                                                                       |" + 
     " | `human_name`          | `vector<u8>` | ASCII-encoded human name for the Parent VASP.                                                                                                                  |" + 
     " | `add_all_currencies`  | `bool`       | Whether to publish balance resources for all known currencies when the account is created.                                                                     |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category              | Error Reason                            | Description                                                                                |" + 
     " | ----------------            | --------------                          | -------------                                                                              |" + 
     " | `Errors::NOT_PUBLISHED`     | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `tc_account`.                             |" + 
     " | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |" + 
     " | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |" + 
     " | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |" + 
     " | `Errors::REQUIRES_ADDRESS`  | `CoreAddresses::ETREASURY_COMPLIANCE`   | The sending account is not the Treasury Compliance account.                                |" + 
     " | `Errors::REQUIRES_ROLE`     | `Roles::ETREASURY_COMPLIANCE`           | The sending account is not the Treasury Compliance account.                                |" + 
     " | `Errors::NOT_PUBLISHED`     | `Diem::ECURRENCY_INFO`                 | The `CoinType` is not a registered currency on-chain.                                      |" + 
     " | `Errors::ALREADY_PUBLISHED` | `Roles::EROLE_ID`                       | The `new_account_address` address is already taken.                                        |" + 
     "" + 
     " # Related Scripts" + 
     " * `AccountCreationScripts::create_child_vasp_account`" + 
     " * `AccountAdministrationScripts::add_currency_to_account`" + 
     " * `AccountAdministrationScripts::rotate_authentication_key`" + 
     " * `AccountAdministrationScripts::add_recovery_rotation_capability`" + 
     " * `AccountAdministrationScripts::create_recovery_address`" + 
     " * `AccountAdministrationScripts::rotate_dual_attestation_info`",
      typeArgs: ["coin_type"],
      args: [
        {name: "sliding_nonce", type: {type: Types.U64}}, {name: "new_account_address", type: {type: Types.Address}}, {name: "auth_key_prefix", type: {type: Types.Array, arrayType: {type: Types.U8}}}, {name: "human_name", type: {type: Types.Array, arrayType: {type: Types.U8}}}, {name: "add_all_currencies", type: {type: Types.Boolean}}
      ]
    },
                

                CreateRecoveryAddress: {
      stdlibEncodeFunction: Stdlib.encodeCreateRecoveryAddressScriptFunction,
      description: " # Summary" + 
     " Initializes the sending account as a recovery address that may be used by" + 
     " other accounts belonging to the same VASP as `account`." + 
     " The sending account must be a VASP account, and can be either a child or parent VASP account." + 
     " Multiple recovery addresses can exist for a single VASP, but accounts in" + 
     " each must be disjoint." + 
     "" + 
     " # Technical Description" + 
     " Publishes a `RecoveryAddress::RecoveryAddress` resource under `account`. It then" + 
     " extracts the `DiemAccount::KeyRotationCapability` for `account` and adds" + 
     " it to the resource. After the successful execution of this transaction" + 
     " other accounts may add their key rotation to this resource so that `account`" + 
     " may be used as a recovery account for those accounts." + 
     "" + 
     " # Parameters" + 
     " | Name      | Type     | Description                                           |" + 
     " | ------    | ------   | -------------                                         |" + 
     " | `account` | `signer` | The signer of the sending account of the transaction. |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category              | Error Reason                                               | Description                                                                                   |" + 
     " | ----------------            | --------------                                             | -------------                                                                                 |" + 
     " | `Errors::INVALID_STATE`     | `DiemAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` | `account` has already delegated/extracted its `DiemAccount::KeyRotationCapability`.          |" + 
     " | `Errors::INVALID_ARGUMENT`  | `RecoveryAddress::ENOT_A_VASP`                             | `account` is not a VASP account.                                                              |" + 
     " | `Errors::INVALID_ARGUMENT`  | `RecoveryAddress::EKEY_ROTATION_DEPENDENCY_CYCLE`          | A key rotation recovery cycle would be created by adding `account`'s key rotation capability. |" + 
     " | `Errors::ALREADY_PUBLISHED` | `RecoveryAddress::ERECOVERY_ADDRESS`                       | A `RecoveryAddress::RecoveryAddress` resource has already been published under `account`.     |" + 
     "" + 
     " # Related Scripts" + 
     " * `Script::add_recovery_rotation_capability`" + 
     " * `Script::rotate_authentication_key_with_recovery_address`",
      typeArgs: [],
      args: [
        
      ]
    },
                

                CreateValidatorAccount: {
      stdlibEncodeFunction: Stdlib.encodeCreateValidatorAccountScriptFunction,
      description: " # Summary" + 
     " Creates a Validator account. This transaction can only be sent by the Diem" + 
     " Root account." + 
     "" + 
     " # Technical Description" + 
     " Creates an account with a Validator role at `new_account_address`, with authentication key" + 
     " `auth_key_prefix` | `new_account_address`. It publishes a" + 
     " `ValidatorConfig::ValidatorConfig` resource with empty `config`, and" + 
     " `operator_account` fields. The `human_name` field of the" + 
     " `ValidatorConfig::ValidatorConfig` is set to the passed in `human_name`." + 
     " This script does not add the validator to the validator set or the system," + 
     " but only creates the account." + 
     " Authentication keys, prefixes, and how to construct them from an ed25519 public key are described" + 
     " [here](https://developers.diem.com/docs/core/accounts/#addresses-authentication-keys-and-cryptographic-keys)." + 
     "" + 
     " # Events" + 
     " Successful execution will emit:" + 
     " * A `DiemAccount::CreateAccountEvent` with the `created` field being `new_account_address`," + 
     " and the `rold_id` field being `Roles::VALIDATOR_ROLE_ID`. This is emitted on the" + 
     " `DiemAccount::AccountOperationsCapability` `creation_events` handle." + 
     "" + 
     " # Parameters" + 
     " | Name                  | Type         | Description                                                                              |" + 
     " | ------                | ------       | -------------                                                                            |" + 
     " | `dr_account`          | `signer`     | The signer of the sending account of this transaction. Must be the Diem Root signer.     |" + 
     " | `sliding_nonce`       | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.               |" + 
     " | `new_account_address` | `address`    | Address of the to-be-created Validator account.                                          |" + 
     " | `auth_key_prefix`     | `vector<u8>` | The authentication key prefix that will be used initially for the newly created account. |" + 
     " | `human_name`          | `vector<u8>` | ASCII-encoded human name for the validator.                                              |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category              | Error Reason                            | Description                                                                                |" + 
     " | ----------------            | --------------                          | -------------                                                                              |" + 
     " | `Errors::NOT_PUBLISHED`     | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `dr_account`.                             |" + 
     " | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |" + 
     " | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |" + 
     " | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |" + 
     " | `Errors::REQUIRES_ADDRESS`  | `CoreAddresses::EDIEM_ROOT`            | The sending account is not the Diem Root account.                                         |" + 
     " | `Errors::REQUIRES_ROLE`     | `Roles::EDIEM_ROOT`                    | The sending account is not the Diem Root account.                                         |" + 
     " | `Errors::ALREADY_PUBLISHED` | `Roles::EROLE_ID`                       | The `new_account_address` address is already taken.                                        |" + 
     "" + 
     " # Related Scripts" + 
     " * `AccountCreationScripts::create_validator_operator_account`" + 
     " * `ValidatorAdministrationScripts::add_validator_and_reconfigure`" + 
     " * `ValidatorAdministrationScripts::register_validator_config`" + 
     " * `ValidatorAdministrationScripts::remove_validator_and_reconfigure`" + 
     " * `ValidatorAdministrationScripts::set_validator_operator`" + 
     " * `ValidatorAdministrationScripts::set_validator_operator_with_nonce_admin`" + 
     " * `ValidatorAdministrationScripts::set_validator_config_and_reconfigure`",
      typeArgs: [],
      args: [
        {name: "sliding_nonce", type: {type: Types.U64}}, {name: "new_account_address", type: {type: Types.Address}}, {name: "auth_key_prefix", type: {type: Types.Array, arrayType: {type: Types.U8}}}, {name: "human_name", type: {type: Types.Array, arrayType: {type: Types.U8}}}
      ]
    },
                

                CreateValidatorOperatorAccount: {
      stdlibEncodeFunction: Stdlib.encodeCreateValidatorOperatorAccountScriptFunction,
      description: " # Summary" + 
     " Creates a Validator Operator account. This transaction can only be sent by the Diem" + 
     " Root account." + 
     "" + 
     " # Technical Description" + 
     " Creates an account with a Validator Operator role at `new_account_address`, with authentication key" + 
     " `auth_key_prefix` | `new_account_address`. It publishes a" + 
     " `ValidatorOperatorConfig::ValidatorOperatorConfig` resource with the specified `human_name`." + 
     " This script does not assign the validator operator to any validator accounts but only creates the account." + 
     " Authentication key prefixes, and how to construct them from an ed25519 public key are described" + 
     " [here](https://developers.diem.com/docs/core/accounts/#addresses-authentication-keys-and-cryptographic-keys)." + 
     "" + 
     " # Events" + 
     " Successful execution will emit:" + 
     " * A `DiemAccount::CreateAccountEvent` with the `created` field being `new_account_address`," + 
     " and the `rold_id` field being `Roles::VALIDATOR_OPERATOR_ROLE_ID`. This is emitted on the" + 
     " `DiemAccount::AccountOperationsCapability` `creation_events` handle." + 
     "" + 
     " # Parameters" + 
     " | Name                  | Type         | Description                                                                              |" + 
     " | ------                | ------       | -------------                                                                            |" + 
     " | `dr_account`          | `signer`     | The signer of the sending account of this transaction. Must be the Diem Root signer.     |" + 
     " | `sliding_nonce`       | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.               |" + 
     " | `new_account_address` | `address`    | Address of the to-be-created Validator account.                                          |" + 
     " | `auth_key_prefix`     | `vector<u8>` | The authentication key prefix that will be used initially for the newly created account. |" + 
     " | `human_name`          | `vector<u8>` | ASCII-encoded human name for the validator.                                              |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category              | Error Reason                            | Description                                                                                |" + 
     " | ----------------            | --------------                          | -------------                                                                              |" + 
     " | `Errors::NOT_PUBLISHED`     | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `dr_account`.                             |" + 
     " | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |" + 
     " | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |" + 
     " | `Errors::INVALID_ARGUMENT`  | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |" + 
     " | `Errors::REQUIRES_ADDRESS`  | `CoreAddresses::EDIEM_ROOT`            | The sending account is not the Diem Root account.                                         |" + 
     " | `Errors::REQUIRES_ROLE`     | `Roles::EDIEM_ROOT`                    | The sending account is not the Diem Root account.                                         |" + 
     " | `Errors::ALREADY_PUBLISHED` | `Roles::EROLE_ID`                       | The `new_account_address` address is already taken.                                        |" + 
     "" + 
     " # Related Scripts" + 
     " * `AccountCreationScripts::create_validator_account`" + 
     " * `ValidatorAdministrationScripts::add_validator_and_reconfigure`" + 
     " * `ValidatorAdministrationScripts::register_validator_config`" + 
     " * `ValidatorAdministrationScripts::remove_validator_and_reconfigure`" + 
     " * `ValidatorAdministrationScripts::set_validator_operator`" + 
     " * `ValidatorAdministrationScripts::set_validator_operator_with_nonce_admin`" + 
     " * `ValidatorAdministrationScripts::set_validator_config_and_reconfigure`",
      typeArgs: [],
      args: [
        {name: "sliding_nonce", type: {type: Types.U64}}, {name: "new_account_address", type: {type: Types.Address}}, {name: "auth_key_prefix", type: {type: Types.Array, arrayType: {type: Types.U8}}}, {name: "human_name", type: {type: Types.Array, arrayType: {type: Types.U8}}}
      ]
    },
                

                CreateVaspDomains: {
      stdlibEncodeFunction: Stdlib.encodeCreateVaspDomainsScriptFunction,
      description: " # Summary" + 
     " Publishes a `VASPDomain::VASPDomains` resource under a parent VASP account." + 
     " The sending account must be a parent VASP account." + 
     "" + 
     " # Technical Description" + 
     " Publishes a `VASPDomain::VASPDomains` resource under `account`." + 
     " The The `VASPDomain::VASPDomains` resource's `domains` field is a vector" + 
     " of VASPDomain, and will be empty on at the end of processing this transaction." + 
     "" + 
     " # Parameters" + 
     " | Name      | Type     | Description                                           |" + 
     " | ------    | ------   | -------------                                         |" + 
     " | `account` | `signer` | The signer of the sending account of the transaction. |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category              | Error Reason              | Description                                                                    |" + 
     " | ----------------            | --------------            | -------------                                                                  |" + 
     " | `Errors::ALREADY_PUBLISHED` | `VASPDomain::EVASP_DOMAINS` | A `VASPDomain::VASPDomains` resource has already been published under `account`. |" + 
     " | `Errors::REQUIRES_ROLE`     | `Roles::EPARENT_VASP`     | The sending `account` was not a parent VASP account.                           |",
      typeArgs: [],
      args: [
        
      ]
    },
                

                ExchangeCoinAToCoinB: {
      stdlibEncodeFunction: Stdlib.encodeExchangeCoinAToCoinBScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "swapper", type: {type: Types.Address}}, {name: "exchange", type: {type: Types.Address}}, {name: "coin_a_amt", type: {type: Types.U64}}
      ]
    },
                

                ExchangeCoinAToCoinC: {
      stdlibEncodeFunction: Stdlib.encodeExchangeCoinAToCoinCScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "swapper", type: {type: Types.Address}}, {name: "exchange", type: {type: Types.Address}}, {name: "coin_a_amt", type: {type: Types.U64}}
      ]
    },
                

                ExchangeCoinAToCoinD: {
      stdlibEncodeFunction: Stdlib.encodeExchangeCoinAToCoinDScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "swapper", type: {type: Types.Address}}, {name: "exchange", type: {type: Types.Address}}, {name: "coin_a_amt", type: {type: Types.U64}}
      ]
    },
                

                ExchangeCoinBToCoinA: {
      stdlibEncodeFunction: Stdlib.encodeExchangeCoinBToCoinAScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "swapper", type: {type: Types.Address}}, {name: "exchange", type: {type: Types.Address}}, {name: "coin_b_amt", type: {type: Types.U64}}
      ]
    },
                

                ExchangeCoinBToCoinC: {
      stdlibEncodeFunction: Stdlib.encodeExchangeCoinBToCoinCScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "swapper", type: {type: Types.Address}}, {name: "exchange", type: {type: Types.Address}}, {name: "coin_b_amt", type: {type: Types.U64}}
      ]
    },
                

                ExchangeCoinBToCoinD: {
      stdlibEncodeFunction: Stdlib.encodeExchangeCoinBToCoinDScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "swapper", type: {type: Types.Address}}, {name: "exchange", type: {type: Types.Address}}, {name: "coin_b_amt", type: {type: Types.U64}}
      ]
    },
                

                ExchangeCoinCToCoinA: {
      stdlibEncodeFunction: Stdlib.encodeExchangeCoinCToCoinAScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "swapper", type: {type: Types.Address}}, {name: "exchange", type: {type: Types.Address}}, {name: "coin_c_amt", type: {type: Types.U64}}
      ]
    },
                

                ExchangeCoinCToCoinB: {
      stdlibEncodeFunction: Stdlib.encodeExchangeCoinCToCoinBScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "swapper", type: {type: Types.Address}}, {name: "exchange", type: {type: Types.Address}}, {name: "coin_c_amt", type: {type: Types.U64}}
      ]
    },
                

                ExchangeCoinCToCoinD: {
      stdlibEncodeFunction: Stdlib.encodeExchangeCoinCToCoinDScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "swapper", type: {type: Types.Address}}, {name: "exchange", type: {type: Types.Address}}, {name: "coin_c_amt", type: {type: Types.U64}}
      ]
    },
                

                ExchangeCoinDToCoinA: {
      stdlibEncodeFunction: Stdlib.encodeExchangeCoinDToCoinAScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "swapper", type: {type: Types.Address}}, {name: "exchange", type: {type: Types.Address}}, {name: "coin_d_amt", type: {type: Types.U64}}
      ]
    },
                

                ExchangeCoinDToCoinB: {
      stdlibEncodeFunction: Stdlib.encodeExchangeCoinDToCoinBScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "swapper", type: {type: Types.Address}}, {name: "exchange", type: {type: Types.Address}}, {name: "coin_d_amt", type: {type: Types.U64}}
      ]
    },
                

                ExchangeCoinDToCoinC: {
      stdlibEncodeFunction: Stdlib.encodeExchangeCoinDToCoinCScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "swapper", type: {type: Types.Address}}, {name: "exchange", type: {type: Types.Address}}, {name: "coin_d_amt", type: {type: Types.U64}}
      ]
    },
                

                ForceExpire: {
      stdlibEncodeFunction: Stdlib.encodeForceExpireScriptFunction,
      description: " # Summary" + 
     " Shifts the window held by the CRSN resource published under `account`" + 
     " by `shift_amount`. This will expire all unused slots in the CRSN at the" + 
     " time of processing that are less than `shift_amount`. The exact" + 
     " semantics are defined in DIP-168." + 
     "" + 
     " # Technical Description" + 
     " This shifts the slots in the published `CRSN::CRSN` resource under" + 
     " `account` by `shift_amount`, and increments the CRSN's `min_nonce` field" + 
     " by `shift_amount` as well. After this, it will shift the window over" + 
     " any set bits. It is important to note that the sequence nonce of the" + 
     " sending transaction must still lie within the range of the window in" + 
     " order for this transaction to be processed successfully." + 
     "" + 
     " # Parameters" + 
     " | Name           | Type     | Description                                                 |" + 
     " | ------         | ------   | -------------                                               |" + 
     " | `account`      | `signer` | The signer of the sending account of the transaction.       |" + 
     " | `shift_amount` | `u64`    | The amount to shift the window in the CRSN under `account`. |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category          | Error Reason     | Description                                               |" + 
     " | ----------------        | --------------   | -------------                                             |" + 
     " | `Errors::INVALID_STATE` | `CRSN::ENO_CRSN` | A `CRSN::CRSN` resource is not published under `account`. |",
      typeArgs: [],
      args: [
        {name: "shift_amount", type: {type: Types.U64}}
      ]
    },
                

                FreezeAccount: {
      stdlibEncodeFunction: Stdlib.encodeFreezeAccountScriptFunction,
      description: " # Summary" + 
     " Freezes the account at `address`. The sending account of this transaction" + 
     " must be the Treasury Compliance account. The account being frozen cannot be" + 
     " the Diem Root or Treasury Compliance account. After the successful" + 
     " execution of this transaction no transactions may be sent from the frozen" + 
     " account, and the frozen account may not send or receive coins." + 
     "" + 
     " # Technical Description" + 
     " Sets the `AccountFreezing::FreezingBit` to `true` and emits a" + 
     " `AccountFreezing::FreezeAccountEvent`. The transaction sender must be the" + 
     " Treasury Compliance account, but the account at `to_freeze_account` must" + 
     " not be either `0xA550C18` (the Diem Root address), or `0xB1E55ED` (the" + 
     " Treasury Compliance address). Note that this is a per-account property" + 
     " e.g., freezing a Parent VASP will not effect the status any of its child" + 
     " accounts and vice versa." + 
     "" + 
     "" + 
     " # Events" + 
     " Successful execution of this transaction will emit a `AccountFreezing::FreezeAccountEvent` on" + 
     " the `freeze_event_handle` held in the `AccountFreezing::FreezeEventsHolder` resource published" + 
     " under `0xA550C18` with the `frozen_address` being the `to_freeze_account`." + 
     "" + 
     " # Parameters" + 
     " | Name                | Type      | Description                                                                                     |" + 
     " | ------              | ------    | -------------                                                                                   |" + 
     " | `tc_account`        | `signer`  | The signer of the sending account of this transaction. Must be the Treasury Compliance account. |" + 
     " | `sliding_nonce`     | `u64`     | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                      |" + 
     " | `to_freeze_account` | `address` | The account address to be frozen.                                                               |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                                 | Description                                                                                |" + 
     " | ----------------           | --------------                               | -------------                                                                              |" + 
     " | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`               | A `SlidingNonce` resource is not published under `tc_account`.                             |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`               | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`               | The `sliding_nonce` is too far in the future.                                              |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`      | The `sliding_nonce` has been previously recorded.                                          |" + 
     " | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE`        | The sending account is not the Treasury Compliance account.                                |" + 
     " | `Errors::REQUIRES_ROLE`    | `Roles::ETREASURY_COMPLIANCE`                | The sending account is not the Treasury Compliance account.                                |" + 
     " | `Errors::INVALID_ARGUMENT` | `AccountFreezing::ECANNOT_FREEZE_TC`         | `to_freeze_account` was the Treasury Compliance account (`0xB1E55ED`).                     |" + 
     " | `Errors::INVALID_ARGUMENT` | `AccountFreezing::ECANNOT_FREEZE_DIEM_ROOT` | `to_freeze_account` was the Diem Root account (`0xA550C18`).                              |" + 
     "" + 
     " # Related Scripts" + 
     " * `TreasuryComplianceScripts::unfreeze_account`",
      typeArgs: [],
      args: [
        {name: "sliding_nonce", type: {type: Types.U64}}, {name: "to_freeze_account", type: {type: Types.Address}}
      ]
    },
                

                InitializeDiemConsensusConfig: {
      stdlibEncodeFunction: Stdlib.encodeInitializeDiemConsensusConfigScriptFunction,
      description: "  # Summary" + 
     " Initializes the Diem consensus config that is stored on-chain.  This" + 
     " transaction can only be sent from the Diem Root account." + 
     "" + 
     " # Technical Description" + 
     " Initializes the `DiemConsensusConfig` on-chain config to empty and allows future updates from DiemRoot via" + 
     " `update_diem_consensus_config`. This doesn't emit a `DiemConfig::NewEpochEvent`." + 
     "" + 
     " # Parameters" + 
     " | Name            | Type      | Description                                                                |" + 
     " | ------          | ------    | -------------                                                              |" + 
     " | `account`       | `signer` | Signer of the sending account. Must be the Diem Root account.               |" + 
     " | `sliding_nonce` | `u64`     | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction. |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                                  | Description                                                                                |" + 
     " | ----------------           | --------------                                | -------------                                                                              |" + 
     " | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                | A `SlidingNonce` resource is not published under `account`.                                |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`                | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`                | The `sliding_nonce` is too far in the future.                                              |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`       | The `sliding_nonce` has been previously recorded.                                          |" + 
     " | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::EDIEM_ROOT`                   | `account` is not the Diem Root account.                                                    |",
      typeArgs: [],
      args: [
        {name: "sliding_nonce", type: {type: Types.U64}}
      ]
    },
                

                InitializeExchange: {
      stdlibEncodeFunction: Stdlib.encodeInitializeExchangeScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "initializer", type: {type: Types.Address}}, {name: "comm_rate", type: {type: Types.U64}}, {name: "coin_a_amt", type: {type: Types.U64}}, {name: "coin_b_amt", type: {type: Types.U64}}
      ]
    },
                

                InitializeExchange: {
      stdlibEncodeFunction: Stdlib.encodeInitializeExchangeScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "initializer", type: {type: Types.Address}}, {name: "comm_rate", type: {type: Types.U64}}, {name: "coin_b_amt", type: {type: Types.U64}}, {name: "coin_c_amt", type: {type: Types.U64}}
      ]
    },
                

                InitializeExchange: {
      stdlibEncodeFunction: Stdlib.encodeInitializeExchangeScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "initializer", type: {type: Types.Address}}, {name: "comm_rate", type: {type: Types.U64}}, {name: "coin_a_amt", type: {type: Types.U64}}, {name: "coin_c_amt", type: {type: Types.U64}}
      ]
    },
                

                InitializeExchange: {
      stdlibEncodeFunction: Stdlib.encodeInitializeExchangeScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "initializer", type: {type: Types.Address}}, {name: "comm_rate", type: {type: Types.U64}}, {name: "coin_a_amt", type: {type: Types.U64}}, {name: "coin_d_amt", type: {type: Types.U64}}
      ]
    },
                

                InitializeExchange: {
      stdlibEncodeFunction: Stdlib.encodeInitializeExchangeScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "initializer", type: {type: Types.Address}}, {name: "comm_rate", type: {type: Types.U64}}, {name: "coin_b_amt", type: {type: Types.U64}}, {name: "coin_d_amt", type: {type: Types.U64}}
      ]
    },
                

                InitializeExchange: {
      stdlibEncodeFunction: Stdlib.encodeInitializeExchangeScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "initializer", type: {type: Types.Address}}, {name: "comm_rate", type: {type: Types.U64}}, {name: "coin_c_amt", type: {type: Types.U64}}, {name: "coin_d_amt", type: {type: Types.U64}}
      ]
    },
                

                InitializeLpV8Rotary: {
      stdlibEncodeFunction: Stdlib.encodeInitializeLpV8RotaryScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        
      ]
    },
                

                InitializeRotary: {
      stdlibEncodeFunction: Stdlib.encodeInitializeRotaryScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        
      ]
    },
                

                InitializeV8: {
      stdlibEncodeFunction: Stdlib.encodeInitializeV8ScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        
      ]
    },
                

                MintCoinA: {
      stdlibEncodeFunction: Stdlib.encodeMintCoinAScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "amt", type: {type: Types.U64}}
      ]
    },
                

                MintCoinB: {
      stdlibEncodeFunction: Stdlib.encodeMintCoinBScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "amt", type: {type: Types.U64}}
      ]
    },
                

                MintCoinC: {
      stdlibEncodeFunction: Stdlib.encodeMintCoinCScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "amt", type: {type: Types.U64}}
      ]
    },
                

                MintCoinD: {
      stdlibEncodeFunction: Stdlib.encodeMintCoinDScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "amt", type: {type: Types.U64}}
      ]
    },
                

                OptInToCrsn: {
      stdlibEncodeFunction: Stdlib.encodeOptInToCrsnScriptFunction,
      description: " # Summary" + 
     " Publishes a CRSN resource under `account` and opts the account in to" + 
     " concurrent transaction processing. Upon successful execution of this" + 
     " script, all further transactions sent from this account will be ordered" + 
     " and processed according to DIP-168." + 
     "" + 
     " # Technical Description" + 
     " This publishes a `CRSN::CRSN` resource under `account` with `crsn_size`" + 
     " number of slots. All slots will be initialized to the empty (unused)" + 
     " state, and the CRSN resource's `min_nonce` field will be set to the transaction's" + 
     " sequence number + 1." + 
     "" + 
     " # Parameters" + 
     " | Name        | Type     | Description                                           |" + 
     " | ------      | ------   | -------------                                         |" + 
     " | `account`   | `signer` | The signer of the sending account of the transaction. |" + 
     " | `crsn_size` | `u64`    | The the number of slots the published CRSN will have. |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason            | Description                                                    |" + 
     " | ----------------           | --------------          | -------------                                                  |" + 
     " | `Errors::INVALID_STATE`    | `CRSN::EHAS_CRSN`       | A `CRSN::CRSN` resource was already published under `account`. |" + 
     " | `Errors::INVALID_ARGUMENT` | `CRSN::EZERO_SIZE_CRSN` | The `crsn_size` was zero.                                      |",
      typeArgs: [],
      args: [
        {name: "crsn_size", type: {type: Types.U64}}
      ]
    },
                

                PeerToPeerBySigners: {
      stdlibEncodeFunction: Stdlib.encodePeerToPeerBySignersScriptFunction,
      description: " # Summary" + 
     " Transfers a given number of coins in a specified currency from one account to another by multi-agent transaction." + 
     " Transfers over a specified amount defined on-chain that are between two different VASPs, or" + 
     " other accounts that have opted-in will be subject to on-chain checks to ensure the receiver has" + 
     " agreed to receive the coins.  This transaction can be sent by any account that can hold a" + 
     " balance, and to any account that can hold a balance. Both accounts must hold balances in the" + 
     " currency being transacted." + 
     "" + 
     " # Technical Description" + 
     "" + 
     " Transfers `amount` coins of type `Currency` from `payer` to `payee` with (optional) associated" + 
     " `metadata`." + 
     " Dual attestation is not applied to this script as payee is also a signer of the transaction." + 
     " Standardized `metadata` BCS format can be found in `diem_types::transaction::metadata::Metadata`." + 
     "" + 
     " # Events" + 
     " Successful execution of this script emits two events:" + 
     " * A `DiemAccount::SentPaymentEvent` on `payer`'s `DiemAccount::DiemAccount` `sent_events` handle; and" + 
     " * A `DiemAccount::ReceivedPaymentEvent` on `payee`'s `DiemAccount::DiemAccount` `received_events` handle." + 
     "" + 
     " # Parameters" + 
     " | Name                 | Type         | Description                                                                                                                  |" + 
     " | ------               | ------       | -------------                                                                                                                |" + 
     " | `Currency`           | Type         | The Move type for the `Currency` being sent in this transaction. `Currency` must be an already-registered currency on-chain. |" + 
     " | `payer`              | `signer`     | The signer of the sending account that coins are being transferred from.                                                     |" + 
     " | `payee`              | `signer`     | The signer of the receiving account that the coins are being transferred to.                                                 |" + 
     " | `metadata`           | `vector<u8>` | Optional metadata about this payment.                                                                                        |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                                     | Description                                                                                                                         |" + 
     " | ----------------           | --------------                                   | -------------                                                                                                                       |" + 
     " | `Errors::NOT_PUBLISHED`    | `DiemAccount::EPAYER_DOESNT_HOLD_CURRENCY`       | `payer` doesn't hold a balance in `Currency`.                                                                                       |" + 
     " | `Errors::LIMIT_EXCEEDED`   | `DiemAccount::EINSUFFICIENT_BALANCE`             | `amount` is greater than `payer`'s balance in `Currency`.                                                                           |" + 
     " | `Errors::INVALID_ARGUMENT` | `DiemAccount::ECOIN_DEPOSIT_IS_ZERO`             | `amount` is zero.                                                                                                                   |" + 
     " | `Errors::NOT_PUBLISHED`    | `DiemAccount::EPAYEE_DOES_NOT_EXIST`             | No account exists at the `payee` address.                                                                                           |" + 
     " | `Errors::INVALID_ARGUMENT` | `DiemAccount::EPAYEE_CANT_ACCEPT_CURRENCY_TYPE`  | An account exists at `payee`, but it does not accept payments in `Currency`.                                                        |" + 
     " | `Errors::INVALID_STATE`    | `AccountFreezing::EACCOUNT_FROZEN`               | The `payee` account is frozen.                                                                                                      |" + 
     " | `Errors::LIMIT_EXCEEDED`   | `DiemAccount::EWITHDRAWAL_EXCEEDS_LIMITS`        | `payer` has exceeded its daily withdrawal limits for the backing coins of XDX.                                                      |" + 
     " | `Errors::LIMIT_EXCEEDED`   | `DiemAccount::EDEPOSIT_EXCEEDS_LIMITS`           | `payee` has exceeded its daily deposit limits for XDX.                                                                              |" + 
     "" + 
     " # Related Scripts" + 
     " * `AccountCreationScripts::create_child_vasp_account`" + 
     " * `AccountCreationScripts::create_parent_vasp_account`" + 
     " * `AccountAdministrationScripts::add_currency_to_account`" + 
     " * `PaymentScripts::peer_to_peer_with_metadata`",
      typeArgs: ["currency"],
      args: [
        {name: "amount", type: {type: Types.U64}}, {name: "metadata", type: {type: Types.Array, arrayType: {type: Types.U8}}}
      ]
    },
                

                PeerToPeerWithMetadata: {
      stdlibEncodeFunction: Stdlib.encodePeerToPeerWithMetadataScriptFunction,
      description: " # Summary" + 
     " Transfers a given number of coins in a specified currency from one account to another." + 
     " Transfers over a specified amount defined on-chain that are between two different VASPs, or" + 
     " other accounts that have opted-in will be subject to on-chain checks to ensure the receiver has" + 
     " agreed to receive the coins.  This transaction can be sent by any account that can hold a" + 
     " balance, and to any account that can hold a balance. Both accounts must hold balances in the" + 
     " currency being transacted." + 
     "" + 
     " # Technical Description" + 
     "" + 
     " Transfers `amount` coins of type `Currency` from `payer` to `payee` with (optional) associated" + 
     " `metadata` and an (optional) `metadata_signature` on the message of the form" + 
     " `metadata` | `Signer::address_of(payer)` | `amount` | `DualAttestation::DOMAIN_SEPARATOR`, that" + 
     " has been signed by the `payee`'s private key associated with the `compliance_public_key` held in" + 
     " the `payee`'s `DualAttestation::Credential`. Both the `Signer::address_of(payer)` and `amount` fields" + 
     " in the `metadata_signature` must be BCS-encoded bytes, and `|` denotes concatenation." + 
     " The `metadata` and `metadata_signature` parameters are only required if `amount` >=" + 
     " `DualAttestation::get_cur_microdiem_limit` XDX and `payer` and `payee` are distinct VASPs." + 
     " However, a transaction sender can opt in to dual attestation even when it is not required" + 
     " (e.g., a DesignatedDealer -> VASP payment) by providing a non-empty `metadata_signature`." + 
     " Standardized `metadata` BCS format can be found in `diem_types::transaction::metadata::Metadata`." + 
     "" + 
     " # Events" + 
     " Successful execution of this script emits two events:" + 
     " * A `DiemAccount::SentPaymentEvent` on `payer`'s `DiemAccount::DiemAccount` `sent_events` handle; and" + 
     " * A `DiemAccount::ReceivedPaymentEvent` on `payee`'s `DiemAccount::DiemAccount` `received_events` handle." + 
     "" + 
     " # Parameters" + 
     " | Name                 | Type         | Description                                                                                                                  |" + 
     " | ------               | ------       | -------------                                                                                                                |" + 
     " | `Currency`           | Type         | The Move type for the `Currency` being sent in this transaction. `Currency` must be an already-registered currency on-chain. |" + 
     " | `payer`              | `signer`     | The signer of the sending account that coins are being transferred from.                                                     |" + 
     " | `payee`              | `address`    | The address of the account the coins are being transferred to.                                                               |" + 
     " | `metadata`           | `vector<u8>` | Optional metadata about this payment.                                                                                        |" + 
     " | `metadata_signature` | `vector<u8>` | Optional signature over `metadata` and payment information. See                                                              |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                                     | Description                                                                                                                         |" + 
     " | ----------------           | --------------                                   | -------------                                                                                                                       |" + 
     " | `Errors::NOT_PUBLISHED`    | `DiemAccount::EPAYER_DOESNT_HOLD_CURRENCY`       | `payer` doesn't hold a balance in `Currency`.                                                                                       |" + 
     " | `Errors::LIMIT_EXCEEDED`   | `DiemAccount::EINSUFFICIENT_BALANCE`             | `amount` is greater than `payer`'s balance in `Currency`.                                                                           |" + 
     " | `Errors::INVALID_ARGUMENT` | `DiemAccount::ECOIN_DEPOSIT_IS_ZERO`             | `amount` is zero.                                                                                                                   |" + 
     " | `Errors::NOT_PUBLISHED`    | `DiemAccount::EPAYEE_DOES_NOT_EXIST`             | No account exists at the `payee` address.                                                                                           |" + 
     " | `Errors::INVALID_ARGUMENT` | `DiemAccount::EPAYEE_CANT_ACCEPT_CURRENCY_TYPE`  | An account exists at `payee`, but it does not accept payments in `Currency`.                                                        |" + 
     " | `Errors::INVALID_STATE`    | `AccountFreezing::EACCOUNT_FROZEN`               | The `payee` account is frozen.                                                                                                      |" + 
     " | `Errors::INVALID_ARGUMENT` | `DualAttestation::EMALFORMED_METADATA_SIGNATURE` | `metadata_signature` is not 64 bytes.                                                                                               |" + 
     " | `Errors::INVALID_ARGUMENT` | `DualAttestation::EINVALID_METADATA_SIGNATURE`   | `metadata_signature` does not verify on the against the `payee'`s `DualAttestation::Credential` `compliance_public_key` public key. |" + 
     " | `Errors::LIMIT_EXCEEDED`   | `DiemAccount::EWITHDRAWAL_EXCEEDS_LIMITS`        | `payer` has exceeded its daily withdrawal limits for the backing coins of XDX.                                                      |" + 
     " | `Errors::LIMIT_EXCEEDED`   | `DiemAccount::EDEPOSIT_EXCEEDS_LIMITS`           | `payee` has exceeded its daily deposit limits for XDX.                                                                              |" + 
     "" + 
     " # Related Scripts" + 
     " * `AccountCreationScripts::create_child_vasp_account`" + 
     " * `AccountCreationScripts::create_parent_vasp_account`" + 
     " * `AccountAdministrationScripts::add_currency_to_account`" + 
     " * `PaymentScripts::peer_to_peer_by_signers`",
      typeArgs: ["currency"],
      args: [
        {name: "payee", type: {type: Types.Address}}, {name: "amount", type: {type: Types.U64}}, {name: "metadata", type: {type: Types.Array, arrayType: {type: Types.U8}}}, {name: "metadata_signature", type: {type: Types.Array, arrayType: {type: Types.U8}}}
      ]
    },
                

                Preburn: {
      stdlibEncodeFunction: Stdlib.encodePreburnScriptFunction,
      description: " # Summary" + 
     " Moves a specified number of coins in a given currency from the account's" + 
     " balance to its preburn area after which the coins may be burned. This" + 
     " transaction may be sent by any account that holds a balance and preburn area" + 
     " in the specified currency." + 
     "" + 
     " # Technical Description" + 
     " Moves the specified `amount` of coins in `Token` currency from the sending `account`'s" + 
     " `DiemAccount::Balance<Token>` to the `Diem::Preburn<Token>` published under the same" + 
     " `account`. `account` must have both of these resources published under it at the start of this" + 
     " transaction in order for it to execute successfully." + 
     "" + 
     " # Events" + 
     " Successful execution of this script emits two events:" + 
     " * `DiemAccount::SentPaymentEvent ` on `account`'s `DiemAccount::DiemAccount` `sent_events`" + 
     " handle with the `payee` and `payer` fields being `account`'s address; and" + 
     " * A `Diem::PreburnEvent` with `Token`'s currency code on the" + 
     " `Diem::CurrencyInfo<Token`'s `preburn_events` handle for `Token` and with" + 
     " `preburn_address` set to `account`'s address." + 
     "" + 
     " # Parameters" + 
     " | Name      | Type     | Description                                                                                                                      |" + 
     " | ------    | ------   | -------------                                                                                                                    |" + 
     " | `Token`   | Type     | The Move type for the `Token` currency being moved to the preburn area. `Token` must be an already-registered currency on-chain. |" + 
     " | `account` | `signer` | The signer of the sending account.                                                                                               |" + 
     " | `amount`  | `u64`    | The amount in `Token` to be moved to the preburn area.                                                                           |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category           | Error Reason                                             | Description                                                                             |" + 
     " | ----------------         | --------------                                           | -------------                                                                           |" + 
     " | `Errors::NOT_PUBLISHED`  | `Diem::ECURRENCY_INFO`                                  | The `Token` is not a registered currency on-chain.                                      |" + 
     " | `Errors::INVALID_STATE`  | `DiemAccount::EWITHDRAWAL_CAPABILITY_ALREADY_EXTRACTED` | The withdrawal capability for `account` has already been extracted.                     |" + 
     " | `Errors::LIMIT_EXCEEDED` | `DiemAccount::EINSUFFICIENT_BALANCE`                    | `amount` is greater than `payer`'s balance in `Token`.                                  |" + 
     " | `Errors::NOT_PUBLISHED`  | `DiemAccount::EPAYER_DOESNT_HOLD_CURRENCY`              | `account` doesn't hold a balance in `Token`.                                            |" + 
     " | `Errors::NOT_PUBLISHED`  | `Diem::EPREBURN`                                        | `account` doesn't have a `Diem::Preburn<Token>` resource published under it.           |" + 
     " | `Errors::INVALID_STATE`  | `Diem::EPREBURN_OCCUPIED`                               | The `value` field in the `Diem::Preburn<Token>` resource under the sender is non-zero. |" + 
     " | `Errors::NOT_PUBLISHED`  | `Roles::EROLE_ID`                                        | The `account` did not have a role assigned to it.                                       |" + 
     " | `Errors::REQUIRES_ROLE`  | `Roles::EDESIGNATED_DEALER`                              | The `account` did not have the role of DesignatedDealer.                                |" + 
     "" + 
     " # Related Scripts" + 
     " * `TreasuryComplianceScripts::cancel_burn_with_amount`" + 
     " * `TreasuryComplianceScripts::burn_with_amount`" + 
     " * `TreasuryComplianceScripts::burn_txn_fees`",
      typeArgs: ["token"],
      args: [
        {name: "amount", type: {type: Types.U64}}
      ]
    },
                

                PublishSharedEd25519PublicKey: {
      stdlibEncodeFunction: Stdlib.encodePublishSharedEd25519PublicKeyScriptFunction,
      description: " # Summary" + 
     " Rotates the authentication key of the sending account to the newly-specified ed25519 public key and" + 
     " publishes a new shared authentication key derived from that public key under the sender's account." + 
     " Any account can send this transaction." + 
     "" + 
     " # Technical Description" + 
     " Rotates the authentication key of the sending account to the" + 
     " [authentication key derived from `public_key`](https://developers.diem.com/docs/core/accounts/#addresses-authentication-keys-and-cryptographic-keys)" + 
     " and publishes a `SharedEd25519PublicKey::SharedEd25519PublicKey` resource" + 
     " containing the 32-byte ed25519 `public_key` and the `DiemAccount::KeyRotationCapability` for" + 
     " `account` under `account`." + 
     "" + 
     " # Parameters" + 
     " | Name         | Type         | Description                                                                                        |" + 
     " | ------       | ------       | -------------                                                                                      |" + 
     " | `account`    | `signer`     | The signer of the sending account of the transaction.                                              |" + 
     " | `public_key` | `vector<u8>` | A valid 32-byte Ed25519 public key for `account`'s authentication key to be rotated to and stored. |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category              | Error Reason                                               | Description                                                                                         |" + 
     " | ----------------            | --------------                                             | -------------                                                                                       |" + 
     " | `Errors::INVALID_STATE`     | `DiemAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` | `account` has already delegated/extracted its `DiemAccount::KeyRotationCapability` resource.       |" + 
     " | `Errors::ALREADY_PUBLISHED` | `SharedEd25519PublicKey::ESHARED_KEY`                      | The `SharedEd25519PublicKey::SharedEd25519PublicKey` resource is already published under `account`. |" + 
     " | `Errors::INVALID_ARGUMENT`  | `SharedEd25519PublicKey::EMALFORMED_PUBLIC_KEY`            | `public_key` is an invalid ed25519 public key.                                                      |" + 
     "" + 
     " # Related Scripts" + 
     " * `AccountAdministrationScripts::rotate_shared_ed25519_public_key`",
      typeArgs: [],
      args: [
        {name: "public_key", type: {type: Types.Array, arrayType: {type: Types.U8}}}
      ]
    },
                

                RegisterValidatorConfig: {
      stdlibEncodeFunction: Stdlib.encodeRegisterValidatorConfigScriptFunction,
      description: " # Summary" + 
     " Updates a validator's configuration. This does not reconfigure the system and will not update" + 
     " the configuration in the validator set that is seen by other validators in the network. Can" + 
     " only be successfully sent by a Validator Operator account that is already registered with a" + 
     " validator." + 
     "" + 
     " # Technical Description" + 
     " This updates the fields with corresponding names held in the `ValidatorConfig::ValidatorConfig`" + 
     " config resource held under `validator_account`. It does not emit a `DiemConfig::NewEpochEvent`" + 
     " so the copy of this config held in the validator set will not be updated, and the changes are" + 
     " only \"locally\" under the `validator_account` account address." + 
     "" + 
     " # Parameters" + 
     " | Name                          | Type         | Description                                                                                                        |" + 
     " | ------                        | ------       | -------------                                                                                                      |" + 
     " | `validator_operator_account`  | `signer`     | Signer of the sending account. Must be the registered validator operator for the validator at `validator_address`. |" + 
     " | `validator_account`           | `address`    | The address of the validator's `ValidatorConfig::ValidatorConfig` resource being updated.                          |" + 
     " | `consensus_pubkey`            | `vector<u8>` | New Ed25519 public key to be used in the updated `ValidatorConfig::ValidatorConfig`.                               |" + 
     " | `validator_network_addresses` | `vector<u8>` | New set of `validator_network_addresses` to be used in the updated `ValidatorConfig::ValidatorConfig`.             |" + 
     " | `fullnode_network_addresses`  | `vector<u8>` | New set of `fullnode_network_addresses` to be used in the updated `ValidatorConfig::ValidatorConfig`.              |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                                   | Description                                                                                           |" + 
     " | ----------------           | --------------                                 | -------------                                                                                         |" + 
     " | `Errors::NOT_PUBLISHED`    | `ValidatorConfig::EVALIDATOR_CONFIG`           | `validator_address` does not have a `ValidatorConfig::ValidatorConfig` resource published under it.   |" + 
     " | `Errors::INVALID_ARGUMENT` | `ValidatorConfig::EINVALID_TRANSACTION_SENDER` | `validator_operator_account` is not the registered operator for the validator at `validator_address`. |" + 
     " | `Errors::INVALID_ARGUMENT` | `ValidatorConfig::EINVALID_CONSENSUS_KEY`      | `consensus_pubkey` is not a valid ed25519 public key.                                                 |" + 
     "" + 
     " # Related Scripts" + 
     " * `AccountCreationScripts::create_validator_account`" + 
     " * `AccountCreationScripts::create_validator_operator_account`" + 
     " * `ValidatorAdministrationScripts::add_validator_and_reconfigure`" + 
     " * `ValidatorAdministrationScripts::remove_validator_and_reconfigure`" + 
     " * `ValidatorAdministrationScripts::set_validator_operator`" + 
     " * `ValidatorAdministrationScripts::set_validator_operator_with_nonce_admin`" + 
     " * `ValidatorAdministrationScripts::set_validator_config_and_reconfigure`",
      typeArgs: [],
      args: [
        {name: "validator_account", type: {type: Types.Address}}, {name: "consensus_pubkey", type: {type: Types.Array, arrayType: {type: Types.U8}}}, {name: "validator_network_addresses", type: {type: Types.Array, arrayType: {type: Types.U8}}}, {name: "fullnode_network_addresses", type: {type: Types.Array, arrayType: {type: Types.U8}}}
      ]
    },
                

                RemoveExchangeLiquidity: {
      stdlibEncodeFunction: Stdlib.encodeRemoveExchangeLiquidityScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "exchange", type: {type: Types.Address}}, {name: "provider", type: {type: Types.Address}}, {name: "lp_coin_amt", type: {type: Types.U64}}
      ]
    },
                

                RemoveExchangeLiquidity: {
      stdlibEncodeFunction: Stdlib.encodeRemoveExchangeLiquidityScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "exchange", type: {type: Types.Address}}, {name: "provider", type: {type: Types.Address}}, {name: "lp_coin_amt", type: {type: Types.U64}}
      ]
    },
                

                RemoveExchangeLiquidity: {
      stdlibEncodeFunction: Stdlib.encodeRemoveExchangeLiquidityScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "exchange", type: {type: Types.Address}}, {name: "provider", type: {type: Types.Address}}, {name: "lp_coin_amt", type: {type: Types.U64}}
      ]
    },
                

                RemoveExchangeLiquidity: {
      stdlibEncodeFunction: Stdlib.encodeRemoveExchangeLiquidityScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "exchange", type: {type: Types.Address}}, {name: "provider", type: {type: Types.Address}}, {name: "lp_coin_amt", type: {type: Types.U64}}
      ]
    },
                

                RemoveExchangeLiquidity: {
      stdlibEncodeFunction: Stdlib.encodeRemoveExchangeLiquidityScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "exchange", type: {type: Types.Address}}, {name: "provider", type: {type: Types.Address}}, {name: "lp_coin_amt", type: {type: Types.U64}}
      ]
    },
                

                RemoveExchangeLiquidity: {
      stdlibEncodeFunction: Stdlib.encodeRemoveExchangeLiquidityScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "exchange", type: {type: Types.Address}}, {name: "provider", type: {type: Types.Address}}, {name: "lp_coin_amt", type: {type: Types.U64}}
      ]
    },
                

                RemoveValidatorAndReconfigure: {
      stdlibEncodeFunction: Stdlib.encodeRemoveValidatorAndReconfigureScriptFunction,
      description: " # Summary" + 
     " This script removes a validator account from the validator set, and triggers a reconfiguration" + 
     " of the system to remove the validator from the system. This transaction can only be" + 
     " successfully called by the Diem Root account." + 
     "" + 
     " # Technical Description" + 
     " This script removes the account at `validator_address` from the validator set. This transaction" + 
     " emits a `DiemConfig::NewEpochEvent` event. Once the reconfiguration triggered by this event" + 
     " has been performed, the account at `validator_address` is no longer considered to be a" + 
     " validator in the network. This transaction will fail if the validator at `validator_address`" + 
     " is not in the validator set." + 
     "" + 
     " # Parameters" + 
     " | Name                | Type         | Description                                                                                                                        |" + 
     " | ------              | ------       | -------------                                                                                                                      |" + 
     " | `dr_account`        | `signer`     | The signer of the sending account of this transaction. Must be the Diem Root signer.                                               |" + 
     " | `sliding_nonce`     | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                                         |" + 
     " | `validator_name`    | `vector<u8>` | ASCII-encoded human name for the validator. Must match the human name in the `ValidatorConfig::ValidatorConfig` for the validator. |" + 
     " | `validator_address` | `address`    | The validator account address to be removed from the validator set.                                                                |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                            | Description                                                                                     |" + 
     " | ----------------           | --------------                          | -------------                                                                                   |" + 
     " | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `dr_account`.                                  |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not.      |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                                   |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                               |" + 
     " | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`          | The sending account is not the Diem Root account or Treasury Compliance account                |" + 
     " | 0                          | 0                                       | The provided `validator_name` does not match the already-recorded human name for the validator. |" + 
     " | `Errors::INVALID_ARGUMENT` | `DiemSystem::ENOT_AN_ACTIVE_VALIDATOR` | The validator to be removed is not in the validator set.                                        |" + 
     " | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::EDIEM_ROOT`            | The sending account is not the Diem Root account.                                              |" + 
     " | `Errors::REQUIRES_ROLE`    | `Roles::EDIEM_ROOT`                    | The sending account is not the Diem Root account.                                              |" + 
     " | `Errors::INVALID_STATE`    | `DiemConfig::EINVALID_BLOCK_TIME`      | An invalid time value was encountered in reconfiguration. Unlikely to occur.                    |" + 
     "" + 
     " # Related Scripts" + 
     " * `AccountCreationScripts::create_validator_account`" + 
     " * `AccountCreationScripts::create_validator_operator_account`" + 
     " * `ValidatorAdministrationScripts::register_validator_config`" + 
     " * `ValidatorAdministrationScripts::add_validator_and_reconfigure`" + 
     " * `ValidatorAdministrationScripts::set_validator_operator`" + 
     " * `ValidatorAdministrationScripts::set_validator_operator_with_nonce_admin`" + 
     " * `ValidatorAdministrationScripts::set_validator_config_and_reconfigure`",
      typeArgs: [],
      args: [
        {name: "sliding_nonce", type: {type: Types.U64}}, {name: "validator_name", type: {type: Types.Array, arrayType: {type: Types.U8}}}, {name: "validator_address", type: {type: Types.Address}}
      ]
    },
                

                RemoveVaspDomain: {
      stdlibEncodeFunction: Stdlib.encodeRemoveVaspDomainScriptFunction,
      description: " # Summary" + 
     " Remove a VASP domain from parent VASP account. The transaction can only be sent by" + 
     " the Treasury Compliance account." + 
     "" + 
     " # Technical Description" + 
     " Removes a `VASPDomain::VASPDomain` from the `domains` field of the `VASPDomain::VASPDomains` resource published under" + 
     " account with `address`." + 
     "" + 
     " # Parameters" + 
     " | Name         | Type         | Description                                                                                     |" + 
     " | ------       | ------       | -------------                                                                                   |" + 
     " | `tc_account` | `signer`     | The signer of the sending account of this transaction. Must be the Treasury Compliance account. |" + 
     " | `address`    | `address`    | The `address` of parent VASP account that will update its domains.                              |" + 
     " | `domain`     | `vector<u8>` | The domain name.                                                                                |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                             | Description                                                                                                                            |" + 
     " | ----------------           | --------------                           | -------------                                                                                                                          |" + 
     " | `Errors::REQUIRES_ROLE`    | `Roles::ETREASURY_COMPLIANCE`            | The sending account is not the Treasury Compliance account.                                                                            |" + 
     " | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE`    | `tc_account` is not the Treasury Compliance account.                                                                                   |" + 
     " | `Errors::NOT_PUBLISHED`    | `VASPDomain::EVASP_DOMAIN_MANAGER`        | The `VASPDomain::VASPDomainManager` resource is not yet published under the Treasury Compliance account.                                 |" + 
     " | `Errors::NOT_PUBLISHED`    | `VASPDomain::EVASP_DOMAINS_NOT_PUBLISHED` | `address` does not have a `VASPDomain::VASPDomains` resource published under it.                                                         |" + 
     " | `Errors::INVALID_ARGUMENT` | `VASPDomain::EINVALID_VASP_DOMAIN`        | The `domain` is greater in length than `VASPDomain::DOMAIN_LENGTH`.                                                                        |" + 
     " | `Errors::INVALID_ARGUMENT` | `VASPDomain::EVASP_DOMAIN_NOT_FOUND`              | The `domain` does not exist in the list of `VASPDomain::VASPDomain`s  in the `VASPDomain::VASPDomains` resource published under `address`. |",
      typeArgs: [],
      args: [
        {name: "address", type: {type: Types.Address}}, {name: "domain", type: {type: Types.Array, arrayType: {type: Types.U8}}}
      ]
    },
                

                RotateAuthenticationKey: {
      stdlibEncodeFunction: Stdlib.encodeRotateAuthenticationKeyScriptFunction,
      description: " # Summary" + 
     " Rotates the `account`'s authentication key to the supplied new authentication key. May be sent by any account." + 
     "" + 
     " # Technical Description" + 
     " Rotate the `account`'s `DiemAccount::DiemAccount` `authentication_key`" + 
     " field to `new_key`. `new_key` must be a valid authentication key that" + 
     " corresponds to an ed25519 public key as described [here](https://developers.diem.com/docs/core/accounts/#addresses-authentication-keys-and-cryptographic-keys)," + 
     " and `account` must not have previously delegated its `DiemAccount::KeyRotationCapability`." + 
     "" + 
     " # Parameters" + 
     " | Name      | Type         | Description                                       |" + 
     " | ------    | ------       | -------------                                     |" + 
     " | `account` | `signer`     | Signer of the sending account of the transaction. |" + 
     " | `new_key` | `vector<u8>` | New authentication key to be used for `account`.  |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                                              | Description                                                                         |" + 
     " | ----------------           | --------------                                            | -------------                                                                       |" + 
     " | `Errors::INVALID_STATE`    | `DiemAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` | `account` has already delegated/extracted its `DiemAccount::KeyRotationCapability`. |" + 
     " | `Errors::INVALID_ARGUMENT` | `DiemAccount::EMALFORMED_AUTHENTICATION_KEY`              | `new_key` was an invalid length.                                                    |" + 
     "" + 
     " # Related Scripts" + 
     " * `AccountAdministrationScripts::rotate_authentication_key_with_nonce`" + 
     " * `AccountAdministrationScripts::rotate_authentication_key_with_nonce_admin`" + 
     " * `AccountAdministrationScripts::rotate_authentication_key_with_recovery_address`",
      typeArgs: [],
      args: [
        {name: "new_key", type: {type: Types.Array, arrayType: {type: Types.U8}}}
      ]
    },
                

                RotateAuthenticationKeyWithNonce: {
      stdlibEncodeFunction: Stdlib.encodeRotateAuthenticationKeyWithNonceScriptFunction,
      description: " # Summary" + 
     " Rotates the sender's authentication key to the supplied new authentication key. May be sent by" + 
     " any account that has a sliding nonce resource published under it (usually this is Treasury" + 
     " Compliance or Diem Root accounts)." + 
     "" + 
     " # Technical Description" + 
     " Rotates the `account`'s `DiemAccount::DiemAccount` `authentication_key`" + 
     " field to `new_key`. `new_key` must be a valid authentication key that" + 
     " corresponds to an ed25519 public key as described [here](https://developers.diem.com/docs/core/accounts/#addresses-authentication-keys-and-cryptographic-keys)," + 
     " and `account` must not have previously delegated its `DiemAccount::KeyRotationCapability`." + 
     "" + 
     " # Parameters" + 
     " | Name            | Type         | Description                                                                |" + 
     " | ------          | ------       | -------------                                                              |" + 
     " | `account`       | `signer`     | Signer of the sending account of the transaction.                          |" + 
     " | `sliding_nonce` | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction. |" + 
     " | `new_key`       | `vector<u8>` | New authentication key to be used for `account`.                           |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                                               | Description                                                                                |" + 
     " | ----------------           | --------------                                             | -------------                                                                              |" + 
     " | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                             | A `SlidingNonce` resource is not published under `account`.                                |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`                             | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`                             | The `sliding_nonce` is too far in the future.                                              |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`                    | The `sliding_nonce` has been previously recorded.                                          |" + 
     " | `Errors::INVALID_STATE`    | `DiemAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` | `account` has already delegated/extracted its `DiemAccount::KeyRotationCapability`.       |" + 
     " | `Errors::INVALID_ARGUMENT` | `DiemAccount::EMALFORMED_AUTHENTICATION_KEY`              | `new_key` was an invalid length.                                                           |" + 
     "" + 
     " # Related Scripts" + 
     " * `AccountAdministrationScripts::rotate_authentication_key`" + 
     " * `AccountAdministrationScripts::rotate_authentication_key_with_nonce_admin`" + 
     " * `AccountAdministrationScripts::rotate_authentication_key_with_recovery_address`",
      typeArgs: [],
      args: [
        {name: "sliding_nonce", type: {type: Types.U64}}, {name: "new_key", type: {type: Types.Array, arrayType: {type: Types.U8}}}
      ]
    },
                

                RotateAuthenticationKeyWithNonceAdmin: {
      stdlibEncodeFunction: Stdlib.encodeRotateAuthenticationKeyWithNonceAdminScriptFunction,
      description: " # Summary" + 
     " Rotates the specified account's authentication key to the supplied new authentication key. May" + 
     " only be sent by the Diem Root account as a write set transaction." + 
     "" + 
     " # Technical Description" + 
     " Rotate the `account`'s `DiemAccount::DiemAccount` `authentication_key` field to `new_key`." + 
     " `new_key` must be a valid authentication key that corresponds to an ed25519" + 
     " public key as described [here](https://developers.diem.com/docs/core/accounts/#addresses-authentication-keys-and-cryptographic-keys)," + 
     " and `account` must not have previously delegated its `DiemAccount::KeyRotationCapability`." + 
     "" + 
     " # Parameters" + 
     " | Name            | Type         | Description                                                                                       |" + 
     " | ------          | ------       | -------------                                                                                     |" + 
     " | `dr_account`    | `signer`     | The signer of the sending account of the write set transaction. May only be the Diem Root signer. |" + 
     " | `account`       | `signer`     | Signer of account specified in the `execute_as` field of the write set transaction.               |" + 
     " | `sliding_nonce` | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction for Diem Root.          |" + 
     " | `new_key`       | `vector<u8>` | New authentication key to be used for `account`.                                                  |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                                              | Description                                                                                                |" + 
     " | ----------------           | --------------                                            | -------------                                                                                              |" + 
     " | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                            | A `SlidingNonce` resource is not published under `dr_account`.                                             |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`                            | The `sliding_nonce` in `dr_account` is too old and it's impossible to determine if it's duplicated or not. |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`                            | The `sliding_nonce` in `dr_account` is too far in the future.                                              |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`                   | The `sliding_nonce` in` dr_account` has been previously recorded.                                          |" + 
     " | `Errors::INVALID_STATE`    | `DiemAccount::EKEY_ROTATION_CAPABILITY_ALREADY_EXTRACTED` | `account` has already delegated/extracted its `DiemAccount::KeyRotationCapability`.                        |" + 
     " | `Errors::INVALID_ARGUMENT` | `DiemAccount::EMALFORMED_AUTHENTICATION_KEY`              | `new_key` was an invalid length.                                                                           |" + 
     "" + 
     " # Related Scripts" + 
     " * `AccountAdministrationScripts::rotate_authentication_key`" + 
     " * `AccountAdministrationScripts::rotate_authentication_key_with_nonce`" + 
     " * `AccountAdministrationScripts::rotate_authentication_key_with_recovery_address`",
      typeArgs: [],
      args: [
        {name: "sliding_nonce", type: {type: Types.U64}}, {name: "new_key", type: {type: Types.Array, arrayType: {type: Types.U8}}}
      ]
    },
                

                RotateAuthenticationKeyWithRecoveryAddress: {
      stdlibEncodeFunction: Stdlib.encodeRotateAuthenticationKeyWithRecoveryAddressScriptFunction,
      description: " # Summary" + 
     " Rotates the authentication key of a specified account that is part of a recovery address to a" + 
     " new authentication key. Only used for accounts that are part of a recovery address (see" + 
     " `AccountAdministrationScripts::add_recovery_rotation_capability` for account restrictions)." + 
     "" + 
     " # Technical Description" + 
     " Rotates the authentication key of the `to_recover` account to `new_key` using the" + 
     " `DiemAccount::KeyRotationCapability` stored in the `RecoveryAddress::RecoveryAddress` resource" + 
     " published under `recovery_address`. `new_key` must be a valide authentication key as described" + 
     " [here](https://developers.diem.com/docs/core/accounts/#addresses-authentication-keys-and-cryptographic-keys)." + 
     " This transaction can be sent either by the `to_recover` account, or by the account where the" + 
     " `RecoveryAddress::RecoveryAddress` resource is published that contains `to_recover`'s `DiemAccount::KeyRotationCapability`." + 
     "" + 
     " # Parameters" + 
     " | Name               | Type         | Description                                                                                                                   |" + 
     " | ------             | ------       | -------------                                                                                                                 |" + 
     " | `account`          | `signer`     | Signer of the sending account of the transaction.                                                                             |" + 
     " | `recovery_address` | `address`    | Address where `RecoveryAddress::RecoveryAddress` that holds `to_recover`'s `DiemAccount::KeyRotationCapability` is published. |" + 
     " | `to_recover`       | `address`    | The address of the account whose authentication key will be updated.                                                          |" + 
     " | `new_key`          | `vector<u8>` | New authentication key to be used for the account at the `to_recover` address.                                                |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                                 | Description                                                                                                                                         |" + 
     " | ----------------           | --------------                               | -------------                                                                                                                                       |" + 
     " | `Errors::NOT_PUBLISHED`    | `RecoveryAddress::ERECOVERY_ADDRESS`         | `recovery_address` does not have a `RecoveryAddress::RecoveryAddress` resource published under it.                                                  |" + 
     " | `Errors::INVALID_ARGUMENT` | `RecoveryAddress::ECANNOT_ROTATE_KEY`        | The address of `account` is not `recovery_address` or `to_recover`.                                                                                 |" + 
     " | `Errors::INVALID_ARGUMENT` | `RecoveryAddress::EACCOUNT_NOT_RECOVERABLE`  | `to_recover`'s `DiemAccount::KeyRotationCapability`  is not in the `RecoveryAddress::RecoveryAddress`  resource published under `recovery_address`. |" + 
     " | `Errors::INVALID_ARGUMENT` | `DiemAccount::EMALFORMED_AUTHENTICATION_KEY` | `new_key` was an invalid length.                                                                                                                    |" + 
     "" + 
     " # Related Scripts" + 
     " * `AccountAdministrationScripts::rotate_authentication_key`" + 
     " * `AccountAdministrationScripts::rotate_authentication_key_with_nonce`" + 
     " * `AccountAdministrationScripts::rotate_authentication_key_with_nonce_admin`",
      typeArgs: [],
      args: [
        {name: "recovery_address", type: {type: Types.Address}}, {name: "to_recover", type: {type: Types.Address}}, {name: "new_key", type: {type: Types.Array, arrayType: {type: Types.U8}}}
      ]
    },
                

                RotateDualAttestationInfo: {
      stdlibEncodeFunction: Stdlib.encodeRotateDualAttestationInfoScriptFunction,
      description: " # Summary" + 
     " Updates the url used for off-chain communication, and the public key used to verify dual" + 
     " attestation on-chain. Transaction can be sent by any account that has dual attestation" + 
     " information published under it. In practice the only such accounts are Designated Dealers and" + 
     " Parent VASPs." + 
     "" + 
     " # Technical Description" + 
     " Updates the `base_url` and `compliance_public_key` fields of the `DualAttestation::Credential`" + 
     " resource published under `account`. The `new_key` must be a valid ed25519 public key." + 
     "" + 
     " # Events" + 
     " Successful execution of this transaction emits two events:" + 
     " * A `DualAttestation::ComplianceKeyRotationEvent` containing the new compliance public key, and" + 
     " the blockchain time at which the key was updated emitted on the `DualAttestation::Credential`" + 
     " `compliance_key_rotation_events` handle published under `account`; and" + 
     " * A `DualAttestation::BaseUrlRotationEvent` containing the new base url to be used for" + 
     " off-chain communication, and the blockchain time at which the url was updated emitted on the" + 
     " `DualAttestation::Credential` `base_url_rotation_events` handle published under `account`." + 
     "" + 
     " # Parameters" + 
     " | Name      | Type         | Description                                                               |" + 
     " | ------    | ------       | -------------                                                             |" + 
     " | `account` | `signer`     | Signer of the sending account of the transaction.                         |" + 
     " | `new_url` | `vector<u8>` | ASCII-encoded url to be used for off-chain communication with `account`.  |" + 
     " | `new_key` | `vector<u8>` | New ed25519 public key to be used for on-chain dual attestation checking. |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                           | Description                                                                |" + 
     " | ----------------           | --------------                         | -------------                                                              |" + 
     " | `Errors::NOT_PUBLISHED`    | `DualAttestation::ECREDENTIAL`         | A `DualAttestation::Credential` resource is not published under `account`. |" + 
     " | `Errors::INVALID_ARGUMENT` | `DualAttestation::EINVALID_PUBLIC_KEY` | `new_key` is not a valid ed25519 public key.                               |" + 
     "" + 
     " # Related Scripts" + 
     " * `AccountCreationScripts::create_parent_vasp_account`" + 
     " * `AccountCreationScripts::create_designated_dealer`" + 
     " * `AccountAdministrationScripts::rotate_dual_attestation_info`",
      typeArgs: [],
      args: [
        {name: "new_url", type: {type: Types.Array, arrayType: {type: Types.U8}}}, {name: "new_key", type: {type: Types.Array, arrayType: {type: Types.U8}}}
      ]
    },
                

                RotateSharedEd25519PublicKey: {
      stdlibEncodeFunction: Stdlib.encodeRotateSharedEd25519PublicKeyScriptFunction,
      description: " # Summary" + 
     " Rotates the authentication key in a `SharedEd25519PublicKey`. This transaction can be sent by" + 
     " any account that has previously published a shared ed25519 public key using" + 
     " `AccountAdministrationScripts::publish_shared_ed25519_public_key`." + 
     "" + 
     " # Technical Description" + 
     " `public_key` must be a valid ed25519 public key.  This transaction first rotates the public key stored in `account`'s" + 
     " `SharedEd25519PublicKey::SharedEd25519PublicKey` resource to `public_key`, after which it" + 
     " rotates the `account`'s authentication key to the new authentication key derived from `public_key` as defined" + 
     " [here](https://developers.diem.com/docs/core/accounts/#addresses-authentication-keys-and-cryptographic-keys)" + 
     " using the `DiemAccount::KeyRotationCapability` stored in `account`'s `SharedEd25519PublicKey::SharedEd25519PublicKey`." + 
     "" + 
     " # Parameters" + 
     " | Name         | Type         | Description                                           |" + 
     " | ------       | ------       | -------------                                         |" + 
     " | `account`    | `signer`     | The signer of the sending account of the transaction. |" + 
     " | `public_key` | `vector<u8>` | 32-byte Ed25519 public key.                           |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                                    | Description                                                                                   |" + 
     " | ----------------           | --------------                                  | -------------                                                                                 |" + 
     " | `Errors::NOT_PUBLISHED`    | `SharedEd25519PublicKey::ESHARED_KEY`           | A `SharedEd25519PublicKey::SharedEd25519PublicKey` resource is not published under `account`. |" + 
     " | `Errors::INVALID_ARGUMENT` | `SharedEd25519PublicKey::EMALFORMED_PUBLIC_KEY` | `public_key` is an invalid ed25519 public key.                                                |" + 
     "" + 
     " # Related Scripts" + 
     " * `AccountAdministrationScripts::publish_shared_ed25519_public_key`",
      typeArgs: [],
      args: [
        {name: "public_key", type: {type: Types.Array, arrayType: {type: Types.U8}}}
      ]
    },
                

                SetGasConstants: {
      stdlibEncodeFunction: Stdlib.encodeSetGasConstantsScriptFunction,
      description: " # Summary" + 
     " Updates the gas constants stored on chain and used by the VM for gas" + 
     " metering. This transaction can only be sent from the Diem Root account." + 
     "" + 
     " # Technical Description" + 
     " Updates the on-chain config holding the `DiemVMConfig` and emits a" + 
     " `DiemConfig::NewEpochEvent` to trigger a reconfiguration of the system." + 
     "" + 
     " # Parameters" + 
     " | Name                                | Type     | Description                                                                                            |" + 
     " | ------                              | ------   | -------------                                                                                          |" + 
     " | `account`                           | `signer` | Signer of the sending account. Must be the Diem Root account.                                          |" + 
     " | `sliding_nonce`                     | `u64`    | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                             |" + 
     " | `global_memory_per_byte_cost`       | `u64`    | The new cost to read global memory per-byte to be used for gas metering.                               |" + 
     " | `global_memory_per_byte_write_cost` | `u64`    | The new cost to write global memory per-byte to be used for gas metering.                              |" + 
     " | `min_transaction_gas_units`         | `u64`    | The new flat minimum amount of gas required for any transaction.                                       |" + 
     " | `large_transaction_cutoff`          | `u64`    | The new size over which an additional charge will be assessed for each additional byte.                |" + 
     " | `intrinsic_gas_per_byte`            | `u64`    | The new number of units of gas that to be charged per-byte over the new `large_transaction_cutoff`.    |" + 
     " | `maximum_number_of_gas_units`       | `u64`    | The new maximum number of gas units that can be set in a transaction.                                  |" + 
     " | `min_price_per_gas_unit`            | `u64`    | The new minimum gas price that can be set for a transaction.                                           |" + 
     " | `max_price_per_gas_unit`            | `u64`    | The new maximum gas price that can be set for a transaction.                                           |" + 
     " | `max_transaction_size_in_bytes`     | `u64`    | The new maximum size of a transaction that can be processed.                                           |" + 
     " | `gas_unit_scaling_factor`           | `u64`    | The new scaling factor to use when scaling between external and internal gas units.                    |" + 
     " | `default_account_size`              | `u64`    | The new default account size to use when assessing final costs for reads and writes to global storage. |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                                | Description                                                                                |" + 
     " | ----------------           | --------------                              | -------------                                                                              |" + 
     " | `Errors::INVALID_ARGUMENT` | `DiemVMConfig::EGAS_CONSTANT_INCONSISTENCY` | The provided gas constants are inconsistent.                                               |" + 
     " | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`              | A `SlidingNonce` resource is not published under `account`.                                |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`              | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`              | The `sliding_nonce` is too far in the future.                                              |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`     | The `sliding_nonce` has been previously recorded.                                          |" + 
     " | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::EDIEM_ROOT`                 | `account` is not the Diem Root account.                                                    |",
      typeArgs: [],
      args: [
        {name: "sliding_nonce", type: {type: Types.U64}}, {name: "global_memory_per_byte_cost", type: {type: Types.U64}}, {name: "global_memory_per_byte_write_cost", type: {type: Types.U64}}, {name: "min_transaction_gas_units", type: {type: Types.U64}}, {name: "large_transaction_cutoff", type: {type: Types.U64}}, {name: "intrinsic_gas_per_byte", type: {type: Types.U64}}, {name: "maximum_number_of_gas_units", type: {type: Types.U64}}, {name: "min_price_per_gas_unit", type: {type: Types.U64}}, {name: "max_price_per_gas_unit", type: {type: Types.U64}}, {name: "max_transaction_size_in_bytes", type: {type: Types.U64}}, {name: "gas_unit_scaling_factor", type: {type: Types.U64}}, {name: "default_account_size", type: {type: Types.U64}}
      ]
    },
                

                SetValidatorConfigAndReconfigure: {
      stdlibEncodeFunction: Stdlib.encodeSetValidatorConfigAndReconfigureScriptFunction,
      description: " # Summary" + 
     " Updates a validator's configuration, and triggers a reconfiguration of the system to update the" + 
     " validator set with this new validator configuration.  Can only be successfully sent by a" + 
     " Validator Operator account that is already registered with a validator." + 
     "" + 
     " # Technical Description" + 
     " This updates the fields with corresponding names held in the `ValidatorConfig::ValidatorConfig`" + 
     " config resource held under `validator_account`. It then emits a `DiemConfig::NewEpochEvent` to" + 
     " trigger a reconfiguration of the system.  This reconfiguration will update the validator set" + 
     " on-chain with the updated `ValidatorConfig::ValidatorConfig`." + 
     "" + 
     " # Parameters" + 
     " | Name                          | Type         | Description                                                                                                        |" + 
     " | ------                        | ------       | -------------                                                                                                      |" + 
     " | `validator_operator_account`  | `signer`     | Signer of the sending account. Must be the registered validator operator for the validator at `validator_address`. |" + 
     " | `validator_account`           | `address`    | The address of the validator's `ValidatorConfig::ValidatorConfig` resource being updated.                          |" + 
     " | `consensus_pubkey`            | `vector<u8>` | New Ed25519 public key to be used in the updated `ValidatorConfig::ValidatorConfig`.                               |" + 
     " | `validator_network_addresses` | `vector<u8>` | New set of `validator_network_addresses` to be used in the updated `ValidatorConfig::ValidatorConfig`.             |" + 
     " | `fullnode_network_addresses`  | `vector<u8>` | New set of `fullnode_network_addresses` to be used in the updated `ValidatorConfig::ValidatorConfig`.              |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                                   | Description                                                                                           |" + 
     " | ----------------           | --------------                                 | -------------                                                                                         |" + 
     " | `Errors::NOT_PUBLISHED`    | `ValidatorConfig::EVALIDATOR_CONFIG`           | `validator_address` does not have a `ValidatorConfig::ValidatorConfig` resource published under it.   |" + 
     " | `Errors::REQUIRES_ROLE`    | `Roles::EVALIDATOR_OPERATOR`                   | `validator_operator_account` does not have a Validator Operator role.                                 |" + 
     " | `Errors::INVALID_ARGUMENT` | `ValidatorConfig::EINVALID_TRANSACTION_SENDER` | `validator_operator_account` is not the registered operator for the validator at `validator_address`. |" + 
     " | `Errors::INVALID_ARGUMENT` | `ValidatorConfig::EINVALID_CONSENSUS_KEY`      | `consensus_pubkey` is not a valid ed25519 public key.                                                 |" + 
     " | `Errors::INVALID_STATE`    | `DiemConfig::EINVALID_BLOCK_TIME`             | An invalid time value was encountered in reconfiguration. Unlikely to occur.                          |" + 
     "" + 
     " # Related Scripts" + 
     " * `AccountCreationScripts::create_validator_account`" + 
     " * `AccountCreationScripts::create_validator_operator_account`" + 
     " * `ValidatorAdministrationScripts::add_validator_and_reconfigure`" + 
     " * `ValidatorAdministrationScripts::remove_validator_and_reconfigure`" + 
     " * `ValidatorAdministrationScripts::set_validator_operator`" + 
     " * `ValidatorAdministrationScripts::set_validator_operator_with_nonce_admin`" + 
     " * `ValidatorAdministrationScripts::register_validator_config`",
      typeArgs: [],
      args: [
        {name: "validator_account", type: {type: Types.Address}}, {name: "consensus_pubkey", type: {type: Types.Array, arrayType: {type: Types.U8}}}, {name: "validator_network_addresses", type: {type: Types.Array, arrayType: {type: Types.U8}}}, {name: "fullnode_network_addresses", type: {type: Types.Array, arrayType: {type: Types.U8}}}
      ]
    },
                

                SetValidatorOperator: {
      stdlibEncodeFunction: Stdlib.encodeSetValidatorOperatorScriptFunction,
      description: " # Summary" + 
     " Sets the validator operator for a validator in the validator's configuration resource \"locally\"" + 
     " and does not reconfigure the system. Changes from this transaction will not picked up by the" + 
     " system until a reconfiguration of the system is triggered. May only be sent by an account with" + 
     " Validator role." + 
     "" + 
     " # Technical Description" + 
     " Sets the account at `operator_account` address and with the specified `human_name` as an" + 
     " operator for the sending validator account. The account at `operator_account` address must have" + 
     " a Validator Operator role and have a `ValidatorOperatorConfig::ValidatorOperatorConfig`" + 
     " resource published under it. The sending `account` must be a Validator and have a" + 
     " `ValidatorConfig::ValidatorConfig` resource published under it. This script does not emit a" + 
     " `DiemConfig::NewEpochEvent` and no reconfiguration of the system is initiated by this script." + 
     "" + 
     " # Parameters" + 
     " | Name               | Type         | Description                                                                                  |" + 
     " | ------             | ------       | -------------                                                                                |" + 
     " | `account`          | `signer`     | The signer of the sending account of the transaction.                                        |" + 
     " | `operator_name`    | `vector<u8>` | Validator operator's human name.                                                             |" + 
     " | `operator_account` | `address`    | Address of the validator operator account to be added as the `account` validator's operator. |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                                          | Description                                                                                                                                                  |" + 
     " | ----------------           | --------------                                        | -------------                                                                                                                                                |" + 
     " | `Errors::NOT_PUBLISHED`    | `ValidatorOperatorConfig::EVALIDATOR_OPERATOR_CONFIG` | The `ValidatorOperatorConfig::ValidatorOperatorConfig` resource is not published under `operator_account`.                                                   |" + 
     " | 0                          | 0                                                     | The `human_name` field of the `ValidatorOperatorConfig::ValidatorOperatorConfig` resource under `operator_account` does not match the provided `human_name`. |" + 
     " | `Errors::REQUIRES_ROLE`    | `Roles::EVALIDATOR`                                   | `account` does not have a Validator account role.                                                                                                            |" + 
     " | `Errors::INVALID_ARGUMENT` | `ValidatorConfig::ENOT_A_VALIDATOR_OPERATOR`          | The account at `operator_account` does not have a `ValidatorOperatorConfig::ValidatorOperatorConfig` resource.                                               |" + 
     " | `Errors::NOT_PUBLISHED`    | `ValidatorConfig::EVALIDATOR_CONFIG`                  | A `ValidatorConfig::ValidatorConfig` is not published under `account`.                                                                                       |" + 
     "" + 
     " # Related Scripts" + 
     " * `AccountCreationScripts::create_validator_account`" + 
     " * `AccountCreationScripts::create_validator_operator_account`" + 
     " * `ValidatorAdministrationScripts::register_validator_config`" + 
     " * `ValidatorAdministrationScripts::remove_validator_and_reconfigure`" + 
     " * `ValidatorAdministrationScripts::add_validator_and_reconfigure`" + 
     " * `ValidatorAdministrationScripts::set_validator_operator_with_nonce_admin`" + 
     " * `ValidatorAdministrationScripts::set_validator_config_and_reconfigure`",
      typeArgs: [],
      args: [
        {name: "operator_name", type: {type: Types.Array, arrayType: {type: Types.U8}}}, {name: "operator_account", type: {type: Types.Address}}
      ]
    },
                

                SetValidatorOperatorWithNonceAdmin: {
      stdlibEncodeFunction: Stdlib.encodeSetValidatorOperatorWithNonceAdminScriptFunction,
      description: " # Summary" + 
     " Sets the validator operator for a validator in the validator's configuration resource \"locally\"" + 
     " and does not reconfigure the system. Changes from this transaction will not picked up by the" + 
     " system until a reconfiguration of the system is triggered. May only be sent by the Diem Root" + 
     " account as a write set transaction." + 
     "" + 
     " # Technical Description" + 
     " Sets the account at `operator_account` address and with the specified `human_name` as an" + 
     " operator for the validator `account`. The account at `operator_account` address must have a" + 
     " Validator Operator role and have a `ValidatorOperatorConfig::ValidatorOperatorConfig` resource" + 
     " published under it. The account represented by the `account` signer must be a Validator and" + 
     " have a `ValidatorConfig::ValidatorConfig` resource published under it. No reconfiguration of" + 
     " the system is initiated by this script." + 
     "" + 
     " # Parameters" + 
     " | Name               | Type         | Description                                                                                   |" + 
     " | ------             | ------       | -------------                                                                                 |" + 
     " | `dr_account`       | `signer`     | Signer of the sending account of the write set transaction. May only be the Diem Root signer. |" + 
     " | `account`          | `signer`     | Signer of account specified in the `execute_as` field of the write set transaction.           |" + 
     " | `sliding_nonce`    | `u64`        | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction for Diem Root.      |" + 
     " | `operator_name`    | `vector<u8>` | Validator operator's human name.                                                              |" + 
     " | `operator_account` | `address`    | Address of the validator operator account to be added as the `account` validator's operator.  |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                                          | Description                                                                                                                                                  |" + 
     " | ----------------           | --------------                                        | -------------                                                                                                                                                |" + 
     " | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                        | A `SlidingNonce` resource is not published under `dr_account`.                                                                                               |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`                        | The `sliding_nonce` in `dr_account` is too old and it's impossible to determine if it's duplicated or not.                                                   |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`                        | The `sliding_nonce` in `dr_account` is too far in the future.                                                                                                |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`               | The `sliding_nonce` in` dr_account` has been previously recorded.                                                                                            |" + 
     " | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                        | The sending account is not the Diem Root account or Treasury Compliance account                                                                             |" + 
     " | `Errors::NOT_PUBLISHED`    | `ValidatorOperatorConfig::EVALIDATOR_OPERATOR_CONFIG` | The `ValidatorOperatorConfig::ValidatorOperatorConfig` resource is not published under `operator_account`.                                                   |" + 
     " | 0                          | 0                                                     | The `human_name` field of the `ValidatorOperatorConfig::ValidatorOperatorConfig` resource under `operator_account` does not match the provided `human_name`. |" + 
     " | `Errors::REQUIRES_ROLE`    | `Roles::EVALIDATOR`                                   | `account` does not have a Validator account role.                                                                                                            |" + 
     " | `Errors::INVALID_ARGUMENT` | `ValidatorConfig::ENOT_A_VALIDATOR_OPERATOR`          | The account at `operator_account` does not have a `ValidatorOperatorConfig::ValidatorOperatorConfig` resource.                                               |" + 
     " | `Errors::NOT_PUBLISHED`    | `ValidatorConfig::EVALIDATOR_CONFIG`                  | A `ValidatorConfig::ValidatorConfig` is not published under `account`.                                                                                       |" + 
     "" + 
     " # Related Scripts" + 
     " * `AccountCreationScripts::create_validator_account`" + 
     " * `AccountCreationScripts::create_validator_operator_account`" + 
     " * `ValidatorAdministrationScripts::register_validator_config`" + 
     " * `ValidatorAdministrationScripts::remove_validator_and_reconfigure`" + 
     " * `ValidatorAdministrationScripts::add_validator_and_reconfigure`" + 
     " * `ValidatorAdministrationScripts::set_validator_operator`" + 
     " * `ValidatorAdministrationScripts::set_validator_config_and_reconfigure`",
      typeArgs: [],
      args: [
        {name: "sliding_nonce", type: {type: Types.U64}}, {name: "operator_name", type: {type: Types.Array, arrayType: {type: Types.U8}}}, {name: "operator_account", type: {type: Types.Address}}
      ]
    },
                

                TieredMint: {
      stdlibEncodeFunction: Stdlib.encodeTieredMintScriptFunction,
      description: " # Summary" + 
     " Mints a specified number of coins in a currency to a Designated Dealer. The sending account" + 
     " must be the Treasury Compliance account, and coins can only be minted to a Designated Dealer" + 
     " account." + 
     "" + 
     " # Technical Description" + 
     " Mints `mint_amount` of coins in the `CoinType` currency to Designated Dealer account at" + 
     " `designated_dealer_address`. The `tier_index` parameter specifies which tier should be used to" + 
     " check verify the off-chain approval policy, and is based in part on the on-chain tier values" + 
     " for the specific Designated Dealer, and the number of `CoinType` coins that have been minted to" + 
     " the dealer over the past 24 hours. Every Designated Dealer has 4 tiers for each currency that" + 
     " they support. The sending `tc_account` must be the Treasury Compliance account, and the" + 
     " receiver an authorized Designated Dealer account." + 
     "" + 
     " # Events" + 
     " Successful execution of the transaction will emit two events:" + 
     " * A `Diem::MintEvent` with the amount and currency code minted is emitted on the" + 
     " `mint_event_handle` in the stored `Diem::CurrencyInfo<CoinType>` resource stored under" + 
     " `0xA550C18`; and" + 
     " * A `DesignatedDealer::ReceivedMintEvent` with the amount, currency code, and Designated" + 
     " Dealer's address is emitted on the `mint_event_handle` in the stored `DesignatedDealer::Dealer`" + 
     " resource published under the `designated_dealer_address`." + 
     "" + 
     " # Parameters" + 
     " | Name                        | Type      | Description                                                                                                |" + 
     " | ------                      | ------    | -------------                                                                                              |" + 
     " | `CoinType`                  | Type      | The Move type for the `CoinType` being minted. `CoinType` must be an already-registered currency on-chain. |" + 
     " | `tc_account`                | `signer`  | The signer of the sending account of this transaction. Must be the Treasury Compliance account.            |" + 
     " | `sliding_nonce`             | `u64`     | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                                 |" + 
     " | `designated_dealer_address` | `address` | The address of the Designated Dealer account being minted to.                                              |" + 
     " | `mint_amount`               | `u64`     | The number of coins to be minted.                                                                          |" + 
     " | `tier_index`                | `u64`     | [Deprecated] The mint tier index to use for the Designated Dealer account. Will be ignored                 |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category                | Error Reason                                 | Description                                                                                                                  |" + 
     " | ----------------              | --------------                               | -------------                                                                                                                |" + 
     " | `Errors::NOT_PUBLISHED`       | `SlidingNonce::ESLIDING_NONCE`               | A `SlidingNonce` resource is not published under `tc_account`.                                                               |" + 
     " | `Errors::INVALID_ARGUMENT`    | `SlidingNonce::ENONCE_TOO_OLD`               | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not.                                   |" + 
     " | `Errors::INVALID_ARGUMENT`    | `SlidingNonce::ENONCE_TOO_NEW`               | The `sliding_nonce` is too far in the future.                                                                                |" + 
     " | `Errors::INVALID_ARGUMENT`    | `SlidingNonce::ENONCE_ALREADY_RECORDED`      | The `sliding_nonce` has been previously recorded.                                                                            |" + 
     " | `Errors::REQUIRES_ADDRESS`    | `CoreAddresses::ETREASURY_COMPLIANCE`        | `tc_account` is not the Treasury Compliance account.                                                                         |" + 
     " | `Errors::REQUIRES_ROLE`       | `Roles::ETREASURY_COMPLIANCE`                | `tc_account` is not the Treasury Compliance account.                                                                         |" + 
     " | `Errors::INVALID_ARGUMENT`    | `DesignatedDealer::EINVALID_MINT_AMOUNT`     | `mint_amount` is zero.                                                                                                       |" + 
     " | `Errors::NOT_PUBLISHED`       | `DesignatedDealer::EDEALER`                  | `DesignatedDealer::Dealer` or `DesignatedDealer::TierInfo<CoinType>` resource does not exist at `designated_dealer_address`. |" + 
     " | `Errors::REQUIRES_CAPABILITY` | `Diem::EMINT_CAPABILITY`                    | `tc_account` does not have a `Diem::MintCapability<CoinType>` resource published under it.                                  |" + 
     " | `Errors::INVALID_STATE`       | `Diem::EMINTING_NOT_ALLOWED`                | Minting is not currently allowed for `CoinType` coins.                                                                       |" + 
     " | `Errors::LIMIT_EXCEEDED`      | `DiemAccount::EDEPOSIT_EXCEEDS_LIMITS`      | The depositing of the funds would exceed the `account`'s account limits.                                                     |" + 
     "" + 
     " # Related Scripts" + 
     " * `AccountCreationScripts::create_designated_dealer`" + 
     " * `PaymentScripts::peer_to_peer_with_metadata`" + 
     " * `AccountAdministrationScripts::rotate_dual_attestation_info`",
      typeArgs: ["coin_type"],
      args: [
        {name: "sliding_nonce", type: {type: Types.U64}}, {name: "designated_dealer_address", type: {type: Types.Address}}, {name: "mint_amount", type: {type: Types.U64}}, {name: "tier_index", type: {type: Types.U64}}
      ]
    },
                

                UnfreezeAccount: {
      stdlibEncodeFunction: Stdlib.encodeUnfreezeAccountScriptFunction,
      description: " # Summary" + 
     " Unfreezes the account at `address`. The sending account of this transaction must be the" + 
     " Treasury Compliance account. After the successful execution of this transaction transactions" + 
     " may be sent from the previously frozen account, and coins may be sent and received." + 
     "" + 
     " # Technical Description" + 
     " Sets the `AccountFreezing::FreezingBit` to `false` and emits a" + 
     " `AccountFreezing::UnFreezeAccountEvent`. The transaction sender must be the Treasury Compliance" + 
     " account. Note that this is a per-account property so unfreezing a Parent VASP will not effect" + 
     " the status any of its child accounts and vice versa." + 
     "" + 
     " # Events" + 
     " Successful execution of this script will emit a `AccountFreezing::UnFreezeAccountEvent` with" + 
     " the `unfrozen_address` set the `to_unfreeze_account`'s address." + 
     "" + 
     " # Parameters" + 
     " | Name                  | Type      | Description                                                                                     |" + 
     " | ------                | ------    | -------------                                                                                   |" + 
     " | `tc_account`          | `signer`  | The signer of the sending account of this transaction. Must be the Treasury Compliance account. |" + 
     " | `sliding_nonce`       | `u64`     | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                      |" + 
     " | `to_unfreeze_account` | `address` | The account address to be frozen.                                                               |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                            | Description                                                                                |" + 
     " | ----------------           | --------------                          | -------------                                                                              |" + 
     " | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `account`.                                |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |" + 
     " | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE`   | The sending account is not the Treasury Compliance account.                                |" + 
     "" + 
     " # Related Scripts" + 
     " * `TreasuryComplianceScripts::freeze_account`",
      typeArgs: [],
      args: [
        {name: "sliding_nonce", type: {type: Types.U64}}, {name: "to_unfreeze_account", type: {type: Types.Address}}
      ]
    },
                

                UpdateDiemConsensusConfig: {
      stdlibEncodeFunction: Stdlib.encodeUpdateDiemConsensusConfigScriptFunction,
      description: "  # Summary" + 
     " Updates the Diem consensus config that is stored on-chain and is used by the Consensus.  This" + 
     " transaction can only be sent from the Diem Root account." + 
     "" + 
     " # Technical Description" + 
     " Updates the `DiemConsensusConfig` on-chain config and emits a `DiemConfig::NewEpochEvent` to trigger" + 
     " a reconfiguration of the system." + 
     "" + 
     " # Parameters" + 
     " | Name            | Type          | Description                                                                |" + 
     " | ------          | ------        | -------------                                                              |" + 
     " | `account`       | `signer`      | Signer of the sending account. Must be the Diem Root account.              |" + 
     " | `sliding_nonce` | `u64`         | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction. |" + 
     " | `config`        | `vector<u8>`  | The serialized bytes of consensus config.                                  |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                                  | Description                                                                                |" + 
     " | ----------------           | --------------                                | -------------                                                                              |" + 
     " | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                | A `SlidingNonce` resource is not published under `account`.                                |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`                | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`                | The `sliding_nonce` is too far in the future.                                              |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`       | The `sliding_nonce` has been previously recorded.                                          |" + 
     " | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::EDIEM_ROOT`                   | `account` is not the Diem Root account.                                                    |",
      typeArgs: [],
      args: [
        {name: "sliding_nonce", type: {type: Types.U64}}, {name: "config", type: {type: Types.Array, arrayType: {type: Types.U8}}}
      ]
    },
                

                UpdateDiemVersion: {
      stdlibEncodeFunction: Stdlib.encodeUpdateDiemVersionScriptFunction,
      description: "  # Summary" + 
     " Updates the Diem major version that is stored on-chain and is used by the VM.  This" + 
     " transaction can only be sent from the Diem Root account." + 
     "" + 
     " # Technical Description" + 
     " Updates the `DiemVersion` on-chain config and emits a `DiemConfig::NewEpochEvent` to trigger" + 
     " a reconfiguration of the system. The `major` version that is passed in must be strictly greater" + 
     " than the current major version held on-chain. The VM reads this information and can use it to" + 
     " preserve backwards compatibility with previous major versions of the VM." + 
     "" + 
     " # Parameters" + 
     " | Name            | Type     | Description                                                                |" + 
     " | ------          | ------   | -------------                                                              |" + 
     " | `account`       | `signer` | Signer of the sending account. Must be the Diem Root account.              |" + 
     " | `sliding_nonce` | `u64`    | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction. |" + 
     " | `major`         | `u64`    | The `major` version of the VM to be used from this transaction on.         |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                                  | Description                                                                                |" + 
     " | ----------------           | --------------                                | -------------                                                                              |" + 
     " | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`                | A `SlidingNonce` resource is not published under `account`.                                |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`                | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`                | The `sliding_nonce` is too far in the future.                                              |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED`       | The `sliding_nonce` has been previously recorded.                                          |" + 
     " | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::EDIEM_ROOT`                   | `account` is not the Diem Root account.                                                    |" + 
     " | `Errors::INVALID_ARGUMENT` | `DiemVersion::EINVALID_MAJOR_VERSION_NUMBER`  | `major` is less-than or equal to the current major version stored on-chain.                |",
      typeArgs: [],
      args: [
        {name: "sliding_nonce", type: {type: Types.U64}}, {name: "major", type: {type: Types.U64}}
      ]
    },
                

                UpdateDualAttestationLimit: {
      stdlibEncodeFunction: Stdlib.encodeUpdateDualAttestationLimitScriptFunction,
      description: " # Summary" + 
     " Update the dual attestation limit on-chain. Defined in terms of micro-XDX.  The transaction can" + 
     " only be sent by the Treasury Compliance account.  After this transaction all inter-VASP" + 
     " payments over this limit must be checked for dual attestation." + 
     "" + 
     " # Technical Description" + 
     " Updates the `micro_xdx_limit` field of the `DualAttestation::Limit` resource published under" + 
     " `0xA550C18`. The amount is set in micro-XDX." + 
     "" + 
     " # Parameters" + 
     " | Name                  | Type     | Description                                                                                     |" + 
     " | ------                | ------   | -------------                                                                                   |" + 
     " | `tc_account`          | `signer` | The signer of the sending account of this transaction. Must be the Treasury Compliance account. |" + 
     " | `sliding_nonce`       | `u64`    | The `sliding_nonce` (see: `SlidingNonce`) to be used for this transaction.                      |" + 
     " | `new_micro_xdx_limit` | `u64`    | The new dual attestation limit to be used on-chain.                                             |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                            | Description                                                                                |" + 
     " | ----------------           | --------------                          | -------------                                                                              |" + 
     " | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `tc_account`.                             |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |" + 
     " | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE`   | `tc_account` is not the Treasury Compliance account.                                       |" + 
     "" + 
     " # Related Scripts" + 
     " * `TreasuryComplianceScripts::update_exchange_rate`" + 
     " * `TreasuryComplianceScripts::update_minting_ability`",
      typeArgs: [],
      args: [
        {name: "sliding_nonce", type: {type: Types.U64}}, {name: "new_micro_xdx_limit", type: {type: Types.U64}}
      ]
    },
                

                UpdateExchangeRate: {
      stdlibEncodeFunction: Stdlib.encodeUpdateExchangeRateScriptFunction,
      description: " # Summary" + 
     " Update the rough on-chain exchange rate between a specified currency and XDX (as a conversion" + 
     " to micro-XDX). The transaction can only be sent by the Treasury Compliance account. After this" + 
     " transaction the updated exchange rate will be used for normalization of gas prices, and for" + 
     " dual attestation checking." + 
     "" + 
     " # Technical Description" + 
     " Updates the on-chain exchange rate from the given `Currency` to micro-XDX.  The exchange rate" + 
     " is given by `new_exchange_rate_numerator/new_exchange_rate_denominator`." + 
     "" + 
     " # Parameters" + 
     " | Name                            | Type     | Description                                                                                                                        |" + 
     " | ------                          | ------   | -------------                                                                                                                      |" + 
     " | `Currency`                      | Type     | The Move type for the `Currency` whose exchange rate is being updated. `Currency` must be an already-registered currency on-chain. |" + 
     " | `tc_account`                    | `signer` | The signer of the sending account of this transaction. Must be the Treasury Compliance account.                                    |" + 
     " | `sliding_nonce`                 | `u64`    | The `sliding_nonce` (see: `SlidingNonce`) to be used for the transaction.                                                          |" + 
     " | `new_exchange_rate_numerator`   | `u64`    | The numerator for the new to micro-XDX exchange rate for `Currency`.                                                               |" + 
     " | `new_exchange_rate_denominator` | `u64`    | The denominator for the new to micro-XDX exchange rate for `Currency`.                                                             |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                            | Description                                                                                |" + 
     " | ----------------           | --------------                          | -------------                                                                              |" + 
     " | `Errors::NOT_PUBLISHED`    | `SlidingNonce::ESLIDING_NONCE`          | A `SlidingNonce` resource is not published under `tc_account`.                             |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_OLD`          | The `sliding_nonce` is too old and it's impossible to determine if it's duplicated or not. |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_TOO_NEW`          | The `sliding_nonce` is too far in the future.                                              |" + 
     " | `Errors::INVALID_ARGUMENT` | `SlidingNonce::ENONCE_ALREADY_RECORDED` | The `sliding_nonce` has been previously recorded.                                          |" + 
     " | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE`   | `tc_account` is not the Treasury Compliance account.                                       |" + 
     " | `Errors::REQUIRES_ROLE`    | `Roles::ETREASURY_COMPLIANCE`           | `tc_account` is not the Treasury Compliance account.                                       |" + 
     " | `Errors::INVALID_ARGUMENT` | `FixedPoint32::EDENOMINATOR`            | `new_exchange_rate_denominator` is zero.                                                   |" + 
     " | `Errors::INVALID_ARGUMENT` | `FixedPoint32::ERATIO_OUT_OF_RANGE`     | The quotient is unrepresentable as a `FixedPoint32`.                                       |" + 
     " | `Errors::LIMIT_EXCEEDED`   | `FixedPoint32::ERATIO_OUT_OF_RANGE`     | The quotient is unrepresentable as a `FixedPoint32`.                                       |" + 
     "" + 
     " # Related Scripts" + 
     " * `TreasuryComplianceScripts::update_dual_attestation_limit`" + 
     " * `TreasuryComplianceScripts::update_minting_ability`",
      typeArgs: ["currency"],
      args: [
        {name: "sliding_nonce", type: {type: Types.U64}}, {name: "new_exchange_rate_numerator", type: {type: Types.U64}}, {name: "new_exchange_rate_denominator", type: {type: Types.U64}}
      ]
    },
                

                UpdateMintingAbility: {
      stdlibEncodeFunction: Stdlib.encodeUpdateMintingAbilityScriptFunction,
      description: " # Summary" + 
     " Script to allow or disallow minting of new coins in a specified currency.  This transaction can" + 
     " only be sent by the Treasury Compliance account.  Turning minting off for a currency will have" + 
     " no effect on coins already in circulation, and coins may still be removed from the system." + 
     "" + 
     " # Technical Description" + 
     " This transaction sets the `can_mint` field of the `Diem::CurrencyInfo<Currency>` resource" + 
     " published under `0xA550C18` to the value of `allow_minting`. Minting of coins if allowed if" + 
     " this field is set to `true` and minting of new coins in `Currency` is disallowed otherwise." + 
     " This transaction needs to be sent by the Treasury Compliance account." + 
     "" + 
     " # Parameters" + 
     " | Name            | Type     | Description                                                                                                                          |" + 
     " | ------          | ------   | -------------                                                                                                                        |" + 
     " | `Currency`      | Type     | The Move type for the `Currency` whose minting ability is being updated. `Currency` must be an already-registered currency on-chain. |" + 
     " | `account`       | `signer` | Signer of the sending account. Must be the Diem Root account.                                                                        |" + 
     " | `allow_minting` | `bool`   | Whether to allow minting of new coins in `Currency`.                                                                                 |" + 
     "" + 
     " # Common Abort Conditions" + 
     " | Error Category             | Error Reason                          | Description                                          |" + 
     " | ----------------           | --------------                        | -------------                                        |" + 
     " | `Errors::REQUIRES_ADDRESS` | `CoreAddresses::ETREASURY_COMPLIANCE` | `tc_account` is not the Treasury Compliance account. |" + 
     " | `Errors::NOT_PUBLISHED`    | `Diem::ECURRENCY_INFO`               | `Currency` is not a registered currency on-chain.    |" + 
     "" + 
     " # Related Scripts" + 
     " * `TreasuryComplianceScripts::update_dual_attestation_limit`" + 
     " * `TreasuryComplianceScripts::update_exchange_rate`",
      typeArgs: ["currency"],
      args: [
        {name: "allow_minting", type: {type: Types.Boolean}}
      ]
    },
                
  }

}


export type ScriptDecoders = {
  User: {
    AddLiquidity: (type: string, amt: DiemTypes.TransactionArgumentVariantU64) => void;
    MintCoinA: (type: string, amt: DiemTypes.TransactionArgumentVariantU64) => void;
    MintCoinB: (type: string, amt: DiemTypes.TransactionArgumentVariantU64) => void;
    RemoveLiquidity: (type: string, amt: DiemTypes.TransactionArgumentVariantU64) => void;
    default: (type: keyof ScriptDecoders['User']) => void;
  };
};
