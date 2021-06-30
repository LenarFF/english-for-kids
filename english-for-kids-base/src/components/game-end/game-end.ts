import { data } from "../../data";
import { MainPage } from "../../pages/main-page/main-page";
import { BaseComponent } from "../base-component";
import './game-end.css'

export class GameEnd extends BaseComponent {

  constructor(result: boolean, numberOfMistakes: number) {
    super("div", ["game-end"]);


    this.playMusic(result);
    if(!result) this.renderNumberOfMistakes(numberOfMistakes);
    this.renderSmile(result);
    setTimeout(this.goToMain, data.GameEndTime)
  }

  renderSmile = (result: boolean): void => {
    const img = document.createElement('img') as HTMLImageElement;
    img.classList.add('game-end__smile');
    img.src = `./img/${result ? 'success' : 'failure'}.jpg`;
    this.element.append(img)
  }

  goToMain = (): void => {
    const mainPage = new MainPage();
    mainPage.renderCards();
    this.element.replaceWith(mainPage.element)
  }

  playMusic =(result: boolean): void => {
    const audio = new Audio(`./audio/${result ? 'success' : 'failure' }.mp3`);
    audio.play()
  }

  renderNumberOfMistakes(numberOfMistakes: number) {
    const errors = new BaseComponent('h3', ['game-end__errors']);
    errors.element.innerHTML = `${numberOfMistakes} error${numberOfMistakes === 1 ? '' : 's'}`
    this.element.append(errors.element);
  }

}