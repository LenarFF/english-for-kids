import { BaseComponent } from "../../../BaseComponent/BaseComponent";
import { RemoveButton } from "../../../Buttons/remove-button/remove-button";
import { SelectButton } from "../../../Buttons/select-button/select-button";
import { StartButton } from "../../../Buttons/start-button/start-button";
import { StopButton } from "../../../Buttons/stop-button/stop-button";
import { Car } from "./car/car";
import { CarName } from "./car-name/car-name";
import './track.css'
import { Flag } from "./flag/flag";

export class Track extends BaseComponent {

  selectButton: SelectButton
  removeButton: RemoveButton
  carName: CarName
  stopButton: StopButton
  startButton: StartButton
  carSelectionWrap: BaseComponent
  carControlWrap: BaseComponent
  trackControlButtons: BaseComponent
  trackRace: BaseComponent
  car: Car
  flag: Flag

  constructor(brand: string = '', model: string = '', color: string = '') {
    super('div', ['track'])

    this.selectButton = new SelectButton()
    this.removeButton = new RemoveButton()
    this.stopButton = new StopButton()
    this.startButton = new StartButton()
    this.carName = new CarName(brand, model)
    this.car = new Car(color ? color : this.paintCar())
    this.flag = new Flag()

    this.trackControlButtons = new BaseComponent('div', ['track__control-buttons'])
    this.carSelectionWrap = new BaseComponent('div', ['track__selection-wrap'])
    this.carControlWrap = new BaseComponent('p', ['track__control-wrap'])
    this.trackRace = new BaseComponent('div', ['track__race'])

    this.carSelectionWrap.element.appendChild(this.selectButton.element)
    this.carSelectionWrap.element.appendChild(this.removeButton.element)
    this.carSelectionWrap.element.appendChild(this.carName.element)

    this.carControlWrap.element.appendChild(this.trackControlButtons.element)
    this.carControlWrap.element.appendChild(this.trackRace.element)

    this.trackRace.element.appendChild(this.car.element)
    this.trackRace.element.appendChild(this.flag.element)

    this.trackControlButtons.element.appendChild(this.startButton.element)
    this.trackControlButtons.element.appendChild(this.stopButton.element)

    this.element.appendChild(this.carSelectionWrap.element)
    this.element.appendChild(this.carControlWrap.element)

}

paintCar(): string {
  const r = Math.round(255.0*Math.random()).toString(16);
  const g=Math.round(255.0*Math.random()).toString(16);
  const d=Math.round(255.0*Math.random()).toString(16);
  return `#${r+g+d}`;
}

}
