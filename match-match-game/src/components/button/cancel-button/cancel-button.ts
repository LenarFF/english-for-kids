

import { FormButton } from '../form-button/form-button';
import './cancel-button.css';

export class CancelButton extends FormButton {

  constructor() {
    super('cancel', ['cancel-button']);
  }

  buttonHandler() {
    super.buttonHandler();
    this.hiddenForm();
    this.clearInput();
  }


}