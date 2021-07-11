import { BaseComponent } from '../../../base-component';
import './admin-header-buttons.css';

export class AdminHeaderButtons extends BaseComponent {
  constructor(text: string) {
    super('button', ['admin__header-button']);
    this.element.innerHTML = `${text}`;
    this.element.addEventListener('click', () => this.changeHash());
  }

  changeHash = (): void => {
    window.location.hash = '#/admin-page/';
  };
}
