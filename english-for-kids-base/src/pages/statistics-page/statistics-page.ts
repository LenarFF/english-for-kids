import { BaseComponent } from '../../components/base-component';
import { ResetButton } from '../../components/reset-button/reset-button';
import { LocalStorage } from '../../localStorageClass';
import './statistics-page.css';

export class StatisticsPage extends BaseComponent {
  table: BaseComponent;

  tblBody: HTMLElement;

  COLUMNS_QUANTITY: number;

  resetButton: ResetButton;

  appLocalStorage: LocalStorage;

  constructor() {
    super('div', ['statistics']);
    this.table = new BaseComponent('table', ['table']);
    this.COLUMNS_QUANTITY = 9;
    this.resetButton = new ResetButton();
    this.appLocalStorage = new LocalStorage();

    this.element.append(this.resetButton.element);
    this.element.append(this.table.element);
    this.createTHead();

    this.tblBody = document.createElement('tbody');
    this.tblBody.classList.add('tblbody');
    this.table.element.append(this.tblBody);
    this.createTBody();
    this.resetButton.element.addEventListener('click', () => {
      localStorage.clear();
      this.appLocalStorage.createStorage();
      this.createTBody();
    });
  }

  createTHead(): void {
    const thead = document.createElement('thead');
    thead.classList.add('.thead');
    const row = document.createElement('tr');
    for (let i = 0; i < this.COLUMNS_QUANTITY; i++) {
      const th = document.createElement('th');
      switch (i) {
        case 0:
          th.innerHTML = '№';
          break;
        case 1:
          th.innerHTML = 'category';
          break;
        case 2:
          th.innerHTML = 'word';
          break;
        case 3:
          th.innerHTML = 'translation';
          break;
        case 4:
          th.innerHTML = 'train';
          th.setAttribute('id', 'wins');
          th.addEventListener('click', () => {
            // this.sortWins(this.winsSortOrder, 1);
            // this.winsSortOrder = this.winsSortOrder === 'ASC' ? 'DESC' : 'ASC';
          });

          break;
        case 5:
          th.innerHTML = 'game';
          th.setAttribute('id', 'best-time');
          th.addEventListener('click', () => {
            // this.sortTime(this.timeSortOrder);
            // this.timeSortOrder = this.timeSortOrder === 'ASC' ? 'DESC' : 'ASC';
          });
          break;
        case 6:
          th.innerHTML = 'right';
          break;
        case 7:
          th.innerHTML = 'wrong';
          break;
        case 8:
          th.innerHTML = '% right answers';
          break;
        default:
          break;
      }
      row.append(th);
      thead.append(row);
    }
    this.table.element.append(thead);
  }

  createTBody(): void {
    this.tblBody.innerHTML = '';
    for (let j = 0; j < localStorage.length; j++) {
      const row = document.createElement('tr');
      const word = localStorage.key(j) as string;
      const wordStatStringify = localStorage.getItem(word);
      if (wordStatStringify) {
        const wordStat = JSON.parse(wordStatStringify);
        for (let i = 0; i < 9; i++) {
          const cell = document.createElement('td');
          switch (i) {
            case 0:
              cell.innerHTML = `${j + 1}`;
              break;
            case 1:
              cell.innerHTML = `${wordStat.category}`;
              break;
            case 2:
              cell.innerHTML = `${word}`;
              break;
            case 3:
              cell.innerHTML = `${wordStat.translation}`;
              break;
            case 4:
              cell.innerHTML = `${wordStat.train}`;
              break;
            case 5:
              cell.innerHTML = `${wordStat.game}`;
              break;
            case 6:
              cell.innerHTML = `${wordStat.right}`;
              break;
            case 7:
              cell.innerHTML = `${wordStat.wrong}`;
              break;
            case 8:
              if (wordStat.game !== 0)cell.innerHTML = `${Math.round((wordStat.right / wordStat.game) * 100)}%`;
              break;
            default:
              break;
          }

          row.append(cell);
        }
      }
      this.tblBody.append(row);
    }
    this.table.element.append(this.tblBody);
  }
}
