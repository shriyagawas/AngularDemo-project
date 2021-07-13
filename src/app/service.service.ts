import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{map}from 'rxjs/operators'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
constructor(private http:HttpClient) { }


postEmployee(data:any)
{
return this.http.post<any>("http://localhost:3000/posts",data)

}

getEmployee()
{
  return this.http.get<any>("http://localhost:3000/posts")
 
  }

  updateEmployee(data:any,id:number)
  {
    return this.http.put<any>("http://localhost:3000/posts/"+id,data)
   
    }

    deleteEmployee(id:number)
    {
      return this.http.delete<any>("http://localhost:3000/posts/"+id)
      
      }
  

send(email:String,password:String){
  const regidata = {email1:email,pass:password}
  localStorage.setItem('userdata',JSON.stringify( regidata))
}
get()
{
 return  JSON.parse(localStorage.getItem('userdata') || '{}');
}
  
}


