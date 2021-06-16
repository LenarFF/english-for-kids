import { driveEngine, getCar, startEngine } from '../../../server';
import { Buttons } from '../buttons';

export class StartButton extends Buttons {
  constructor() {
    super('start');
  }

  buttonHandler() {
    super.buttonHandler();
    const car = this.element.parentElement?.nextElementSibling?.querySelector(
      '.track__car-wrap',
    ) as HTMLElement;
    const id = this.element.parentElement?.parentElement?.parentElement?.getAttribute('id');
    if (id) console.log(this.startCar(car, id), 'finish');
  }

  async startCar(car: HTMLElement, id: string) {
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
  }
}
