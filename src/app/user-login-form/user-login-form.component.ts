import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserLoginService } from '../fetch-api-data.service';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})

/**
 * class UserLoginFormComponent - Lets existing users login to the system
 */
export class UserLoginFormComponent implements OnInit {

  @Input() loginData = {
    Username: '',
    Password: ''
  }

  /**
   * 
   * @param userLogin 
   * @param dialogRef 
   * @param snackBar 
   * @param router 
   */
  constructor(
    public userLogin: UserLoginService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    public router: Router
  ) { }

  ngOnInit(): void {
  }


  /**
   * loginUser() - Logs the user into the system
   */
  loginUser(): void {

    this.userLogin.userLogin(this.loginData).subscribe(

      (response) => {

        this.dialogRef.close()

        console.log(response)

        localStorage.setItem('user', response.user.Username)

        localStorage.setItem('token', response.token)

        this.snackBar.open(
          'You are now logged in.',
          'OK',
          {
            duration: 2000
          }
        )
        this.router.navigate(['movies'])
      },

      (response) => {

        console.log(response)

        this.snackBar.open(
          response,
          'OK',
          {
            duration: 2000
          }
        )
      }
    )

  }

}
