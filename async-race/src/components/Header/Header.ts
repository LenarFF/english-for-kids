import { BaseComponent } from "../BaseComponent/BaseComponent";
import { GarageButton } from "../Buttons/garage-button/garage-button";
import { WinnersButton } from "../Buttons/winners-button/winners-button";
import './header.css'

export class  Header extends BaseComponent {
garage: GarageButton
winners: WinnersButton
  constructor() {
    super('header', ['header'])
    this.garage = new GarageButton()
    this.winners = new WinnersButton()

    this.element.appendChild(this.garage.element)
    this.element.appendChild(this.winners.element)
  }
}