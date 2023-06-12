import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent{

  @Input() Data: any;

  
}
