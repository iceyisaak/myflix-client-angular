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
export class UserLoginFormComponent implements OnInit {

  @Input() loginData = {
    Username: '',
    Password: ''
  }

  constructor(
    public userLogin: UserLoginService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  loginUser(): void {
    this.userLogin.userLogin(this.loginData).subscribe(
      (result) => {
        this.dialogRef.close()
        console.log(result)
        this.snackBar.open(
          result,
          'OK',
          {
            duration: 2000
          }
        )
      },
      (result) => {
        console.log(result)
        this.snackBar.open(
          result,
          'OK',
          {
            duration: 2000
          }
        )
      }
    )
    this.router.navigate(['movies'])

  }

}
