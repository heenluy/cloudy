import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

import { LoaderComponent } from './loader/loader.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DetailedWeatherComponent } from './detailed-weather/detailed-weather.component';
import { CitiesTypeaheadeComponent } from './cities-typeaheade/cities-typeaheade.component';

import { ThemeService } from '../services/theme.service';


@NgModule({
  declarations: [
    LoaderComponent,
    NavigationComponent,
    DetailedWeatherComponent,
    CitiesTypeaheadeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgSelectModule
  ],
  exports: [
    LoaderComponent,
    NavigationComponent,
    DetailedWeatherComponent,
    CitiesTypeaheadeComponent
  ],
  providers: [
    ThemeService
  ]
})
export class ComponentsModule { }
