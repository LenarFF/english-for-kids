import { BaseComponent } from "../base-component";
import { FormHeader, FormWrap } from "./form-element/form-element";
import './register-form.css';

export class RegisterForm extends BaseComponent {

  formHeader: FormHeader;
  formWrap: FormWrap;


  constructor() {
    super('div', ['register-form', 'hide']);
    this.formHeader = new FormHeader();
    this.formWrap = new FormWrap();
    this.element.appendChild(this.formHeader.element);
    this.element.appendChild(this.formWrap.element);
  }

}