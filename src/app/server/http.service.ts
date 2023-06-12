import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, catchError, concat, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private readonly http: HttpClient) {}

  ApiKey: string = '7116a6ee9a28467cacd183328231106';
  URL: string = 'http://api.weatherapi.com/v1/current.json';

  getApiData(city: string) {
    var API = `${this.URL}?key=${this.ApiKey}&q=${city}`;

    return this.http.get(API).pipe(
      catchError((err) => concat(of(null)))
    );
  }
}
