import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataFormsComponent } from './data-forms/data-forms.component';
import { FlatsComponent } from './flats/flats.component';
import { AuthGuard } from '../common/guards/auth.guard';

const routes: Routes = [
   { path: 'add', component: DataFormsComponent, canActivate: [AuthGuard] },
   //{ path: 'add', component: FlatsComponent },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class DataEntryRoutingModule {}
