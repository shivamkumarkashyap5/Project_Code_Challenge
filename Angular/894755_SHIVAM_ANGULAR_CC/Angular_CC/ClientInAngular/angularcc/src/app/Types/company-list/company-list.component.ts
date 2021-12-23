import { Component, OnInit } from '@angular/core';
import { RestApiService } from "src/app/Services/rest-api";
import { CartService } from 'src/app/Services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { CompanyDetails } from '../CompanyDetails';
import {AppComponent} from 'src/app/app.component';
import {ComListService} from 'src/app/Services/com-list.service'
import { combineAll } from 'rxjs/operators';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {



  CompanyDetails:any=[];
  
  constructor(
    public restApi:RestApiService,

    private route: ActivatedRoute,
    private cartService: CartService,
    private com:ComListService
  ) { }

  flag1:string=this.com.checkcomList;
  ngOnInit() {
this.loadCompanies();

  }
  

  loadCompanies(){
    return this.restApi.getCompanies().subscribe((data:{})=>{
      this.CompanyDetails = data
    })
  }


  async addToCart(product:CompanyDetails,event: any) {

    event.target.disabled = true;
    this.cartService.addToCart(product);

    window.alert('Successfully added to watch list');
  }
/*
  checkStatusCompanyList(flag:string){
    this.flag1=flag;
  }
*/
  
 
}
