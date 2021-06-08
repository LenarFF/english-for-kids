import { settings } from '../../../settings';
import { Button } from '../button';
import './start-button.css';

export class StartButton extends Button {
  constructor() {
    super('start game', ['start-button', 'hidden']);
  }

  buttonHandler():void {
    super.buttonHandler();

    settings.startGame = true;

    document.querySelectorAll('.card').forEach((card) => {
      card.classList.remove('.flipped');
    });
  }
}
