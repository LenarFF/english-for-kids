import { AppWrapper } from './pages/app-wrapper/app-wrapper';
import { CategoryPage } from './pages/category-page/category-page';
import { MainPage } from './pages/main-page/main-page';
import './style.css';

const appWrapper = new AppWrapper();
document.querySelector('.body')?.append(appWrapper.element);
