import { Component, OnInit } from '@angular/core';
import { Weather } from './../search-weather.model';
import { SearchWeatherService } from './../search-weather.service'
// import { Router } from '@angular/router'; // vc tava tentando tirar isso sem crashar

import { WeatherCreateComponent } from './../../../components/weather/weather-create/weather-create.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent implements OnInit {

  weather?: Weather

  // weather: Weather = {
  //   error: 0
  //   name: '',
  //   region: '',
  //   country: '',
  //   localtime: '',
  //   weather_code: 0
  // }

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

      this.weather = weather

      console.log("API:")
      console.log(weather)

      // this.weather.country = weather[1][0]
      // this.weather.localtime = weather.localtime
      // this.weather.name = weather.name
      // this.weather.region = weather.region
      // this.weather.weather_code = weather.weather_code

      // console.log("DB:")
      // console.log(this.weather)

      // API necessita de 1 minuto entre requisições GET
      if(weather.error == undefined) {
        this.weatherCreateComponent.createWeather(weather) // atualiza hisórico de pesquisa
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
