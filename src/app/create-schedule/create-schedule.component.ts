import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css']
})
export class CreateScheduleComponent implements OnInit {
  owners = [
    { id: 1, name: 'ap. 1' },
    { id: 2, name: 'ap. 2' },
    { id: 3., name: 'ap. 3' },
    { id: 4, name: 'ap. 4' },
    { id: 5, name: 'ap. 5' },
    { id: 6, name: 'ap. 6' },
    { id: 7, name: 'ap. 7' },
    { id: 8, name: 'ap. 8' },
    { id: 9, name: 'ap. 9' },
    { id: 10, name: 'ap. 10' },
    { id: 11, name: 'ap. 11' },
    { id: 12, name: 'parter' },
    { id: 13, name: 'parking lot #3' },
    { id: 14, name: 'parking lot #5' },
  ];
  flats = [
    { id: 1, name: 'ap. 1', owner: 1, active: true },
    { id: 2, name: 'ap. 2', owner: 2, active: true },
    { id: 3, name: 'ap. 3', owner: 3, active: false },
    { id: 4, name: 'ap. 4', owner: 4, active: true },
    { id: 5, name: 'ap. 5', owner: 5, active: true },
    { id: 6, name: 'ap. 6', owner: 6, active: true },
    { id: 7, name: 'ap. 7', owner: 7, active: true },
    { id: 8, name: 'ap. 8', owner: 8, active: true },
    { id: 9, name: 'ap. 9', owner: 9, active: true },
    { id: 10, name: 'ap. 10', owner: 10, active: true },
    { id: 11, name: 'ap. 11', owner: 11, active: true },
    { id: 12, name: 'parter', owner: 12, active: true },
  ];
  parkingLots = [
    { id: 1, name: 'паркомясто 1', owner: 9, active: true },
    { id: 2, name: 'паркомясто 2', owner: 5, active: true },
    { id: 3, name: 'паркомясто 3', owner: 13, active: true },
    { id: 4, name: 'паркомясто 4', owner: 6, active: true },
    { id: 5, name: 'паркомясто 5', owner: 14, active: true },
    { id: 6, name: 'паркомясто 6', owner: 1, active: true },
    { id: 7, name: 'паркомясто 7', owner: 2, active: true },
    { id: 8, name: 'паркомясто 8', owner: 9, active: true },
  ];
  startWeek = new Date(2019, 11, 2);
  endWeek = new Date(2020, 2, 30)
  scheduleList = [];

  constructor() { }

  ngOnInit() {

    // console.log(this.startWeek)
    // console.log(this.endWeek)
    console.log(this.fillScheduleWeeks())
    // this.fillScheduleWeeks();
  }

  shuffle(arrayOrig) {

    const array = [...arrayOrig];
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  fillScheduleWeeks() {
    let currWeekStart = this.startWeek;
    const flatsOnceScheduled = this.shuffle(this.flats);
    const flatsLen = flatsOnceScheduled.length;

    //return currWeekStart < this.endWeek

    let counter = 0;
    while (currWeekStart < this.endWeek) {
      this.scheduleList.push({
        id: counter + 1,
        fromTo: `${this.formatDate(currWeekStart)} - ${this.formatDate(this.addDays(currWeekStart, 6))}`,
        flatNo: flatsOnceScheduled[counter++ % flatsLen]
      });

      currWeekStart = this.addDays(currWeekStart, 7);
    }

    return this.scheduleList;
  }

  addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  formatDate(today) {
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    return dd + '/' + mm + '/' + yyyy;
  }
}
