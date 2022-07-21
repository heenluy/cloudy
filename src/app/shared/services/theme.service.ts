import { Injectable, OnDestroy } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService implements OnDestroy {

  public static default = 'dark';

  public get current(): string {
  	return localStorage.getItem('theme') ?? ThemeService.default;
  }

  public set current(value: string) {
  	localStorage.setItem('theme', value);
  }

  constructor() {}

  ngOnDestroy(): void {
    localStorage.clear();
  }

  log() {
    console.log('theme: ', this.current)
  }
}
