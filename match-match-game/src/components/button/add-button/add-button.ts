
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
      this.changeHeaderButton();
    } else {
      if (!this.validateName(this.name.value)) this.name.classList.add('input_error');
      if (!this.validateName(this.surname.value)) this.surname.classList.add('input_error');
      if (!this.validateEmail(this.email.value)) this.email.classList.add('input_error');
    }
  }

  changeInput(name: HTMLInputElement, surname: HTMLInputElement, email: HTMLInputElement) {
    name.oninput = () => {
    this.validate(name.value, surname.value, email.value);
    this.addClass(name, this.validateName);
  };
    surname.oninput = () => {
      this.validate(name.value, surname.value, email.value);
      this.addClass(surname, this.validateName);
    }
    email.oninput = () => {
      this.validate(name.value, surname.value, email.value);
      this.addClass(email, this.validateEmail);
  }
}

  validate(name: string, surname: string, email: string) {

    if ( this.validateName(name)
         && this.validateName(surname)
         && this.validateEmail(email) ) {
          this.element.classList.add('box-shadow')
          return true
         } else {
          this.element.classList.remove('box-shadow');

         }
         return false
  }

  validateName(name: string) {
    const regexpName: RegExp = /^([a-zа-яё]+)$/i;
    return regexpName.test(name) && name.length < 30
  }

  validateEmail(email: string) {
    const regexpEmail: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm;
    return regexpEmail.test(email) && email.length < 30
  }

  addClass(inputName: HTMLInputElement, validateFunction: Function) {
    if (validateFunction(inputName.value)) {
      inputName.classList.add('input_success')
    } else {
      inputName.classList.remove('input_success');
      inputName.classList.add('input_error')
    }
  }

  changeHeaderButton() {
    (document.querySelector('.register-button') as HTMLElement).classList.add('hidden');
    (document.querySelector('.start-button') as HTMLElement).classList.remove('hidden');

  }

}