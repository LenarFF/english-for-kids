import { BaseComponent } from '../base-component';
import { Form } from '../form/form';
import './cover.css';

export class Cover extends BaseComponent {
  form: Form;

  constructor() {
    super('div', ['cover', 'hidden']);
    this.element.addEventListener('click', () => this.hide());
    this.form = new Form();
    this.element.append(this.form.element);
  }

  hide = (): void => {
    const cover = document.querySelector('.cover') as HTMLElement;
    cover.classList.add('hidden');
  };
}
