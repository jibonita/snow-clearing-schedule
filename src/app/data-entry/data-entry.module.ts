import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnersComponent } from './owners/owners.component';
import { DataEntryRoutingModule } from './data-entry-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DataFormsComponent } from './data-forms/data-forms.component';
import { FlatsComponent } from './flats/flats.component';

@NgModule({
  declarations: [OwnersComponent, DataFormsComponent, FlatsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataEntryRoutingModule,
    TabsModule.forRoot(),
  ],
})
export class DataEntryModule { }
