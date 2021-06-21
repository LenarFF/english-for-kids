import { data } from '../../../data';
import { deleteCar, deleteWinner } from '../../../server';
import { Buttons } from '../button';

export class RemoveButton extends Buttons {
  constructor() {
    super('remove', ['selection-button']);
  }

  buttonHandler(): void {
    super.buttonHandler();
    const id = this.element.parentElement?.parentElement?.getAttribute('id');

    this.element.parentElement?.parentElement?.remove();
    data.carCounter -= 1;
    this.titleCountChange();
    if (id) {
      deleteCar(+id);
      deleteWinner(+id);
    }
  }

  titleCountChange = (): void => {
    const garageCounter = document.getElementById('garage');
    if (garageCounter) {
      garageCounter.innerHTML = `${data.carCounter}`;
    }
  };
}
