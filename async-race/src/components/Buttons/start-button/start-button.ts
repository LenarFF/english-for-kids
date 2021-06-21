import { driveEngine, getCar, startEngine } from '../../../server';
import { Buttons } from '../button';

export class StartButton extends Buttons {
  constructor() {
    super('start', ['start-button']);
  }

  buttonHandler(): void {
    super.buttonHandler();

    const stopButton = this.element.nextSibling as HTMLButtonElement;
    const raceButton = document.querySelector('.race-button') as HTMLButtonElement;
    const resetButton = document.querySelector('.reset-button') as HTMLButtonElement;
    const car = this.element.parentElement?.nextElementSibling?.querySelector(
      '.track__car-wrap',
    ) as HTMLElement;
    const id = this.element.parentElement?.parentElement?.parentElement?.getAttribute('id');
    if (id) this.startCar(car, id);
    this.deactivateButton(this.element as HTMLButtonElement);
    this.activateButton(stopButton);
    this.deactivateButton(raceButton);
    this.activateButton(resetButton);
  }

  startCar = async (car: HTMLElement, id: string): Promise<{ response: boolean; time: number; carName: string; }> => {
    let response = true;
    let time = 0;
    let carName = '';
    if (car) {
      const main = async () => {
        const result = await startEngine(+id);
        const carData = await getCar(+id);
        carName = carData.name;
        const startTime = new Date();
        const { distance } = result;
        const { velocity } = result;
        time = distance / velocity;
        car.style.transitionDuration = `${time}ms`;
        const trackLength = document.documentElement.clientWidth - 250;
        car.style.left = `${trackLength}px`;
        const driveResponse = await driveEngine(+id);
        if (driveResponse.success === false) {
          const breakTime = new Date();
          const newTime = +breakTime - +startTime;
          const newTrackLength = (newTime / time) * trackLength;
          car.style.left = `${newTrackLength - 50}px`;
        }
        response = driveResponse.success;
      };
      await main();
    }

    return { response, time, carName };
  };
}
