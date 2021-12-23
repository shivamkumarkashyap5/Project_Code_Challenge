import { Injectable } from '@angular/core';
import {CompanyListComponent} from 'src/app/Types/company-list/company-list.component';

@Injectable({
  providedIn: 'root'
})
export class ComListService {

  flag1 :string="";
  
  constructor(
    ) { }

logoutforCompanyList(){
this.flag1="false";

}
check(flag:any){
  this.flag1=flag;

}


get checkcomList(){
  return this.flag1;
}
}
