import { AppWrapper } from './pages/app-wrapper/app-wrapper';
import './style.css';

const appWrapper = new AppWrapper();
document.querySelector('.body')?.append(appWrapper.element);
