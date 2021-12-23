import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CompanyDetails } from 'src/app/Types/CompanyDetails';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  apiURL = 'http://localhost:8081/api';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  


  getCompanies(): Observable<CompanyDetails> {
    return this.http.get<CompanyDetails>(this.apiURL + '/stock/companystocks')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  
  
  handleError(error:any) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       
       errorMessage = error.error.message;
     } else {
    
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}