import { createAction, props } from '@ngrx/store';

import { CityWeather } from '../../../shared/models/weather.model';
import { Bookmark } from '../../../shared/models/bookmark.model';

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

export const toggleBookmark = createAction(
  '[Home] Toggle Bookmark',
  props<{ entity: Bookmark }>()
);

export const clearHomeState = createAction(
  '[Home] Clear HomeState'
);
