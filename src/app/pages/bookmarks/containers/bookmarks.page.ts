import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { Bookmark } from '../../../shared/models/bookmark.model';

import * as fromBookmarksSelectors from '../state/bookmarks.selectors';
import * as fromBookmarksActions from '../state/bookmarks.actions';


@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.page.html',
  styleUrls: ['./bookmarks.page.scss']
})
export class BookmarksPage implements OnInit {

  bookmarks$!: Observable<Bookmark[]>;
  deleteIcon = '../../../../assets/images/svg/remove_circle.svg';
  title = 'Remover dos favoritos';

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.bookmarks$ = this.store.select(fromBookmarksSelectors.selectBookmarkList);
  }

  removeBookmark(id: number): void {
    this.store.dispatch(fromBookmarksActions.removeBookmark({ id }));
  }

}
