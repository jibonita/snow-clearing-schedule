import { DataEntry } from './../../data/database';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-flats',
  templateUrl: './flats.component.html',
  styleUrls: ['./flats.component.css']
})
export class FlatsComponent implements OnInit {

  owners = this.data.owners;
  flatsForm: FormGroup;
  items: FormArray;

  constructor(
    private data: DataEntry,
    private fb: FormBuilder,
  ) {
    this.flatsForm = this.fb.group({
      items: this.fb.array([this.createItem()])
    });
  }

  ngOnInit() {
    this.items = this.flatsForm.get('items') as FormArray;
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
    this.data.flats =
      this.flatsForm.value.items.map((flat, index) => {
        return {
          id: index,
          name: flat.title,
          owner: flat.owner.id,
          active: flat.active
        };
      });
  }

  onSelect(element) {
    console.log(element.value);
  }
}
