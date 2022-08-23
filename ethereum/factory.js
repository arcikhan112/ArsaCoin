import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0xF6940805dF0863393561A6324a990397342E4e72"
);

export default instance;
