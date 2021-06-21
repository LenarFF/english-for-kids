import { Buttons } from '../button';
import './select-button.css';

export class SelectButton extends Buttons {
  constructor() {
    super('select', ['selection-button']);
  }

  buttonHandler(): void {
    super.buttonHandler();
    const parent = this.element.parentElement as HTMLElement;
    if (parent !== null) {
      parent.parentElement?.classList.toggle('selected');
    }
  }
}
