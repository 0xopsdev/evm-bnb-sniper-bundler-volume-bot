require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      forking: {
        url: "https://small-thrilling-county.bsc.quiknode.pro/5309cc3b81880102c3951f4132560fa48f13a448/", // Replace with your Alchemy Mainnet RPC URL
        // blockNumber: 44716540, // Optional: specify a block number to fork from
      },
    },
  },
};
