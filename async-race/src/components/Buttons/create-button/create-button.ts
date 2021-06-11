import { BaseComponent } from "../../BaseComponent/BaseComponent";
import { Track } from "../../garage/racing-wrap/track/track";
import { Buttons } from "../buttons";

export class CreateButton extends Buttons {



  constructor() {
    super('create');

  }

  buttonHandler() {
    this.createGarage();
    const name = document.getElementById('create-text') as HTMLInputElement;
    const color = document.getElementById('create-color') as HTMLInputElement;
    const racingWrap = this.findLastRacingWrap();
    if (racingWrap && name && color) {
      const track = new Track(name.value, '', color.value)
      racingWrap.appendChild(track.element)
    }
  }

  createGarage() {
    if (this.tracksCount() >= 7) {
    const newRacingWrap = new BaseComponent('div', ['racing-wrap', 'hidden']);
    const garageContainer = document.querySelector('.garage-container');
    if(garageContainer) {
      garageContainer.appendChild(newRacingWrap.element)
    }
    }
  }

  tracksCount(): number {
    const racingWraps: NodeListOf<Element> = document.querySelectorAll('.racing-wrap');
    const lastRacingWrap = racingWraps[racingWraps.length - 1];
    const tracks: NodeListOf<Element> = lastRacingWrap.querySelectorAll('.track');
    if(tracks) {
      return tracks.length
    } else {
      return 0
    }
  }

  findLastRacingWrap(): Element {
    const racingWraps: NodeListOf<Element> = document.querySelectorAll('.racing-wrap');
    return racingWraps[racingWraps.length - 1];
  }
}