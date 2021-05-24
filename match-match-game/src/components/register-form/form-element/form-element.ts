import { BaseComponent } from '../../base-component';
import { AddButton } from '../../button/add-button/add-button';
import { CancelButton } from '../../button/cancel-button/cancel-button';
import { Input, Label } from '../../input/input';
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
  labelEmail: Label;

  inputName: Input;
  inputSurname: Input;
  inputEmail: Input;

  buttonWrap: BaseComponent;

  addButton: AddButton;
  cancelButton: CancelButton;

  constructor() {
    super('form', ['formWrap']);

    this.labelName = new Label('name', 'First Name');
    this.labelSurname = new Label('surname', 'Last Name');
    this.labelEmail = new Label('email', 'Email');

    this.inputName = new Input('text', '...', 'name');
    this.inputSurname = new Input('text', '...', 'surname');
    this.inputEmail = new Input('email', '...', 'email');

    this.buttonWrap = new BaseComponent('div', ['button-wrap']);

    this.addButton = new AddButton(this.inputName.element as HTMLInputElement,
       this.inputSurname.element as HTMLInputElement,
       this.inputEmail.element as HTMLInputElement);
       
    this.cancelButton = new CancelButton();

    this.element.appendChild(this.labelName.element as HTMLLabelElement);
    this.element.appendChild(this.inputName.element as HTMLInputElement);

    this.element.appendChild(this.labelSurname.element as HTMLLabelElement);
    this.element.appendChild(this.inputSurname.element as HTMLInputElement);

    this.element.appendChild(this.labelEmail.element as HTMLLabelElement);
    this.element.appendChild(this.inputEmail.element as HTMLInputElement);

    this.element.appendChild(this.buttonWrap.element as HTMLElement);

    this.buttonWrap.element.appendChild(this.addButton.element as HTMLButtonElement);
    this.buttonWrap.element.appendChild(this.cancelButton.element as HTMLButtonElement);

    this.addButton.element.classList.remove('box-shadow')

  }

}