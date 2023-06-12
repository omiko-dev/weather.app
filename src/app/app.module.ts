//* Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//* Components
import { AppComponent } from './app.component';
import  MainComponent  from './main/main.component';
import { InfoComponent } from './main/info/info.component';
import { HistoryComponent } from './main/info/history/history.component';
import { WeatherDetailsComponent } from './main/info/weather-details/weather-details.component';
import { ForecastBoardComponent } from './main/forecast-board/forecast-board.component';

@NgModule({
  declarations: [AppComponent, MainComponent, InfoComponent, HistoryComponent, WeatherDetailsComponent, ForecastBoardComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
