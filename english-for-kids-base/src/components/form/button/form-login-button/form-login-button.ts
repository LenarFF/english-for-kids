import { BaseComponent } from "../../../base-component";
import './form-login-button.css'

export class FormLoginButton extends BaseComponent {
  constructor() {
    super('button', ['form__button', 'form__login-button']);
    this.element.innerHTML = 'Login';
  }
}