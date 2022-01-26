import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x19f06C4A5ab4a86D251CeFE445353e9de7cD17e9",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "KangarooRider Licence",
        description: "This NFT will give you citizenship to Straya",
        image: readFileSync("scripts/assets/kangaroorider.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();