import { NgModule, Injectable } from '@angular/core';
import { RouterModule, Routes, Resolve } from '@angular/router';

import {} from 'rxjs';

import { Store, select } from '@ngrx/store';

import { HomePage } from './pages/home/containers/home/home.page';
import { BookmarksPage } from './pages/bookmarks/containers/bookmarks.page';

import * as fromBookmarksSelectors from './pages/bookmarks/state/bookmarks.selectors';

// Pega o tamanho da lista de favoritos
@Injectable({providedIn: 'root'})
export class BookmarksInfo implements Resolve<string> {

  constructor(private store: Store) {}

  resolve() {
    let listSize!: number;

    this.store
      .pipe(select(fromBookmarksSelectors.selectBookmarkList))
      .subscribe(list => listSize = list.length);

    return `Meus Favoritos (${ listSize.toString() })`;
  }
}

const routes: Routes = [
  { path: 'home', component: HomePage, title: 'Cloudy App — Início' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'bookmarks',
    component: BookmarksPage,
    title: BookmarksInfo
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
