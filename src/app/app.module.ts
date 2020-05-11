import { DataEntry } from './data/database';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthService } from './common/services/auth.service';
import { AuthInterceptor } from './common/interceptors/auth.interceptor';

@NgModule({
   declarations: [AppComponent, CreateScheduleComponent, LoginComponent],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      BsDatepickerModule.forRoot(),
      HttpClientModule,
   ],
   providers: [
      DataEntry,
      AuthService,
      {
         provide: HTTP_INTERCEPTORS,
         useClass: AuthInterceptor,
         multi: true,
      },
   ],
   bootstrap: [AppComponent],
})
export class AppModule {}
