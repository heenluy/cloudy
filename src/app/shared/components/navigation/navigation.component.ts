import { Component, OnInit } from '@angular/core';

import { ThemeService } from 'src/app/shared/services/theme.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  cloudyLogo: string = '../../../../assets/images/svg/logo.svg';
  logoDesc: string = 'Cloudy App Logo';

  constructor(private themeService: ThemeService) {}

  switchTheme(): void {
    if (this.themeService.current === 'light') {
        this.themeService.current = 'dark';
    } else {
        this.themeService.current = 'light';
    }
  }

  get currentTheme(): string {
    return this.themeService.current;
  }

  get className(): string {
    return this.themeService.current === 'light' ? '' : 'dark';
  }

  ngOnInit(): void {}



}
