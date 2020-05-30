import { DataEntry } from './../../data/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Cacheable } from '../cacheable';
import { map } from 'rxjs/operators';

@Injectable({
   providedIn: 'root',
})
export class DataService {
   // temp fields here
   serverUrl = 'http://localhost:3000';
   getOwnersUrl = this.serverUrl + '/data/owners';
   getFlatsUrl = this.serverUrl + '/data/flats';
   deleteOwnerUrl = this.serverUrl + '/data/owners';

   private ownersList: Cacheable<any> = new Cacheable<any>();
   private flatsList: Cacheable<any> = new Cacheable<any>();

   constructor(private http: HttpClient, private data: DataEntry) {
      this.ownersList.getHandler = () => {
         return this.http.get(this.getOwnersUrl);
         // .pipe(
         //    map((r: Response) => {
         //       // (r.json() as unknown) as string[]
         //       return r;
         //    })
         // );
      };

      this.flatsList.getHandler = () => {
         return this.http.get(this.getFlatsUrl);
      };
   }

   getOwners() {
      return this.ownersList.getData();
      // return this.http.get<any>(this.getOwnersUrl);
      // return from(this.data.owners);
   }

   getFlats() {
      return this.flatsList.getData();
      // return this.http.get<any>(this.getFlatsUrl);
      // return from(this.data.flats);
   }

   getParkingLots() {
      return from(this.data.parkingLots);
   }

   deleteOwner(id: number) {
      return this.http.delete<any>(this.deleteOwnerUrl + '/' + id).pipe(
         map((value) => {
            this.ownersList.resetCache();
            return value;
         })
      );
   }
}
