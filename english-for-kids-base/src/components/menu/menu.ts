import { data } from '../../data';
import { CategoryPage } from '../../pages/category-page/category-page';
import { MainPage } from '../../pages/main-page/main-page';
import { BaseComponent } from '../base-component';
import { Burger } from './burger/burger';
import './menu.css';

export class Menu extends BaseComponent {
  list: BaseComponent;

  firstLI: BaseComponent;

  burger: Burger;

  isMenuShow: boolean;

  constructor(menuElements: string[]) {
    super('nav', ['menu']);

    this.list = new BaseComponent('ul', ['menu__list']);
    this.firstLI = new BaseComponent('li', ['list__el']);
    this.burger = new Burger();
    this.isMenuShow = false;

    this.firstLI.element.innerHTML = 'Main Page';

    this.element.append(this.list.element);
    this.list.element.append(this.firstLI.element);

    document.addEventListener('DOMContentLoaded', () => {
      document.querySelector('.app')?.append(this.burger.element);
    });

    this.burger.element.addEventListener('click', () => this.showMenu());
    document.addEventListener('click', (event) => this.hideMenu(event));
    this.firstLI.element.addEventListener('click', () => this.goToMainPage());

    this.renderList(menuElements);
  }

  renderList(menuElements: string[]): void {
    for (let i = 0; i < menuElements.length; i++) {
      const listItem = new BaseComponent('li', ['list__el']);
      listItem.element.innerHTML = `${menuElements[i]}`;
      listItem.element.addEventListener('click', () => this.goToCategory(i));
      this.list.element.append(listItem.element);
    }
  }

  goToCategory = (categoryNumber: number): void => {
    data.categoryIndex = categoryNumber;
    const currentPage = document.querySelector('.page');
    const categoryPage = new CategoryPage(categoryNumber);
    categoryPage.renderCards();
    currentPage?.replaceWith(categoryPage.element);
    const startButton = document.querySelector('.start-button');
    if (data.gameMode && startButton) startButton.classList.remove('start-button_hide');
  };

  goToMainPage = (): void => {
    const categoryPage = document.querySelector('.category');
    const mainPage = new MainPage();
    mainPage.renderCards();
    categoryPage?.replaceWith(mainPage.element);
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
}
