import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ FormGroup, FormBuilder,Validators} from '@angular/forms'
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerationform!:FormGroup;
constructor(private routes:Router,private formbuilder:FormBuilder,private service:ServiceService) { }
 ngOnInit(): void {
    this.registerationform = this.formbuilder.group({
email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
}
      )
  }
register()
  {
    let email = this.registerationform.value.email;
    let pass = this.registerationform.value.password;
    this.routes.navigate(['login']);
    this.service.send(email,pass)
}

}
