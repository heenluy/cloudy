import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  declarations: [
    LoaderComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    NavigationComponent
  ]
})
export class ComponentsModule { }
