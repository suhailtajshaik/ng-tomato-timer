import { Component } from '@angular/core';
import { TimeNowComponent } from './time-now/time-now.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  timer_default = 25
  time_pomodoro = "25"
  time_shortbreak = "5"
  time_longbreak = "10"

  activites = [
    { name: 'Pomodoro', color: 'primary', selected: true },
    { name: 'Short Break', color: 'accent', selected: false },
    { name: 'Long Break', color: 'warn', selected: false }
  ];

  selectActivity(activity) {
    console.log(activity)
  }

  addTimer() {
    console.log("Settings goes here")
  }
}
