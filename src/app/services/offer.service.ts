import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Ioffer } from '../entities/offer';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class OfferService {

  //private api = 'http://localhost:6336/api/Offer';
  private api = environment.api + "Offer";
  private headers: HttpHeaders;
  constructor(private _http: HttpClient) {
    let _headers = new HttpHeaders();
    this.headers = _headers.append('Content-Type', 'application/json');
   }


  getList(id: number): Observable<Ioffer[]> {
    return this._http.get<Ioffer[]>(`${this.api}/${id}/fitter`,{headers: this.headers})
    .catch(this.handleError);
  }

  get(id: number): Observable<Ioffer> {
    return this._http.get<Ioffer>(`${this.api}/${id}`,{headers: this.headers})
    .catch(this.handleError);
    
  }

  delete(id: number) {
    this._http.delete(`${this.api}/${id}`,{headers: this.headers})
    .catch(this.handleError);
  }

  post(offer: string): void {
    console.log(offer);
     this._http.post(`${this.api}/` , offer,{headers: this.headers}).subscribe(
       res => console.log(res.toString())
     );
    
  }

  put(id: number, offer): Observable<Ioffer> {
    return this._http.put(`${this.api}/${id}`, offer,{headers: this.headers})
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
