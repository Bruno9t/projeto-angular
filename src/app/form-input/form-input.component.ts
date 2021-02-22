import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

import {
   appAnimations
} from '../app-animations'

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.sass'],
  animations:[
    appAnimations.labelAnimation,
    appAnimations.spanAnimation,
    appAnimations.placeholderAnimation
  ]
})
export class FormInputComponent implements OnInit {
  constructor(
    
  ) { }

  @Input()
  labelName:string=''

  @Input()
  type:string = ''

  @Input()
  placeholder?:string=''


  inputIsOpen=false

  ngOnInit(): void {

  }

  toggleLabelState(){
    this.inputIsOpen = !this.inputIsOpen 
  }

  openInput(){
    this.inputIsOpen = true
  }

  closeInput(){
    this.inputIsOpen = false
  }
  
  // input(){
  //   console.log(this.formControlName)
  // }
}
