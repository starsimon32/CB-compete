
    import {
      countroundP,
      countprizepoints,
      countextra,
      countlosspoint,
      counttotalpoints
    } from './score.js';
import {
      getVul,
    getDealer
    } from './GetVul.js';
export function setTableCell(tableId, row, col, text) {
  let table = document.getElementById(tableId);
  table.rows[row].cells[col].innerText = text;
}
export function setblanktable(tableID,rounds,start){
    let table =tableID;
    for(let i=1;i<=rounds;i++){
  let row = table.insertRow();
        let a=i+start-1;
      row.insertCell(0).innerText = (a);
  row.insertCell(1).innerText = getDealer(a);
     row.insertCell(2).innerText = getVul(a);   
    }
}
