import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

import { CityWeather } from 'src/app/shared/models/weather.model';
import { Units } from 'src/app/shared/models/units.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  @Input() cityWeather!: CityWeather | any;
  @Output() toggleBookmark = new EventEmitter();
  @Input() isFavorite!: boolean;
  @Input() unit!: Units;

  constructor() { }

  get city(): string {
    return `${ this.cityWeather.city.name }, ${ this.cityWeather.city.country }`;
  }

  onToggleBookmark(): void {
    this.toggleBookmark.emit();
  }

}
