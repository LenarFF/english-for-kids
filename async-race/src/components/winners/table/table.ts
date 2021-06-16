import { getCars, getWinners } from '../../../server';
import { BaseComponent } from '../../BaseComponent/BaseComponent';
import { Car } from '../../garage/racing-wrap/track/car/car';
import './table.css';

export class Table extends BaseComponent {
  tblBody: HTMLElement;

  timeSortOrder: string;

  winsSortOrder: string;

  constructor() {
    super('table', ['winners__table']);

    this.timeSortOrder = 'ASC';
    this.winsSortOrder = 'ASC';
    this.createTHead();
    this.tblBody = document.createElement('tbody');
    this.tblBody.classList.add('winners__tblbody');
    this.sortWins(this.winsSortOrder, 1);
  }

  createTHead() {
    const thead = document.createElement('thead');
    thead.classList.add('.thead');
    const row = document.createElement('tr');
    for (let i = 0; i < 5; i++) {
      const th = document.createElement('th');
      switch (i) {
        case 0:
          th.innerHTML = 'Number';
          break;
        case 1:
          th.innerHTML = 'Car';
          break;
        case 2:
          th.innerHTML = 'Name';
          break;
        case 3:
          th.innerHTML = 'Wins';
          th.setAttribute('id', 'wins');
          th.addEventListener('click', () => {
            this.sortWins(this.winsSortOrder, 1);
            this.winsSortOrder = this.winsSortOrder === 'ASC' ? 'DESC' : 'ASC';
          });
          break;
        case 4:
          th.innerHTML = 'Best time';
          th.setAttribute('id', 'best-time');
          th.addEventListener('click', () => {
            this.sortTime(this.timeSortOrder);
            this.timeSortOrder = this.timeSortOrder === 'ASC' ? 'DESC' : 'ASC';
          });
          break;
        default:
          break;
      }
      row.appendChild(th);
      thead.appendChild(row);
    }
    this.element.appendChild(thead);
  }

  createTBody(items: any) {
    this.tblBody.innerHTML = '';
    for (let j = 0; j <= 10; j++) {
      if (!items[j]) break;
      const row = document.createElement('tr');
      for (let i = 0; i < 5; i++) {
        const cell = document.createElement('td');
        switch (i) {
          case 0:
            cell.innerHTML = `${j + 1}`;
            break;
          case 1:
            const car = new Car(items[j].car.color);
            cell.appendChild(car.element);
            car.element.classList.add('table__car');
            break;
          case 2:
            cell.innerHTML = `${items[j].car.name}`;
            break;
          case 3:
            cell.innerHTML = `${items[j].wins}`;
            break;
          case 4:
            cell.innerHTML = `${items[j].time.toFixed(3)}`;
            break;
          default:
            break;
        }

        row.appendChild(cell);
      }

      this.tblBody.appendChild(row);
    }

    this.element.appendChild(this.tblBody);
  }

  sortWins(order: string, page: number) {
    const main = async () => {
      const winners = await getWinners({ sort: 'wins', order, page });
      this.createTBody(winners.items);
    };
    main();
  }

  sortTime(order: string) {
    const main = async () => {
      const winners = await getWinners({ sort: 'time', order });
      this.createTBody(winners.items);
    };
    main();
  }
}
