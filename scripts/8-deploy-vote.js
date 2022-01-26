import sdk from "./1-initialize-sdk.js";


const appModule = sdk.getAppModule(
  "0x728e36df74F2c5A5b9E6Fb5578c21169E5c93f83",
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
  
      name: "Epic Proposal",
      votingTokenAddress: "0x62d8554e2f986AA71D5E083418ae3BE3aeF70c0d",
      proposalStartWaitTimeInSeconds: 0,
      proposalVotingTimeInSeconds: 24 * 60 * 60,
      votingQuorumFraction: 0,
      minimumNumberOfTokensNeededToPropose: "420",
    });

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address,
    );
  } catch (err) {
    console.log("Failed to deploy vote module", err);
  }
})();