import Blockchain from "./blockchain.js";

const bitcoin = new Blockchain();

const previousBlockHash = "OANSWCSA9SBDCJBBSSDCSD";
const currentBlockData = [
  {
    amount: 101,
    sender: "OANSWCSA9SBDCJBBSSDCSDSKSKS",
    receipent: "OANSWA7AS89SACSA9SBDCJBBSSDCSD",
  },
  {
    amount: 102,
    sender: "OANSWCSA9SBDCJBBSSDCSDSDL399DS",
    receipent: "DOANSWCSA9SBDCJBBSSDCSDDSSKLL",
  },
  {
    amount: 103,
    sender: "OANSWCSA9SBDCJBBSSDCSDLSLLW3003",
    receipent: "OANSWCSA9SBDCJBBSSDCSDSDLLS903",
  },
];

console.log(bitcoin);
