import { settings } from '../../../settings';
import { Button } from '../button';

export class EasyButton extends Button {
  constructor() {
    super('Easy', ['difficulty__button']);
  }

  buttonHandler() {
    super.buttonHandler();
    settings.complexity = 16;
    console.log(settings.complexity);
  }
}
