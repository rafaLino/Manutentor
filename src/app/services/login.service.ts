import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Iclient } from '../entities/client';
import { Ifitter } from '../entities/fitter';
import { environment } from '../../environments/environment';

@Injectable()
export class LoginService {
//private api = 'http://localhost:6336/api/Login';
private api = environment.api + 'Login';
private headers: HttpHeaders;
  constructor(private _http: HttpClient) {
    let _headers = new HttpHeaders();
    this.headers = _headers.append('Content-Type', 'application/json');
   }

  LoginClient(data: string): Observable<Iclient> {
    
  return  this._http.post<Iclient>(this.api, data, {headers: this.headers})
  .map( user => {
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
    }
    return user;
   })
   .catch(this.handleError);


  }

  LoginFitter(data: string): Observable<Ifitter> {
    
    return  this._http.post<Ifitter>(`${this.api}/Fitter`, data, {headers: this.headers})
    .map( user => {
      if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));          
      }
      return user;
     })
     .catch(this.handleError);
  
  
    }

  LogOut(): void {
    localStorage.removeItem('currentUser');
  }


  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return Observable.throw(errorMessage);
  }
}
