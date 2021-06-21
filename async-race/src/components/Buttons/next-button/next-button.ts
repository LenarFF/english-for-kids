import { data } from '../../../data';
import { GarageContainer } from '../../garage/garage-container/garage-container';
import { Buttons } from '../button';

export class NextButton extends Buttons {
  garageContainer: GarageContainer;

  constructor() {
    super('next');
    this.garageContainer = new GarageContainer();
  }

  changePageCount = (): void => {
    const page = document.getElementById('page');
    if (page) page.innerHTML = `${data.pageCounter}`;
  };

  buttonHandler(): void {
    super.buttonHandler();
    if (data.carCounter <= data.pageCounter * data.carsQuantityOnPage) return;
    data.pageCounter++;
    this.garageContainer.garageRender();
    this.changePageCount();
  }
}
