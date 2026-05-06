export function showNumber(input,suit,doubles,MD,Gresult,isChecked) {
  let suitText = {

    a: "club",

    b: "diamond",

    c: "heart",

    d: "spade",

    e: "NT"

  }[suit]
    let text2="結果：";
    if (isChecked) {
        text2="有身價";
    } else {
       text2="沒身價";
    }
  text2+=input+suitText;
  for(let i=1;i<=doubles;i++){
    text2+="X";
  }
  if(MD=="M"){
    text2+=`+${Gresult-input}`;
  }
  else{
    text2+=`-${Gresult}`;
  }
return  text2;
}
