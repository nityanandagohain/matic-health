import axios from "axios"
const rpcsMainNet = [
  "https://rpc-mainnet.matic.network",
  "https://matic-mainnet-archive-rpc.bwarelabs.com",
  "https://rpc-mainnet.maticvigil.com",
  "https://rpc-mainnet.matic.quiknode.pro",
  "https://matic-mainnet.chainstacklabs.com",
  "https://matic-mainnet-full-rpc.bwarelabs.com",
];


const rpcsTestNet = [
  "https://rpc-mumbai.matic.today",
  "https://rpc-mumbai.maticvigil.com",
  "https://matic-mumbai.chainstacklabs.com",
  "https://matic-testnet-archive-rpc.bwarelabs.com"
];

// other methods https://infura.io/docs/ethereum/json-rpc/eth-accounts
const payload = { "method": "eth_blockNumber", "params": [], "id": 137, "jsonrpc": "2.0" }

console.log("hello")

var getMainNetHealths = async function (){

  var table_html = '<tr><th>RPC url </th> <th>Block Number</th>';
  
  for (let i = 0; i < rpcsMainNet.length; i++) {
    table_html += '<tr>';
    let response = await axios.post(rpcsMainNet[i], payload)
    let num = parseInt(response.data.result, 16) 
    console.log(response.config.url,num)
    table_html += '<td>' + response.config.url + '</td>'
    table_html += '<td>' + +num + '</td>'
    table_html += '</tr>'
  }
  
  document.getElementById("healths").innerHTML = table_html
}

var getTestNetHealths = async function (){

  var table_html = '<tr><th>RPC url </th> <th>Block Number</th>';
  
  for (let i = 0; i < rpcsTestNet.length; i++) {
    table_html += '<tr>';
    let response = await axios.post(rpcsTestNet[i], payload)
    let num = parseInt(response.data.result, 16) 
    console.log(response.config.url,num)
    table_html += '<td>' + response.config.url + '</td>'
    table_html += '<td>' + +num + '</td>'
    table_html += '</tr>'
  }
  
  document.getElementById("testnet-healths").innerHTML = table_html
}

getMainNetHealths();

getTestNetHealths();