import { Buttons } from '../button';
import { StopButton } from '../stop-button/stop-button';

export class ResetButton extends Buttons {
  stopButton: StopButton;

  constructor() {
    super('reset', ['reset-button']);

    this.stopButton = new StopButton();
  }

  buttonHandler(): void {
    super.buttonHandler();

    const activePage = document.querySelector('.racing-wrap_active');
    const winnerWindow = document.querySelector('.winner-window');
    const raceButton = document.querySelector('.race-button') as HTMLButtonElement;

    if (activePage) {
      const cars: NodeListOf<HTMLElement> = activePage.querySelectorAll('.track__car-wrap');
      cars.forEach((car) => {
        const id = car.parentElement?.parentElement?.parentElement?.getAttribute('id');
        if (id) this.stopButton.stopCar(car, id);
      });
    }

    if (winnerWindow) winnerWindow.classList.add('hidden');
    this.deactivateButton(this.element as HTMLButtonElement);
    if (raceButton) this.activateButton(raceButton);
    if (activePage) {
      const startButtons = activePage.querySelectorAll('.start-button');
      startButtons.forEach((startButton) => this.activateButton(startButton as HTMLButtonElement));
    }
  }
}
