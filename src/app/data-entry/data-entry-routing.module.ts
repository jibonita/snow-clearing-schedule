import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OwnersComponent } from './owners/owners.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
    { path: "add", component: OwnersComponent },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class DataEntryRoutingModule { }