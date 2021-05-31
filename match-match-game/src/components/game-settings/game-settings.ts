import { BaseComponent } from '../base-component';
import { Button } from '../button/button';
import './game-settings.css';

export class GameSettings extends BaseComponent {

gameCards: BaseComponent
difficulty: BaseComponent
gameCardsHeader: BaseComponent
difficultyHeader: BaseComponent
gameCardsButtonAnimals: BaseComponent
gameCardsButtonGarden: BaseComponent
difficultyEasyButton: BaseComponent
difficultyHardButton: BaseComponent
gameCardsButtonsWrap: BaseComponent
difficultyButtonsWrap: BaseComponent

  constructor() {
    super('div', ['game-settings']);

    this.gameCards = new BaseComponent('div', ['game-cards'])
    this.difficulty = new BaseComponent('div', ['difficulty'])

    this.gameCardsHeader = new BaseComponent('h3', ['game-cards__header'])
    this.difficultyHeader = new BaseComponent('h3', ['difficulty__header'])

    this.gameCardsButtonsWrap = new BaseComponent('div', ['game-cards__buttons'])
    this.difficultyButtonsWrap = new BaseComponent('div', ['difficulty__buttons'])

    this.gameCardsButtonAnimals = new Button('Animals', ['game-cards__button'])
    this.gameCardsButtonGarden = new Button('Garden', ['game-cards__button'])

    this.difficultyEasyButton = new Button('Easy', ['difficulty__button'])
    this.difficultyHardButton = new Button('Hard', ['difficulty__button'])

    this.element.appendChild(this.gameCards.element)
    this.element.appendChild(this.difficulty.element)

    this.gameCards.element.appendChild(this.gameCardsHeader.element)
    this.gameCards.element.appendChild(this.gameCardsButtonsWrap.element)

    this.gameCardsButtonsWrap.element.appendChild(this.gameCardsButtonAnimals.element)
    this.gameCardsButtonsWrap.element.appendChild(this.gameCardsButtonGarden.element)

    this.difficulty.element.appendChild(this.difficultyHeader.element)
    this.difficulty.element.appendChild(this.difficultyButtonsWrap.element)

    this.difficultyButtonsWrap.element.appendChild(this.difficultyEasyButton.element)
    this.difficultyButtonsWrap.element.appendChild(this.difficultyHardButton.element)

    
    this.gameCardsHeader.element.innerHTML = 'Game cards'
    this.difficultyHeader.element.innerHTML = 'Difficulty'

  }
}
