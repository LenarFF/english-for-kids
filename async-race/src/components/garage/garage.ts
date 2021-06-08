import { BaseComponent } from "../BaseComponent/BaseComponent"
import { Form } from "../form/form"
import { ControlButtons } from "./control-buttons/control-buttons"

export class Garage extends BaseComponent {

  createForm: Form
  updateForm: Form
  controlButtons: ControlButtons

  constructor() {
    super('div', ['garage-wrapper'])

    this.createForm = new Form('create')
    this.updateForm = new Form('update')

    this.controlButtons = new ControlButtons()

    this.element.innerHTML = 'Garage'


    this.element.appendChild(this.createForm.element)
    this.element.appendChild(this.updateForm.element)
    this.element.appendChild(this.controlButtons.element)

  }
}