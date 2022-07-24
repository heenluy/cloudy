import { Component, OnInit } from '@angular/core';

import { ThemeService } from 'src/app/shared/services/theme.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  cloudyLogo: string = '../../../../assets/images/svg/logo.svg';
  sunIcon: string = '../../../../assets/images/svg/sun.svg';
  moonIcon: string = '../../../../assets/images/svg/moon.svg';
  logoDesc: string = 'Cloudy App Logo';

  constructor(private themeService: ThemeService) {}

  switchTheme(): void {
    if (this.themeService.current === 'dark') {
        this.themeService.current = 'light';
    } else {
        this.themeService.current = 'dark';
    }
  }

  get themeIcon(): string {
    return this.themeService.current === 'dark' ? this.moonIcon : this.sunIcon;
  }

  get themeTitle(): string {
    return this.themeService.current === 'dark' ? 'Tema Escuro' : 'Tema Claro';
  }

  ngOnInit(): void {}



}
