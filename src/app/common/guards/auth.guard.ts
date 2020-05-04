import { Injectable } from '@angular/core';
import {
   CanActivate,
   ActivatedRouteSnapshot,
   RouterStateSnapshot,
   UrlTree,
   Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Payload } from '../models/payload';
import { AuthService } from '../services/auth.service';

@Injectable({
   providedIn: 'root',
})
export class AuthGuard implements CanActivate {
   constructor(private router: Router, private auth: AuthService) {}

   canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
   ):
      | Observable<boolean | UrlTree>
      | Promise<boolean | UrlTree>
      | boolean
      | UrlTree {
      if (localStorage.getItem('access_token')) {
         const token: string = localStorage.getItem('access_token');
         const payloadDecoded: Payload = JSON.parse(atob(token.split('.')[1]));

         const expireDate = new Date(+payloadDecoded.exp * 1000);
         const now = new Date();

         if (now < expireDate) {
            return true;
         }
      }

      this.auth.logout();
      this.router.navigate(['login']);
      return false;
   }
}
