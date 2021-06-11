import { Buttons } from "../buttons";

export class UpdateButton extends Buttons {
  constructor() {
    super('update')
  }

  buttonHandler() {
    super.buttonHandler();
    const inputText = document.getElementById('update-text') as HTMLInputElement;
    const inputColor = document.getElementById('update-color') as HTMLInputElement;
    const selectedTrack = document.querySelector('.selected');
    const carName = selectedTrack?.querySelector('.track__car-name');
    const car = selectedTrack?.querySelector('.track__car') as HTMLElement;
    console.log(inputText.value, selectedTrack)
    if (carName) carName.innerHTML = `${inputText.value}`;
    if (car) car.style.fill = inputColor.value;
    selectedTrack?.classList.remove('selected');
  }
}