import './timer.css';
import { BaseComponent } from '../base-component';
import { settings } from '../../settings';

export class Timer extends BaseComponent {
  timeCounter = 0;
  playTime: number = 0;

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
  }

  timerInterval(time: number) {
    const setTimer = setInterval(() => {
      this.countSecond(time);

    if (this.timeCounter >= time) {
      clearInterval(setTimer);
      this.timeCounter = 0;
      this.playTimer()
      return
    }
  }, 1000);
  }
  playTimer() {
    setInterval(() => {
      this.countSecond(300);
      this.playTime++
  }, 1000)
}
}
