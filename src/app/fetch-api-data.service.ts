import { Injectable, Injectable, Injectable, Injectable, Injectable, Injectable, Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { isRegExp } from 'util';

// Declare API
const apiUrl = 'https://myflix-20210211.herokuapp.com/movies/';


// userRegistration
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
    return this.http.post(`${apiUrl}users`, userDetails).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred: ', error.error.message)
    } else {
      console.error(
        `Error Status Code ${error.status}
        
        Error Body is: ${error.error}`
      )
    }
    return throwError(
      'An Error has occurred. Please try again later.'
    )
  }

}

// userLogin
@Injectable({
  providedIn: 'root'
})
export class userLoginService {
  constructor(private http: HttpClient) {
  }

  userLogin(userDetails: any): Observable<any> {

    return this.http.post(`${apiUrl}login`, userDetails)
  }
}


// getAllMovies
@Injectable({
  providedIn: 'root'
})
export class GetAllMoviesService {
  constructor(private http: HttpClient) {
  }

  getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token')

    return this.http.get(`${apiUrl}movies`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    )
  }

  // Non-type response extraction
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || {}
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred: ', error.error.message)
    } else {
      console.error(
        `Error Status Code ${error.status} 
        
         Error Body is: ${error.error}`
      )
    }
    return throwError(
      'An Error has occurred. Please try again later.'
    )
  }
}


// getOneMovie
@Injectable({
  providedIn: 'root'
})
export class getOneMovieService {
  constructor(private http: HttpClient) {
  }

  getOneMovie(): Observable<any> {

    const token = localStorage.getItem('token');

    return this.http.get(`${apiUrl}movies/:Title`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    )
  }

  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || {}
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred: ', error.error.message)
    } else {
      console.error(
        `Error Status Code ${error.status}
        
         Error Body is: ${error.error}`
      )
    }
    return throwError(
      'An Error has occurred. Please try again later.'
    )
  }
}


// Get director
@Injectable({
  providedIn: 'root'
})
export class getDirectorService {
  constructor(private http: HttpClient) {
  }

  getDirector(): Observable<any> {
    const token = localStorage.getItem('token')

    return this.http.get(`${apiUrl}movies/directors/:Name`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    )
  }

  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || {}
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred: ', error.error.message)
    } else {
      console.error(
        `Error Status Code ${error.status}
        
        Error Body is: ${error.error}`
      )
    }
    return throwError(
      'An Error has occurred. Please try again later.'
    )
  }
}

// Get genre
@Injectable({
  providedIn: 'root'
})
export class getGenreService {
  constructor(private http: HttpClient) {

  }

  getGenre(): Observable<any> {

    const token = localStorage.getItem('token');

    return this.http.get(`${apiUrl}movies/genres/:Name`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    )
  }

  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || {}
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some Error occurred: ', error.error.message)
    } else {
      console.error(
        `Error Status Code: ${error.status}
        
        Error Body is: ${error.error}`
      )
    }
    return throwError(
      'An Error has occurred. Please try again later.'
    )
  }
}



// Get user
@Injectable({
  providedIn: 'root'
})

export class getUserService {
  constructor(private http: HttpClient) {

  }

  getUser(): Observable<any> {

    const token = localStorage.getItem('token');

    return this.http.get(`${apiUrl}users/:Username`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    )
  }

  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || {}
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.log('Some Error occurrd: ', error.error.message)
    } else {
      console.error(
        `Error Status Code: ${error.status}
        
        Error Body is: ${error.error}`
      )
    }
    return throwError(
      'An Error has occurred. Please try again later.'
    )
  }
}




// Add a movie to favourite Movies
@Injectable({
  providedIn: 'root'
})
export class addFavouriteMovieService {
  constructor(private http: HttpClient) {

  }

  addFavouriteMovie(): Observable<any> {
    const token = localStorage.getItem('token');

    return this.http.post(`${apiUrl}users/:Username/Movies/:MovieID`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    )
  }

  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || {}
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some Error occurred: ', error.error.message)
    } else {
      console.error(
        `Error Status Code: ${error.status}
      
      Error Body is: ${error.error}`
      )
    }
    return throwError(
      'An Error has occurred. Please try again later.'
    )
  }
}

// Edit user
@Injectable({
  providedIn: 'root'
})
export class editUserService {
  constructor(private http: HttpClient) {

  }

  editUser(userDetails: any): Observable<any> {

    const token = localStorage.getItem('token')

    return this.http.put(
      `${apiUrl}users/:Username/`,
      userDetails,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`
        })
      }
    ).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    )
  }


  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || {}
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred: ', error.error.message)
    } else {
      console.error(
        `Error Status Code: ${error.status}
        
        Error Body is: ${error.error}
        `
      )
    }
    return throwError(
      'An Error has occurred. Please try again later.'
    )
  }
}



// Delete user
@Injectable({
  providedIn: 'root'
})
export class deleteUserService {
  constructor(private http: HttpClient) {
  }

  deleteUser(): Observable<any> {
    const token = localStorage.getItem('user')
    return this.http
  }
}


// Delete a movie from the favorite movies