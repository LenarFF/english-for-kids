import { Buttons } from "../buttons";
import { StartButton } from "../start-button/start-button";

export class RaceButton extends Buttons {
  startButton: StartButton;
  constructor() {
    super('race')

    this.startButton = new StartButton();

  }

  buttonHandler() {
    super.buttonHandler();
    const activePage = document.querySelector('.active');
    if (activePage) {
      const cars:NodeListOf<HTMLElement> = activePage.querySelectorAll('.track__car-wrap');
      cars.forEach(car => {
        const id = car.parentElement?.parentElement?.parentElement?.getAttribute('id');
        if (id) this.startButton.startCar(car, id)
      })
    }
    // console.log('finish')

  }
}