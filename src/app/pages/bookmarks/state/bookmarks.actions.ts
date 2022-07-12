import { createAction, props } from '@ngrx/store';

// import { Bookmark } from '../../../shared/models/bookmark.model';


export const removeBookmark = createAction(
  '[Bookmark] Remove Bookmark',
  props<{ id: number }>()
);
