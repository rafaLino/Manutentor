import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IserviceType } from '../entities/iservice-type';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
@Injectable()
export class TypeServiceService {

  private api = 'http://localhost:6336/api/ServiceType/';
  private headers:HttpHeaders;
  constructor(private _http: HttpClient) {
    let _headers = new HttpHeaders();
    this.headers = _headers.append('Content-Type', 'application/json');
   }

  getList(): Observable<IserviceType[]> {
    return this._http.get(this.api,{headers: this.headers})
    .catch(this.handleError);
    }

    get(id: number): Observable<IserviceType> {
      return this._http.get(`${this.api}/${id}`,{headers: this.headers})
      .catch(this.handleError);
    }

    delete(id: number) {
      this._http.delete(`${this.api}/${id}`,{headers: this.headers})
      .catch(this.handleError);
    }

    post(type): Observable<IserviceType> {
      return this._http.post(this.api, type,{headers: this.headers})
      .catch(this.handleError);
    }
put(id: number, type): Observable<IserviceType> {
  return this._http.put(`${this.api}/${id}}`, type,{headers: this.headers})
  .catch(this.handleError);

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
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
}
