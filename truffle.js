require('dotenv').config()

const Web3 = require('web3')
const HDWalletProvider = require('truffle-hdwallet-provider')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*'
    },
    ropsten: {
      provider: new HDWalletProvider(process.env.MNENOMIC, `https://ropsten.infura.io/${process.env.INFURA_API_KEY}`),
      network_id: 3,
      gas: 4500000,
      gasPrice: 1000000000
    },
    live: {
      provider: new HDWalletProvider(process.env.MNENOMIC, `https://mainnet.infura.io/${process.env.INFURA_API_KEY}`),
      network_id: 1,
      gas: 4500000,
      gasPrice: Number(Web3.utils.toWei(String(2), 'gwei'))
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
