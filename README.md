Read/Write Contract using ABIs

Full article guide on Etherscan API docs.

Prerequisites
Node.js installed
A valid Etherscan API key
An Ethereum node such as Infura or Alchemy
Getting Started
Clone this repository using git clone https://github.com/12SohailBlockchain/ReadWrite-Smart-Contracts-node.js.git

In a terminal, run npm install to install the required dependencies

In script.js, replace the node URL and private key variables with your own.

You can create a free Infura/Alchemy account for node access, and generate a private key from Metamask

Remember, private keys and node API keys are sensitive information, do not commit them to version control. Better yet use an environment variable.

Run this code using the command node script.js


my out result:

PS E:\React.nft website\ReadWrite Smart Contracts> node script.js
[{"inputs":[],"name":"read","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newScore","type":"":"uint256","name":"newScore","type":"uint256"}],"name":"write","outputs":[],"stateMutability":"nonpayable","type":"function"}]
Using wallet address 0x82e3EeeEA10c3975453fd4617d10766fB7c856eD
Value stored in contract is 420
Updated value stored in contract is 420
PS E:\React.nft website\ReadWrite Smart Contracts>
