import { Component } from '@angular/core';

import { locale } from 'moment-timezone';
import 'moment/locale/pt-br';

import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private theme: ThemeService) {
    locale('pt-br');
  }

  get className(): string {
    return this.theme.current === 'light' ? '' : 'dark';
  }
}
