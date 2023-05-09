'use strict';

module.exports = {
  TXHEX: [
    [ // From Mainnet Block 221883
      // From: https://ravencoin.network/api/rawtx/677386dc3b01954e98f744c2af917b1eacc3e417a6b1f5ccff5b9712e9d452d8
      "02000000081b44385e01cf13c79b7ce95aa9dbd101aea1dab162a3f5b7117a82a351bf5bb40b0400006a47304402207b5342ca32111d14fa84882330cb964e2df4abd8a34a8ed2ad442365bf54da1902203da88224e6f28825ff073a9ad7c89b86c4b427f1298f6e45cc4ead001bd2887c0121025ad9826a9438f36d4187e9b0e716af66e0e7994924603355bb714f1e1cef52d2feffffff48221709a8c60e1e7e59214f127431acfeb5f413a0a3233e1b4470534714fc03a20400006a473044022008fd4a2e433d9dd0a50b06cd19929a08695410681fcfc58218c7f38f2798e4f70220737773f64074324ee67da70e7c48d6284180562c727a269b35f29cdde1fdc2f10121025ad9826a9438f36d4187e9b0e716af66e0e7994924603355bb714f1e1cef52d2feffffff4decc26715d9444b9cd5425c08226f074a1e973607c7eb9886bedc07f0cb3a1c000000006b483045022100c4e95a0ca6eff310a43d26b7a26eac96716957e877a74c0986581f322f16a42502204de544fd0a0f9c359a532c8cb1efb8e2dd88ecea8cefdbbb6b5f406365b8f6570121030bdd7c3a7584be1ab2db221058567fd4d0a8fdddc46f6403de3dca8ae5b69de0feffffff84cad2de3ba4fafd9363e83c23380e9b03f6a0c07f188910e87a44d625eb1b697d0400006a473044022065b4c1d20d8d61384867a0a9e3a067bbdb432d06d8290d75ab41dab1d787d88202202f92dabf2779de7c857936949de212b36730560d8570be0ee84deee50a562b160121025ad9826a9438f36d4187e9b0e716af66e0e7994924603355bb714f1e1cef52d2feffffff9b5e3aa3e5b193ba50883575ce0e725ab8377d157c4bde42f1f07641691307e2630400006a47304402204b97b349489a75f53616c8ea30d09e9cfa44e414353b0c2adbcc78217801737e0220041ec5516f0fd3ff296eb8e79e209f3c051a9087f46342c024ebdb5a323148430121025ad9826a9438f36d4187e9b0e716af66e0e7994924603355bb714f1e1cef52d2feffffffa4323d91660264d1d2a53051e96f67a2994b6db8eb4b4ba222d51b1cd8aa51d3580400006b483045022100a222211b33e5c88a779720e2c38830d3bd6fa41542be878f7304711cf3a674f6022036aa0e636663436f1b7abab70555d397a7956ad4f795421f16a06e26c8cb178f0121025ad9826a9438f36d4187e9b0e716af66e0e7994924603355bb714f1e1cef52d2feffffffa7c7834ef37262e7454e1554d22b424800f7b4a887e6933b78c5d0e4baa045140e0400006a473044022051e8c82a5dd035750deb106c5d2db514e80deced686c5b9dff44fbe58c018aae02202a6cd801b0e9eeead83d44e325fd93ab8b67d1936f06a96bfc7b3b411648e1330121025ad9826a9438f36d4187e9b0e716af66e0e7994924603355bb714f1e1cef52d2feffffffd612b8714888de25343545ab2c32093816368df4310d6d88616daf70820b43d2e20300006a47304402207d177c465751e1555680faa41e1276f9026ad80383f85035e5cdb7e50beac142022011b98ffe6c78af24aea46f458f355213edb42b57bb3211c26f5edd32deac350c0121025ad9826a9438f36d4187e9b0e716af66e0e7994924603355bb714f1e1cef52d2feffffff020057b43d070000001976a914c8bfdd596435dfcb1387c82567f20e0689436f4e88ac0ab46300000000001976a9144390e34ffcc3bd063d5f918fa3d5d3a08205af0388acba620300"
    ],
  ],
  HEX: [
    // Mainnet Block 221883
    "00000020" + // Version
      "21e1b359c3ff9b6c4d74f38951b6d43f5f5d7f246c5fc8a7964b020000000000" + // prevHash
      "c0222f4764a75a33a1a37c3e33b4ac613fa23d58970b6f905f978be0a44de11a" + // MerkleRoot
      "e114035b" + // Time
      "59ff021b" + // Bits
      "dcf0043a" + // Nonce
      "07000000" + // Transaction Count
      "04" + // Hash Count
      "86256652b60bafa12dc31acea84e2c0cbe612dd5e9a181a0a8be2bea047fd76f" + // Hash1
      "d852d4e912975bffccf5b1a617e4c3ac1e7b91afc244f7984e95013bdc867367" + // Hash2
      "f63691f75198cdd26ac81a0355a397763adda0bd5c1f7204712b9648aac9277e" + // Hash3
      "7c15ffbd38fc78bfa1b12268f48c2ed256e6b8dd865061a1eb6d8952c9fcd56b" + // Hash4
      "01" + // Num Flag Bytes
      "17" // Flags
  ],
  JSON: [
    { // Mainnet Block 221883
      header: {
        hash: "000000000002fbc104e2ab07f7fe04c83be0578fdbc59b23e0e51e977cdaa584",
        version: 536870912,
        prevHash: "0000000000024b96a7c85f6c247f5d5f3fd4b65189f3744d6c9bffc359b3e121",
        merkleRoot: "1ae14da4e08b975f906f0b97583da23f61acb4333e7ca3a1335aa764472f22c0",
        time: 1526928609,
        bits: 453181273,
        nonce: 973402332
      },
      numTransactions: 7,
      hashes: [
        "86256652b60bafa12dc31acea84e2c0cbe612dd5e9a181a0a8be2bea047fd76f",
        "d852d4e912975bffccf5b1a617e4c3ac1e7b91afc244f7984e95013bdc867367",
        "f63691f75198cdd26ac81a0355a397763adda0bd5c1f7204712b9648aac9277e",
        "7c15ffbd38fc78bfa1b12268f48c2ed256e6b8dd865061a1eb6d8952c9fcd56b"
      ],
      flags: [ 23 ]
    },
    { // Mainnet Block 221966
      header: {
        hash: "000000000000ef57dbcffdc105c865c150130954d09c1bca5aa87d58d5ae1062",
        version: 536870912,
        prevHash: "00000000000289ea27201afdf6c06cb8ec072a504efa2ff63cf95d4e0ab84441",
        merkleRoot: "9f89945418c1cec450c992491e0178db2a492f48bcde8f0c451adbc72c992a23",
        time: 1526933448,
        nonce: 1315716319,
        bits: 453181273,
      },
      numTransactions: 1,
      hashes: [
        "232a992cc7db1a450c8fdebc482f492adb78011e4992c950c4cec1185494899f"
      ],
      flags: [ 0 ]
    },
    { // Mainnet Block 220639
      flags : [
        175, 0
      ],
      numTransactions : 32,
      hashes : [
        "52ce9c6b303ef36ba760dd5cc64fc1b548c1776cc03e9a2801b74180645dcc2d",
        "c4ff4cc899751c23785a9d28326f83e94a6b494ecdedff60a1c316cc7bc84beb",
        "ef580a0eb8f79711249f0fb1df5fffa7297fd85f2643a5c06f28a874af03e1c3",
        "d9373fd883cfc0421b8f29a9c05afba77dea489d90f757d0139967df5266f73a",
        "3ad2f6c76c4df9bf8d07b51480366bd464e9241dc7f96686f0a8d81941f896c1",
        "cc0a156e194ebf1ff9a7233b555f9cdcbc012cbcc6dfb362b8e26be7ba5b7e29" 
      ],
      header : {
        hash: "000000000002836164c4a120395e043197b8fccecaaa6fd20621504d81f5dff1",
        prevHash : "0000000000018eacafc2cb1271af70a7d9d216181f4c7c836927a1b3de9786b0",
        merkleRoot : "27ec53687bb9e56465024eb30e23388e9dce29fe7254add1560295f7fcb270a4",
        time : 1526856718,
        version : 536870912,
        nonce : 3812291672,
        bits : 453193653,
      }
    }
  ]
};
