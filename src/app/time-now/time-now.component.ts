import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-time-now',
  templateUrl: './time-now.component.html',
  styleUrls: ['./time-now.component.scss']
})
export class TimeNowComponent implements OnInit {

  constructor() { }
  myDate
  ngOnInit() {
    this.utcTime();
  }

  utcTime() {
    setInterval(() => {         //replaced function() by ()=>
      this.myDate = new Date();
    }, 1000);
  }
}
