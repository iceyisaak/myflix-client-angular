import { Component, OnInit } from '@angular/core';
import { GetAllMoviesService } from '../fetch-api-data.service';
import { GetUserService } from '../fetch-api-data.service';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

// import {MovieSypnosisComponent} from ''
// import {MovieDirectorComponent} from ''
// import {MovieGenreComponent} from ''

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  movies: any[] = []
  favouriteMovieIDs: any[] = []

  constructor(
    public fetchApiData: GetAllMoviesService,
    public fetchUser: GetUserService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getMovies();
    this.getFavouriteMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe(
      (res: any) => {
        this.movies = res
        console.log(this.movies)
        return this.movies
      }
    )
  }

  getFavouriteMovies(): void {
    const user = localStorage.getItem('user');
    this.fetchUser.getUser(user).subscribe(
      (res: any) => {
        this.favouriteMovieIDs = res.FavouriteMovies;
      }
    )
  }

}
