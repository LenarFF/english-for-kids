
import { indexdb } from '../../../indexedDB'
import { FormButton } from '../form-button/form-button';
import './add-button.css';

export class AddButton extends FormButton {

  name: HTMLInputElement;
  surname: HTMLInputElement;
  email: HTMLInputElement;

  constructor (name: HTMLInputElement, surname: HTMLInputElement, email: HTMLInputElement,) {
    super('add user', ['add-button']);

    this.name = name;
    this.surname = surname;
    this.email = email;
    this.changeInput(name, surname, email)
  }

  buttonHandler() {
    super.buttonHandler();

    if(this.validate(this.name.value, this.surname.value, this.email.value)) {
      indexdb(this.name.value, this.surname.value, this.email.value);
      this.clearInput();
      this.hiddenForm();
    }
  }

  changeInput(name: HTMLInputElement, surname: HTMLInputElement, email: HTMLInputElement) {
    name.oninput = () => this.validate(name.value, surname.value, email.value);
    surname.oninput = () => this.validate(name.value, surname.value, email.value);
    email.oninput = () => this.validate(name.value, surname.value, email.value);
  }

  validate(name: string, surname: string, email: string) {
    if ( this.validateName(name)
         && this.validateName(surname)
         && this.validateEmail(email) ) {
          this.element.classList.add('box-shadow')
          return true
         } else {
          this.element.classList.remove('box-shadow')
         }
  }

  validateName(name: string) {
    const regexpName: RegExp = /[^-\s0-9`~!@#№$%^&*()-_=+\\|\[\]{};:',.<>\/?]+$/;
    return regexpName.test(name)
  }

  validateEmail(email: string) {
    const regexpEmail: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm;
    return regexpEmail.test(email)
  }

}