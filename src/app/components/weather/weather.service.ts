import { Injectable } from '@angular/core';
import { Weather } from './../../views/search/search-weather.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  baseUrl = 'http://localhost:3001/api/weathers';

  constructor(private http: HttpClient) { }

  create(weather: Weather): Observable<Weather> {
    return this.http.post<Weather>(this.baseUrl, weather);
  }

  read(): Observable<Weather[]> {
    return this.http.get<Weather[]>(this.baseUrl);
  }
}
