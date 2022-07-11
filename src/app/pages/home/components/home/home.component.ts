import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { CityWeather } from 'src/app/shared/models/weather.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  @Input() cityWeather!: CityWeather | any;

  constructor() { }

  getCity(): string {
    return `${ this.cityWeather.city.name } ${ this.cityWeather.city.country }`;
  }

}
