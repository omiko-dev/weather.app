import { Component, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-forecast-board',
  templateUrl: './forecast-board.component.html',
  styleUrls: ['./forecast-board.component.scss']
})
export class ForecastBoardComponent {

  @Input() TempData: any;
  @Input() LocationData: string | undefined;



}
