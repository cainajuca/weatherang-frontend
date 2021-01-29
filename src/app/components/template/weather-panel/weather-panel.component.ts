import { Component, Input } from '@angular/core';
import { Weather } from 'src/app/views/search/search-weather.model';

@Component({
  selector: 'app-weather-panel',
  templateUrl: './weather-panel.component.html',
  styleUrls: ['./weather-panel.component.css']
})

export class WeatherPanelComponent {

  constructor() { }

  @Input() weather: Weather = {
    name: '',
    region: '',
    country: '',
    localtime: '',
    weather_code: 0,
    timezone_id: '',
    temperature: 0,
    weather_icon: '',
    weather_description: ''
  }

}
