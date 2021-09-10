const HDWalletProvider = require('truffle-hdwallet-provider')
const fs = require('fs');
require('dotenv').config()

const mnemonic = process.env.MNEMONIC
const projectId = process.env.PROJECT_ID

module.exports = {
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.RINKEBY_APIKEY,
    bscscan: process.env.BSC_APIKEY,
    kovanscan: process.env.KOVAN_APIKEY,
  },
  networks: {
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 1,
      timeoutBlocks: 200,
      skipDryRun: true,
      networkCheckTimeout: 1000000
    },
    bsc: {
      provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
      networkCheckTimeout: 1000000
    },
    ropsten: {
      provider: () =>new HDWalletProvider(mnemonic,`https://ropsten.infura.io/v3/${projectId}`),
      network_id: 3,       // Ropsten's id
      // gas: 6721975,        // Ropsten has a lower block limit than mainnet
      // gasPrice: 20000000000  ,
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, 
      skipDryRun: true,
      networkCheckTimeout: 1000000
    },
    rinkeby: {
      provider: () =>new HDWalletProvider(mnemonic,`https://rinkeby.infura.io/v3/${projectId}`),
      network_id: 4,      
      confirmations: 2,   
      timeoutBlocks: 200, 
      skipDryRun: true,
    },
    kovantest: {
      provider: () => {
      return new HDWalletProvider(mnemonic,`wss://kovan.infura.io/ws/v3`);
      },
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
      networkCheckTimeout: 100000,
      network_id: "42",
    },
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      networkCheckTimeout: 1000000
    },
  },
  compilers: {
    solc: {
      version: "0.8.0"
    }
  }
}