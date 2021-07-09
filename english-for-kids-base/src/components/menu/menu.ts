import { data } from '../../data';
import { BaseComponent } from '../base-component';
import { LoginButton } from '../login-button/login-button';
import './menu.css';

export class Menu extends BaseComponent {
  list: BaseComponent;

  firstLI: BaseComponent;

  lastLI: BaseComponent;

  isMenuShow: boolean;

  liItems: HTMLElement[];

  loginButton: LoginButton;

  constructor(menuElements: string[]) {
    super('nav', ['menu']);

    this.list = new BaseComponent('ul', ['menu__list']);
    this.firstLI = new BaseComponent('li', ['list__el', 'list__el_selected',
      'list__el_large', 'list__el_main']);
    this.lastLI = new BaseComponent('li', ['list__el', 'list__el_large', 'list__el_stat']);
    this.loginButton = new LoginButton();
    this.isMenuShow = false;
    this.liItems = [];

    this.firstLI.element.innerHTML = 'Main Page';
    this.lastLI.element.innerHTML = 'Statistics';

    this.element.append(this.list.element);
    this.list.element.append(this.firstLI.element);
    this.element.append(this.loginButton.element);

    this.firstLI.element.addEventListener('click', () => this.goToMainPage());
    this.lastLI.element.addEventListener('click', () => this.goToStatisticsPage());

    this.liItems.push(this.firstLI.element);
    this.renderList(menuElements);
    this.liItems.push(this.lastLI.element);
    this.list.element.append(this.lastLI.element);
    window.addEventListener('hashchange', () => this.addSelectedClass(window.location.hash));
  }

  renderList(menuElements: string[]): void {
    for (let i = 0; i < menuElements.length - 1; i++) {
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

  showMenu = (): void => {
    if (data.isMenuShow) {
      this.element.classList.remove('menu_show');
      data.isMenuShow = false;
    } else {
      this.element.classList.add('menu_show');

      setTimeout(() => { data.isMenuShow = true; }, 1000);
    }
  };

  hideMenu = (event: Event, burgerFunction: () => void): void => {
    if (data.isMenuShow && event.target !== this.element) {
      this.element.classList.remove('menu_show');
      burgerFunction();
      data.isMenuShow = false;
    }
  };

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
