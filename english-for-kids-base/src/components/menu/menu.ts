import { BaseComponent } from '../base-component';
import './menu.css';

export class Menu extends BaseComponent {
  list: BaseComponent;

  firstLI: BaseComponent;

  BURGER_CLASS: string;

  constructor(menuElements: string[]) {
    super('nav', ['menu']);

    this.BURGER_CLASS = 'burger';
    this.list = new BaseComponent('ul', ['menu__list']);
    this.firstLI = new BaseComponent('li', ['list__el']);

    this.firstLI.element.innerHTML = 'Main Page';

    this.element.append(this.list.element);
    this.list.element.append(this.firstLI.element);

    document.addEventListener('DOMContentLoaded', () => {
      document.querySelector('.burger')?.addEventListener('click', () => this.showMenu());
    });

    this.renderList(menuElements);
  }

  renderList(menuElements: string[]): void {
    menuElements.forEach((element) => {
      const listItem = new BaseComponent('li', ['list__el']);
      listItem.element.innerHTML = `${element}`;
      this.list.element.append(listItem.element);
    });
  }

  showMenu(): void {
    this.element.classList.toggle('menu_show');
  }
}
