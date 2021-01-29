import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchWeatherService {

  baseUrl = "http://api.weatherstack.com/current?access_key="
  access_key = "6bd48c453a20558224aec77c98e07c9a"

  constructor(private http: HttpClient) { }

  read(city: string): Observable<any> {

    // só se pode usar esse get uma vez a cada minuto!!
    return this.http.get<any>(
      this.baseUrl+
      this.access_key+
      '&query='+city
    );
  }

}
