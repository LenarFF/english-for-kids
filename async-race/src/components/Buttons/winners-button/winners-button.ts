import { data } from '../../../data';
import { getWinners } from '../../../server';
import { Table } from '../../winners/table/table';
import { Buttons } from '../buttons';

export class WinnersButton extends Buttons {
  table: Table;

  constructor() {
    super('winners', ['winners-button']);
    this.table = new Table();
  }

  buttonHandler() {
    super.buttonHandler();
    this.table.sortWins('ASC', 1);
    const tbl = document.querySelector('.winners__table');
    if (tbl && this.table.element.querySelector('tr')) {
      tbl.replaceWith(this.table.element);
    }
    document.querySelector('.garage-wrapper')?.classList.add('hidden');
    document.querySelector('.winners-wrapper')?.classList.remove('hidden');
    this.getWinnersCount();
    this.renderPageCount(data.winnersPage);
  }

  getWinnersCount() {
    const main = async () => {
      const response = await getWinners({ sort: 'wins', order: 'ASC', limit: 1000 });
      if (response.count) {
        data.winnersCount = +response.count;
        this.renderWinnerCount(data.winnersCount);
      }
    };
    main();
  }

  renderWinnerCount = (count: number) => {
    const winnersCount = document.getElementById('winners');
    if (winnersCount) {
      winnersCount.innerHTML = `${count}`;
    }
  };

  renderPageCount = (count: number) => {
    const pageCount = document.getElementById('winners_page');
    if (pageCount) {
      pageCount.innerHTML = `${count}`;
    }
  };
}
