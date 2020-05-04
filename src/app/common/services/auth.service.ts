import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
   providedIn: 'root',
})
export class AuthService {
   serverUrl = 'http://localhost:3000';
   httpOptions = {
      headers: new HttpHeaders({
         'Content-Type': 'application/json',
         Authorization: 'my-auth-token',
      }),
   };

   constructor(private http: HttpClient) {}

   login(username: string, password: string): Observable<boolean> {
      return this.http
         .post<{ accessToken: string }>(
            this.serverUrl + '/auth/login',
            { username, password },
            this.httpOptions
         )
         .pipe(
            map((result) => {
               localStorage.setItem('access_token', result.accessToken);
               return true;
            })
         );
   }

   logout() {
      localStorage.removeItem('access_token');
   }

   public get loggedIn(): boolean {
      return localStorage.getItem('access_token') !== null;
   }
}
