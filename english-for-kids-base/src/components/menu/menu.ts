import { data } from '../../data';
import { BaseComponent } from '../base-component';
import { Burger } from './burger/burger';
import './menu.css';

export class Menu extends BaseComponent {
  list: BaseComponent;

  firstLI: BaseComponent;

  lastLI: BaseComponent;

  burger: Burger;

  isMenuShow: boolean;

  liItems: HTMLElement[];

  constructor(menuElements: string[]) {
    super('nav', ['menu']);

    this.list = new BaseComponent('ul', ['menu__list']);
    this.firstLI = new BaseComponent('li', ['list__el', 'list__el_selected',
      'list__el_large', 'list__el_main']);
    this.lastLI = new BaseComponent('li', ['list__el', 'list__el_large', 'list__el_stat']);
    this.burger = new Burger();
    this.isMenuShow = false;
    this.liItems = [];

    this.firstLI.element.innerHTML = 'Main Page';
    this.lastLI.element.innerHTML = 'Statistics';

    this.element.append(this.list.element);
    this.list.element.append(this.firstLI.element);

    document.addEventListener('DOMContentLoaded', () => {
      document.querySelector('.app')?.append(this.burger.element);
    });

    this.burger.element.addEventListener('click', () => this.showMenu());
    document.addEventListener('click', (event) => this.hideMenu(event));
    this.firstLI.element.addEventListener('click', () => this.goToMainPage());
    this.lastLI.element.addEventListener('click', () => this.goToStatisticsPage());

    this.liItems.push(this.firstLI.element);
    this.renderList(menuElements);
    this.liItems.push(this.lastLI.element);
    this.list.element.append(this.lastLI.element);
    window.addEventListener('hashchange', () => this.addSelectedClass(window.location.hash));
  }

  renderList(menuElements: string[]): void {
    for (let i = 0; i < menuElements.length; i++) {
      const listItem = new BaseComponent('li', ['list__el']);
      listItem.element.innerHTML = `${menuElements[i]}`;
      listItem.element.classList.add(`list__el_${menuElements[i].split(' ')[0]}`);
      listItem.element.addEventListener('click', () => this.goToCategory(i));
      this.liItems.push(listItem.element);
      this.list.element.append(listItem.element);
    }
  }

  goToCategory = (categoryNumber: number): void => {
    data.categoryIndex = categoryNumber;
    window.location.hash = `#/category-page/${categoryNumber}`;
  };

  goToStatisticsPage = (): void => {
    window.location.hash = '#/statistics-page/';
  };

  goToMainPage = (): void => {
    window.location.hash = '#/main-page/';
  };

  showMenu(): void {
    if (this.isMenuShow) {
      this.element.classList.remove('menu_show');
      this.isMenuShow = false;
    } else {
      this.element.classList.add('menu_show');
      setTimeout(() => { this.isMenuShow = true; }, 1000);
    }
  }

  hideMenu(event: Event): void {
    if (this.isMenuShow && event.target !== this.element) {
      this.element.classList.remove('menu_show');
      this.burger.redrawBurger();
      this.isMenuShow = false;
    }
  }

  addSelectedClass(location: string): void {
    switch (location) {
      case '#/main-page/':
        this.removeSelectedClass();
        this.liItems[0].classList.add('list__el_selected');
        break;
      case '#/statistics-page/':
        this.removeSelectedClass();
        this.liItems[this.liItems.length - 1].classList.add('list__el_selected');
        break;
      default:
        this.removeSelectedClass();
        if (Number.isNaN(Number(location.slice(-1)))) return;
        this.liItems[Number(location.slice(-1)) + 1].classList.add('list__el_selected');
    }
  }

  removeSelectedClass():void {
    this.liItems.forEach((item) => item.classList.remove('list__el_selected'));
  }
}
