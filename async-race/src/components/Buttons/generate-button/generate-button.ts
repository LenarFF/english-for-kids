import { data } from '../../../data';
import { createCar } from '../../../server';
import { CarName } from '../../garage/racing-wrap/track/car-name/car-name';
import { Track } from '../../garage/racing-wrap/track/track';
import { Buttons } from '../buttons';
import { CreateButton } from '../create-button/create-button';

export class GenerateButton extends Buttons {
  track: Track;

  carName: CarName;

  createButton: CreateButton;

  constructor() {
    super('generate cars');

    this.createButton = new CreateButton();
    this.track = new Track();
    this.carName = new CarName();
  }

  buttonHandler() {
    super.buttonHandler();
    data.carCounter += 100;
    this.createButton.titleCountChange();

    for (let i = 0; i < 99; i++) {
      this.createButton.createGarage();
      const racingWrap = this.createButton.findLastRacingWrap();
      const color = this.paintCar();
      const name = `${this.carName.getRandomValue(
        this.carName.brands,
      )} ${this.carName.getRandomValue(this.carName.models)}`;
      if (racingWrap) {
        const track = new Track(name, '', color);
        data.id++;
        track.element.setAttribute('id', `${data.id}`);
        racingWrap.appendChild(track.element);
        createCar({
          name: `${name}`,
          color: `${color}`,
        });
      }
    }
  }

  paintCar = (): string => {
    const r = Math.round(255.0 * Math.random()).toString(16);
    const g = Math.round(255.0 * Math.random()).toString(16);
    const d = Math.round(255.0 * Math.random()).toString(16);
    return `#${r + g + d}`;
  };
}
