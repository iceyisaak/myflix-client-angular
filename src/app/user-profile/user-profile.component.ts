import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { GetAllMoviesService } from '../fetch-api-data.service';
import { GetUserService } from '../fetch-api-data.service';
import { UnfavouriteOneMovieService } from '../fetch-api-data.service';
import { DeleteUserService } from '../fetch-api-data.service'

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { UserProfileUpdateComponent } from '../user-profile-update/user-profile-update.component';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {

  user: any = {};
  movies: any[] = [];
  favouriteMovies: any = []

  constructor(
    public router: Router,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public fetchMovies: GetAllMoviesService,
    public fetchUser: GetUserService,
    public fetchUnfavourite: UnfavouriteOneMovieService,
    public deleteUserService: DeleteUserService
  ) { }

  ngOnInit(): void {
    this.getUser()
  }


  getUser(): void {
    const user = localStorage.getItem('user')
    this.fetchUser.getUser(user).subscribe(
      (res: any) => {
        this.user = res;
        this.getMovies();
      }
    )
  }

  getMovies(): void {
    this.fetchMovies.getAllMovies().subscribe(
      (res: any) => {
        this.movies = res;
        this.filterFavouriteMovies()
      }
    )
  }

  filterFavouriteMovies(): void {
    this.movies.forEach(
      (movie: any) => {
        if (this.user.FavouriteMovies.includes(movie._id)) {
          this.favouriteMovies.push(movie);
        }
      }
    )
    return this.favouriteMovies
  }

  unfavouriteOneMovie(id: string, title: string): void {
    this.fetchUnfavourite.unfavouriteOneMovie(id).subscribe(
      () => {
        this.snackBar.open(
          `${title} has been unfavourited.`,
          'OK',
          {
            duration: 2000
          }
        )
        setTimeout(
          () => {
            window.location.reload()
          },
          2000
        )
      }
    )
  }

  deleteUser(): void {
    const confirmUserDelete = confirm(
      'Are you sure you want to delete your account? This can\'t be undone!'
    )
    if (confirmUserDelete) {
      this.deleteUserService.deleteUser().subscribe(
        () => {
          localStorage.clear()
          this.router.navigate(['welcome'])
          this.snackBar.open(
            'Your profile has been deleted',
            'OK',
            {
              duration: 2000
            }
          )
        }
      )
    } else {
      window.location.reload()
    }
  }


  profileUpdateDialog(): void {
    this.dialog.open(
      UserProfileUpdateComponent,
      {
        panelClass: 'update-dialog'
      }
    )
  }

}
