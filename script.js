const ethers = require("ethers");

async function main() {
    const response = await fetch('https://api-sepolia.etherscan.io/api?module=contract&action=getabi&address=0xFc7a5BD22dFc48565D6f04698E566Dd0C71d3155&apikey=YourApiKeyToken');
    const data = await response.json();

    let abi = data.result;
    console.log(abi);

    const node = "https://rpc.sepolia.org";
    const provider = new ethers.providers.JsonRpcProvider(node);

    let privatekey = "Your_PRIVATE_KEY";
    let wallet = new ethers.Wallet(privatekey, provider);

    console.log("Using wallet address " + wallet.address);

    // specifying the deployed contract address 
    let contractaddress = "0xFc7a5BD22dFc48565D6f04698E566Dd0C71d3155";
    
    // initiating a new Contract
    let contract = new ethers.Contract(contractaddress, abi, wallet);


    let read = await contract.read();
    console.log("Value stored in contract is " + read.toString());

    // call the "store" function to update the value to 420
    let write = await contract.write(420);
    
    // wait for 2 blocks of confirmation 
    write.wait(2)
        .then(async () => {  
            // read the contract again, similar to above
            let read = await contract.read();
            console.log("Updated value stored in contract is " + read.toString());
        });
}

main();






/*out put result // 18/02/2024

PS E:\React.nft website\ReadWrite Smart Contracts> node script.js
[{"inputs":[],"name":"read","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newScore","type":"uint256"}],"name":"write","outputs":[],"stateMutability":"nonpayable","type":"function"}]
Using wallet address 0x82e3EeeEA10c3975453fd4617d10766fB7c856eD
Value stored in contract is 420
Updated value stored in contract is 420
PS E:\React.nft website\ReadWrite Smart Contracts> 
*/