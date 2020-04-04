import { AuthGuard } from './common/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // { path: "", component: CreateScheduleComponent },
  { path: 'generate', component: CreateScheduleComponent, canActivate: [AuthGuard] },
  { path: 'data', loadChildren: './data-entry/data-entry.module#DataEntryModule', canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
