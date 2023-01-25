import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class reactiveformComponent implements OnInit {
  notAllowedNames = ['Codemind', 'Technology'];
  genders = [
    {
      id: '1',
      value: 'Male'
    },
    {
      id: '2',
      value: 'Female'
    }
  ]
  myReactiveForm: FormGroup;


  constructor() { 
  
 this.createForm();

  }

  ngOnInit() {
  }

  createForm(){
    this.myReactiveForm = new FormGroup({
  
      'first name': new FormControl('',[Validators.required,Validators.minLength(5)]),
      'last name': new FormControl('',[Validators.required,Validators.minLength(10)]),
      'age':new FormControl('',[Validators.required,Validators.minLength(17)]),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'mobile number':new FormControl('',[Validators.required,Validators.minLength(10)]),
      'city': new FormControl('mumbai'),
      'gender':new FormControl('Female'),
      'password':new FormControl('',[Validators.required]),
      'conformpassword':new FormControl('',[Validators.required])
      

  
    })
  }
  OnSubmit()
  {
  
    console.log(this.myReactiveForm);
    
  }



}
