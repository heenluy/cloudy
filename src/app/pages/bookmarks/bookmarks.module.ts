import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { StoreModule } from '@ngrx/store';

import { BookmarksPage } from './containers/bookmarks.page';
import { bookmarksReducer } from './state/bookmarks.reducer';



@NgModule({
  declarations: [
    BookmarksPage
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('bookmarks', bookmarksReducer)
  ]
})
export class BookmarksModule { }
