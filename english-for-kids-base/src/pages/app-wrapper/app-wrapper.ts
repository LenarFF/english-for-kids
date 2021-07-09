import { categoryCardsInfo } from '../../cardsInfo';
import { BaseComponent } from '../../components/base-component';
import { Cover } from '../../components/cover/cover';
import { Footer } from '../../components/footer/footer';
import { Form } from '../../components/form/form';
import { Menu } from '../../components/menu/menu';
import { Toggle } from '../../components/toggle/toggle';
import { data } from '../../data';
import { MainPage } from '../main-page/main-page';
import './app-wrapper.css';

export class AppWrapper extends BaseComponent {
  toggle: Toggle;

  mainPage: MainPage;

  footer: Footer;

  menu: Menu;

  menuElements: string[];

  categoryNameIndex: number;

  pageWrap: BaseComponent;
  cover: Cover;
  form: Form

  constructor() {
    super('div', ['app']);

    this.categoryNameIndex = 0;
    this.toggle = new Toggle();
    this.mainPage = new MainPage();
    this.mainPage.renderCards();
    this.menuElements = categoryCardsInfo[this.categoryNameIndex];
    this.menu = new Menu(this.menuElements);
    this.footer = new Footer();
    this.cover = new Cover();
    this.form = new Form();
    this.pageWrap = new BaseComponent('div', ['page-wrap']);

    this.element.append(this.toggle.element);
    window.addEventListener('hashchange',
      (event) => this.toggleToggle(event.oldURL, event.newURL));

    this.element.append(this.pageWrap.element);
    this.pageWrap.element.append(this.mainPage.element);
    this.element.append(this.cover.element);
    this.element.append(this.form.element)
    this.element.append(this.menu.element, this.footer.element);

  }

  toggleToggle(oldURL: string, newURL: string): void {
    if (newURL.includes('#/statistics-page/')) {
      this.toggle.element.classList.add('hidden');
      data.gameMode = false;
      data.startGame = false;
      (this.toggle.element as HTMLInputElement).checked = false;
    }
    if ((oldURL.includes('#/difficult-words/')
      && !newURL.includes('#/statistics-page/'))
      || (oldURL.includes('#/statistics-page/')
      && !newURL.includes('#/difficult-words/'))
    ) {
      this.toggle.element.classList.remove('hidden');
    }
  }
}
