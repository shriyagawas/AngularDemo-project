import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{FormBuilder,FormGroup} from'@angular/forms'
import { dashboardmodel } from './dashboard.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


formValue ! :FormGroup;

dashboardmodelobj:dashboardmodel=new dashboardmodel();
employeeData!:any;
//showAdd !:boolean;
//showupdate!:boolean;
  
 

  constructor(private router:Router,private formbuilder:FormBuilder,private service:ServiceService) { }
 
   ngOnInit(): void {
     this.formValue=this.formbuilder.group({
       firstName:[''],
       lastName:[''],
    department:[''],
       email:[''],
       mobile:[''],
       salary:[''],
     })
    
     this.getallemployees();
  }

clickAddEmployee(){
  this.formValue.reset();
  //this.showAdd = true;
  //this.showupdate= false;


}


  postEmployeeDetails()
  {
    this.dashboardmodelobj.firstName=this.formValue.value.firstName;
    this.dashboardmodelobj.lastName=this.formValue.value.lastName;
    this.dashboardmodelobj.department=this.formValue.value.department;
    this.dashboardmodelobj.email=this.formValue.value.email;
    this.dashboardmodelobj.mobile=this.formValue.value.mobile;
    this.dashboardmodelobj.salary=this.formValue.value.salary;

    this.service.postEmployee(this.dashboardmodelobj)
    .subscribe((res: any)=>{
      console.log(res);
      alert("employee added successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getallemployees();
      
    })
  }
getallemployees()
{
  this.service.getEmployee()
  .subscribe(res=>{
    this.employeeData = res;
  })
}

deleteEmployee(row:any)
{
   this.service.deleteEmployee(row.id)
   .subscribe(res=>{
     //alert("employee deleted successfully");
     this.getallemployees();
   })
}

onedit(row: any)
{
  //this.showAdd = false;
  //this.showupdate= true;
this.dashboardmodelobj.id = row.id;

  this.formValue.controls['firstName'].setValue(row.firstName);
  this.formValue.controls['lastName'].setValue(row.lastName);
  this.formValue.controls['department'].setValue(row.department);
  this.formValue.controls['email'].setValue(row.email);
  this.formValue.controls['mobile'].setValue(row.mobile);
  this.formValue.controls['salary'].setValue(row.salary);

}
updateEmployeeDetails()
{
  this.dashboardmodelobj.firstName=this.formValue.value.firstName;
  this.dashboardmodelobj.lastName=this.formValue.value.lastName;
this.dashboardmodelobj.department=this.formValue.value.department;
  this.dashboardmodelobj.email=this.formValue.value.email;
  this.dashboardmodelobj.mobile=this.formValue.value.mobile;
  this.dashboardmodelobj.salary=this.formValue.value.salary;

  this.service.updateEmployee(this.dashboardmodelobj,this.dashboardmodelobj.id)
  .subscribe(res=>{
    alert("updateded");
    let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getallemployees();
  })
}

}





















