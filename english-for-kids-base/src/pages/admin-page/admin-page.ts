import { AdminHeader } from '../../components/admin-page-components/admin-header/admin-header';
import { BaseComponent } from '../../components/base-component';
import { AdminCategoryPage } from './admin-category-page/admin-category-page';

export class AdminPage extends BaseComponent {
  adminHeader: AdminHeader;

  adminCardsWrap: BaseComponent;

  adminCategoryPage: AdminCategoryPage;

  constructor() {
    super('div', ['admin-page']);
    this.adminHeader = new AdminHeader();
    this.adminCardsWrap = new BaseComponent('div', ['admin__cards-wrap']);
    this.adminCategoryPage = new AdminCategoryPage();

    this.adminCardsWrap.element.append(this.adminCategoryPage.element);
    this.element.append(this.adminHeader.element, this.adminCardsWrap.element);
  }
}
