import { data } from "../../../data";
import { Table } from "../../winners/table/table";
import { Buttons } from "../buttons";

export class WinNextButton extends Buttons {

  table: Table
  constructor() {
    super('next');
    this.table = new Table();
  }

  buttonHandler() {
    super.buttonHandler();
    if(data.winnersCount <= data.winnersPage * 10) return
    console.log(data.winnersCount, data.winnersPage * 10 )
    data.winnersPage++
    console.log(data.winnersCount, data.winnersPage * 10 )
    this.table.sortWins('ASC', data.winnersPage);
    const tbl = document.querySelector('.winners__table');
    console.log(this.table.element)
    if(tbl && this.table.element.querySelector('tr')) {
      tbl.replaceWith(this.table.element)
    } else (
      data.winnersPage--
    )
  }
}