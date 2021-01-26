import { Injectable } from '@angular/core';
import { Weather } from './../../views/search/search-weather.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  baseUrl = 'http://localhost:3001/weathers';

  constructor(private http: HttpClient) { }

  showOnConsole(msg: string): void {
    console.log(msg)
  }

  create(weather: Weather): Observable<Weather> {    
    return this.http.post<Weather>('http://localhost:3001/weathers', weather);
  }
}
