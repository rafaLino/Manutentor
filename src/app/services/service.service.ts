import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Iservice } from '../entities/service';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
@Injectable()
export class ServiceService {

  private api = 'http://localhost:6336/api/Service/';
private headers: HttpHeaders
  constructor(private _http: HttpClient) { 
    let _headers = new HttpHeaders();
    this.headers = _headers.append('Content-Type', 'application/json');
  }

getList(): Observable<Iservice[]> {
  return this._http.get<Iservice[]>(this.api,{headers: this.headers})
      .catch(this.handleError);
}

get(id: number): Observable<Iservice> {
  return this._http.get<Iservice>(`${this.api}/${id}`,{headers: this.headers})
  .catch(this.handleError);
}

delete(id: number) {
  this._http.delete(`${this.api}/${id}`,{headers: this.headers})
  .catch(this.handleError);
}

post(service): Observable<Iservice> {
 return this._http.post(this.api, service,{headers: this.headers})
 .catch(this.handleError);
}

put(id: number, service): Observable<Iservice> {
  return this._http.put(`${this.api}/${id}`, service,{headers: this.headers})
  .catch(this.handleError);
}


getByStatusId(id: number): Observable<Iservice[]> {
  return this._http.get<Iservice[]>(`${this.api}/${id}/status`,{headers: this.headers})
  .catch(this.handleError);
}

getByStatus(id: string): Observable<Iservice[]> {
  return this._http.get<Iservice[]>(`${this.api}/status/${id}`,{headers: this.headers})
  .catch(this.handleError);
}

setStatus(id: number, status: number) {
  return this._http.put(`${this.api}/${id}/status`, status,{headers: this.headers})
  .catch(this.handleError);
}

getImage(id: number): Observable<any> {
  return this._http.get(`${this.api}/${id}/image`,{headers: this.headers})
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
