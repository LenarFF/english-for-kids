import { wordCardsInfo } from './cardsInfo';
import { GameEnd } from './components/game-end/game-end';
import { data } from './data';

export class Game {
  transformCard = (): void => {
    const wordCardIMG = document.querySelectorAll('.word-card__img');
    const wordWrap = document.querySelectorAll('.word-card__word-wrap');

    if (wordCardIMG && wordWrap) {
      wordCardIMG.forEach((card) => card.classList.toggle('word-card__img_bigger'));
      wordWrap.forEach((word) => word.classList.toggle('hidden'));
    }
  };

  playRandomSound = (): void => {
    data.arrayOfIndexes.sort(() => Math.random() - 0.5);
    const index = data.arrayOfIndexes.pop();
    if (index !== undefined) {
      data.lastIndex = index;
      this.playSound(index);
    } else {
      this.renderGameEnd()
    }
  };

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

  identifyMatch = (attribute:string): boolean => {
    if (Number(attribute) !== data.lastIndex) {
      data.numberOfMistakes++
      return false
    } else {
      return true
    }
  };

  playGuessResultSound = (attribute:string): void => {
    if (this.identifyMatch(attribute)) {
      const audio = new Audio('./audio/correct.mp3');
      audio.play();
      this.appendStars(true);
      setTimeout(this.playRandomSound, 600);
    } else {
      const audio = new Audio('./audio/error.mp3');
      audio.play();
      this.appendStars(false);
    }
  };

  appendStars = (result: boolean): void => {
    const star = document.createElement('img') as HTMLImageElement;
    star.src = `./img/star${result ? '-win' : ''}.svg`;
    star.classList.add('star')
    const starsField = document.querySelector('.stars-field');
    if (starsField) starsField.append(star);
  };

  renderGameEnd = ():void => {
    const gameEnd = new GameEnd(data.numberOfMistakes === 0,
      data.numberOfMistakes);
    const currentPage = document.querySelector('.page');
    currentPage?.replaceWith(gameEnd.element)
  }
}
