import { BaseComponent } from '../../base-component';
import { Label } from '../../input/input';
import './form-element.css'



export class FormHeader extends BaseComponent {

  constructor() {
    super('h1', ['form__header']);
    this.element.innerHTML = 'Register new Player';

  }

}

export class FormWrap extends BaseComponent {

  labelName: Label;
  labelSurname: Label;
  email: Label;

  constructor() {
    super('form', ['formWrap']);
    this.labelName = new Label('name', 'First Name');
    this.labelSurname = new Label('surname', 'Last Name');
    this.email = new Label('email', 'Email');
    this.element.appendChild(this.labelName.element as HTMLLabelElement);
    this.element.appendChild(this.labelSurname.element as HTMLLabelElement);
    this.element.appendChild(this.email.element as HTMLLabelElement);

  }

}