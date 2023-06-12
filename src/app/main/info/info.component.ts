import { Component, Output, EventEmitter, HostListener } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { HttpService } from 'src/app/server/http.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  @Output() tempEmit = new EventEmitter<any>();
  @Output() locatioinEmit = new EventEmitter<any>();

  SearchedCity: string[] = [];

  constructor(private readonly httpService: HttpService) {

    const secretData = localStorage.getItem('D');
    this.SearchedCity = JSON.parse(secretData!).d;

  }

  SearchWord: any = '';

  $temp!: Observable<any> | null;

  $location!: Observable<any> | null;

  errorSMG: boolean = false;

  searchCity(city: string) {
    this.httpService.getApiData(city).subscribe((data: any) => {
      if (data) {
        this.$location = data.location;
        this.$temp = data.current;
        this.errorSMG = false;
        this.SearchWord = `${data.location.country}, ${data.location.name}`;
        this.tempEmit.emit(this.$temp);
        this.locatioinEmit.emit(data.location.name);

        if (
          this.SearchedCity.length < 4 &&
          !this.SearchedCity.includes(data.location.name)
        ) {
          this.SearchedCity.push(data.location.name);
        } else if (
          this.SearchedCity.length >= 4 &&
          !this.SearchedCity.includes(data.location.name)
        ) {
          this.SearchedCity.pop();
          this.SearchedCity.unshift(data.location.name);
        }

        return;
      }

      this.$temp = null;
      this.$location = null;
      this.tempEmit.emit(null);
      this.locatioinEmit.emit(null);

      this.errorSMG = true;
    });
  }

  oldCity(_event: string) {
    this.searchCity(_event);
  }

  @HostListener('window:unload', ['$event'])
  beforeunloadHandler(_event: any) {
    var json = { d: this.SearchedCity };
    localStorage.setItem('D', JSON.stringify(json));
  }
}
