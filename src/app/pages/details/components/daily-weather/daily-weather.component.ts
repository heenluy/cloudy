import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { unix } from 'moment-timezone';

import { DailyWeather, Weather } from '../../../../shared/models/weather.model';
import { Units } from '../../../../shared/models/units.enum';
import { unitToSymbol } from '../../../../shared/utils/units.utils';

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DailyWeatherComponent {

  @Input() dailyWeather!: DailyWeather;
  @Input() timezone!: string;
  @Input() unit!: Units;

  get weather(): Weather {
    return this.dailyWeather.weather;
  }

  get date(): string {
    return unix(this.dailyWeather.date).format('DD MMM - dddd');
  }

  get icon(): string {
    return `http://openweathermap.org/img/wn/${this.weather.icon}@2x.png`;
  }

  get unitSymbol(): string {
    return unitToSymbol(this.unit);
  }

  unixToHourMinute(value: number): string {
    return unix(value).tz(this.timezone).format('HH:mm');
  }

  // TODO: instalar a lib moment-timezone [x]
  // TODO: instalar a lib ng-select e usá-la [x]
  // ------------------------------------------------
  // TODO: mostrar informações no título da página
  // TODO: responsividade básica sem menu mobile
  // TODO: criar uma troca de tema "inteligente" [x]
  // TODO: testes unitários e de integração
  // TODO: deploy no firebase

}
