export const G = {
  bg:"#F7F8FA", surface:"#FFFFFF", surface2:"#F3F4F6", surface3:"#EAECF0",
  copper:"#CBA052", copperDk:"#a8833d", copperLt:"#f0d898",
  navy:"#1B365D", navyLt:"#2a4f82",
  text:"#111827", sub:"#374151", muted:"#6B7280", dim:"#9CA3AF",
  border:"#E5E7EB",
  green:"#166534", greenBg:"#dcfce7",
  amber:"#92400e", amberBg:"#fef3c7",
  blue:"#1e40af",  blueBg:"#dbeafe",
  red:"#b91c1c",   redBg:"#fee2e2",
  sidebarBg:"#FFFFFF", sidebarBorder:"#E5E7EB",
  font:"'Inter', 'Open Sans', sans-serif",
};

export const statusColor = {
  Closed:{"bg":G.greenBg,"text":G.green}, "Under Contract":{"bg":G.amberBg,"text":G.amber},
  Active:{"bg":G.blueBg,"text":G.blue}, Paid:{"bg":G.greenBg,"text":G.green}, Pending:{"bg":G.amberBg,"text":G.amber},
};
