import { BaseComponent } from "../../BaseComponent/BaseComponent";
import { Track } from "./track/track";

export class  RacingWrap extends BaseComponent {

  track: Track

  constructor() {
    super('div', ['racing-wrap'])

    this.track = new Track()

    this.element.appendChild(this.track.element)
  }
}