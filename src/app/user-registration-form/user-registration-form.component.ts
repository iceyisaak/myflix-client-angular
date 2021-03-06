import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserRegistrationService } from '../fetch-api-data.service';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})

/**
 * class UserRegistrationFormComponent - Lets new users register into the system
 */
export class UserRegistrationFormComponent implements OnInit {

  @Input() userData = {
    Username: '',
    Password: '',
    Email: '',
    Birthday: ''
  }


  /**
   * 
   * @param userRegistration 
   * @param dialogRef 
   * @param snackBar 
   */
  constructor(
    public userRegistration: UserRegistrationService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
  }

  /**
   * registerUser() - Sends form to backend 
   * */
  registerUser(): void {
    this.userRegistration.userRegistration(this.userData).subscribe(
      (result) => {
        this.dialogRef.close()
        console.log(result)
        this.snackBar.open(
          'You have successfully registered! Please login with your credentials.',
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
  }

}
