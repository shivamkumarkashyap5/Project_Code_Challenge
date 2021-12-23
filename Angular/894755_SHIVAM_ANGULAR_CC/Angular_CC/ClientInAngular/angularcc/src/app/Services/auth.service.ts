import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { throwError } from 'rxjs';
import { retry, catchError,map } from 'rxjs/operators';
import {ComListService} from 'src/app/Services/com-list.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  flag:any;
  url = 'http://localhost:8081/api/user'

  private componentMethodCallSource = new Subject<any>();
  componentMethodCalled$ = this.componentMethodCallSource.asObservable();
  callComponentMethod() {
    this.componentMethodCallSource.next();
  }

  constructor(private router: Router,
              private http: HttpClient,
              private com:ComListService
            
              ) {}
  signInWithEmailAndPassword (userDetails:any) {
    return this.http.post<any>(this.url+'/login',userDetails)
    .pipe(map(
      (response) => {
        this.flag=response;
        console.log(this.flag)
this.com.check(JSON.stringify(this.flag));

          return response;
      }
  ),
      retry(1),
      catchError(this.handleError)
    )
  }

  get logout() {
      return this.http.get(this.url + '/logout')
          .pipe(map((response) => {
          
            return response}))
          
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
