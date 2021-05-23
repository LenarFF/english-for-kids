
import { Button } from '../button';
import './cancel-button.css';

export class CancelButton extends Button {

  constructor() {
    super('cancel', ['cancel-button']);
  }


  buttonHandler() {
    super.buttonHandler();
  }
}