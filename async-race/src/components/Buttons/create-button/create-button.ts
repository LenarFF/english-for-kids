import { data } from '../../../data';
import { createCar } from '../../../server';
import { BaseComponent } from '../../BaseComponent/BaseComponent';
import { CarName } from '../../garage/racing-wrap/track/car-name/car-name';
import { Track } from '../../garage/racing-wrap/track/track';
import { Buttons } from '../button';

export class CreateButton extends Buttons {
  carName: CarName;

  constructor() {
    super('create');
    this.carName = new CarName();
  }

  buttonHandler = () => {
    super.buttonHandler();
    data.carCounter += 1;
    this.titleCountChange();
    this.createGarage();
    this.createTrack();
  };

  createTrack() {
    const name = document.getElementById('create-text') as HTMLInputElement;
    const color = document.getElementById('create-color') as HTMLInputElement;
    const racingWrap = this.findLastRacingWrap();

    if (racingWrap && name && color) {
      const carBrandModel = name.value
        ? name.value
        : `${this.carName.getRandomValue(this.carName.brands)} ${this.carName.getRandomValue(
          this.carName.models,
        )}`;
      const track = new Track(carBrandModel, '', color.value);
      data.id++;
      track.element.setAttribute('id', `${data.id}`);

      racingWrap.appendChild(track.element);
      createCar({
        name: `${carBrandModel}`,
        color: `${color.value}`,
      });
    }
  }

  createGarage() {
    if (this.tracksCount() >= 7) {
      const newRacingWrap = new BaseComponent('div', ['racing-wrap', 'hidden']);
      const garageContainer = document.querySelector('.garage-container');
      if (garageContainer) {
        garageContainer.appendChild(newRacingWrap.element);
      }
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

  findLastRacingWrap = (): Element => {
    const racingWraps: NodeListOf<Element> = document.querySelectorAll('.racing-wrap');
    return racingWraps[racingWraps.length - 1];
  };

  titleCountChange = () => {
    const garageCounter = document.getElementById('garage');
    if (garageCounter) {
      garageCounter.innerHTML = `${data.carCounter}`;
    }
  };
}
