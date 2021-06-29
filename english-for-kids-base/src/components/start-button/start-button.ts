import { wordCardsInfo } from '../../cardsInfo';
import { data } from '../../data';
import { BaseComponent } from '../base-component';
import './start-button.css';

export class StartButton extends BaseComponent {
  constructor() {
    super('button', ['start-button', 'start-button_hide']);
    this.element.innerHTML = 'start game';
    this.element.addEventListener('click', () => {
      if (this.element.classList.contains('start-button_repeat')) {
        this.playSound(data.lastIndex);
      } else {
        this.startGame();
      }
    });
  }

  startGame(): void {
    this.transformButton();
    this.fillArrayOfIndexes(wordCardsInfo[data.categoryIndex]);
    this.playRandomSound();
  }

  transformButton(): void {
    this.element.innerHTML = '';
    this.element.classList.add('start-button_repeat');
  }

  playRandomSound(): void {
    data.arrayOfIndexes.sort(() => Math.random() - 0.5);
    const index = data.arrayOfIndexes.pop();
    if (index) {
      data.lastIndex = index;
      this.playSound(index);
    }
  }

  fillArrayOfIndexes = (array: Record<string, unknown>[]):void => {
    for (let i = 0; i < array.length; i++) {
      data.arrayOfIndexes.push(i);
    }
  };

  playSound = (index: number): void => {
    const audioPath = wordCardsInfo[data.categoryIndex][index].audioSrc;
    const audio = new Audio(`./${audioPath}`);
    audio.play();
  };
}
