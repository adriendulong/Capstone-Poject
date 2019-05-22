pragma solidity >=0.4.21 <0.6.0;

import "./AdrienHouseToken.sol";
import "./Verifier.sol";

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
// contract IVerifier {
//   function verifyTx(uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory input) public returns (bool r);
// }


// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is AdrienHouseToken {
  struct Solution {
    address solver;   // The address of the user who provided this solution
    bool used;        // To check if the solution has already been used or not
    bool exists;      // To check if the solution exists
  }

  Verifier private verifierContract;
  mapping(bytes32 => Solution) solutions;

  event SolutionAdded(address solver, bytes32 solutionHash);

  constructor(address verifierAddress) public {
    verifierContract = Verifier(verifierAddress);
  }

  function addSolution(
            uint[2] memory a,
            uint[2][2] memory b,
            uint[2] memory c,
            uint[2] memory input
  ) public {
    bytes32 uniqueSolution = keccak256(abi.encodePacked(a, b, c, input));
    require(solutions[uniqueSolution].solver == address(0), "This solution already exist");
    require(verifierContract.verifyTx(a,b,c,input), "Wrong solution");

    // Create a new solution that is not used yet
    solutions[uniqueSolution] = Solution({
      solver: msg.sender,
      used: false,
      exists: true
    });

    // Emit correponding event
    emit SolutionAdded(msg.sender, uniqueSolution);
  }

  function mint(bytes32 solutionHash, address to, uint256 tokenId) public onlyOwner returns(bool) {
      require(solutions[solutionHash].exists, "This solution does not exists");
      require(solutions[solutionHash].solver == msg.sender, "Only the address who submitted this solution can use it");
      require(!solutions[solutionHash].used, "This solution is already used");

      super._mint(to, tokenId);
      super._setTokenURI(tokenId);
      return true;
  }
}


// TODO define a solutions struct that can hold an index & an address


// TODO define an array of the above struct


// TODO define a mapping to store unique solutions submitted

// TODO Create an event to emit when a solution is added



// TODO Create a function to add the solutions to the array and emit the event



// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly

  


























