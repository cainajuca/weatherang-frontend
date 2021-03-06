import { Component, OnInit } from '@angular/core';
import { Weather } from './../search-weather.model';
import { SearchWeatherService } from './../search-weather.service'

import { WeatherCreateComponent } from './../../../components/weather/weather-create/weather-create.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent implements OnInit {

  weather: Weather = {
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

  timer: number = 0
  lastSearch?: Date
  api_error: Boolean = false
  show_panel: Boolean = false
  searchField: string = ''

  constructor(
    private weatherCreateComponent: WeatherCreateComponent,
    private searchWeatherService: SearchWeatherService
  ) { }

  ngOnInit(): void {
  }

  searchWeather(): void {
    
    this.searchWeatherService.read(this.searchField).subscribe(weather => {

      // API necessita de 1 minuto entre requisições GET
      if(weather.error == undefined) {

        this.api_error = false
        this.show_panel = true

        // Desestruturação do objeto original da API.
        let {
          location: {
            name: name,
            region: region,
            country: country,
            localtime: localtime,
            timezone_id: timezone_id
          },
          current: {
            temperature: temperature,
            weather_code: weather_code,
            weather_icons: [weather_icon],
            weather_descriptions: [weather_description]
          }
        } = weather
  
        // Montagem do objeto no novo modelo.
        this.weather = {
          name: name,
          region: region,
          country: country,
          localtime: localtime,
          weather_code: weather_code,
          timezone_id: timezone_id,
          temperature: temperature,
          weather_icon: weather_icon,
          weather_description: weather_description
        }
        
        this.weatherCreateComponent.createWeather(this.weather) // atualiza hisórico de pesquisa
        this.lastSearch = new Date() // guarda momento da última pesquisa com êxito
      } else {
        this.api_error = true
        if(this.lastSearch)
          this.timer = 60 - Math.floor((new Date().getTime() - this.lastSearch.getTime())/1000)
        else // Quando a pagina search é reaberta se perde a contagem do timer.
          this.timer = -1
      }
    })
  }
}
