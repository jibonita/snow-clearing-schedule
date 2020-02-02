import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
   selector: 'app-owners',
   templateUrl: './owners.component.html',
   styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {
   ownersForm: FormGroup;
   items: FormArray;

   constructor(private fb: FormBuilder) {
      this.ownersForm = this.fb.group({
         items: this.fb.array([this.createItem()])
      });
   }

   ngOnInit() {
      this.items = this.ownersForm.get('items') as FormArray;
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
   }
}
