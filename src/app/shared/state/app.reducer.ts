import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { ConfigState, configReducer } from './config/config.reducer';


export interface AppState {
  router: RouterReducerState,
  config: ConfigState
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  config: configReducer
}
