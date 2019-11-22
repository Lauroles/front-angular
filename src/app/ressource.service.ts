import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Ressource} from './ressource';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {
  api = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient, public router: Router) { }

  getOneRessource(id): Observable<Ressource> {
    return this.http.get<Ressource>(this.api + '/ressources' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getRessource(): Observable<Ressource> {
    return this.http.get<Ressource>(this.api + '/ressources')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }


  createRessource(ressource): Observable<Ressource> {
    return this.http.post<Ressource>(this.api + '/ressources', JSON.stringify(ressource), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  updateRessource(ressource, id): Observable<Ressource> {
    return this.http.put<Ressource>(this.api + '/ressources' + id , JSON.stringify(ressource), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Errorrrrr Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
