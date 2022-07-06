import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from './home.reducer';


// O mesmo passado no módulo
export const selectHomeState: any = createFeatureSelector('home');

export const selectHomeText = createSelector(
  selectHomeState,
  ( homeState: HomeState ) => homeState.text
);
