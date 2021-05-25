import { BaseComponent } from '../base-component';
import { FormWrap } from './form-element/form-element';
import './register-form.css';

export class RegisterForm extends BaseComponent {
  formHeader: BaseComponent;

  formWrap: FormWrap;

  userWrap: BaseComponent;

  photoWrap: BaseComponent;

  constructor() {
    super('div', ['register-form', 'hidden']);

    this.formHeader = new BaseComponent('h1', ['form__header']);
    this.formWrap = new FormWrap();
    this.userWrap = new BaseComponent('div', ['user-wrap']);
    this.photoWrap = new BaseComponent('div', ['photo-wrap']);

    this.element.appendChild(this.formHeader.element);
    this.element.appendChild(this.userWrap.element);

    this.userWrap.element.appendChild(this.formWrap.element);
    this.userWrap.element.appendChild(this.photoWrap.element as HTMLElement);

    this.formHeader.element.innerHTML = 'Register new Player';
  }
}
