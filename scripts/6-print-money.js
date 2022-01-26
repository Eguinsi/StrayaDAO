import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
  "0x62d8554e2f986AA71D5E083418ae3BE3aeF70c0d",
);

(async () => {
  try {
    const amount = 42_000_000;
    
    const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
  
    await tokenModule.mint(amountWith18Decimals);
    const totalSupply = await tokenModule.totalSupply();

    console.log(
      "✅ There now is",
      ethers.utils.formatUnits(totalSupply, 18),
      "$STRAYA in circulation",
    );
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();