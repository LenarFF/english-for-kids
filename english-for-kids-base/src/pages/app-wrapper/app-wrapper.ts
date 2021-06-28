import { categoryCardsInfo } from '../../cardsInfo';
import { BaseComponent } from '../../components/base-component';
import { Footer } from '../../components/footer/footer';
import { Menu } from '../../components/menu/menu';
import { MainPage } from '../main-page/main-page';
import './app-wrapper.css';

export class AppWrapper extends BaseComponent {
  toggle: BaseComponent;

  control: BaseComponent;

  mainPage: MainPage;

  footer: Footer;

  menu: Menu;

  menuElements: string[];

  categoryNameIndex: number;

  constructor() {
    super('div', ['app']);

    this.categoryNameIndex = 0;
    this.control = new BaseComponent('div', ['app__control']);
    this.toggle = new BaseComponent('div', ['toggle']);
    this.mainPage = new MainPage();
    this.mainPage.renderCards();
    this.menuElements = categoryCardsInfo[this.categoryNameIndex];
    this.menu = new Menu(this.menuElements);
    this.footer = new Footer();

    this.control.element.append(this.toggle.element);
    this.element.append(this.control.element, this.mainPage.element,
      this.menu.element, this.footer.element);
  }
}
