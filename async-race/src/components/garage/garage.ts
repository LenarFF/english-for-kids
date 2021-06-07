import { BaseComponent } from "../BaseComponent/BaseComponent"
import { Form } from "../form/form"

export class Garage extends BaseComponent {

  createForm: Form
  updateForm: Form

  constructor() {


    super('div', ['garage-wrapper'])

    this.createForm = new Form('create')
    this.updateForm = new Form('update')

    this.element.innerHTML = 'Garage'


    this.element.appendChild(this.createForm.element)
    this.element.appendChild(this.updateForm.element)
  }
}