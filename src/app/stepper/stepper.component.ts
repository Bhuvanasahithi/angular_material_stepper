import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,RequiredValidator,EmailValidator, Validators} from '@angular/forms';
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit{
  formgroup: FormGroup;
  
  ngOnInit(){
     this.formgroup=new FormGroup({
      firstFormGroup:new FormGroup({
        firstName:new FormControl('',Validators.required),
        lastName:new FormControl('',Validators.required),
        emailAddress:new FormControl('',[Validators.required,Validators.email]),
        phoneNumber:new FormControl('',Validators.required),
        businessName:new FormControl('',Validators.required),
        businessType:new FormControl('',Validators.required),
        size:new FormControl('',Validators.required)
      }),
      addressGroup:new FormGroup({
        streetAddress:new FormControl('',Validators.required),
        streetAddress2:new FormControl(''),
        city:new FormControl('',Validators.required),
        state:new FormControl('',Validators.required),
        zipcode:new FormControl('',Validators.required)
      }) 
    });
  }
 
  
 
}
