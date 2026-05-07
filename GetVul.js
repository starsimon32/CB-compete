export function getVul(board) {
  let b = ((board - 1) % 16) + 1;

  const vulTable = [

    "None", "NS", "EW", "Both",

    "NS", "EW", "Both", "None",

    "EW", "Both", "None", "NS",

    "Both", "None", "NS", "EW"

  ];

  return vulTable[b - 1];

}
export function getDealer(round){
  let a=round%4;
  if(a==1)
  return "N";
  if(a==2)
    return "E";
  if(a==3)
    return "S";
  if(a==0)
    return "W";
}
