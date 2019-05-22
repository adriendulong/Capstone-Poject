// migrating the appropriate contracts
var AdrienHouseToken = artifacts.require("AdrienHouseToken");
var Verifier = artifacts.require("Verifier");
var SolnSquareVerifier = artifacts.require("SolnSquareVerifier");

module.exports = function(deployer) {
  deployer.deploy(AdrienHouseToken);
  deployer.deploy(Verifier).then(function () {
    console.log(Verifier.address);
    return deployer.deploy(SolnSquareVerifier, Verifier.address);
  })
};
