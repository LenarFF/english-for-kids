import { settings } from '../../../settings';
import { Button } from '../button';

export class EasyButton extends Button {
  constructor() {
    super('Easy', ['difficulty__button']);
  }

  buttonHandler(): void {
    super.buttonHandler();
    settings.complexity = 16;
  }
}
