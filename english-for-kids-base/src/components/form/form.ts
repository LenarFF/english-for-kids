import { BaseComponent } from '../base-component';
import { FormCancelButton } from './button/form-cancel-button/form-cancel-button';
import { FormLoginButton } from './button/form-login-button/form-login-button';
import './form.css';
import { Input } from './input/input';
import { Label } from './input/label/label';

export class Form extends BaseComponent {
  formHeader: BaseComponent;

  inputsWrap: BaseComponent;

  buttonsWrap: BaseComponent;

  formLoginWrap: BaseComponent;

  formPasswordWrap: BaseComponent;

  loginInput: Input;

  passwordInput: Input;

  loginLabel: Label;

  passwordLabel: Label;

  formLoginButton: FormLoginButton;

  formCancelButton: FormCancelButton;

  constructor() {
    super('form', ['form']);
    this.formHeader = new BaseComponent('h3', ['form__header']);
    this.formHeader.element.innerHTML = 'Login';
    this.inputsWrap = new BaseComponent('div', ['inputs-wrap']);
    this.buttonsWrap = new BaseComponent('div', ['buttons-wrap']);
    this.formLoginWrap = new BaseComponent('div', ['input-wrap']);
    this.formPasswordWrap = new BaseComponent('div', ['input-wrap']);
    this.loginInput = new Input('text', 'login', 'login', 'form-input');
    this.passwordInput = new Input('text', 'password', 'password', 'form-input');
    this.loginLabel = new Label('login', 'login');
    this.passwordLabel = new Label('password', 'password');
    this.formLoginButton = new FormLoginButton();
    this.formCancelButton = new FormCancelButton();

    this.formLoginWrap.element.append(this.loginLabel.element, this.loginInput.element);
    this.formPasswordWrap.element.append(this.passwordLabel.element, this.passwordInput.element);

    this.buttonsWrap.element.append(this.formCancelButton.element, this.formLoginButton.element);

    this.inputsWrap.element.append(this.formLoginWrap.element, this.formPasswordWrap.element);
    this.element.append(this.formHeader.element, this.inputsWrap.element, this.buttonsWrap.element);
  }
}
