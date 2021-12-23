import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError ,map} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stock } from 'src/app/Types/stock';
import { StockDetails} from 'src/app/Types/stockdetails';
@Injectable({
  providedIn: 'root'
})
export class StockauthService {

  apiURL = 'http://localhost:8081/api';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

fromdate="";
todate="";
com1="";
com2="";
data1:any;
  getStockFromRemote(userModel:any): Observable<Map<string,StockDetails>>{

    this.fromdate=userModel['fromdate'];
    this.todate=userModel['todate'];
    this.com1=userModel['com1'];
    this.com2=userModel['com2'];
    console.log(userModel['com1']);
   console.log(userModel['com2']);
    
    return this.http.get(this.apiURL + '/stock/com1/'+this.com1+'/com2/'+this.com2+'/fromdate/'+this.fromdate+'/todate/'+this.todate)
    .pipe(
      map((data: any) => {
        console.log(data);
        this.data1=data;
      
        return data;
      

  })

      )
}

get stockdata(){
  return this.data1;
}

}