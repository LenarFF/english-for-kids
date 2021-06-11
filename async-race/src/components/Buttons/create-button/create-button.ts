import { Track } from "../../garage/racing-wrap/track/track";
import { Buttons } from "../buttons";

export class CreateButton extends Buttons {

  inputName: string
  inputColor: string

  constructor() {
    super('create');
    this.inputName = '';
    this.inputColor = 'black'
  }

  buttonHandler() {
    const name = document.getElementById('create-text') as HTMLInputElement;
    const color = document.getElementById('create-color') as HTMLInputElement;
    const racingWrap = document.querySelector('.racing-wrap');
    if (racingWrap && name && color) {
      const track = new Track(name.value, '', color.value)
      racingWrap.appendChild(track.element)
    }
  }
}