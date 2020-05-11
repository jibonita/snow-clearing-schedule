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
   // httpOptions = {
   //    headers: new HttpHeaders({
   //       'Content-Type': 'application/json',
   //       Authorization: 'my-auth-token',
   //    }),
   // };

   constructor(private http: HttpClient, private data: DataEntry) {}

   getOwners() {
      return this.http.get<any>(
         this.serverUrl + '/data/owners'
         // this.httpOptions
      );
      //return from(this.data.owners);
   }

   getFlats() {
      return from(this.data.flats);
      //return from([]);
   }

   getParkingLots() {
      return from(this.data.parkingLots);
   }
}
