import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DetailsPage } from './containers/details/details.page';
import { DetailsGuard } from './services/details.guard';



@NgModule({
  declarations: [
    DetailsPage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DetailsPage, title: 'Cloudy App — Detalhes', canActivate: [DetailsGuard] }
    ])
  ],
  providers: [
    DetailsGuard
  ]
})
export class DetailsModule { }
