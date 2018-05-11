import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Iclient } from '../entities/client';

@Injectable()
export class ClientService {

  private api = 'http://localhost:6336/api/Client';
  private headers: HttpHeaders;
constructor(private _http: HttpClient) {
  let _headers = new HttpHeaders();
    this.headers = _headers.append('Content-Type', 'application/json');
 }


getList(): Observable<Iclient[]> {
  return this._http.get<Iclient[]>(this.api,{headers: this.headers})
  .catch(this.handleError);
}

get(id: number): Observable<Iclient> {
  return this._http.get<Iclient>(`${this.api}/${id}`,{headers: this.headers})
  .catch(this.handleError);

}

post(client): Observable<Iclient> {
    return this._http.post(this.api, client,{headers: this.headers})
    .catch(this.handleError);

}

put(id: number, client): Observable<Iclient> {
  return this._http.put(`${this.api}/${id}`, client,{headers: this.headers})
  .catch(this.handleError);
}

delete(id: number) {
 this._http.delete(`${this.api}/${id}`,{headers: this.headers})
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
