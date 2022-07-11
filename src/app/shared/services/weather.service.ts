import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, map } from 'rxjs';

import { CityWeather } from '../models/weather.model';
import { responseToCityWeather } from '../utils/response.utils';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {}

  public getCityWeatherByQuery(query: string): Observable<CityWeather> {
    const params = new HttpParams({ fromObject: { q: query } });
    return this.doGet('weather', params)
      .pipe(map(response => responseToCityWeather(response)));
  }

  private doGet<T>(url: string, params: HttpParams): Observable<T> {
    params = params.append('appid', environment.apiKey);
    params = params.append('lang', 'pt_br');
    return this.httpClient.get<T>(`https://api.openweathermap.org/data/2.5/${ url }`, { params });
  }
}
