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
