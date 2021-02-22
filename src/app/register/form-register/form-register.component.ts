import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.sass']
})
export class FormRegisterComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  // userProfile = this.fb.group({
  //   name:[null],
  //   surname:[null]
  // })


}
