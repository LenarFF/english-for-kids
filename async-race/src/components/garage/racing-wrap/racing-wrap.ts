import { BaseComponent } from "../../BaseComponent/BaseComponent";
import { Track } from "./track/track";

export class  RacingWrap extends BaseComponent {

  track: Track

  constructor(styles: string[] = []) {
    super('div', ['racing-wrap'])

    this.track = new Track()

    this.element.classList.add(...styles);
    this.element.appendChild(this.track.element)
    this.tracksRender()
  }

  tracksRender():void {
    for (let i = 0; i < 5; i++) {
      const track = new Track()
      this.element.appendChild(track.element)
    }
  }
}