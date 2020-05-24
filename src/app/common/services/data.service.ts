import { DataEntry } from './../../data/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Cacheable } from '../cacheable';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
   providedIn: 'root',
})
export class DataService {
   // temp fields here
   serverUrl = 'http://localhost:3000';
   getOwnersUrl = this.serverUrl + '/data/owners';

   private ownersList: Cacheable<any> = new Cacheable<any>();

   constructor(private http: HttpClient, private data: DataEntry) {
      this.ownersList.getHandler = () => {
         // get data from server
         return this.http.get(this.getOwnersUrl).pipe(
            map((r: Response) => {
               // (r.json() as unknown) as string[]
               return r;
            })
         );
      };
   }

   getOwners() {
      return this.ownersList.getData();
      // return this.http.get<any>(this.getOwnersUrl);
      // return from(this.data.owners);
   }

   getFlats() {
      return this.http.get<any>(this.serverUrl + '/data/flats');
      // return from(this.data.flats);
   }

   getParkingLots() {
      return from(this.data.parkingLots);
   }
}
