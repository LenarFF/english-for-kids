// ignore_for_file: @typescript-eslint/no-loop-func (WORKS)

import { data } from '../../../data';
import { getCars } from '../../../server';
import { BaseComponent } from '../../BaseComponent/BaseComponent';
import { CreateButton } from '../../Buttons/create-button/create-button';
import { RacingWrap } from '../racing-wrap/racing-wrap';
import { Track } from '../racing-wrap/track/track';

export class GarageContainer extends BaseComponent {
  racingWrap: RacingWrap;

  carsQuantity: number;

  createButton: CreateButton;

  constructor() {
    super('div', ['garage-container']);
    this.racingWrap = new RacingWrap(['racing-wrap_active']);

    this.createButton = new CreateButton();
    this.carsQuantity = 4;

    this.element.appendChild(this.racingWrap.element);
    this.tracksRender();
  }

  async tracksRender(): Promise<void> {
    await this.getCarsQuantity();
    let racingWrapEL = this.racingWrap.element;
    for (let i = 0; i < this.carsQuantity; i++) {
      const main = async () => {
        const result = await getCars();
        const track = new Track(result.items[i].name, '', result.items[i].color);
        track.element.setAttribute('id', result.items[i].id);
        data.id = result.items[i].id;
        racingWrapEL.appendChild(track.element);
        if ((i + 1) % data.carsQuantityOnPage === 0) {
          const newRacingWrap = new RacingWrap(['hidden']);
          this.element.appendChild(newRacingWrap.element);
          racingWrapEL = newRacingWrap.element;
        }
      };
      main();
    }
  }

  async getCarsQuantity(): Promise<void> {
    const result = await getCars();
    if (result.count) this.carsQuantity = +result.count;
  }
}
