import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
   providedIn: 'root',
})
export class AuthService {
   serverUrl = 'http://localhost:3000';
   TOKEN_NAME = 'access_token';

   constructor(private http: HttpClient) {}

   public getToken(): string {
      return localStorage.getItem(this.TOKEN_NAME);
   }

   login(username: string, password: string): Observable<boolean> {
      return this.http
         .post<{ accessToken: string }>(this.serverUrl + '/auth/login', {
            username,
            password,
         })
         .pipe(
            map((result) => {
               localStorage.setItem(this.TOKEN_NAME, result.accessToken);
               return true;
            })
         );
   }

   logout() {
      localStorage.removeItem(this.TOKEN_NAME);
   }

   public get loggedIn(): boolean {
      return localStorage.getItem(this.TOKEN_NAME) !== null;
   }
}
