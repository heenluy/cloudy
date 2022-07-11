import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { map, mergeMap, catchError } from 'rxjs';

import * as fromHomeActions from './home.actions';
import { WeatherService } from '../../../shared/services/weather.service';
import { CityWeather } from '../../../shared/models/weather.model';


@Injectable()
export class HomeEffects {

  loadCurrentWeather$ = createEffect(() => this.actions$
    .pipe(
      ofType(fromHomeActions.loadCurrentWeather),
      mergeMap(({ query }) => this.weatherService.getCityWeatherByQuery(query)),
      catchError((err, caught$) => {
        this.store.dispatch(fromHomeActions.loadCurrentWeatherFailed())
        return caught$;
      }),
      map(( entity: CityWeather ) => {
        return fromHomeActions.loadCurrentWeatherSuccess({ entity })
      })
    ),
    // Já vem ativada por padrão. Não deixa o effect morrer em caso de error.
    { useEffectsErrorHandler: true }
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private weatherService: WeatherService
  ) {}
}
