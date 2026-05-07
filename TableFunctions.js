
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
