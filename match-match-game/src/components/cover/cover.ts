import { BaseComponent } from '../base-component';
import './cover.css';

export class Cover extends BaseComponent {
  constructor() {
    super('div', ['cover', 'hidden']);
    this.element.addEventListener('click', () => this.hide());
  }

  hide = (): void => {
    const cover = document.querySelector('.cover') as HTMLElement;
    const form = document.querySelector('.register-form') as HTMLElement;

    cover.classList.add('hidden');
    form.classList.add('hidden');
  };
}
