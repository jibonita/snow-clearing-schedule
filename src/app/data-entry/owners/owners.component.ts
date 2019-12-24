import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {

  constructor(private fb: FormBuilder, ) { }

  ownersForm = this.fb.group({
    title: ['', Validators.required],
    ownerName: ['', Validators.required],
  });
  ngOnInit() {
  }

  saveOwner() {
    console.log(this.ownersForm.value);
  }
}
