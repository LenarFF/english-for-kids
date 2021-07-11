import { wordCardsInfo } from '../../cardsInfo';
import { BaseComponent } from '../../components/base-component';
import { RepeatButton } from '../../components/repeat-button/repeat-button';
import { ResetButton } from '../../components/reset-button/reset-button';
import { data, StorageCardInfo } from '../../data';
import { LocalStorage } from '../../localStorageClass';
import './statistics-page.css';
import { WordStatsType } from '../../types';

export class StatisticsPage extends BaseComponent {
  table: BaseComponent;

  tblBody: HTMLElement;

  columnsQuantity: number;

  resetButton: ResetButton;

  appLocalStorage: LocalStorage;

  ths: HTMLElement[];

  rows: HTMLElement[];

  sortDirection: string;

  repeatButton: RepeatButton;

  buttonsWrap: BaseComponent;

  localStorageModule: LocalStorage;

  constructor() {
    super('div', ['statistics']);
    this.ths = [];
    this.rows = [];
    this.table = new BaseComponent('table', ['table']);
    this.buttonsWrap = new BaseComponent('div', ['statistics__buttons-wrap']);
    this.columnsQuantity = 9;
    this.resetButton = new ResetButton();
    this.repeatButton = new RepeatButton();
    this.appLocalStorage = new LocalStorage();
    this.sortDirection = 'ASC';
    this.localStorageModule = new LocalStorage();

    this.buttonsWrap.element.append(this.repeatButton.element);
    this.buttonsWrap.element.append(this.resetButton.element);
    this.element.append(this.buttonsWrap.element);
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

    this.repeatButton.element.addEventListener('click', () => {
      this.sortWrongWordCardsInfo();
      wordCardsInfo.push(data.wrongWordCardsInfo.slice(0, 8));
      window.location.hash = '#/difficult-words/';
    });
  }

  createTHead(): void {
    const thead = document.createElement('thead');
    thead.classList.add('.thead');
    const row = document.createElement('tr');
    for (let i = 0; i < this.columnsQuantity; i++) {
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
          break;
        case 5:
          th.innerHTML = 'game';
          th.setAttribute('id', 'best-time');
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
      th.addEventListener('click', this.sortTable, false);
      this.ths.push(th);
      row.append(th);
      thead.append(row);
    }
    this.table.element.append(thead);
  }

  createTBody(): void {
    this.tblBody.innerHTML = '';
    data.wrongWordCardsInfo = [];
    const { words } = this.localStorageModule.getItems();
    const wordStats: WordStatsType[] = this.localStorageModule.getItems().items;
    for (let j = 0; j < words.length; j++) {
      const row = document.createElement('tr');
      for (let i = 0; i < this.columnsQuantity; i++) {
        const cell = document.createElement('td');
        switch (i) {
          case 0:
            cell.innerHTML = `${j + 1}`;
            break;
          case 1:
            cell.innerHTML = `${wordStats[j].category}`;
            break;
          case 2:
            cell.innerHTML = `${words[j].slice(4)}`;
            break;
          case 3:
            cell.innerHTML = `${wordStats[j].translation}`;
            break;
          case 4:
            cell.innerHTML = `${wordStats[j].train}`;
            break;
          case 5:
            cell.innerHTML = `${wordStats[j].game}`;
            break;
          case 6:
            cell.innerHTML = `${wordStats[j].right}`;
            break;
          case 7:
            cell.innerHTML = `${wordStats[j].wrong}`;
            break;
          case 8:
            if (wordStats[j].game !== 0) {
              cell.innerHTML = `${Math.round((wordStats[j].right / wordStats[j].game) * 100)}`;
            }
            break;
          default:
            break;
        }

        row.append(cell);
      }

      this.fillWrongWordCardsInfo(wordStats[j], words[j].slice(4));

      this.rows.push(row);
      this.tblBody.append(row);
    }
    this.table.element.append(this.tblBody);
  }

  fillWrongWordCardsInfo = (wordStat: StorageCardInfo, word: string): void => {
    if (wordStat.wrong !== 0) {
      data.wrongWordCardsInfo.push({
        word,
        translation: wordStat.translation,
        image: wordStat.image,
        audioSrc: wordStat.audioSrc,
        wrong: wordStat.wrong,
      });
    }
  };

  sortWrongWordCardsInfo = (): void => {
    data.wrongWordCardsInfo.sort((a: StorageCardInfo, b: StorageCardInfo) => {
      if (a.wrong < b.wrong) {
        return 1;
      }
      if (a.wrong > b.wrong) {
        return -1;
      }
      return 0;
    });
  };

  // CodePen  "Js sort table"
  sortTable = (event: Event): void => {
    const thsArray: HTMLElement[] = [].slice.call(this.ths);
    const rowArray: HTMLElement[] = [].slice.call(this.rows);
    const target = event.target as HTMLElement;
    const thsIndex = thsArray.indexOf(target);
    const docF = document.createDocumentFragment();

    rowArray.sort((b, a) => {
      let tdA: string | number = '';
      let tdB: string | number = '';

      const tdAContent = a.children[thsIndex].textContent;
      const tdBContent = b.children[thsIndex].textContent;

      if (tdAContent && tdBContent && Number.isNaN(Number(tdAContent))) {
        tdA = tdAContent;
        tdB = tdBContent;
      } else {
        tdA = Number(tdAContent);
        tdB = Number(tdBContent);
      }

      if (tdA > tdB) {
        return this.sortDirection === 'ASC' ? 1 : -1;
      }
      if (tdA < tdB) {
        return this.sortDirection === 'ASC' ? -1 : 1;
      }
      return 0;
    });

    rowArray.forEach((row) => {
      docF.appendChild(row);
    });

    this.tblBody.appendChild(docF);
    this.sortDirection = this.sortDirection === 'ASC' ? 'DESC' : 'ASC';
  };
}
