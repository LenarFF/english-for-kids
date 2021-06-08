import './timer.css';
import { BaseComponent } from '../base-component';

export class Timer extends BaseComponent {
  timeCounter = 0;

  playTime = 0;

  constructor() {
    super('div', ['timer']);

    this.element.innerHTML = `
    <span id="timer">${this.timeCounter}</span>
    `;
  }

  countSecond(): void {
    this.timeCounter++;
    const timerSpan = document.getElementById('timer');
    if (!timerSpan) return;
    timerSpan.innerHTML = `${this.timeCounter}`;
  }

  timerInterval(time: number): void {
    const setTimer = setInterval(() => {
      this.countSecond();

      if (this.timeCounter >= time) {
        clearInterval(setTimer);
        this.timeCounter = 0;
        this.playTimer();
      }
    }, 1000);
  }

  playTimer(): void {
    setInterval(() => {
      this.countSecond();
      this.playTime++;
    }, 1000);
  }
}
