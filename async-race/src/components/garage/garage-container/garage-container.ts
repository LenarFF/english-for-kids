// ignore_for_file: @typescript-eslint/no-loop-func (WORKS)

import { data } from '../../../data';
import { getCars } from '../../../server';
import { CarType } from '../../../types';
import { BaseComponent } from '../../BaseComponent/BaseComponent';
import { RacingWrap } from '../racing-wrap/racing-wrap';
import { Track } from '../racing-wrap/track/track';

export class GarageContainer extends BaseComponent {
  racingWrap: RacingWrap;

  carsQuantity: number;

  constructor() {
    super('div', ['garage-container']);
    this.racingWrap = new RacingWrap();
    this.carsQuantity = 4;

    this.element.appendChild(this.racingWrap.element);
  }

  async tracksRender(items: CarType[]): Promise<void> {
    const racingWrapEl = document.querySelector('.racing-wrap') as HTMLElement;
    if (racingWrapEl) racingWrapEl.innerHTML = '';
    await this.getCarsQuantity();
    for (let i = 0; i < data.carsQuantityOnPage; i++) {
      if (!items[i]) break;
      const track = new Track(items[i].name, '', items[i].color);
      track.element.setAttribute('id', `${items[i].id}`);
      data.id = items[i].id;
      racingWrapEl.appendChild(track.element);
    }
  }

  async getCarsQuantity(): Promise<void> {
    const result = await getCars();
    if (result.count) this.carsQuantity = +result.count;
  }

  garageRender(): void {
    const main = async () => {
      const result = await getCars(data.pageCounter);
      this.tracksRender(result.items);
    };
    main();
  }
}
