import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './pages/home/containers/home/home.page';
import { BookmarksPage } from './pages/bookmarks/containers/bookmarks.page';

const routes: Routes = [
  { path: 'home', component: HomePage, title: 'Cloudy App — Início' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'bookmarks', component: BookmarksPage, title: 'Cloudy App — Favoritos' },
  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
