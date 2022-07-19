import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HomePage } from './containers/home/home.page';
import { ComponentsModule } from '../../shared/components/components.module';

import { homeReducer } from './state/home.reducer';
import { HomeEffects } from './state/home.effects';
import { HomeComponent } from './components/home/home.component';
import { UnitSelectorComponent } from './containers/unit-selector/unit-selector.component';


@NgModule({
  declarations: [
    HomePage,
    HomeComponent,
    UnitSelectorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ComponentsModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects])
  ]
})
export class HomeModule { }
