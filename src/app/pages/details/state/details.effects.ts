import { Injectable } from '@angular/core';
import { Params } from '@angular/router';

import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as fromDetailsActions from './details.actions';
import * as fromRouterSelectors from '../../../shared/state/router/router.selectors';

import { mergeMap, map, withLatestFrom, combineLatest, catchError } from 'rxjs';

import { AppState } from '../../../shared/state/app.reducer';
import { WeatherService } from '../../../shared/services/weather.service';


@Injectable()
export class DetailsEffects {

  loadCurrentWeather$ = createEffect(() => this.actions$
    .pipe(
      ofType(fromDetailsActions.loadWeatherDetails),
      withLatestFrom(this.store.select(fromRouterSelectors.selectRouterQueryParams)),
      mergeMap(([, queryParams]: [any, Params]) =>
        combineLatest([
          this.weatherService.getCityWeatherByCoord(queryParams['lat'], queryParams['lon']),
          this.weatherService.getWeatherDetails(queryParams['lat'], queryParams['lon'])
        ])
      ),
      catchError((err, caught$) => {
        this.store.dispatch(fromDetailsActions.loadWeatherDetailsFailed());
        return caught$;
      }),
      map(([current, daily]) => {
        const entity = daily;
        entity.city = {...current.city, timeZone: daily.city.timeZone};
        return fromDetailsActions.loadWeatherDetailsSuccess({ entity });
      })
    )
  );


  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}
}
