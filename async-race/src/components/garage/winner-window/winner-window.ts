import { BaseComponent } from "../../BaseComponent/BaseComponent";
import './winner-window.css'

export class WinnerWindow extends BaseComponent{
  constructor() {
    super('div', ['winner-window', 'hidden']);
    this.element.innerHTML = `
    <p><span id='winner'>Жигуль</span>  win! Winner time <span id='time'>вот такое</span>s</p>
    `
  }
}