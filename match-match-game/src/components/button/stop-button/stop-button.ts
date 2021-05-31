import { indexDBAdd } from '../../../indexedDB2';
import { user } from '../../../user';
import { Button } from '../button';
import { StartButton } from '../start-button/start-button';
import './stop-button.css';

export class StopButton extends Button {
  constructor() {
    super('stop game', ['stop-button', 'hidden']);
  }

  buttonHandler() {
    super.buttonHandler();
    indexDBAdd(user.name, user.surname, user.email, user.point);
    new StartButton().element.classList.remove('hidden');
  }
}
