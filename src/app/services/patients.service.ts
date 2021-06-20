import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Patient } from '../util/model/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  hostUrl = environment.baseAPI;

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    switch (error.status) {
      case 404: {
        return `Not Found: ${error.message}`;
      }
      case 403: {
        return `Access Denied: ${error.message}`;
      }
      case 500: {
        return `Internal Server Error: ${error.message}`;
      }
      default: {
        return `Unknown Server Error: ${error.message}`;
      }

    }
  }

  fetchData(): Observable<Patient[]> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');

    return this.http.get<Patient[]>(`${this.hostUrl}/patients`, { headers: headers }).pipe(
      catchError(error => {
        let errorMsg: string;
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`;
        } else {
          errorMsg = this.handleError(error);
        }

        return throwError(errorMsg);
      })
    );
  }
}
