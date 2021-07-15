import { BaseComponent } from '../../base-component';
import { AdminHeaderButtons } from './admin-header-buttons/admin-header-buttons';
import './admin-header.css';

export class AdminHeader extends BaseComponent {
  categoriesButton: AdminHeaderButtons;

  wordsButton: AdminHeaderButtons;

  logoutButton: AdminHeaderButtons;

  routButtons: BaseComponent;

  constructor() {
    super('header', ['admin-header']);

    this.categoriesButton = new AdminHeaderButtons('Categories');
    this.wordsButton = new AdminHeaderButtons('Words');
    this.logoutButton = new AdminHeaderButtons('Log out');
    this.logoutButton.element.classList.add('logout-button');
    this.routButtons = new BaseComponent('div', ['header__rout-buttons']);

    this.routButtons.element.append(this.categoriesButton.element,
      this.wordsButton.element);
    this.element.append(this.routButtons.element, this.logoutButton.element);
    this.logoutButton.element.addEventListener('click', () => this.goMainPage());
    this.categoriesButton.element.addEventListener('click', () => this.changeHash('#/admin-page/'));
  }

  changeHash = (newHash: string): void => {
    window.location.hash = newHash;
  };

  goMainPage = (): void => {
    window.location.reload();
  };
}
