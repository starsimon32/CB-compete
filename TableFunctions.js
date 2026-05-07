
    import {
      countroundP,
      countprizepoints,
      countextra,
      countlosspoint,
      counttotalpoints
    } from './score.js';
import {
      getVul
    } from './GetVul.js';
export function initialTable(rounds, tableId) {
  let table = document.getElementById(tableId);
  table.innerHTML = "";
  let header1 = table.insertRow();
  header1.insertCell(0).innerText = "牌";
  header1.insertCell(1).innerText = "身價";
  header1.insertCell(2).innerText = "我們桌";
  header1.insertCell(3).innerText = "他們桌";
  header1.insertCell(4).innerText = "我們IMP";
  header1.insertCell(5).innerText = "他們IMP";
  header1.insertCell(6).innerText = "差值";
  for (let i = 1; i <= rounds; i++) {
    let row = table.insertRow();
    row.insertCell(0).innerText = i;
    let vul = getVul(i);
    row.insertCell(1).innerText = vul;
    row.insertCell(2).innerText = "";
    row.insertCell(3).innerText = "";
    row.insertCell(4).innerText = "";
    row.insertCell(5).innerText = "";
    row.insertCell(6).innerText = "";
  }
}
