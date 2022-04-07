// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import * as DiemHelpers from "./helpers.ts";
import * as DiemTypes from "./generated/diemTypes/mod.ts";
import * as codegen from "./generated/diemStdlib/mod.ts";
import {
  addressOrDefault,
  consoleContext,
  defaultUserContext,
} from "./context.ts";
import * as devapi from "./devapi.ts";
import * as util from "https://deno.land/std@0.85.0/node/util.ts";
import { green } from "https://deno.land/x/nanocolors@0.1.12/mod.ts";

const textEncoder = new util.TextEncoder();

await printWelcome();

function highlight(content: string) {
  return green(content);
}

export async function printWelcome() {
  console.log(`Loading Project ${highlight(consoleContext.projectPath)}`);
  console.log(
    `Default Account Address ${highlight(defaultUserContext.address)}`,
  );
  console.log(
    `"helpers", "devapi", "context", "main", "codegen", "help" top level objects available`,
  );
  console.log(`Run "help" for more information on top level objects`);
  console.log(
    `Connecting to ${consoleContext.networkName} at ${
      highlight(consoleContext.nodeUrl)
    }`,
  );
  console.log(await devapi.ledgerInfo());
  console.log();
}

// ScriptFunction example; client side creation and signing of transactions.
// https://github.com/diem/diem/blob/main/json-rpc/docs/method_submit.md#method-submit
export async function mintCoinAFunction(
  amt: bigint,
) {
  const payload = codegen.Stdlib.encodeMintCoinAScriptFunction(
    amt,
  );
  return await DiemHelpers.buildAndSubmitTransaction(
    defaultUserContext.address,
    await devapi.sequenceNumber(),
    await defaultUserContext.readPrivateKey(),
    payload,
  );
}

// ScriptFunction example; client side creation and signing of transactions.
// https://github.com/diem/diem/blob/main/json-rpc/docs/method_submit.md#method-submit
export async function mintCoinBFunction(
  amt: bigint,
) {
  const payload = codegen.Stdlib.encodeMintCoinBScriptFunction(
    amt,
  );
  return await DiemHelpers.buildAndSubmitTransaction(
    defaultUserContext.address,
    await devapi.sequenceNumber(),
    await defaultUserContext.readPrivateKey(),
    payload,
  );
}


export async function initializeEventsA() {
  const payloadA = codegen.Stdlib.encodeInitializeCoinAScriptFunction();
  return await DiemHelpers.buildAndSubmitTransaction(
      defaultUserContext.address,
      await devapi.sequenceNumber(),
      await defaultUserContext.readPrivateKey(),
      payloadA,
  );
}

export async function initializeEventsB() {
  const payloadB = codegen.Stdlib.encodeInitializeCoinBScriptFunction();
  return await DiemHelpers.buildAndSubmitTransaction(
    defaultUserContext.address,
    await devapi.sequenceNumber(),
    await defaultUserContext.readPrivateKey(),
    payloadB,
  );
}

export async function initializeLPAB() {
  const payloadA = codegen.Stdlib.encodeInitializeLpCoinAbScriptFunction();
  return await DiemHelpers.buildAndSubmitTransaction(
      defaultUserContext.address,
      await devapi.sequenceNumber(),
      await defaultUserContext.readPrivateKey(),
      payloadA,
  );
}

// ScriptFunction example; client side creation and signing of transactions.
// https://github.com/diem/diem/blob/main/json-rpc/docs/method_submit.md#method-submit
export async function addLiquidity(
  amt: bigint,
) {
  const payload = codegen.Stdlib.encodeAddExchangeLiquidityScriptFunction(
    DiemHelpers.hexToAccountAddress("f342bc282b4be87f402127ee2a7e8c0c"),
    DiemHelpers.hexToAccountAddress(defaultUserContext.address),
    amt,
  );
  return await DiemHelpers.buildAndSubmitTransaction(
    defaultUserContext.address,
    await devapi.sequenceNumber(),
    await defaultUserContext.readPrivateKey(),
    payload,
  );
}

// ScriptFunction example; client side creation and signing of transactions.
// https://github.com/diem/diem/blob/main/json-rpc/docs/method_submit.md#method-submit
export async function removeLiquidity(
  amt: bigint,
) {
  const payload = codegen.Stdlib.encodeRemoveExchangeLiquidityScriptFunction(
    DiemHelpers.hexToAccountAddress("f342bc282b4be87f402127ee2a7e8c0c"),
    DiemHelpers.hexToAccountAddress(defaultUserContext.address),
    amt,
  );
  return await DiemHelpers.buildAndSubmitTransaction(
    defaultUserContext.address,
    await devapi.sequenceNumber(),
    await defaultUserContext.readPrivateKey(),
    payload,
  );
}

// ScriptFunction example; client side creation and signing of transactions.
// https://github.com/diem/diem/blob/main/json-rpc/docs/method_submit.md#method-submit
export async function swapCoinACoinB(
  amt: bigint,
) {
  const payload = codegen.Stdlib.encodeExchangeCoinAToCoinBScriptFunction(
    DiemHelpers.hexToAccountAddress(defaultUserContext.address),
    DiemHelpers.hexToAccountAddress("f342bc282b4be87f402127ee2a7e8c0c"),
    amt,
  );
  return await DiemHelpers.buildAndSubmitTransaction(
    defaultUserContext.address,
    await devapi.sequenceNumber(),
    await defaultUserContext.readPrivateKey(),
    payload,
  );
}


//
// export async function addLiquidity(
//   coin_a_amt: bigint
// ) {
//   const payload = codegen.Stdlib.encodeAddExchangeLiquidityScriptFunction(
//     coin_a_amt
//   );
//   return await DiemHelpers.buildAndSubmitTransaction(
//     defaultUserContext.address,
//     await devapi.sequenceNumber(),
//     await defaultUserContext.readPrivateKey(),
//     payload,
//   );
// }
//
// export async function exchangeCoinAToCoinB(
//   coin_a_amt: bigint
// ) {
//   const payload = codegen.Stdlib.encodeExchangeCoinAToCoinBScriptFunction(
//     coin_a_amt
//   );
//   return await DiemHelpers.buildAndSubmitTransaction(
//     defaultUserContext.address,
//     await devapi.sequenceNumber(),
//     await defaultUserContext.readPrivateKey(),
//     payload,
//   );
// }



// ScriptFunction example; client side creation and signing of transactions.
// https://github.com/diem/diem/blob/main/json-rpc/docs/method_submit.md#method-submit
// export async function setMessageScriptFunction(
//   message: string,
// ) {
//   const payload = codegen.Stdlib.encodeSetMessageScriptFunction(
//     textEncoder.encode(message),
//   );
//   return await DiemHelpers.buildAndSubmitTransaction(
//     defaultUserContext.address,
//     await devapi.sequenceNumber(),
//     await defaultUserContext.readPrivateKey(),
//     payload,
//   );
// }

// Script example; client side creation and signing of transactions.
// https://github.com/diem/diem/blob/main/json-rpc/docs/method_submit.md#method-submit
// export async function setMessageScript(
//   message: string,
// ) {
//   const script = codegen.Stdlib.encodeSetMessageScript(
//     textEncoder.encode(message),
//   );
//   const payload = new DiemTypes.TransactionPayloadVariantScript(script);
//   return await DiemHelpers.buildAndSubmitTransaction(
//     defaultUserContext.address,
//     await devapi.sequenceNumber(),
//     await defaultUserContext.readPrivateKey(),
//     payload,
//   );
// }

// Script example; initializes TestNFT utilizing the NFT<Type>
// generic methods. This example replaces the genesis initialize functionality
// but with a different address. See main/sources/NFT.move
// This is optional, as createTestNFTScriptFunction handles init.
// export async function initializeTestNFT() {
//   const nftAddress = DiemHelpers.hexToAccountAddress(
//     defaultUserContext.address,
//   );

  // Create the type tag representing TestNFT to pass to the generic
  // script `initialize_nft`
//   const testNftType = new DiemTypes.TypeTagVariantStruct(
//     new DiemTypes.StructTag(
//       nftAddress,
//       new DiemTypes.Identifier("TestNFT"),
//       new DiemTypes.Identifier("TestNFT"),
//       [],
//     ),
//   );
//
//   const script = codegen.Stdlib.encodeInitializeNftScript(testNftType);
//   const payload = new DiemTypes.TransactionPayloadVariantScript(script);
//   return await DiemHelpers.buildAndSubmitTransaction(
//     defaultUserContext.address,
//     await devapi.sequenceNumber(),
//     await defaultUserContext.readPrivateKey(),
//     payload,
//   );
// }

// ScriptFunction example; creation of NFT. Can only create one per account atm.
// See main/source/TestNFT.move
// export async function createTestNFTScriptFunction(
//   contentUri: string,
// ) {
//   const payload = codegen.Stdlib.encodeCreateNftScriptFunction(
//     textEncoder.encode(contentUri),
//   );
//   return await DiemHelpers.buildAndSubmitTransaction(
//     defaultUserContext.address,
//     await devapi.sequenceNumber(),
//     await defaultUserContext.readPrivateKey(),
//     payload,
//   );
// }

// export async function decodedMessages(addr?: string) {
//   addr = addressOrDefault(addr);
//   return (await devapi.resourcesWithName("MessageHolder", addr))
//     .map((entry) => DiemHelpers.hexToAscii(entry.data.message));
// }
//
// export async function decodedNFTs(addr?: string) {
//   addr = addressOrDefault(addr);
//   return (await devapi.resourcesWithName("NFT", addr))
//     .filter((entry) => entry.data && entry.data.content_uri)
//     .map((entry) => DiemHelpers.hexToAscii(entry.data.content_uri));
// }
