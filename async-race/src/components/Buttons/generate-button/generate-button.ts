import { data } from "../../../data";
import { Track } from "../../garage/racing-wrap/track/track";
import { Buttons } from "../buttons";
import { CreateButton } from "../create-button/create-button";

export class GenerateButton extends Buttons {

  createButton: CreateButton
  constructor() {
    super('generate cars');
    this.createButton = new CreateButton()

  }

  buttonHandler() {
    super.buttonHandler();
    data.carCounter += 100;
    this.createButton.titleCountChange();

    for (let i = 0; i < 99; i++) {
    this.createButton.createGarage();
      const racingWrap = this.createButton.findLastRacingWrap();
      if (racingWrap) {
        const track = new Track()
        racingWrap.appendChild(track.element)
    }
  }
}
}