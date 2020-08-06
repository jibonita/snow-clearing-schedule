import { DataEntry } from './../../data/database';
import { DataService } from './../../common/services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { Owner } from './../../common/models/owner.model';

@Component({
   selector: 'app-owners',
   templateUrl: './owners.component.html',
   styleUrls: ['./owners.component.css'],
})
export class OwnersComponent implements OnInit {
   owners = [];
   ownersForm: FormGroup;
   items: FormArray;

   constructor(
      private data: DataEntry,
      private fb: FormBuilder,
      private dataService: DataService
   ) {
      this.ownersForm = this.fb.group({
         items: this.fb.array([]),
      });
   }

   ngOnInit() {
      this.items = this.ownersForm.get('items') as FormArray;

      this.dataService.getOwners().subscribe((data: { owners: Owner[] }) => {
         const owners: Owner[] = data.owners;
         this.owners.push(...owners);

         this.fillOwnersForm(owners);
      });
   }

   fillOwnersForm(owners: Owner[]) {
      owners.forEach((owner) => {
         this.items.push(
            this.fb.group({
               id: [owner.id],
               title: [owner.title, Validators.required],
               ownerName: [owner.ownerName, Validators.required],
            })
         );
      });

      if (!this.items.length) {
         this.addItem();
      }
   }

   createItem(): FormGroup {
      return this.fb.group({
         id: '',
         title: ['', Validators.required],
         ownerName: ['', Validators.required],
      });
   }

   addItem(): void {
      this.items.push(this.createItem());
   }

   removeItem(i: number, element) {
      this.items.removeAt(i);
      // const pepa = this.items.value.map((item) => item);
      // console.log(pepa);
      this.dataService.deleteOwner(element.id).subscribe(() => {
         const pepa = this.items.value.map((item) => item);
         console.log(pepa);
      });
   }

   saveOwner() {
      console.log(this.ownersForm.value);
      //this.data.owners =
      this.ownersForm.value.items.map((owner) => {
         return {
            id: owner.id,
            title: owner.title,
            ownerName: owner.ownerName,
         };
      });

      //console.log(this.data.owners);
   }

   arrayDifference(a1, a2) {
      return a2.filter((elem) => {
         // tslint:disable-next-line: no-bitwise
         return !~a1.indexOf(elem);
         // return a1.indexOf(elem) === -1;
      });
      // let result = [];
      // for (var i = 0; i < a2.length; i++) {
      //    if (a1.indexOf(a2[i]) === -1) {
      //       result.push(a2[i]);
      //    }
      // }
      // return result;
   }
}
