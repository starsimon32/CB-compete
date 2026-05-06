export function countroundP(con,select,double){
    let input = parseInt(con);    
    let roundP=0;
    let doubles =parseInt(double)||0;
    if(select==""){
      document.getElementById("points").innerText = "無效合約";
      return 0;
    }
    if(select=="a"||select=="b"){
      roundP+=20*input;
    }
    if(select=="c"||select=="d"){
      roundP+=30*input;
    }
    if(select=="e"){
      roundP+=30*input+10;
    }
    return roundP*(2**doubles);
  }
export function countprizepoints(input,select,doubles,isChecked){
    let roundP=countroundP(select,input,doubles);
  
    let bonus=50*(parseInt( document.getElementById("doubles").value)||0);
    if(input>=7){
      if(isChecked) bonus+=2000;
      else bonus+=1300;
    }
    else if(input==6){
      if(isChecked) bonus+=1250;
      else bonus+=800;
    }
  else if(roundP>=100){
    if(isChecked) bonus+=550;
      else bonus+=350;
  }
  else bonus+=50;
return bonus;

}
export function countlosspoint(double,loss,vul){
    if(loss<=0) {
      return 0;
    }
    if(double==0){
      let a=50*loss;
      if(vul) a*=2;
      return a;
    }
    if(vul){
      return  300*double*loss-(100*double);
      
    }
    if(vul==false&& loss<=2){
      return -250*double - 300*loss + 450*double*loss + 300;
    }
    return countlosspoint(double,loss-1,true);
  }
 export function countextra(type,over,double,vul){
    let bonus=0;
    let select=type;
    if(double==0){
    if(select=="a"||select=="b"){
     bonus+=20*over;
    }
    if(select=="c"||select=="d"){
      bonus+=30*over;
    }
    if(select=="e"){
      bonus+=30*over;
    }
    }
    else{
      bonus+=50*over*(2**double);
      if(vul) bonus*=2;
    }
    return bonus;
  }
export function counttotalpoints(num,select,double,MD,result,vul){
    if(MD=="D"){
        return -countlosspoint(double,result,vul);
    }
    if(MD=="M"){
        return countprizepoints(num,select,double,vul)+countroundP(num,select,double)+countextra(select,(result-num),double,vul);
    }
}
