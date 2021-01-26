import { Component, OnInit } from '@angular/core';
import { Weather } from './../search-weather.model';
import { SearchWeatherService } from './../search-weather.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // weathers: Weather[];
  weather?: Weather;

  constructor(private searchWeatherService: SearchWeatherService) { }

  ngOnInit(): void {
    // p botar isso em um botão rever aula sobre createProduct
    this.searchWeatherService.searchWeather().subscribe(weather => {
      this.weather = weather
      console.log(weather)
    })
  }

}
