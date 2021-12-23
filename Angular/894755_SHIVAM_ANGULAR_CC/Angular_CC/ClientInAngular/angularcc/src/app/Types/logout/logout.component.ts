import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { AuthService } from  'src/app/Services/auth.service';
import {AppComponent} from 'src/app/app.component';
import {ComListService} from 'src/app/Services/com-list.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _authService: AuthService, private router: Router,private app:AppComponent,private cs:ComListService) {}

  ngOnInit() {
   if (this._authService.logout){
   
    this.app.logoutCheck();
    this.cs.logoutforCompanyList();
this.router.navigate(['/company-login']);
   }
  }


}
