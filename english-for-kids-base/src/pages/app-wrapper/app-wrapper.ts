import { BaseComponent } from '../../components/base-component';
import { Footer } from '../../components/footer/footer';
import { MainPage } from '../main-page/main-page';
import './app-wrapper.css';

export class AppWrapper extends BaseComponent {
  burger: BaseComponent;

  toggle: BaseComponent;

  control: BaseComponent;

  mainPage: MainPage;

  footer: Footer;

  constructor() {
    super('div', ['app']);

    this.control = new BaseComponent('div', ['app__control']);
    this.burger = new BaseComponent('div', ['burger']);
    this.toggle = new BaseComponent('div', ['toggle']);
    this.mainPage = new MainPage();
    this.mainPage.renderCards();
    this.footer = new Footer();

    this.control.element.append(this.burger.element, this.toggle.element);
    this.element.append(this.control.element, this.mainPage.element, this.footer.element);
  }
}
