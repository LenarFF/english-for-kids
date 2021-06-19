import { saveWinner } from '../../../server';
import { Buttons } from '../button';
import { StartButton } from '../start-button/start-button';

export class RaceButton extends Buttons {
  startButton: StartButton;

  constructor() {
    super('race', ['race-button']);

    this.startButton = new StartButton();
  }

  buttonHandler() {
    super.buttonHandler();
    let recordTime = 1000000;
    let recordID = 0;
    const activePage = document.querySelector('.racing-wrap_active');
    const resetButton = document.querySelector('.reset-button') as HTMLButtonElement;

    if (activePage) {
      const cars: NodeListOf<HTMLElement> = activePage.querySelectorAll('.track__car-wrap');
      cars.forEach((car) => {
        const id = car.parentElement?.parentElement?.parentElement?.getAttribute('id');
        if (id) {
          const main = async () => {
            const result = await this.startButton.startCar(car, id);
            const resultTime = result.time;
            if (result.response === true && resultTime < recordTime) {
              recordTime = resultTime / 1000;
              recordID = +id;
              console.log(recordTime, recordTime, recordID);

              saveWinner({ id: recordID, time: recordTime });
              this.showWinner(result.carName, recordTime);
            }
          };
          main();
        }
      });
    }
    this.deactivateButton(this.element as HTMLButtonElement);
    if (resetButton) this.activateButton(resetButton);
    if (activePage) {
      const startButtons = activePage.querySelectorAll('.start-button');
      startButtons.forEach((startButton) => this.deactivateButton(startButton as HTMLButtonElement));
    }
  }

  showWinner = (name: string, time: number) => {
    document.querySelector('.winner-window')?.classList.remove('hidden');
    const winner = document.getElementById('winner');
    const winnerTime = document.getElementById('time');
    if (winner && winnerTime) {
      winner.innerHTML = `${name}`;
      winnerTime.innerHTML = `${Math.ceil(time)}`;
    }
  };
}
