import { categoryCardsInfo } from '../../cardsInfo';
import { BaseComponent } from '../../components/base-component';
import { Footer } from '../../components/footer/footer';
import { Menu } from '../../components/menu/menu';
import { Toggle } from '../../components/toggle/toggle';
import { MainPage } from '../main-page/main-page';
import './app-wrapper.css';

export class AppWrapper extends BaseComponent {
  toggle: Toggle;

  mainPage: MainPage;

  footer: Footer;

  menu: Menu;

  menuElements: string[];

  categoryNameIndex: number;

  constructor() {
    super('div', ['app']);

    this.categoryNameIndex = 0;
    this.toggle = new Toggle();
    this.mainPage = new MainPage();
    this.mainPage.renderCards();
    this.menuElements = categoryCardsInfo[this.categoryNameIndex];
    this.menu = new Menu(this.menuElements);
    this.footer = new Footer();

    this.element.append(this.toggle.element);
    this.element.append(this.mainPage.element,
      this.menu.element, this.footer.element);
  }
}
