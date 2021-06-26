import { Card } from './components/card/card';

const card = new Card('cardFront.jpg', 'back.jpg');
card.element.addEventListener('click', () => {
  card.element.classList.toggle('flipped');
});
document.querySelector('.body')?.appendChild(card.element);
