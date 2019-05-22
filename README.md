# Udacity Blockchain Capstone

This project has been done in order to validate the Udacity Blockchain Nanodegree.
Goals of this project:
* Create a token that is ERC721 compliant (inherit from ERC721, ERC721Enumerable and ERC721Metadata)
* Use `zokrates` in order to use zero knowledge proof to let someone mint a token
* Deploy the contract and mint tokens on the Rinkeby network
* Use `OpenSea` to create a storefront, display items, and trade them


## Rinkeby deployment infos
AdrienHouseToken address: `0x0B59A9DaD410f9447110F682997A73Cd9e880cE3`
Verifier address: `0x27B29692eC8c360f2B35563A1a7759E0780A7181`
SolnSquareVerifier address: `0x1268b869D0B9dC74C57722295624A18dc16F075F`

## OpenSea infos
Storefront link: 
Items that have been traded:
1)
2)
3)
4)
5)

## Make some tests on the contracts
1) Go to the root of the project
2) Make an `npm install`
3) Launch a local blockchain with `npm run chain`
4) To launch the tests, make `truffle test` (you must have truffle installed globally on your computer). **The last test should fail** showing that it is not possible to mint a token with a wrong proof.

## More infos
* The contracts ABI can be found in `eth-contracts/build`
* The `ERC721Mintable.sol` has be renamed `AdrienHouseToken.sol`
* A script has been written in order to mint 10 tokens, it can be run doing `truffle exec eth-contracts/script.js` (You must have a local chain running, or otherwise specify a network)