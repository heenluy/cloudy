import { createFeatureSelector, createSelector } from '@ngrx/store';

import { DetailsState } from './details.reducer';

export const selectDetailsState = createFeatureSelector<DetailsState>('details');

export const selectDetailsEntity = createSelector(
  selectDetailsState,
  (state: DetailsState) => state.entity
);

export const selectDetailsLoading = createSelector(
  selectDetailsState,
  (state: DetailsState) => state.loading
);

export const selectDetailsError = createSelector(
  selectDetailsState,
  (state: DetailsState) => state.error
);
