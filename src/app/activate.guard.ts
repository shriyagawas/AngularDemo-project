import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import {ServiceService } from './service.service';


 @Injectable({
   providedIn: 'root'
 })
export class ActivateGuard implements CanActivate {
  
  constructor(private serviceservice:ServiceService , private router:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean 
    {
if(localStorage.getItem('userdata')!=null)
      {
        return true;
      }
      else{
        alert("please login");
        this.router.navigate(['login']);
        return false
      }

      
    }
  }
