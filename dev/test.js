import Blockchain from "./blockchain.js";

const bitcoin = new Blockchain();

const bc1 = {
  chain: [
    {
      index: 1,
      timestamp: 1653680619171,
      transactions: [],
      nonce: 100,
      hash: "0",
      previousBlockHash: "0",
    },
    {
      index: 2,
      timestamp: 1653682250551,
      transactions: [],
      nonce: 18140,
      hash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
      previousBlockHash: "0",
    },
    {
      index: 3,
      timestamp: 1653682312337,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          receipent: "4e47ff30ddf511ec8fe50725550e9187",
          transactionId: "1aadb670ddf911ec8fe50725550e9187",
        },
        {
          amount: 10,
          sender: "DS34LELWSMDPPW",
          receipent: "QORKNSKSKELE",
          transactionId: "2f5dbbb0ddf911ec8fe50725550e9187",
        },
        {
          amount: 20,
          sender: "DS34LELWSMDPPW",
          receipent: "QORKNSKSKELE",
          transactionId: "343c8760ddf911ec8fe50725550e9187",
        },
        {
          amount: 30,
          sender: "DS34LELWSMDPPW",
          receipent: "QORKNSKSKELE",
          transactionId: "36860230ddf911ec8fe50725550e9187",
        },
      ],
      nonce: 3164,
      hash: "00000583c507e4760fd0d75bebcfdd5d07a48971510db279914e5f210c89f11d",
      previousBlockHash:
        "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    },
    {
      index: 4,
      timestamp: 1653682389689,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          receipent: "4e47ff30ddf511ec8fe50725550e9187",
          transactionId: "3f7cee30ddf911ec8fe50725550e9187",
        },
        {
          amount: 40,
          sender: "DS34LELWSMDPPW",
          receipent: "QORKNSKSKELE",
          transactionId: "5456c290ddf911ec8fe50725550e9187",
        },
        {
          amount: 50,
          sender: "DS34LELWSMDPPW",
          receipent: "QORKNSKSKELE",
          transactionId: "5673af20ddf911ec8fe50725550e9187",
        },
        {
          amount: 60,
          sender: "DS34LELWSMDPPW",
          receipent: "QORKNSKSKELE",
          transactionId: "58bdc630ddf911ec8fe50725550e9187",
        },
        {
          amount: 70,
          sender: "DS34LELWSMDPPW",
          receipent: "QORKNSKSKELE",
          transactionId: "5b497a20ddf911ec8fe50725550e9187",
        },
      ],
      nonce: 183918,
      hash: "00009640f453940a48275c7bd15de6d1e63baa332cc542ccdc52b2de507d4c61",
      previousBlockHash:
        "00000583c507e4760fd0d75bebcfdd5d07a48971510db279914e5f210c89f11d",
    },
    {
      index: 5,
      timestamp: 1653682411350,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          receipent: "4e47ff30ddf511ec8fe50725550e9187",
          transactionId: "6d98fa20ddf911ec8fe50725550e9187",
        },
      ],
      nonce: 14986,
      hash: "00002813c6e73d70266d9347c7618c10a8723df57804aa33272dbbaef4db8648",
      previousBlockHash:
        "00009640f453940a48275c7bd15de6d1e63baa332cc542ccdc52b2de507d4c61",
    },
    {
      index: 6,
      timestamp: 1653682413879,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          receipent: "4e47ff30ddf511ec8fe50725550e9187",
          transactionId: "7a811d80ddf911ec8fe50725550e9187",
        },
      ],
      nonce: 13217,
      hash: "0000655ccabd1b8e361eb3ce7dcd000724323000e81dd7b331bc82225d7ed019",
      previousBlockHash:
        "00002813c6e73d70266d9347c7618c10a8723df57804aa33272dbbaef4db8648",
    },
  ],
  pendingTransactions: [
    {
      amount: 12.5,
      sender: "00",
      receipent: "4e47ff30ddf511ec8fe50725550e9187",
      transactionId: "7c0329a0ddf911ec8fe50725550e9187",
    },
  ],
  currentNodeUrl: "http://localhost:3001",
  networkNodes: [],
};

console.log("VALID ", bitcoin.chainIsValid(bc1.chain));
