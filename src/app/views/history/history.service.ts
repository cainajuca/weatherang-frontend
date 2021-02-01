import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Weather } from './../../views/search/search-weather.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  baseUrl = 'http://localhost:3001/api/weathers';

  constructor(private http: HttpClient) { }

  erase(): Observable<void> {
    return this.http.delete<void>(this.baseUrl);
  }
}
