import { stopEngine } from '../../../server';
import { Buttons } from '../button';

export class StopButton extends Buttons {
  constructor() {
    super('stop', ['stop-button']);
  }

  buttonHandler() {
    super.buttonHandler();
    const startButton = this.element.previousSibling as HTMLButtonElement;
    const car = this.element.parentElement?.nextElementSibling?.querySelector(
      '.track__car-wrap',
    ) as HTMLElement;
    const id = this.element.parentElement?.parentElement?.parentElement?.getAttribute('id');
    if (id) this.stopCar(car, id);
    this.deactivateButton(this.element as HTMLButtonElement);
    this.activateButton(startButton);
    console.log(startButton);
  }

  stopCar = (car: HTMLElement, id: string) => {
    car.style.transitionDuration = '0ms';
    car.style.left = '0';
    if (id) stopEngine(+id);
  };
}
