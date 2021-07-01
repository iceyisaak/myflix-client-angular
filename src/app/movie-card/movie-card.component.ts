import { Component, OnInit } from '@angular/core';
import { GetAllMoviesService } from '../fetch-api-data.service';
import { GetUserService } from '../fetch-api-data.service';
import { AddFavouriteMovieService } from '../fetch-api-data.service';
import { GetDirectorService } from '../fetch-api-data.service';
import { UnfavouriteOneMovieService } from '../fetch-api-data.service';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { GenreDialogComponent } from '../genre-dialog/genre-dialog.component'
import { DirectorDialogComponent } from '../director-dialog/director-dialog.component';
import { DetailsDialogComponent } from '../details-dialog/details-dialog.component';

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
    public getDir: GetDirectorService,
    public addFav: AddFavouriteMovieService,
    public unFav: UnfavouriteOneMovieService,
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

  showGenreDialog(name: string, description: string): void {
    this.dialog.open(
      GenreDialogComponent,
      {
        data: {
          name,
          description
        },
        panelClass: 'genre-dialog'
      }
    )
  }

  showDirectorDialog(
    name: string,
    bio: string,
    birth: string,
    death: string
  ): void {
    this.dialog.open(
      DirectorDialogComponent,
      {
        data: {
          name,
          bio,
          birth,
          death
        },
        panelClass: 'director-dialog'
      }
    )
  }

  showDetailsDialog(
    title: string,
    imagePath: string,
    description: string,
    director: string,
    genre: string
  ): void {
    this.dialog.open(
      DetailsDialogComponent,
      {
        data: {
          title,
          imagePath,
          description,
          director,
          genre
        },
        panelClass: 'details-dialog'
      }
    )
  }



  addFavourite(id: string, title: string): void {
    this.addFav.addFavouriteMovie(id).subscribe(
      () => {
        this.snackBar.open(
          `${title} is favourited!`,
          'OK',
          {
            duration: 2000
          }
        )
      }
    )
  }

  isFavourite(movieID: string): boolean {
    console.log(`${movieID} is Favourited`);
    return this.favouriteMovieIDs.includes(movieID);
  }

  toggleFavMovie(id: string): any {
    if (this.isFavourite(id)) {
      this.unFav.unfavouriteOneMovie(id).subscribe(
        (res: any) => {
          this.snackBar.open(
            'Unfavourited!',
            'OK',
            {
              duration: 2000
            }
          )
        }
      )
      const index = this.favouriteMovieIDs.indexOf(id)
      return this.favouriteMovieIDs.splice(index, 1)
    } else {
      this.addFav.addFavouriteMovie(id).subscribe(
        (res: any) => {
          this.snackBar.open(
            'Favourited!',
            'OK',
            {
              duration: 2000
            }
          )
        }
      )
      return this.favouriteMovieIDs.push(id)
    }
  }

}
