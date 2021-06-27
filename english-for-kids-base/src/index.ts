import { MainPage } from './pages/main-page/main-page';
import './style.css';

const mainPage = new MainPage();
mainPage.renderCards();
document.querySelector('.body')?.append(mainPage.element);
