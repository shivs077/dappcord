const { expect } = require("chai");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Dappcord", function () {
  let deployer, user;

  let dappcord;

  const NAME = "Dappcord";
  const SYMBOL = "DC";

  beforeEach(async () => {
    // setup accounts
    [deployer, user] = await ethers.getSigners();

    const Dappcord = await ethers.getContractFactory("Dappcord");
    dappcord = await Dappcord.deploy(NAME, SYMBOL);
  });

  describe("Deployment", function () {
    it("Sets the name", async () => {
      // Fetch name
      let result = await dappcord.name();
      // check name
      expect(result).to.equal(NAME);
    });

    it("Sets the symbol", async () => {
      // Fetch Symbol
      let result = await dappcord.symbol();
      // Check Symbol
      expect(result).to.equal(SYMBOL);
    });

    it("Sets the owner", async () => {
      // Fetch Owner
      let result = await dappcord.owner();
      // Check Owner
      expect(result).to.equal(deployer.address);
    });
  });
});
