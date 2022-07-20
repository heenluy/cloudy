import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Store, select } from '@ngrx/store';
import { Observable, Subject, map, takeUntil } from 'rxjs';

import { AppState } from '../state/app.reducer';

import { CityWeather, CityDailyWeather } from '../models/weather.model';
import { Units } from '../models/units.enum';
import { responseToCityWeather, responseToCityDailyWeather } from '../utils/response.utils';

import * as fromConfigSelectors from '../state/config/config.selectors';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService implements OnDestroy{

  unit!: Units;

  serviceDestroyed$ = new Subject();


  constructor(
    private httpClient: HttpClient,
    private store: Store<AppState>
  )
  {
    this.store.pipe(
      select(fromConfigSelectors.selectUnitConfig),
      takeUntil(this.serviceDestroyed$)

    ).subscribe(unit => this.unit = unit);
  }

  ngOnDestroy(): void {
    this.serviceDestroyed$.next([]);
    this.serviceDestroyed$.unsubscribe();
  }

  public getCityWeatherByQuery(query: string): Observable<CityWeather> {
    const params = new HttpParams({ fromObject: { q: query } });
    return this.doGet('weather', params)
      .pipe(map(response => responseToCityWeather(response)));
  }

  getCityWeatherById(id: string): Observable<CityWeather> {
   const params = new HttpParams({fromObject: {id}});
   return this.doGet<any>('weather', params)
     .pipe(map(response => responseToCityWeather(response)));
 }

 getCityWeatherByCoord(lat: number, lon: number): Observable<CityWeather> {
   const params = new HttpParams({fromObject: {
     lat: lat.toString(),
     lon: lon.toString(),
   }});
   return this.doGet<any>('weather', params)
     .pipe(map(response => responseToCityWeather(response)));
 }

 getWeatherDetails(lat: number, lon: number): Observable<CityDailyWeather> {
   const params = new HttpParams({fromObject: {
     lat: lat.toString(),
     lon: lon.toString(),
     exclude: 'minutely,hourly',
   }});
   return this.doGet<any>('onecall', params)
     .pipe(map(response => responseToCityDailyWeather(response)));
 }

  private doGet<T>(url: string, params: HttpParams): Observable<T> {
    params = params.append('appid', environment.apiKey);
    params = params.append('lang', 'pt_br');

    if (this.unit !== Units.SI) {
      params = params.append('units', this.unit.toLocaleLowerCase());
    }

    return this.httpClient.get<T>(`https://api.openweathermap.org/data/2.5/${ url }`, { params });
  }
}
