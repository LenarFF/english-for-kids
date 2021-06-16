import { data } from '../../../data';
import { Buttons } from '../buttons';

export class GarageButton extends Buttons {
  constructor() {
    super('garage', ['garage-button']);
  }

  buttonHandler() {
    super.buttonHandler();
    document.querySelector('.garage-wrapper')?.classList.remove('hidden');
    document.querySelector('.winners-wrapper')?.classList.add('hidden');
    data.winnersPage = 1;
  }
}
