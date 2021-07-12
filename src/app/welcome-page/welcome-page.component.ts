import { Component, OnInit } from '@angular/core';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})


/**
 * Class WelcomePageComponent - Serves as the landing page for all visitors
 */
export class WelcomePageComponent implements OnInit {


  /**
   * 
   * @param dialog 
   */
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }


  /**
   * openUserRegistrationDialog()
   */
  openUserRegistrationDialog(): void {
    this.dialog.open(
      UserRegistrationFormComponent,
      {
        width: '280px'
      }
    )
  }

  /**
   * openUserLoginDialog()
   */
  openUserLoginDialog(): void {
    this.dialog.open(
      UserLoginFormComponent,
      {
        width: '280px'
      }
    )
  }

}
