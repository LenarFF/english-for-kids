import { data } from "../../data"
import { BaseComponent } from "../BaseComponent/BaseComponent"
import { Form } from "../form/form"
import { Title } from "../title/title"
import { ControlButtons } from "./control-buttons/control-buttons"
import { RacingWrap } from "./racing-wrap/racing-wrap"

export class Garage extends BaseComponent {

  createForm: Form
  updateForm: Form
  controlButtons: ControlButtons
  title: Title
  subtitle: Title
  racingWrap: RacingWrap
  garageContainer: BaseComponent

  constructor() {
    super('div', ['garage-wrapper'])

    this.createForm = new Form('create')
    this.updateForm = new Form('update')

    this.controlButtons = new ControlButtons()

    this.title = new Title('Garage', 'garage', 6)
    this.subtitle = new Title('Page', 'page', 1)

    this.garageContainer = new BaseComponent('div', ['garage-container'])
    this.racingWrap = new RacingWrap()

    this.element.appendChild(this.createForm.element)
    this.element.appendChild(this.updateForm.element)
    this.element.appendChild(this.controlButtons.element)
    this.element.appendChild(this.title.element)
    this.element.appendChild(this.subtitle.element)
    this.element.appendChild(this.garageContainer.element)
    this.garageContainer.element.appendChild(this.racingWrap.element)

  }
}