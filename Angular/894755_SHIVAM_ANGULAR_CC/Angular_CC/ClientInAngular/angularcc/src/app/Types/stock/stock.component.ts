import { Component, OnInit } from '@angular/core';

import {User} from 'src/app/Types/User';
import {StockauthService} from 'src/app/Services/stockauth.service'
import { Stock } from '../stock';

//declare const mytest:any;

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

 

  constructor(
  public stockauth:StockauthService
  ) { }
 data2:any;
 data3:any;
 stockpriceNew:any=[];
 companynameNew:any=[];
 fromdateNew:any=[];
 todateNew:any=[];
 dates1 :any=[];
 arrCount:any=0;
 flag:string="false";

  userModel= new Stock("","","","");
  
  login(userModel:any){

    console.log(this.userModel);


    this.stockauth.getStockFromRemote(this.userModel).subscribe(
      (data:{})=>{
     
       this.getstockdata();
      console.log("response"+JSON.stringify(data));
     if(Object.keys(data).length>0)
     this.flag="true";

     
  },

  (error:any)=>{ console.log("response from error")

}
  
  )


  }
  ngOnInit(): void {
 
  }


  getstockdata(){

    this.data2=this.stockauth.stockdata;
      console.log(JSON.stringify(this.data2));
     

      let jsonObject :any= {};  
 let j=0;

for(let key in this.data2){
  jsonObject[key] = this.data2[key]  ;
  let arr=this.data2[key];
  for(let i in arr){
    console.log(arr[i].companyname);
    this.companynameNew[j]=arr[i].companyname;
    this.stockpriceNew[j]=arr[i].stockprice;
    console.log(arr[i].stockprice);
    j++;
    console.log(this.companynameNew+"   "+this.stockpriceNew);
    this.fromdateNew=this.userModel.fromdate;
    this.todateNew=this.userModel.todate;
    this.arrCount++;
  

    var start      = this.fromdateNew.split('-');
    var end        = this.todateNew.split('-');
    var startYear  = Number(start[0]);
    var endYear    = Number(end[0]);
    var dates=[];

    for(let i = startYear; i <= endYear; i++) {
      var endMonth = i != endYear ? 11 : parseInt(end[1]) - 1;
      var startMon = i === startYear ? parseInt(start[1])-1 : 0;
      for(let j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j+1) {
        var month = j+1;
        var displayMonth = month < 10 ? '0'+month : month;
        dates.push([i, displayMonth, '01'].join('-'));
      }
    }
    this.dates1=dates;
    console.log(dates);
   
  }
  
  
} 
//console.log(JSON.stringify(jsonObject)) ;


    
  }

  counter(i: number) {
    return new Array(i);
}
  


}
