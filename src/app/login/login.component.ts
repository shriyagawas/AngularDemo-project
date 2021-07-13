
import { Component, OnInit } from '@angular/core';

import { Router, Routes } from '@angular/router';

import{ FormGroup, FormBuilder,Validators} from '@angular/forms'

import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
  loginform!:FormGroup;
 constructor(private service : ServiceService , private routes:Router,private formbuilder:FormBuilder){}
 ngOnInit(): void {
  this.loginform = this.formbuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
})
 }
  getinfo(){
let email = this.loginform.value.email
    let pass = this.loginform.value.password;
  const obj= this.service.get();
  console.log(obj.email1)
if(obj.email1 == email && obj.pass == pass)
  {
    this.routes.navigate(['/dashboard'])
  }
 else{
   this.routes.navigate(['/login']);

   this.loginform.reset();
   
 }
  }
}
