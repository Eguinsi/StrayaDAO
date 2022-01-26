import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x728e36df74F2c5A5b9E6Fb5578c21169E5c93f83");

(async () => {
  try {
    
    const tokenModule = await app.deployTokenModule({
      
      name: "STRAYA",
      
      symbol: "STRAYA",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();