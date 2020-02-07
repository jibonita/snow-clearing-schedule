import { DataEntry } from './../../data/database';
import { DataService } from './../../common/services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
   selector: 'app-owners',
   templateUrl: './owners.component.html',
   styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {
   owners = [];
   ownersForm: FormGroup;
   items: FormArray;

   constructor(
      private data: DataEntry,
      private fb: FormBuilder,
      private dataService: DataService,
   ) {
      this.ownersForm = this.fb.group({
         // items: this.fb.array([this.createItem()])
         items: this.fb.array([])
      });
   }

   ngOnInit() {
      this.items = this.ownersForm.get('items') as FormArray;
      this.dataService.getOwners().subscribe(
         data => {
            this.owners.push(data);
            if (data) {
               this.items.push(
                  this.fb.group({
                     title: [data.title, Validators.required],
                     ownerName: [data.ownerName, Validators.required]
                  })
               );
            }
         },
         error => { },
         () => {
            if (!this.items.length) {
               this.addItem();
            }
         });
   }

   createItem(): FormGroup {
      return this.fb.group({
         title: ['', Validators.required],
         ownerName: ['', Validators.required]
      });
   }

   addItem(): void {
      this.items.push(this.createItem());
   }

   removeItem(i: number) {
      this.items.removeAt(i);
   }

   saveOwner() {
      console.log(this.ownersForm.value);
      this.data.owners =
         this.ownersForm.value.items.map((owner, index) => {
            return {
               id: index,
               title: owner.title,
               ownerName: owner.ownerName,
            };
         });
   }
}
