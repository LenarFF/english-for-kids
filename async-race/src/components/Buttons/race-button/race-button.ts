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
    let recordTime = 1000000;
    let recordID = '';
    const activePage = document.querySelector('.active');
    if (activePage) {
      const cars:NodeListOf<HTMLElement> = activePage.querySelectorAll('.track__car-wrap');
      cars.forEach(car => {
        const id = car.parentElement?.parentElement?.parentElement?.getAttribute('id');
        if (id) {
        const main = async () => {
          const result: any = await this.startButton.startCar(car, id);
          const resultTime = result.time;
          console.log(result.carName)
          if(result.response === true && resultTime < recordTime) {
            recordTime = resultTime;
            recordID = id;
            console.log(recordTime, console.log(recordTime, recordID));
            this.showWinner(result.carName, recordTime)
          }
        }
        main()
      }

      })
    }



  }
  showWinner(name:string, time: number) {
    document.querySelector('.winner-window')?.classList.remove('hidden');
    const winner = document.getElementById('winner');
    const winnerTime = document.getElementById('time');
    if(winner && winnerTime) {
      winner.innerHTML = `${name}`;
      winnerTime.innerHTML = `${Math.ceil(time)}`
    }

  }
}