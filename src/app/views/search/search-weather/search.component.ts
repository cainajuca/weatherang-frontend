import { Component, OnInit } from '@angular/core';
import { Weather } from './../search-weather.model';
import { SearchWeatherService } from './../search-weather.service'
import { Router } from '@angular/router';

import { WeatherCreateComponent } from './../../../components/weather/weather-create/weather-create.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent implements OnInit {

  weather?: Weather;

  constructor(
    private weatherCreateComponent: WeatherCreateComponent,
    private searchWeatherService: SearchWeatherService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  searchWeather(): void {
    
    this.searchWeatherService.read().subscribe(weather => {

      this.weather = weather

      if(weather.success == undefined) {
        this.weatherCreateComponent.createWeather(weather)
        console.log('Histórico atualizado.')
      } else
        console.log('API necessita de 1 minuto entre requisições GET.')
    })
  }

  cancel(): void {
    this.router.navigate(['/'])
  }

}
