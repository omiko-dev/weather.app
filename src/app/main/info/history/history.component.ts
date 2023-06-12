import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {

  @Output() cityEmit = new EventEmitter<any>();


  @Input() Citys!: string[];

  exportBtn(city: string) {
    this.cityEmit.emit(city);
  }

}
