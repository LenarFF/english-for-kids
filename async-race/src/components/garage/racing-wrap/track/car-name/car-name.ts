import { BaseComponent } from '../../../../BaseComponent/BaseComponent';
import './car-name.css';

export class CarName extends BaseComponent {
  brands: string[];

  models: string[];

  constructor(brand = '', model = '') {
    super('p', ['track__car-name']);

    this.brands = [
      'Mercedes',
      'Ferrari',
      'McLaren',
      'Renault',
      'Alfa Romeo',
      'Aston Martin',
      'Red Bull',
      'Alpine',
      'Williams',
      'Haas',
      'Benetton',
      'BMW',
      'Brawn',
      'Bugatti',
      'Honda',
      'Jaguar',
      'Jordan',
      'Lamborghini',
      'Lancia',
      'Lotus',
      'Marussia',
      'Minardi',
      'Porsche',
      'Sauber',
      'Stewart',
      'Toyota',
    ];
    this.models = [
      'M23',
      '78',
      '72',
      '25',
      '003',
      '500',
      'MP4',
      'FW11',
      'VW5',
      'FW14B',
      'RB6',
      'W196',
      'W05',
      'FW18',
      'F2002',
    ];

    this.element.innerHTML = `${brand || this.getRandomValue(this.brands)} ${
      model || brand ? model : this.getRandomValue(this.models)
    }`;
  }

  getRandomValue(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}
