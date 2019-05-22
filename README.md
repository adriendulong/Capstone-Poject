# Udacity Blockchain Capstone

This project has been done in order to validate the Udacity Blockchain Nanodegree.
Goals of this project:
* Create a token that is ERC721 compliant (inherit from ERC721, ERC721Enumerable and ERC721Metadata)
* Use `zokrates` in order to use zero knowledge proof to let someone mint a token
* Deploy the contract and mint tokens on the Rinkeby network
* Use `OpenSea` to create a storefront, display items, and trade them


## Rinkeby deployment infos
**AdrienHouseToken** address: `0xBc79413e88A01FdF929D8906cF2dD05cABCa1963`  
**Verifier** address: `0xA30f00399CD0D32c5579F77C64C2a25e443171eC`  
**SolnSquareVerifier** address: `0x34710D9f7b7435F2AB3999731Bfe66fA348ac9e5`  

## OpenSea infos
Storefront link: https://rinkeby.opensea.io/category/bastidehousetokenv2
Items that have been traded:
1) https://rinkeby.opensea.io/assets/0x34710d9f7b7435f2ab3999731bfe66fa348ac9e5/1
2) https://rinkeby.opensea.io/assets/0x34710d9f7b7435f2ab3999731bfe66fa348ac9e5/10
3) https://rinkeby.opensea.io/assets/0x34710d9f7b7435f2ab3999731bfe66fa348ac9e5/5
4) https://rinkeby.opensea.io/assets/0x34710d9f7b7435f2ab3999731bfe66fa348ac9e5/4
5) https://rinkeby.opensea.io/assets/0x34710d9f7b7435f2ab3999731bfe66fa348ac9e5/8

## Make some tests on the contracts
1) Go to the root of the project
2) Make an `npm install`
3) Launch a local blockchain with `npm run chain`
4) Enter in the `eth-contracts` folder
4) To launch the tests, make `truffle test` (you must have truffle installed globally on your computer). **The last test should fail** showing that it is not possible to mint a token with a wrong proof.

## More infos
* The contracts ABI can be found in `eth-contracts/build`
* The `ERC721Mintable.sol` has be renamed `AdrienHouseToken.sol`
* A script has been written in order to mint 10 tokens, it can be run doing `cd eth-contracts && truffle exec script.js` (You must have a local chain running, or otherwise specify a network)