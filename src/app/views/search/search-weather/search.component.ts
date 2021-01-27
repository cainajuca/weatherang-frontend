import { Component, OnInit } from '@angular/core';
import { Weather } from './../search-weather.model';
import { SearchWeatherService } from './../search-weather.service'
// import { Router } from '@angular/router';

import { WeatherCreateComponent } from './../../../components/weather/weather-create/weather-create.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent implements OnInit {

  weather?: Weather

  timer: number = 0
  lastSearch?: Date

  searchField: string = ''

  constructor(
    private weatherCreateComponent: WeatherCreateComponent,
    private searchWeatherService: SearchWeatherService
    // private router: Router
  ) { }

  ngOnInit(): void {
  }

  searchWeather(): void {
    
    this.searchWeatherService.read(this.searchField).subscribe(weather => {

      // API necessita de 1 minuto entre requisições GET
      if(weather.error == undefined) {

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
  
        // console.log('API:')
        // console.log(weather)
        // console.log('DB:')
        // console.log(this.weather)

        this.weatherCreateComponent.createWeather(this.weather) // atualiza hisórico de pesquisa
        this.lastSearch = new Date() // guarda momento da ultima pesquisa com êxito
      } else {
        if(this.lastSearch)
          this.timer = 60 - Math.floor((new Date().getTime() - this.lastSearch.getTime())/1000)
        else
          this.timer = -1
      }
    })

    
    // this.searchField = ''
  }

  // cancel(): void {
  //   this.router.navigate(['/'])
  // }

}
