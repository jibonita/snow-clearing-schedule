import { DataEntry } from './../../data/database';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
    private data: DataEntry,
  ) { }

  getOwners() {
    return from(this.data.owners);
    // return from([]);
  }

  getFlats() {
    return from(this.data.flats);
    //return from([]);
  }

  getParkingLots() {
    return from(this.data.parkingLots);
  }
}
