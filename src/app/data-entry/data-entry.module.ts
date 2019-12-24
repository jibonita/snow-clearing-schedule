import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnersComponent } from './owners/owners.component';
import { DataEntryRoutingModule } from './data-entry-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OwnersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataEntryRoutingModule,
  ]
})
export class DataEntryModule { }
