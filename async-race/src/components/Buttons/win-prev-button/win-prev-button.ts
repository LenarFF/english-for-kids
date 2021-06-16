import { data } from "../../../data";
import { Table } from "../../winners/table/table";
import { Buttons } from "../buttons";

export class WinPrevButton extends Buttons {

  table: Table
  constructor() {
    super('prev')
    this.table = new Table();
  }

  buttonHandler() {
    super.buttonHandler();
    if(data.winnersPage === 1) return;
    data.winnersPage--
    this.table.sortWins('ASC', data.winnersPage);
    const tbl = document.querySelector('.winners__table');
    if(tbl) {
      tbl.replaceWith(this.table.element)
    }
  }
}