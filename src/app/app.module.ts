import { DataEntry } from "./data/database";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CreateScheduleComponent } from "./create-schedule/create-schedule.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, CreateScheduleComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [DataEntry],
  bootstrap: [AppComponent]
})
export class AppModule {}
