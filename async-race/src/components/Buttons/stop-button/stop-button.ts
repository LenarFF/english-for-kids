import { getCar, getCars, stopEngine } from '../../../server';
import { Buttons } from '../buttons';

export class StopButton extends Buttons {
  constructor() {
    super('stop');
  }

  buttonHandler() {
    super.buttonHandler();
    const car = this.element.parentElement?.nextElementSibling?.querySelector(
      '.track__car-wrap',
    ) as HTMLElement;
    const id = this.element.parentElement?.parentElement?.parentElement?.getAttribute('id');
    if (id) this.stopCar(car, id);
  }

  stopCar(car: HTMLElement, id: string) {
    car.style.transitionDuration = '0ms';
    car.style.left = '0';
    if (id) stopEngine(+id);
  }
}
