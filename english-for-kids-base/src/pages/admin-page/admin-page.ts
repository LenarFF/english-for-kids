import { AdminHeader } from '../../components/admin-page-components/admin-header/admin-header';
import { BaseComponent } from '../../components/base-component';

export class AdminPage extends BaseComponent {
  adminHeader: AdminHeader;

  constructor() {
    super('div', ['admin-page']);
    this.adminHeader = new AdminHeader();

    this.element.append(this.adminHeader.element);
  }
}
