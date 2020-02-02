import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  // { path: "", component: CreateScheduleComponent },
  { path: 'generate', component: CreateScheduleComponent },
  { path: 'data', loadChildren: './data-entry/data-entry.module#DataEntryModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
