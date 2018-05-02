import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Ifitter } from '../entities/fitter';
import { Observable } from 'rxjs/Observable';
import { Iservice } from '../entities/service';

@Injectable()
export class FitterService {

  private api = 'http://localhost:6336/api/Fitter/';
  constructor(private _http: HttpClient) { }

  getList(): Observable<Ifitter[]> {
    return this._http.get<Ifitter[]>(this.api)
    .catch(this.handleError);
  }

  get(id: number): Observable<Ifitter> {
    return this._http.get<Ifitter>(`${this.api}/${id}`)
    .catch(this.handleError);
  }

post(fitter): Observable<Ifitter> {
  return this._http.post(this.api, fitter)
  .catch(this.handleError);
}

put(id: number, fitter): Observable<Ifitter> {
    return this._http.put(`${this.api}/${id}`, fitter)
    .catch(this.handleError);
}

delete(id: number) {
  this._http.delete(`${this.api}/${id}`)
  .catch(this.handleError);
}

getByDisponibilidae(): Observable<Ifitter[]> {
  return this._http.get<Ifitter[]>(`${this.api}/disponivel`)
  .catch(this.handleError);
}

getByCidade(cidade: string): Observable<Ifitter[]> {
  return this._http.get<Ifitter[]>(`${this.api}/${cidade}/servico`)
  .catch(this.handleError);
}

setDisponibilidade(id: number) {
  this._http.put(`${this.api}/${id}/servico`, id)
  .catch(this.handleError);
}

addServico(fitterId: number, serviceId: number) {

  this._http.post(`${this.api}/servico`, [fitterId, serviceId])
  .catch(this.handleError);
}

removeServico(fitterId: number, serviceId: number) {
  this._http.delete(`${this.api}/servico/${fitterId}/${serviceId}`)
  .catch(this.handleError);
}

getServico(fitterId: number): Observable<Iservice[]> {
  return this._http.get<Iservice[]>(`${this.api}/servico/${fitterId}`)
  .catch(this.handleError);
}


getRatingList(): Observable<any> {
  return this._http.get(`${this.api}/rating`)
  .catch(this.handleError);
}

getRating(id: number): Observable<any> {
  return this._http.get(`${this.api}/${id}/rating`)
  .catch(this.handleError);
}

postRating(id: number, comments: string): Observable<any> {
  return this._http.post(`${this.api}/${id}/rating`, comments)
  .catch(this.handleError);
}

putRating(id: number, comments: string): Observable<any> {
  return this._http.put(`${this.api}/${id}/rating`, comments)
  .catch(this.handleError);
}

deleteRating(id: number) {
  this._http.delete(`${this.api}/${id}/rating`)
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
