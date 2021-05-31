
import { user } from '../../../user';
import { FormButton } from '../form-button/form-button';
import './add-button.css';

export class AddButton extends FormButton {
  name: HTMLInputElement;

  surname: HTMLInputElement;

  email: HTMLInputElement;

  constructor(name: HTMLInputElement, surname: HTMLInputElement, email: HTMLInputElement) {
    super('add user', ['add-button']);

    this.name = name;
    this.surname = surname;
    this.email = email;
    this.changeInput(name, surname, email);
  }

  buttonHandler() {
    super.buttonHandler();

    if (this.validate(this.name.value, this.surname.value, this.email.value)) {

      user.name = this.name.value;
      user.surname = this.surname.value;
      user.email = this.email.value;


      this.clearInput();
      this.hiddenForm();
      this.changeHeaderButton();

    } else {
      if (!this.validateName(this.name.value)) this.validateReport(this.name, 'name');
      if (!this.validateName(this.surname.value)) this.validateReport(this.surname, 'surname');
      if (!this.validateEmail(this.email.value)) this.validateReport(this.email, 'email');
    }
  }

  changeInput = (inputName: HTMLInputElement, inputSurname: HTMLInputElement, inputEmail: HTMLInputElement) => {
    inputName.oninput = () => {
      this.validate(inputName.value, inputSurname.value, inputEmail.value);
      this.addClass(inputName, this.validateName);
    };
    inputSurname.oninput = () => {
      this.validate(inputName.value, inputSurname.value, inputEmail.value);
      this.addClass(inputSurname, this.validateName);
    };
    inputEmail.oninput = () => {
      this.validate(inputName.value, inputSurname.value, inputEmail.value);
      this.addClass(inputEmail, this.validateEmail);
    };
  };

  validate = (inputNameValue: string, inputSurnameValue: string, inputEmailValue: string) => {
    if (this.validateName(inputNameValue) && this.validateName(inputSurnameValue) && this.validateEmail(inputEmailValue)) {
      this.element.classList.add('box-shadow');
      return true;
    }
    this.element.classList.remove('box-shadow');

    return false;
  };

  validateName = (stringForValidate: string) => {
    const regexpName = /^([a-zа-яё]+)$/i;
    return regexpName.test(stringForValidate) && stringForValidate.length < 30;
  };

  validateEmail = (emailForValidate: string) => {
    const regexpEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim;
    return regexpEmail.test(emailForValidate) && emailForValidate.length < 30;
  };

  addClass = (inputName: HTMLInputElement, validateFunction: any) => {
    if (validateFunction(inputName.value)) {
      inputName.classList.add('input_success');
      inputName.classList.remove('input_error');
    } else {
      inputName.classList.remove('input_success');
      inputName.classList.add('input_error');
    }
  };

  changeHeaderButton = () => {
    (document.querySelector('.register-button') as HTMLElement).classList.add('hidden');
    (document.querySelector('.start-button') as HTMLElement).classList.remove('hidden');
  };

  validateReport = (inputElement: HTMLInputElement, inputName: string) => {
    inputElement.classList.add('input_error');

    if (inputElement.value) {
      if (inputName === 'email') {
        inputElement.setCustomValidity('Email address must contain @');
      } else {
        inputElement.setCustomValidity(
          `The ${inputName} must be only letters and no longer than 30 characters`,
        );
      }
    } else {
      inputElement.setCustomValidity(`Enter your ${inputName}`);
    }
    setTimeout(() => {
      inputElement.setCustomValidity('');
    }, 3000);

    inputElement.reportValidity();
  };




}
