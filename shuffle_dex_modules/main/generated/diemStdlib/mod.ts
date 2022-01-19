
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


export class ScriptFunctionCallVariantAddExchangeLiquidity extends ScriptFunctionCall {

constructor (public coin_a_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantExchangeCoinAToCoinB extends ScriptFunctionCall {

constructor (public coin_a_amt: uint64) {
  super();
}

}

export class ScriptFunctionCallVariantInitializeExchange extends ScriptFunctionCall {

constructor (public coin_a_amt: uint64, public coin_b_amt: uint64) {
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

   */
  static encodeAddExchangeLiquidityScriptFunction(coin_a_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_a_amt);
    const coin_a_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [coin_a_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[92], [233], [215], [57], [201], [76], [188], [64], [136], [203], [40], [188], [179], [130], [148], [143]]), new DiemTypes.Identifier("Exchange"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("add_exchange_liquidity");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeExchangeCoinAToCoinBScriptFunction(coin_a_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_a_amt);
    const coin_a_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [coin_a_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[92], [233], [215], [57], [201], [76], [188], [64], [136], [203], [40], [188], [179], [130], [148], [143]]), new DiemTypes.Identifier("Exchange"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("exchange_coinA_to_coinB");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  /**

   */
  static encodeInitializeExchangeScriptFunction(coin_a_amt: bigint, coin_b_amt: bigint): DiemTypes.TransactionPayload {
    const tyArgs: Seq<DiemTypes.TypeTag> = [];
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_a_amt);
    const coin_a_amt_serialized: bytes = serializer.getBytes();
    var serializer = new BcsSerializer();
    serializer.serializeU64(coin_b_amt);
    const coin_b_amt_serialized: bytes = serializer.getBytes();
    const args: Seq<bytes> = [coin_a_amt_serialized, coin_b_amt_serialized];
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[92], [233], [215], [57], [201], [76], [188], [64], [136], [203], [40], [188], [179], [130], [148], [143]]), new DiemTypes.Identifier("Exchange"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("initialize_exchange");
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
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[92], [233], [215], [57], [201], [76], [188], [64], [136], [203], [40], [188], [179], [130], [148], [143]]), new DiemTypes.Identifier("CoinA"));
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
    const module_id: DiemTypes.ModuleId = new DiemTypes.ModuleId(new DiemTypes.AccountAddress([[92], [233], [215], [57], [201], [76], [188], [64], [136], [203], [40], [188], [179], [130], [148], [143]]), new DiemTypes.Identifier("CoinB"));
    const function_name: DiemTypes.Identifier = new DiemTypes.Identifier("mint_coin_b");
    const script = new DiemTypes.ScriptFunction(module_id, function_name, tyArgs, args);
    return new DiemTypes.TransactionPayloadVariantScriptFunction(script);
  }

  static decodeAddExchangeLiquidityScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantAddExchangeLiquidity {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const coin_a_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantAddExchangeLiquidity(
        coin_a_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeExchangeCoinAToCoinBScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantExchangeCoinAToCoinB {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const coin_a_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantExchangeCoinAToCoinB(
        coin_a_amt
      );
    } else {
      throw new Error("Transaction payload not a script function payload")
    }
  }

  static decodeInitializeExchangeScriptFunction(script_fun: DiemTypes.TransactionPayload): ScriptFunctionCallVariantInitializeExchange {
  if (script_fun instanceof DiemTypes.TransactionPayloadVariantScriptFunction) {
      var deserializer = new BcsDeserializer(script_fun.value.args[0]);
      const coin_a_amt: bigint = deserializer.deserializeU64();

      var deserializer = new BcsDeserializer(script_fun.value.args[1]);
      const coin_b_amt: bigint = deserializer.deserializeU64();

      return new ScriptFunctionCallVariantInitializeExchange(
        coin_a_amt,
        coin_b_amt
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

  static ADD_LIQUIDITY_CODE = Stdlib.fromHexString('a11ceb0b040000000501000203020505070d071417082b1000000001020300030c0c03000303060c060c01030845786368616e67650d6164645f6c69717569646974795ce9d739c94cbc4088cb28bcb382948f000001060a020e010e0011000102');

  static MINT_COIN_A_CODE = Stdlib.fromHexString('a11ceb0b040000000501000203020505070a07110b081c1000000001020300020c03000203060c010305436f696e41046d696e745ce9d739c94cbc4088cb28bcb382948f000001050a010e0011000102');

  static MINT_COIN_B_CODE = Stdlib.fromHexString('a11ceb0b040000000501000203020505070a07110b081c1000000001020300020c03000203060c010305436f696e42046d696e745ce9d739c94cbc4088cb28bcb382948f000001050a010e0011000102');

  static REMOVE_LIQUIDITY_CODE = Stdlib.fromHexString('a11ceb0b040000000501000203020505070e07151a082f1000000001020300030c0c03000303060c060c0203030845786368616e67651072656d6f76655f6c69717569646974795ce9d739c94cbc4088cb28bcb382948f000001070a020e010e001100010102');

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

                AddExchangeLiquidity: {
      stdlibEncodeFunction: Stdlib.encodeAddExchangeLiquidityScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "coin_a_amt", type: {type: Types.U64}}
      ]
    },
                

                ExchangeCoinAToCoinB: {
      stdlibEncodeFunction: Stdlib.encodeExchangeCoinAToCoinBScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "coin_a_amt", type: {type: Types.U64}}
      ]
    },
                

                InitializeExchange: {
      stdlibEncodeFunction: Stdlib.encodeInitializeExchangeScriptFunction,
      description: "",
      typeArgs: [],
      args: [
        {name: "coin_a_amt", type: {type: Types.U64}}, {name: "coin_b_amt", type: {type: Types.U64}}
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
