import { getWinnerStatus, updateCar } from '../../../server';
import { Buttons } from '../Buttons';

export class UpdateButton extends Buttons {
  constructor() {
    super('update');
  }

  buttonHandler() {
    super.buttonHandler();

    console.log('update');
    const main: any = async () => {
      const res = await getWinnerStatus(10);
      console.log(res, 123);
    };
    main();

    const inputText = document.getElementById('update-text') as HTMLInputElement;
    const inputColor = document.getElementById('update-color') as HTMLInputElement;
    const selectedTrack = document.querySelector('.selected');
    const carName = selectedTrack?.querySelector('.track__car-name');
    const car = selectedTrack?.querySelector('.track__car') as HTMLElement;
    if (carName && inputText.value) carName.innerHTML = `${inputText.value}`;
    if (car && inputColor.value) car.style.fill = inputColor.value;
    const id = selectedTrack?.getAttribute('id');
    if (id) {
      if (inputText.value) {
        updateCar(+id, {
          name: `${inputText.value}`,
          color: `${inputColor.value}`,
        });
      } else {
        updateCar(+id, {
          color: `${inputColor.value}`,
        });
      }
    }
    selectedTrack?.classList.remove('selected');
    inputText.value = '';
    inputColor.value = '#000000';
  }
}
