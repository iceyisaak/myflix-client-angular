import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

// Declare API
const apiUrl = 'https://myflix-20210211.herokuapp.com/movies';

@Injectable({
  providedIn: 'root'
})


export class UserRegistrationService {

  // Inject HttpClient Module to Constructor Params
  constructor(private http: HttpClient) {

  }


  // Making API calls for UserRegistration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users', userDetails).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred: ', error.error.message)
    } else {
      console.error(
        `Error Status Code ${error.status}, `
        +
        `Error Body is: ${error.error}`
      )
    }
    return throwError(
      'An Error has occurred. Please try again later.'
    )
  }
}

export class GetAllMoviesService {
  constructor(private http: HttpClient) {

  }
  getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token')

    return this.http.get(apiUrl + 'movies', {
      headers: new HttpHeaders({
        Authorization: 'Bearer' + token
      })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    )
  }

  // Non-type response extraction
  private extractResponseData(res: Response): any {
    const body = res;
    return body || {}
  }
}
