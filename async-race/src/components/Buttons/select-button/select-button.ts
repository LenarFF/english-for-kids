import { Buttons } from '../Buttons';
import './select-button.css';

export class SelectButton extends Buttons {
  constructor() {
    super('select', ['selection-button']);
  }

  buttonHandler() {
    super.buttonHandler();
    const parent = this.element.parentElement as HTMLElement;
    if (parent !== null) {
      parent.parentElement?.classList.toggle('selected');
    }
  }
}
