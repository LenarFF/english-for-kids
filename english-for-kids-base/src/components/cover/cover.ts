import { BaseComponent } from '../base-component';
import { Form } from '../form/form';
import './cover.css';

export class Cover extends BaseComponent {
  form: Form;

  constructor() {
    super('div', ['cover', 'hidden']);
    this.element.addEventListener('click', (event) => this.hide(event));
    this.form = new Form();
    this.element.append(this.form.element);
  }

  hide = (event: Event): void => {
    if (event.target === this.element || event.target === this.form.formCancelButton.element) {
      this.element.classList.add('hidden');
      this.clearInput(this.form.loginInput.element as HTMLInputElement);
      this.clearInput(this.form.passwordInput.element as HTMLInputElement);
    }
  };

  clearInput = (input: HTMLInputElement): void => {
    input.value = '';
    input.classList.remove('input_green');
  };
}
