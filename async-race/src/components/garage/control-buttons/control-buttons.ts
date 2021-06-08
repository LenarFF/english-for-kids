import { BaseComponent } from "../../BaseComponent/BaseComponent";
import { GenerateButton } from "../../Buttons/generate-button/generate-button";
import { RaceButton } from "../../Buttons/race-button/race-button";
import { ResetButton } from "../../Buttons/reset-button/reset-button";

export class ControlButtons extends BaseComponent {

  raceButton: RaceButton
  resetButton: ResetButton
  generateButton: GenerateButton

  constructor() {
    super('div', ['control-buttons'])

    this.raceButton = new RaceButton()
    this.resetButton = new ResetButton()
    this.generateButton = new GenerateButton()

    this.element.appendChild(this.raceButton.element)
    this.element.appendChild(this.resetButton.element)
    this.element.appendChild(this.generateButton.element)
  }
}