
import { Button } from '../button';
import './add-button.css';

export class AddButton extends Button {

  constructor() {
    super('add user', ['add-button']);
  }


  buttonHandler() {
    super.buttonHandler();
  }
}