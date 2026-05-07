
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
export function setTableCell(tableId, row, col, text) {
  let table = document.getElementById(tableId);
  table.rows[row].cells[col].innerText = text;
}
export function initialTable(rounds, tableId) {
  let table = document.getElementById(tableId);
  setTableCell(table,1,1,"圈"）；
  setTableCell(table,1,2,"身價"）；
    setTableCell(table,1,3,"圈"）；
}
