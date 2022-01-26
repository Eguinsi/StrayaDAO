import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";


const bundleDropModule = sdk.getBundleDropModule(
  "0x19f06C4A5ab4a86D251CeFE445353e9de7cD17e9",
);

const tokenModule = sdk.getTokenModule(
  "0x62d8554e2f986AA71D5E083418ae3BE3aeF70c0d",
);

(async () => {
  try {
  
    const walletAddresses = await bundleDropModule.getAllClaimerAddresses("0");

    if (walletAddresses.length === 0) {
      console.log(
        "NO citizenship, tell your friends to get one it's free!",
      );
      process.exit(0);
    }

    
    const airdropTargets = walletAddresses.map((address) => {
      const randomAmount = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
      console.log("✅ Going to airdrop", randomAmount, "tokens to", address);

      
      const airdropTarget = {
        address,
        amount: ethers.utils.parseUnits(randomAmount.toString(), 18),
      };

      return airdropTarget;
    });


    console.log("🌈 Starting airdrop...");
    await tokenModule.transferBatch(airdropTargets);
    console.log("✅ Successfully airdropped tokens to all the holders of the NFT!");
  } catch (err) {
    console.error("Failed to airdrop tokens", err);
  }
})();