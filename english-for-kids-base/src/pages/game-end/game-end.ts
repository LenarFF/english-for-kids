import { data } from '../../data';
import { BaseComponent } from '../../components/base-component';
import './game-end.css';

export class GameEnd extends BaseComponent {
  result: boolean;

  constructor(result: boolean, mistakes: number) {
    super('div', ['game-end']);

    this.result = result;
    if (!result) this.renderNumberOfMistakes(mistakes);
    this.renderSmile(result);
    data.numberOfMistakes = 0;
  }

  renderSmile = (result: boolean): void => {
    const img = document.createElement('img') as HTMLImageElement;
    img.classList.add('game-end__smile');
    img.src = `./img/${result ? 'success' : 'failure'}.jpg`;
    this.element.append(img);
  };

  playMusic = (): void => {
    const audio = new Audio(`./audio/${this.result ? 'success' : 'failure'}.mp3`);
    audio.play();
  };

  renderNumberOfMistakes(numberOfMistakes: number): void {
    const errors = new BaseComponent('h3', ['game-end__errors']);
    errors.element.innerHTML = `${numberOfMistakes} error${numberOfMistakes === 1 ? '' : 's'}`;
    this.element.append(errors.element);
  }
}
