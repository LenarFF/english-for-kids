import { BaseComponent } from "../../BaseComponent/BaseComponent";

export class  CreateCars extends BaseComponent {
  formCreateCar: BaseComponent
  formUpdateCar: BaseComponent

  
  constructor() {

    super('div', ['create-cars'])
      this.formCreateCar = new BaseComponent('form', ['form-create-car'])
      this.formUpdateCar = new BaseComponent('form', ['form-update-car'])


  }
}