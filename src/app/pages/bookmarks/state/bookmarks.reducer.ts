import { createReducer, on, Action } from '@ngrx/store';

import { Bookmark } from '../../../shared/models/bookmark.model';
import * as fromBookmarksActions from './bookmarks.actions';
import * as fromHomeActions from '../../home/state/home.actions';

export interface BookmarksState {
  list: Bookmark[]
}

export const bookmarksInitialState: BookmarksState  = {
  list: []
}

const reducer = createReducer(
  bookmarksInitialState,
  on(fromHomeActions.toggleBookmark, (state, { entity }) => ({
    ...state,
    list: toggleBookmark(state.list, entity),
  })),
  on(fromBookmarksActions.removeBookmark, (state, { id }) => ({
    ...state,
    list: state.list.filter(bmk => bmk.id !== id)
  })),

);

export function bookmarksReducer(state: BookmarksState | undefined, action: Action): BookmarksState {
  return reducer(state, action);
}

function toggleBookmark(list: Bookmark[], entity: Bookmark): Bookmark[] {
  if(!!list.find(bmk => bmk.id === entity.id)) {
    return list.filter(bmk => bmk.id !== entity.id);
  }

  return [...list, entity];
}
