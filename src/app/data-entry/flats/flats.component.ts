import { DataService } from './../../common/services/data.service';
import { DataEntry } from './../../data/database';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { Owner } from 'src/app/data/owner.model';
import { Flat } from 'src/app/data/flat.model';

@Component({
   selector: 'app-flats',
   templateUrl: './flats.component.html',
   styleUrls: ['./flats.component.css'],
})
export class FlatsComponent implements OnInit {
   owners = [];
   flatsForm: FormGroup;
   items: FormArray;

   constructor(
      private data: DataEntry,
      private fb: FormBuilder,
      private dataService: DataService
   ) {
      this.flatsForm = this.fb.group({
         items: this.fb.array([]),
      });
   }

   ngOnInit() {
      this.items = this.flatsForm.get('items') as FormArray;

      this.dataService.getOwners().subscribe((data: { owners: Owner[] }) => {
         const owners: Owner[] = data.owners;
         this.owners.push(...owners);

         this.dataService.getFlats().subscribe((dbFlats: { flats: Flat[] }) => {
            const flats: Flat[] = dbFlats.flats;
            flats.forEach((flat: Flat) => {
               this.items.push(
                  this.fb.group({
                     title: [flat.name, Validators.required],
                     owner: [this.owners[flat.owner - 1], Validators.required],
                     active: [flat.active],
                  })
               );
            });

            if (!this.items.length) {
               console.log('prazno items');
               this.addItem();
            }
         });
      });
   }

   createItem(): FormGroup {
      return this.fb.group({
         title: ['', Validators.required],
         owner: ['', Validators.required],
         active: [true],
      });
   }

   addItem(): void {
      this.items.push(this.createItem());
   }

   removeItem(i: number) {
      this.items.removeAt(i);
   }

   saveFlat() {
      console.log(this.flatsForm.value.items);
      this.data.flats = this.flatsForm.value.items.map((flat, index) => {
         return {
            id: index,
            name: flat.title,
            owner: flat.owner.id,
            active: flat.active,
         };
      });
   }

   onSelect(element) {
      console.log(element.value);
   }
}
