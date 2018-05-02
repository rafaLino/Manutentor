import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Ioffer } from '../entities/offer';

@Injectable()
export class OfferService {

  private api = 'http://localhost:6336/api/Offer/';
  constructor(private _http: HttpClient) { }


  getList(): Observable<Ioffer[]> {
    return this._http.get<Ioffer[]>(this.api)
    .catch(this.handleError);
  }

  get(id: number): Observable<Ioffer> {
    return this._http.get<Ioffer>(`${this.api}/${id}`)
    .catch(this.handleError);
  }

  delete(id: number) {
    this._http.delete(`${this.api}/${id}`)
    .catch(this.handleError);
  }

  post(offer): Observable<Ioffer> {
    return this._http.post(this.api , offer)
    .catch(this.handleError);
  }

  put(id: number, offer): Observable<Ioffer> {
    return this._http.put(`${this.api}/${id}`, offer)
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
