import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { CityDailyWeather } from '../../../../shared/models/weather.model';
import { Units } from '../../../../shared/models/units.enum';

import { AppState } from '../../../../shared/state/app.reducer';
import * as fromConfigSelectors from '../../../../shared/state/config/config.selectors';

import * as fromDetailsActions from '../../state/details.actions';
import * as fromDetailsSelectors from '../../state/details.selectors';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss']
})
export class DetailsPage implements OnInit {

  details$!: Observable<CityDailyWeather>;
  loading$!: Observable<boolean>;
  error$!: Observable<boolean>;

  unit$!: Observable<Units>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(fromDetailsActions.loadWeatherDetails());

    this.details$ = this.store.select(fromDetailsSelectors.selectDetailsEntity);
    this.loading$ = this.store.select(fromDetailsSelectors.selectDetailsLoading);
    this.error$ = this.store.select(fromDetailsSelectors.selectDetailsError);

    this.unit$ = this.store.select(fromConfigSelectors.selectUnitConfig);
  }




}
