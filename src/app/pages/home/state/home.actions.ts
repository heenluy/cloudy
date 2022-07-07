import { createAction, props } from '@ngrx/store';

export const loadCurrentWeather = createAction(
  '[Home] Load Change Weather',
  props<{ query: string }>()
);

export const loadCurrentWeatherSuccess = createAction(
  '[Weather API] Load Change Weather Success',
  props<{ entity: any }>()
);

export const loadCurrentWeatherFailed = createAction(
  '[Weather API] Load Change Weather Failed',
);
