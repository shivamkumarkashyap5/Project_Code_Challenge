import { Component, OnInit } from '@angular/core';
import{AuthService} from 'src/app/Services/auth.service'
import { Observable } from 'rxjs';
import { Router } from  '@angular/router';


//declare const myTest: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mStock';
  LoginStatus?:Observable<boolean>;

 //LoginStatus:boolean=false;

 flag1:string="";

  constructor(
 
  private acct:AuthService,
  private router: Router

 
  
  ){}
ngOnInit(){
  this.router.navigate([''])
 // myTest();
}
logoutCheck(){
  this.flag1="false";
}

checkStatus(flag:any){
// this.LoginStatus=this.acct.isLoggedIn;
this.flag1=JSON.stringify(flag);


 // console.log(JSON.stringify(flag));
 // console.log(typeof(JSON.stringify(flag)));

}


  
}
