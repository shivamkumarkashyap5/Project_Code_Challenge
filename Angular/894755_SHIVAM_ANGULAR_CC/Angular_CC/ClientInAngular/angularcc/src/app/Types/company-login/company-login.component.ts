import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { AuthService } from  'src/app/Services/auth.service';
import {AppComponent} from 'src/app/app.component'
import {FormGroup,FormBuilder, FormsModule,Validators} from '@angular/forms';
import {ComListService} from 'src/app/Services/com-list.service';



@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.css']
})


export class CompanyLoginComponent implements OnInit {
  signinForm= new FormGroup({});
  flag:any="";
  msg:string="";
  submitted = false;

  constructor(private authService: AuthService,
              private router: Router,public formBuilder:FormBuilder,
              private app :AppComponent,
              private comList:ComListService,
            
              ) { 
                
               }

                
  ngOnInit():void {
  
    this.signinForm=this.formBuilder.group({
      email: ['', [Validators.compose([Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'), Validators.minLength(1)])]],
     
  password: ['', [Validators.required, Validators.minLength(4)]],
      
       });
  }
  get f() { return this.signinForm.controls; }

  onSignin() {
    this.submitted = true;
    const userDetails = {
     email:this.signinForm.get("email")?.value,
      password: this.signinForm.get('password')?.value
    };
    console.log(userDetails.email+""+userDetails.password);


  

    this.authService.signInWithEmailAndPassword(userDetails)
      .subscribe(
        (res:any) => {
          if(res) {
            console.log('res: ', res);
            this.flag=res;
            
                  console.log(this.flag);
                 this.check();
            this.router.navigate(['/company-list']);
            
          }
        },
        (err:any) => {
          alert('Invalid username/password');
        }
      );
    this.signinForm.reset();
  }

  check(){
this.app.checkStatus(this.flag);
//this.comList.checkStatusCompanyList(this.flag);
    
  }

  
}