export function showNumber(input,suit,doubles,MD,Gresult,isChecked) {
  let suitText = {
    a: "C",
    b: "D",
    c: "H",
    d: "S",
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
    if(Gresult==input){
      text2+=`=`;
    }else{
      text2+=`+${Gresult-input}`;
    }
    
  }
  else{
    text2+=`-${Gresult}`;
  }
return  text2;
}
