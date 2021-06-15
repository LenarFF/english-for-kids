import { Buttons } from "../buttons";
import { StopButton } from "../stop-button/stop-button";

export class ResetButton extends Buttons {

  stopButton: StopButton
  constructor() {
    super('reset')

    this.stopButton = new StopButton()
  }
  buttonHandler() {
    super.buttonHandler();

    const activePage = document.querySelector('.active');

    if (activePage) {
      const cars:NodeListOf<HTMLElement> = activePage.querySelectorAll('.track__car-wrap');
      cars.forEach(car => {
        const id = car.parentElement?.parentElement?.parentElement?.getAttribute('id');
        if (id) this.stopButton.stopCar(car, id)
      })
    }


  }
}