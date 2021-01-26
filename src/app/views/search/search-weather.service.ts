import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from './search-weather.model';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchWeatherService {

  // http://api.weatherstack.com/current?access_key=
  // 6bd48c453a20558224aec77c98e07c9a
  // &query=
  // Vitória

  constructor(private http: HttpClient) { }

  searchWeather(): Observable<Weather> {
    // só se pode usar esse get uma vez a cada minuto !! mostrar essa mensagem caso a pessoa queira pesquisar de novo rapido
    return this.http.get<Weather>('http://api.weatherstack.com/current?access_key=6bd48c453a20558224aec77c98e07c9a&query=New York');
    
  }

}