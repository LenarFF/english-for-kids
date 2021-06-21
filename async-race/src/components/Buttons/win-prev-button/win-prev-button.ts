import { data } from '../../../data';
import { Table } from '../../winners/table/table';
import { Buttons } from '../button';

export class WinPrevButton extends Buttons {
  table: Table;

  constructor() {
    super('prev');
    this.table = new Table();
  }

  buttonHandler(): void {
    super.buttonHandler();
    if (data.winnersPage === 1) return;
    data.winnersPage--;
    this.table.sortWins('ASC', data.winnersPage);
    const tbl = document.querySelector('.winners__table');
    const winnersPageCounter = document.getElementById('winners_page');
    if (tbl && winnersPageCounter) {
      tbl.replaceWith(this.table.element);
      winnersPageCounter.innerHTML = `${data.winnersPage}`;
    }
  }
}
