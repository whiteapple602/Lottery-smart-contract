const Lottery = artifacts.require("Lottery");

module.exports = function (deployer) {
  deployer.deploy(Lottery, 5, 60, 20, 70, 4);
};
