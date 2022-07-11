import { createReducer, Action, on } from '@ngrx/store';

import * as fromHomeActions from './home.actions';
import { CityWeather } from '../../../shared/models/weather.model';



export interface HomeState {
  entity: CityWeather,
  loading: boolean,
  error: boolean,
}

export const homeInitialState: HomeState = {
  entity: {} as CityWeather,
  loading: false,
  error: false,
}

const reducer = createReducer(
  homeInitialState,
  on(fromHomeActions.loadCurrentWeather, state => ({
    ...state,
    loading: true,
    error: false
  })),
  on(fromHomeActions.loadCurrentWeatherSuccess, (state, { entity }) => ({
    ...state,
    entity,
    loading: false,
  })),
  on(fromHomeActions.loadCurrentWeatherFailed, state => ({
    ...state,
    loading: false,
    error: true
  })),

);

export function homeReducer(state: HomeState | undefined, action: Action): HomeState {
  return reducer(state, action);
}
