import { BaseComponent } from '../base-component';
import './best-score.css';



export class BestScore extends BaseComponent {

  header: BaseComponent;
  records: BaseComponent;

   constructor() {
    super('div', ['best-score']);

    this.header = new BaseComponent('h1', ['best-score__header'])
    this.records = new BaseComponent('div', ['records'])

    this.element.appendChild(this.header.element)
    this.element.appendChild(this.records.element);

    this.header.element.innerHTML = `
    <h1>Best players</h1>
    `;

    this.indexedDBCursor()
  }

   addHTML(results: any) {

    for (let i = results.length - 1; i > results.length - 11; i-- ) {
      if (i < 0) return
      let player = new BaseComponent('div', ['player']);
      let playerInfo = new BaseComponent('div', ['player__info'])
      let name = new BaseComponent('p', ['player__name']);
      let email = new BaseComponent('p', ['player__email']);
      let score = new BaseComponent('p', ['player__score'])

      this.records.element.appendChild(player.element);
      player.element.appendChild(playerInfo.element);
      player.element.appendChild(score.element);
      playerInfo.element.appendChild(name.element);
      playerInfo.element.appendChild(email.element);



      console.log(results[i])
      console.log(i)
      name.element.innerHTML = `${results[i].name} ${results[i].surname}`
      email.element.innerHTML = `${results[i].email}`
      score.element.innerHTML = `Score: ${results[i].points}`

    }
  }

  indexedDBCursor() {


    let db: any;

    let openRequest = indexedDB.open('test', 1);

    openRequest.onerror = function () {
        console.log('open db request --- onerror');
    };

    openRequest.onsuccess = (event: any) => {
        console.log('open db --- onsuccess');
        db = event.target.result;
        this.getAllGames(db);
    };

    openRequest.onupgradeneeded = function (event) {
        console.log('open db --- onupgradeneeded');
    };
  }

     getAllGames(db: any) {

      let openRequest = indexedDB.open('test', 1);

      openRequest.onerror = function () {
          console.log('open db request --- onerror');
      };

      openRequest.onsuccess = (event: any) => {
          console.log('open db --- onsuccess');

          db = event.target.result;

          let objectStore = db.transaction('games').objectStore('games');


          objectStore.getAll().onsuccess = (event: any) => {
              console.log(event.target.result);
              const results = event.target.result;
              this.addHTML(results);
          }
      };

      openRequest.onupgradeneeded = function () {
          console.log('open db --- onupgradeneeded');
      };

    }

  }