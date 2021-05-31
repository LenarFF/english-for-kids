import { BaseComponent } from '../base-component';
import './best-score.css';

export class BestScore extends BaseComponent {
  header: BaseComponent;

  records: BaseComponent;

  constructor() {
    super('div', ['best-score']);

    this.header = new BaseComponent('h1', ['best-score__header']);
    this.records = new BaseComponent('div', ['records']);

    this.element.appendChild(this.header.element);
    this.element.appendChild(this.records.element);

    this.header.element.innerHTML = `
    <h1>Best players</h1>
    `;

    this.getAllGames();
  }

  addHTML(results: any) {
    for (let i = results.length - 1; i > results.length - 11; i--) {
      if (i < 0) return;
      const player = new BaseComponent('div', ['player']);
      const playerInfo = new BaseComponent('div', ['player__info']);
      const name = new BaseComponent('p', ['player__name']);
      const email = new BaseComponent('p', ['player__email']);
      const score = new BaseComponent('p', ['player__score']);

      this.records.element.appendChild(player.element);
      player.element.appendChild(playerInfo.element);
      player.element.appendChild(score.element);
      playerInfo.element.appendChild(name.element);
      playerInfo.element.appendChild(email.element);

      name.element.innerHTML = `${results[i].name} ${results[i].surname}`;
      email.element.innerHTML = `${results[i].email}`;
      score.element.innerHTML = `Score: ${results[i].points}`;
    }
  }

  getAllGames() {
    const openRequest = indexedDB.open('LenarFF', 1);

    openRequest.onerror = function () {
      console.log('open db request --- onerror');
    };

    openRequest.onsuccess = (ev: any) => {
      console.log('open db --- onsuccess');

      const db = ev.target.result;

      const objectStore = db.transaction('games').objectStore('games');

      objectStore.getAll().onsuccess = (event: any) => {
        console.log(event.target.result);
        const results = event.target.result;
        this.addHTML(results);
      };
    };

    openRequest.onupgradeneeded = function (e: any) {
      console.log('open db --- onupgradeneeded');
      const db = e.target.result;
      if (!db.objectStoreNames.contains('games')) {
        db.createObjectStore(
          'games',
          { keyPath: 'points', autoIncrement: true },
          { unique: false },
        );
      }
    };
  }
}
