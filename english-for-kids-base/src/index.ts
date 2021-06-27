import { CategoryCard } from './components/card/category-card/category-card';
import { WordCard } from './components/card/word-card/word-card';
import './style.css';

const card = new WordCard('cardFront.jpg', 'back.jpg', 'ghj');
card.element.addEventListener('click', () => {
  card.element.classList.toggle('flipped');
});
document.querySelector('.body')?.appendChild(card.element);

const categoryCard = new CategoryCard('back.jpg', 'hall');
document.querySelector('.body')?.append(categoryCard.element);
