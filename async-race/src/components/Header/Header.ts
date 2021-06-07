import { BaseComponent } from "../BaseComponent/BaseComponent";
import { Buttons } from "../Buttons/Buttons";

export class  Header extends BaseComponent {
garage: Buttons
winners: Buttons
  constructor() {
    super('header', ['header'])
    this.garage = new Buttons('garage', ['garage-button'])
    this.winners = new Buttons('winners', ['winners-button'])

    this.element.appendChild(this.garage.element)
    this.element.appendChild(this.winners.element)
  }
}