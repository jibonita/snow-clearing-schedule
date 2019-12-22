import { DataEntry } from "./data/database";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CreateScheduleComponent } from "./create-schedule/create-schedule.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [AppComponent, CreateScheduleComponent],
  imports: [BrowserModule, BrowserAnimationsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [DataEntry],
  bootstrap: [AppComponent]
})
export class AppModule { }
