import { DataEntry } from "./../data/database";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-schedule",
  templateUrl: "./create-schedule.component.html",
  styleUrls: ["./create-schedule.component.css"]
})
export class CreateScheduleComponent implements OnInit {
  owners = this.data.owners;
  flats = this.data.flats;
  parkingLots = this.data.parkingLots;
  startWeek = new Date(2019, 11, 2);
  endWeek = new Date(2020, 2, 30);
  scheduleList = [];

  constructor(private data: DataEntry) {}

  ngOnInit() {
    this.fillScheduleWeeks();
  }

  shuffle(arrayOrig) {
    // const array = [...arrayOrig];
    const array = arrayOrig.filter(elem => elem.active);
    let currentIndex = array.length;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      this.swapElements(array, currentIndex, randomIndex);
    }

    return array;
  }

  fillScheduleWeeks() {
    this.addFrontYardSchedule();

    this.addParkingLotsSchedule();

    return this.scheduleList;
  }

  addFrontYardSchedule() {
    let currWeekStart = this.startWeek;
    const flatsOnceScheduled = this.shuffle(this.flats);
    const flatsLen = flatsOnceScheduled.length;
    let counter = 0;

    while (currWeekStart < this.endWeek) {
      this.scheduleList.push({
        id: counter + 1,
        fromTo: `${this.formatDate(currWeekStart)} - ${this.formatDate(
          this.addDays(currWeekStart, 6)
        )}`,
        flatNo: flatsOnceScheduled[counter++ % flatsLen]
      });

      currWeekStart = this.addDays(currWeekStart, 7);
    }
  }

  addParkingLotsSchedule() {
    const parkingLotsOnceScheduled = this.shuffle(this.parkingLots);
    const parkingLotsLen = parkingLotsOnceScheduled.length;
    let position = 0;

    for (const item of this.scheduleList) {
      const currParkingLot =
        parkingLotsOnceScheduled[position % parkingLotsLen];
      if (currParkingLot.owner === item.flatNo.owner) {
        // console.log(
        //   `swapping...${position % parkingLotsLen} with ${(position + 1) %
        //     parkingLotsLen}`
        // );
        this.swapElements(
          parkingLotsOnceScheduled,
          position % parkingLotsLen,
          (position + 1) % parkingLotsLen
        );
      }

      this.scheduleList[position].parkingLot =
        parkingLotsOnceScheduled[position % parkingLotsLen];

      position++;
    }
  }

  addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  formatDate(today) {
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
    const yyyy = today.getFullYear();

    return dd + "/" + mm + "/" + yyyy;
  }

  swapElements(array: any, currentIndex: number, swapIndex: number) {
    const temporaryValue = array[currentIndex];
    array[currentIndex] = array[swapIndex];
    array[swapIndex] = temporaryValue;
  }
}
