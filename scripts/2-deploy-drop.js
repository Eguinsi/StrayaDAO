import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x728e36df74F2c5A5b9E6Fb5578c21169E5c93f83");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
     
      name: "Straya Citizenship",     
      description: "A DAO for true aussies.",    
      image: readFileSync("scripts/assets/aussieaf.jpg"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });

    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})();