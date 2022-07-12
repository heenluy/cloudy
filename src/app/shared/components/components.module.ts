import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoaderComponent } from './loader/loader.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DetailedWeatherComponent } from './detailed-weather/detailed-weather.component';



@NgModule({
  declarations: [
    LoaderComponent,
    NavigationComponent,
    DetailedWeatherComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoaderComponent,
    NavigationComponent,
    DetailedWeatherComponent
  ]
})
export class ComponentsModule { }
