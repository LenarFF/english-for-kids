import { data } from '../../../data';
import { createCar } from '../../../server';
import { CarName } from '../../garage/racing-wrap/track/car-name/car-name';
import { Track } from '../../garage/racing-wrap/track/track';
import { Buttons } from '../button';

export class CreateButton extends Buttons {
  carName: CarName;

  constructor() {
    super('create');
    this.carName = new CarName();
  }

  buttonHandler = (): void => {
    super.buttonHandler();
    data.carCounter += 1;
    this.titleCountChange();
    this.createTrack();
  };

  createTrack(): void {
    const name = document.getElementById('create-text') as HTMLInputElement;
    const color = document.getElementById('create-color') as HTMLInputElement;
    const racingWrap = document.querySelector('.racing-wrap') as HTMLElement;

    if (name && color) {
      const carBrandModel = name.value
        ? name.value
        : `${this.carName.getRandomValue(this.carName.brands)} ${this.carName.getRandomValue(
          this.carName.models,
        )}`;

      createCar({
        name: `${carBrandModel}`,
        color: `${color.value}`,
      });

      if (data.carCounter > 7) return;
      const track = new Track(carBrandModel, '', color.value);
      data.id++;
      track.element.setAttribute('id', `${data.id}`);

      racingWrap.appendChild(track.element);
    }
  }

  tracksCount = (): number => {
    const racingWraps: NodeListOf<Element> = document.querySelectorAll('.racing-wrap');
    const lastRacingWrap = racingWraps[racingWraps.length - 1];
    const tracks: NodeListOf<Element> = lastRacingWrap.querySelectorAll('.track');
    if (tracks) {
      return tracks.length;
    }
    return 0;
  };

  titleCountChange = (): void => {
    const garageCounter = document.getElementById('garage');
    if (garageCounter) {
      garageCounter.innerHTML = `${data.carCounter}`;
    }
  };
}
