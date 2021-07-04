import './word-card.css';
import { BaseComponent } from '../../base-component';
import { Word } from './word/word';
import { Rotate } from './rotate/rotate';
import { data } from '../../../data';
import { Game } from '../../../game';
import { LocalStorage } from '../../../localStorageClass';

const FLIP_CLASS = 'flipped';

export class WordCard extends BaseComponent {
  isFlipped = false;

  wordCard: BaseComponent;

  wordCardFront: BaseComponent;

  wordCardBack: BaseComponent;

  wordCardFrontImg: BaseComponent;

  wordCardBackImg: BaseComponent;

  wordCardFrontWordWrap: BaseComponent;

  wordCardBackWordWrap: BaseComponent;

  englishWord: Word;

  translate: Word;

  rotate: Rotate;

  game: Game;

  cardShield: BaseComponent;

  localStorageClass: LocalStorage;

  constructor(image: string, englishWord: string, translate: string) {
    super('div', ['word-card-container']);

    this.wordCard = new BaseComponent('div', ['word-card']);
    this.wordCardFront = new BaseComponent('div', ['word-card__front']);
    this.wordCardBack = new BaseComponent('div', ['word-card__back']);
    this.wordCardFrontImg = new BaseComponent('div',
      (data.gameMode === false) ? ['word-card__img']
        : ['word-card__img', 'word-card__img_bigger']);
    this.wordCardBackImg = new BaseComponent('div', ['word-card__img']);
    this.wordCardFrontWordWrap = new BaseComponent('div',
      (data.gameMode === false) ? ['word-card__word-wrap']
        : ['word-card__word-wrap', 'hidden']);
    this.wordCardBackWordWrap = new BaseComponent('div', ['word-card__word-wrap']);
    this.englishWord = new Word(englishWord);
    this.translate = new Word(translate);
    this.rotate = new Rotate();
    this.game = new Game();
    this.localStorageClass = new LocalStorage();
    this.cardShield = new BaseComponent('div', ['card-shield', 'hidden']);

    this.element.append(this.wordCard.element);
    this.wordCard.element.append(this.wordCardFront.element);
    this.wordCard.element.append(this.wordCardBack.element);

    this.wordCardFront.element.append(this.cardShield.element);
    this.wordCardFront.element.append(this.wordCardFrontImg.element);
    this.wordCardFront.element.append(this.wordCardFrontWordWrap.element);
    this.wordCardFrontWordWrap.element.append(this.englishWord.element);
    this.wordCardFrontWordWrap.element.append(this.rotate.element);
    this.wordCardBack.element.append(this.wordCardBackImg.element);
    this.wordCardBack.element.append(this.wordCardBackWordWrap.element);
    this.wordCardBackWordWrap.element.append(this.translate.element);

    this.wordCardFrontImg.element.style.backgroundImage = `url('./${image}')`;
    this.wordCardBackImg.element.style.backgroundImage = `url('./${image}')`;

    this.cardShield.element.addEventListener('click', (e) => e.stopPropagation());
    this.rotate.element.addEventListener('click', () => this.flipToBack());
    this.element.addEventListener('mouseleave', () => this.flipToFront());
    this.wordCardFront.element.addEventListener('click', (event) => this.clickHandler(event));
  }

  clickHandler(event: Event): void {
    const cardNumber = this.wordCardFront.element.getAttribute('data-number') as string;
    if (!data.gameMode) {
      this.createAudio(event);
      this.localStorageClass.updateStorage(+cardNumber, 'train');
    } else {
      if (!data.startGame) return;
      this.localStorageClass.updateStorage(data.lastIndex, 'game');
      this.game.playGuessResultSound(cardNumber);
      if (this.game.identifyMatch(cardNumber)) {
        this.showCardShield();
        this.localStorageClass.updateStorage(data.lastIndex, 'right');
      } else {
        this.localStorageClass.updateStorage(data.lastIndex, 'wrong');
      }
    }
  }

  createAudio(event: Event): void {
    const eventTarget = event.target as HTMLElement;
    if (eventTarget.classList.contains('word-card__rotate-img')
     || eventTarget.classList.contains('path')) {
      return;
    }
    const word = this.wordCardFront.element.getAttribute('data-word') as string;
    const audio = new Audio(`./audio/${word}.mp3`);
    audio.play();
  }

  flipToBack(): Promise<void> {
    this.isFlipped = true;
    return this.flip(true);
  }

  flipToFront(): Promise<void> {
    this.isFlipped = false;
    return this.flip();
  }

  private flip(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle(FLIP_CLASS, isFront);
      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }

  showCardShield() :void {
    this.cardShield.element.classList.remove('hidden');
  }
}
