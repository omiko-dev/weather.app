import { Component, HostListener, OnInit, DoCheck } from '@angular/core';
import { HttpService } from '../server/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export default class MainComponent implements OnInit, DoCheck {
  constructor(private readonly httpService: HttpService) {}

  tempData: any;
  locationData!: string;

  cssClassArr: string[] = ['sun', 'raining', 'snow', 'cloudy'];

  
  ngOnInit(): void {
    this.httpService.getApiData('tbilisi').subscribe((data) => {
      console.log(data);
    });
  }

  ngDoCheck(): void {
    // const bgData = this.tempData.condition.text;
    // console.log(bgData);
    
      
  }

  tempExport(_event: any) {
    this.tempData = _event;
  }

  locationExport(_event: string) {
    this.locationData = _event;
  };


}
