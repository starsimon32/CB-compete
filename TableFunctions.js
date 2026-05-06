
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

  // 🔥 清空舊內容

  table.innerHTML = "";

  // ===== 第1列（標題列）=====

  let header1 = table.insertRow();

  header1.insertCell(0).innerText = "牌";

  header1.insertCell(1).innerText = "身價";

  header1.insertCell(2).innerText = "我們桌";

  header1.insertCell(3).innerText = "他們桌";

  header1.insertCell(4).innerText = "我們IMP";

  header1.insertCell(5).innerText = "他們IMP";

  header1.insertCell(6).innerText = "差值";

  // ===== 建立每一副 =====

  for (let i = 1; i <= rounds; i++) {

    let row = table.insertRow();

    // 牌號

    row.insertCell(0).innerText = i;

    // 身價（用你寫的 getVul）

    let vul = getVul(i);

    row.insertCell(1).innerText = vul;

    // 我們桌

    row.insertCell(2).innerText = "";

    // 他們桌

    row.insertCell(3).innerText = "";

    // 我們 IMP

    row.insertCell(4).innerText = "";

    // 他們 IMP

    row.insertCell(5).innerText = "";

    // 差值

    row.insertCell(6).innerText = "";

  }

}
