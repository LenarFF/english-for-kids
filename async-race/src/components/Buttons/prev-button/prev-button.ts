import { data } from '../../../data';
import { GarageContainer } from '../../garage/garage-container/garage-container';
import { Buttons } from '../button';
import { NextButton } from '../next-button/next-button';

export class PrevButton extends Buttons {
  nextButton: NextButton;

  garageContainer: GarageContainer;

  constructor() {
    super('prev');
    this.nextButton = new NextButton();
    this.garageContainer = new GarageContainer();
  }

  buttonHandler(): void {
    super.buttonHandler();
    if (data.pageCounter === 1) return;
    data.pageCounter--;
    this.garageContainer.garageRender();
    this.nextButton.changePageCount();
  }
}
