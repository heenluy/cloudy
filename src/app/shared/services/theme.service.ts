import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {

  public static default = 'light';

  public get current(): string {
  	return localStorage.getItem('theme') ?? ThemeService.default;
  }

  public set current(value: string) {
  	localStorage.setItem('theme', value);
  }


  constructor() {}
}
