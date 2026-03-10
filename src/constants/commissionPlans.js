export const COMMISSION_PLANS_SEED = {
  partner: {
    id:"partner", label:"Partner Plan",
    agentPct:80, brokerPct:20,
    processingFee:150, postCapFee:300,
    commCap:5000, txFeeCap:null,   // commCap = broker's share cap
    officeDues:65,
    description:"80/20 split ? $5k commission cap ? cap resets on cap reset date",
  },
  entrepreneur: {
    id:"entrepreneur", label:"Entrepreneur Plan",
    agentPct:100, brokerPct:0,
    processingFee:150, postCapFee:150,
    commCap:null, txFeeCap:3900,
    officeDues:325,
    description:"100% commission ? $3,900 tx fee cap ? resets on cap reset date",
  },
  teamleader: {
    id:"teamleader", label:"Team Leader",
    agentPct:100, brokerPct:0,
    processingFee:150, postCapFee:150,
    commCap:null, txFeeCap:3900,
    officeDues:325,
    description:"100% commission ? $3,900 tx fee cap ? team revenue share",
  },
  teamagent: {
    id:"teamagent", label:"Team Agent",
    agentPct:null, brokerPct:null,   // variable ? set per agent
    processingFee:300, postCapFee:300,
    commCap:null, txFeeCap:3900,
    officeDues:65,
    description:"Variable split ? assigned to a team leader",
  },
};

export const DEFAULT_FEES_SEED = [
  { id:1, name:"E&O Insurance",         amount:150 },
  { id:2, name:"Transaction Coordinator", amount:395 },
];
