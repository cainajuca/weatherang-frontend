import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/views/search/search-weather.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-read',
  templateUrl: './weather-read.component.html',
  styleUrls: ['./weather-read.component.css']
})

export class WeatherReadComponent implements OnInit {

  weathers?: Weather[]

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.read().subscribe(weathers => {
      this.weathers = weathers
    })
  }

}
