import { CategoryPage } from './pages/category-page/category-page';
import { MainPage } from './pages/main-page/main-page';
import './style.css';

const categoryPage = new CategoryPage();
categoryPage.renderCards();
document.querySelector('.body')?.append(categoryPage.element);
