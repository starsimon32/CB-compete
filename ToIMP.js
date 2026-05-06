
export function scoreToIMP(diff){

  diff = Math.abs(diff);

  if(diff <= 10) return 0;

  if(diff <= 40) return 1;

  if(diff <= 80) return 2;

  if(diff <= 120) return 3;

  if(diff <= 160) return 4;

  if(diff <= 210) return 5;

  if(diff <= 260) return 6;

  if(diff <= 310) return 7;

  if(diff <= 360) return 8;

  if(diff <= 420) return 9;

  if(diff <= 490) return 10;

  if(diff <= 590) return 11;

  if(diff <= 740) return 12;

  if(diff <= 890) return 13;

  if(diff <= 1090) return 14;

  if(diff <= 1290) return 15;

  if(diff <= 1490) return 16;

  if(diff <= 1740) return 17;

  if(diff <= 1990) return 18;

  if(diff <= 2240) return 19;

  if(diff <= 2490) return 20;

  if(diff <= 2990) return 21;

  if(diff <= 3490) return 22;

  if(diff <= 3990) return 23;

  return 24;

}
