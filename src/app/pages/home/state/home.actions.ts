import { createAction, props } from '@ngrx/store';

export const changeText = createAction(
  '[Home] Chage Text',
  props<{ text: string }>()
);
