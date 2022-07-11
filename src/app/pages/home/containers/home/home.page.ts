import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { CityWeather } from '../../../../shared/models/weather.model';

import { HomeState } from '../../state/home.reducer';
import * as fromHomeActions from '../../state/home.actions';
import * as fromHomeSelectors from '../../state/home.selectors';


@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  searchControl!: FormControl;
  cityWeather$: Observable<CityWeather> | null = null;
  loading$!: Observable<boolean>;
  error$!: Observable<boolean>;

  constructor(private store: Store<HomeState>) { }

  ngOnInit(): void {
    this.searchControl = new FormControl('', [ Validators.required ]);
    this.loading$ = this.store.select(fromHomeSelectors.selectCurrentWeatherLoading);
    this.error$ = this.store.select(fromHomeSelectors.selectCurrentWeatherError);
  }

  doSearch(): void {
    const query = this.searchControl.value;
    this.store.dispatch(fromHomeActions.loadCurrentWeather({ query }));
    this.cityWeather$ = this.store.select(fromHomeSelectors.selectCurrentWeather);
  }

}
