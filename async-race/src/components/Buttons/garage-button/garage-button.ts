import { data } from '../../../data';
import { Buttons } from '../button';

export class GarageButton extends Buttons {
  constructor() {
    super('garage', ['garage-button']);
  }

  buttonHandler(): void {
    super.buttonHandler();
    document.querySelector('.garage-wrapper')?.classList.remove('hidden');
    document.querySelector('.winners-wrapper')?.classList.add('hidden');
    data.winnersPage = 1;
  }
}
