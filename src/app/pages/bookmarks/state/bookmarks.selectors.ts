import { createSelector, createFeatureSelector } from '@ngrx/store';

import { BookmarksState } from './bookmarks.reducer';


export const selectBookmarksState = createFeatureSelector<BookmarksState>('bookmarks');

export const selectBookmarkList = createSelector(
  selectBookmarksState,
  (state: BookmarksState) => state.list
);
