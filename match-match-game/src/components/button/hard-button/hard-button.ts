import { settings } from '../../../settings';
import { Button } from '../button';

export class HardButton extends Button {
  constructor() {
    super('Hard', ['difficulty__button']);
  }

  buttonHandler(): void {
    super.buttonHandler();
    settings.complexity = 36;
  }
}
