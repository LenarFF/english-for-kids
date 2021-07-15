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

  login: string;

  password: string;

  passwordValidateResult: string;

  loginValidateResult: string;

  constructor() {
    super('form', ['form']);
    this.passwordValidateResult = 'enter password';
    this.loginValidateResult = 'enter login';
    this.login = 'admin';
    this.password = 'admin';
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

    this.loginInput.element.addEventListener('input', () => {
      this.inputHandler(this.loginInput.element as HTMLInputElement, 'login', this.login, this.loginLabel.element);
    });
    this.passwordInput.element.addEventListener('input', () => {
      this.inputHandler(this.passwordInput.element as HTMLInputElement,
        'password', this.password, this.passwordLabel.element);
    });
    this.formLoginButton.element.addEventListener('click',
      () => this.loginButtonHandler());
  }

  inputHandler = (input: HTMLInputElement, inputName: string, correctInputValue: string,
    label: HTMLElement): void => {
    const validateResult = this.vaildate(input.value, inputName, correctInputValue);
    if (validateResult === '') {
      input.classList.add('input_green');
    } else {
      input.classList.remove('input_green');
    }
    if (input.value) {
      this.showLabel(label);
    } else {
      this.hideLabel(label);
    }
    if (inputName === 'login') {
      this.loginValidateResult = validateResult;
    } else if (inputName === 'password') {
      this.passwordValidateResult = validateResult;
    } else {
      throw Error('incorrect input name');
    }
  };

  vaildate = (inputValue: string, inputName: string, correctInputValue: string): string => {
    if (!inputValue) {
      return `enter ${inputName}`;
    } if (inputValue !== correctInputValue) {
      return `correct ${inputName} "${correctInputValue}"`;
    }
    return '';
  };

  changeReport = (loginField: string, passwordField: string): void => {
    (this.loginInput.element as HTMLInputElement).setCustomValidity(loginField);
    (this.passwordInput.element as HTMLInputElement).setCustomValidity(passwordField);
  };

  showLabel = (label: HTMLElement): void => {
    label.classList.remove('hidden');
  };

  hideLabel = (label: HTMLElement): void => {
    label.classList.add('hidden');
  };

  loginButtonHandler = (): void => {
    if (this.loginValidateResult === '' && this.passwordValidateResult === '') {
      this.changeHash();
    } else {
      this.changeReport(this.loginValidateResult, this.passwordValidateResult);
    }
  };

  changeHash = (): void => {
    window.location.hash = '#/admin-page/';
  };
}
