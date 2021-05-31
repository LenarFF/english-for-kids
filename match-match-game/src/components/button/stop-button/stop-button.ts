
import { indexDBAdd } from '../../../indexedDB2';
import { settings } from '../../../settings';
import { user } from '../../../user';
import { Card } from '../../card/card';
import { GameSettings } from '../../game-settings/game-settings';
import { Game } from '../../game/game';
import { AddButton } from '../add-button/add-button';
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
    (new StartButton).element.classList.remove('hidden');

  }
}
