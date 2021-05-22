import { RegisterForm } from '../../register-form/register-form';
import { Button } from '../button';
import './register-button.css';

export class RegisterButton extends Button {

  constructor() {
    super('register new player', ['register-button']);
  }


  buttonHandler() {
    super.buttonHandler();
  }
}