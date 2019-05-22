var AdrienHouseToken = artifacts.require('AdrienHouseToken');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await AdrienHouseToken.new({from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(account_one, 1);
            await this.contract.mint(account_one, 2);
            await this.contract.mint(account_two, 3);
            
        })

        it('should return total supply', async function () { 
            const totalSupply = await this.contract.totalSupply()
            assert.equal(totalSupply.toNumber(), 3, "Wrong total supply")
        })

        it('should get token balance', async function () { 
            const balance = await this.contract.balanceOf(account_one);
            assert.equal(balance.toNumber(), 2, "Wrong balance token");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            const tokenURI = await this.contract.tokenURI(1);
            assert.equal(tokenURI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", "Wrong token URI");
        })

        it('should transfer token from one owner to another', async function () { 
            // Transfer token
            await this.contract.transferFrom(account_one, account_two, 2);

            // Check new balance
            const balance = await this.contract.balanceOf(account_two);
            assert.equal(balance.toNumber(), 2, "Wrong balance token");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await AdrienHouseToken.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            //this.contract.mint(account_two, 4, {from: account_two});
        })

        it('should return contract owner', async function () { 
            const owner = await this.contract.owner();
            assert.equal(owner, account_one, "Return wrong owner");
        })

    });
})