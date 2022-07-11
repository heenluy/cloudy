import { createAction, props } from '@ngrx/store';

import { CityWeather } from '../../../shared/models/weather.model';

export const loadCurrentWeather = createAction(
  '[Home] Load Change Weather',
  props<{ query: string }>()
);

export const loadCurrentWeatherSuccess = createAction(
  '[Weather API] Load Change Weather Success',
  props<{ entity: CityWeather }>()
);

export const loadCurrentWeatherFailed = createAction(
  '[Weather API] Load Change Weather Failed',
);
