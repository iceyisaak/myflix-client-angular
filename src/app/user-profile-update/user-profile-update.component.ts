import { Component, Input, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { EditUserService } from '../fetch-api-data.service';

@Component({
  selector: 'app-user-profile-update',
  templateUrl: './user-profile-update.component.html',
  styleUrls: ['./user-profile-update.component.scss']
})

/**
 * class UserProfileUpdateComponent - Lets exiting users update their profiles
 */
export class UserProfileUpdateComponent implements OnInit {

  @Input() userData = {
    Username: '',
    Password: '',
    Email: '',
    Birthday: ''
  }


  /**
   * 
   * @param editUserData 
   * @param dialogRef 
   * @param snackBar 
   */
  constructor(
    public editUserData: EditUserService,
    public dialogRef: MatDialogRef<UserProfileUpdateComponent>,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  /**
   * editUser() - Update the user's data in the Database
   */
  editUser(): void {
    this.editUserData.editUser(this.userData).subscribe(
      (res) => {
        this.dialogRef.close()
        localStorage.setItem('user', res.Username)
        this.snackBar.open(
          'Profile Updated.',
          'OK',
          {
            duration: 2000
          }
        )
      }
    )
    setTimeout(
      () => {
        window.location.reload()
      },
      1000
    )
  }

}
