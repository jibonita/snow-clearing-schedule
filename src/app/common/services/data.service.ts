import { DataEntry } from './../../data/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
   providedIn: 'root',
})
export class DataService {
   // temp fields here
   serverUrl = 'http://localhost:3000';

   constructor(private http: HttpClient, private data: DataEntry) {}

   getOwners() {
      return this.http.get<any>(this.serverUrl + '/data/owners');
      //return from(this.data.owners);
   }

   getFlats() {
      return this.http.get<any>(this.serverUrl + '/data/flats');
      // return from(this.data.flats);
   }

   getParkingLots() {
      return from(this.data.parkingLots);
   }
}
