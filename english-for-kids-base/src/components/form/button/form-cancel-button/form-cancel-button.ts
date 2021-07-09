import { BaseComponent } from '../../../base-component';
import './form-cancel-button.css';

export class FormCancelButton extends BaseComponent {
  constructor() {
    super('button', ['form__button', 'form__cancel-button']);
    this.element.innerHTML = 'Cancel';
  }
}
