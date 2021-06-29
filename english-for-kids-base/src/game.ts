export class Game {
  transformCard = (): void => {
    const wordCardIMG = document.querySelectorAll('.word-card__img');
    const wordWrap = document.querySelectorAll('.word-card__word-wrap');

    if (wordCardIMG && wordWrap) {
      wordCardIMG.forEach((card) => card.classList.toggle('word-card__img_bigger'));
      wordWrap.forEach((word) => word.classList.toggle('hidden'));
    }
  };
}
