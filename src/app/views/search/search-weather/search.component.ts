import { Component, OnInit } from '@angular/core';
import { Weather } from './../search-weather.model';
import { SearchWeatherService } from './../search-weather.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // weathers: Weather[];
  weather?: Weather;

  constructor(
    private searchWeatherService: SearchWeatherService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  searchWeather(): void {
    
    this.searchWeatherService.read().subscribe(weather => {
      this.weather = weather

      // checar aqui se houve erro
      // se sim exibir mensagem pedindo o minuto entre pesquisas

      console.log(weather)
    })
  }

  cancel(): void {
    this.router.navigate(['/'])
  }

}
