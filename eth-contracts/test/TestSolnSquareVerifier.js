var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');

const verify = {
  proof : {
      a: ["0x1b2a9a2dc113b0b198c301aab453c87362af27a7039b351e2f7018bc98823bb6", "0x103cbf34a75d63600e48508341bb3d475da752a78e851698e7f89fdcc0cd311a"],
      b: [["0x2a05a08d935b2541dfc628dd3aee68872f130287483e8d52ff437b104a8cf964", "0x243c85def40b240a3c6cb86131a35f3da5505cb045420f11285f389972fc08e1"], ["0x12cf9deb932e635a275057fa4291f7a553b53ce2b6b2ead947ce24e5a700e11e", "0x2c5b9364640aa2d1fc67342c27521abd2562d32df3e8cb45f3cdd17d986c0f2a"]],
      c: ["0x12595fba1eb3fa56dfcffeed1e4a43754d0b8273c27cb8042095abf7ff379d68", "0x1378529a0d1a8d6fb3f9966717414fc288f67f62a19d6b9ed052704b4a6b6093"]
  },
  inputs: ["0x0000000000000000000000000000000000000000000000000000000000000009", "0x0000000000000000000000000000000000000000000000000000000000000001"]
}

contract('SolnSquareVerifier', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    let solutionHash = "";

    describe('Soln', function () {
        it('Should add a solution', async function () { 
            const instance = await SolnSquareVerifier.deployed();
            const solution = await instance.addSolution(verify.proof.a, verify.proof.b, verify.proof.c, verify.inputs);
            assert.equal(solution.logs[0].event, 'SolutionAdded', "solution not added")
            solutionHash = solution.logs[0].args.solutionHash;
        });

        it('Should mint a token', async function () { 
          const instance = await SolnSquareVerifier.deployed();
          const solution = await instance.mint(solutionHash, account_two, 1);
          console.log(solution.logs[0].event);
          assert.equal(solution.logs[0].event, 'Transfer', "token not minted")
      });
    });
});
