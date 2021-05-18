import './timer.css';
import { BaseComponent } from '../base-component';
import { settings } from '../../settings'

export class Timer extends BaseComponent {
   timeCounter: number = 0;
  constructor() {
    super('div', ['timer']);

    this.element.innerHTML = `
    <span id="timer">${this.timeCounter}</span>
    `;
  }

   countSecond(time: number) {
      this.timeCounter++;
      const timerSpan = document.getElementById('timer');
      if (!timerSpan) return;
      timerSpan.innerHTML = `${this.timeCounter}`;
      if (this.timeCounter >= time) {
        this.timeCounter = 0;
        return
      }
  }

  timerInterval(time: number) {
    console.log(this);
    let setTimer = setInterval(() => {
      this.countSecond(time)
    }, 1000);
    if (this.timeCounter >= time) {
    clearInterval(setTimer);
    }
  }
}