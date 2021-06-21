import { data } from '../../../data';
import { createCar } from '../../../server';
import { GarageContainer } from '../../garage/garage-container/garage-container';
import { CarName } from '../../garage/racing-wrap/track/car-name/car-name';
import { Track } from '../../garage/racing-wrap/track/track';
import { Buttons } from '../button';
import { CreateButton } from '../create-button/create-button';

export class GenerateButton extends Buttons {
  track: Track;

  carName: CarName;

  createButton: CreateButton;

  garageContainer: GarageContainer;

  constructor() {
    super('generate cars');

    this.createButton = new CreateButton();
    this.track = new Track();
    this.carName = new CarName();
    this.garageContainer = new GarageContainer();
  }

  buttonHandler(): void {
    super.buttonHandler();
    data.carCounter += 100;
    this.createButton.titleCountChange();

    for (let i = 0; i < 99; i++) {
      const color = this.paintCar();
      const name = `${this.carName.getRandomValue(this.carName.brands)}
      ${this.carName.getRandomValue(this.carName.models)}`;
      createCar({
        name: `${name}`,
        color: `${color}`,
      });
    }
    this.garageContainer.garageRender();
  }

  paintCar = (): string => {
    const r = Math.round(255.0 * Math.random()).toString(16);
    const g = Math.round(255.0 * Math.random()).toString(16);
    const d = Math.round(255.0 * Math.random()).toString(16);
    return `#${r + g + d}`;
  };
}
