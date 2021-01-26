import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';
import { Weather } from './../../../views/search/search-weather.model';

@Component({
  selector: 'app-weather-create',
  templateUrl: './weather-create.component.html',
  styleUrls: ['./weather-create.component.css']
})
export class WeatherCreateComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  createWeather(weather: Weather): void {
    this.weatherService.create(weather).subscribe();
  }

}
