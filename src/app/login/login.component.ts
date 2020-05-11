import { Component, OnInit } from '@angular/core';
import { AuthService } from '../common/services/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
   public username = 'a';
   public password = 'a';
   public error: string;

   constructor(private auth: AuthService, private router: Router) {}

   ngOnInit(): void {}

   public submit() {
      this.auth
         .login(this.username, this.password)
         .pipe(first())
         .subscribe(
            (result) => this.router.navigate(['generate']),
            (err) => {
               console.log(err);

               this.error = 'Could not authenticate';
            }
         );
   }
}