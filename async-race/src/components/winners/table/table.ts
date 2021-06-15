import { BaseComponent } from "../../BaseComponent/BaseComponent";
import './table.css'

export class Table extends BaseComponent {
  constructor() {
    super('table', ['table_sort']);
    this.createTHead();
    this.createTBody();
  }

  createTHead() {
    const thead = document.createElement("thead");
    thead.classList.add('.thead')
    const row = document.createElement("tr");
    for (let i = 0; i < 5; i++) {
      const th = document.createElement("th");
        switch(i) {
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
            break;
          case 4:
            th.innerHTML = 'Best time';
            break;
        }
        row.appendChild(th);
        thead.appendChild(row);

    }
    this.element.appendChild(thead)
    thead.addEventListener('click', (evt) => this.getSort(evt));
  }

  createTBody () {
    const tblBody = document.createElement("tbody");
    for (let j = 0; j <= 9; j++) {
      const row = document.createElement("tr");
      for (let i = 0; i < 5; i++) {
        const cell = document.createElement("td");
        cell.innerHTML = `${j + 1}`;
        row.appendChild(cell)
        }
        tblBody.appendChild(row);
      }
      this.element.appendChild(tblBody)
    }

    getSort({ target } : Event) {
 
    }
}