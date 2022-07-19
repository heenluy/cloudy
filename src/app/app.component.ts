import { Component } from '@angular/core';

import { locale } from 'moment-timezone';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    locale('pt-br');
  }
}
