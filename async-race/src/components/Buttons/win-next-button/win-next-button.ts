import { data } from '../../../data';
import { Table } from '../../winners/table/table';
import { Buttons } from '../button';

export class WinNextButton extends Buttons {
  table: Table;

  constructor() {
    super('next');
    this.table = new Table();
  }

  buttonHandler() {
    super.buttonHandler();
    if (data.winnersCount <= data.winnersPage * 10) return;
    console.log(data.winnersCount, data.winnersPage * 10);
    data.winnersPage++;
    this.table.sortWins('ASC', data.winnersPage);
    const tbl = document.querySelector('.winners__table');
    const winnersPageCounter = document.getElementById('winners_page');
    if (tbl && winnersPageCounter) {
      tbl.replaceWith(this.table.element);
      winnersPageCounter.innerHTML = `${data.winnersPage}`;
    }
  }
}
