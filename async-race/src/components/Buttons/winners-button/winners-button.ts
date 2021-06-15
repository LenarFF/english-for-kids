import { Table } from "../../winners/table/table";
import { Buttons } from "../buttons";

export class WinnersButton extends Buttons {
  table: Table
  constructor() {

    super('winners', ['winners-button']);
    this.table = new Table();

  }
  buttonHandler() {
    super.buttonHandler();
    this.table.sortWins('ASC');
    document.querySelector('.garage-wrapper')?.classList.add('hidden');
    document.querySelector('.winners-wrapper')?.classList.remove('hidden');
  }
}