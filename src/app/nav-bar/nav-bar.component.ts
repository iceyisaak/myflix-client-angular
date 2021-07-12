import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

/**
 * class NavBarComponent - Shows NavBar at the top of the screen
 */
export class NavBarComponent implements OnInit {


  /**
   * 
   * @param snackBar 
   * @param router 
   */
  constructor(
    public snackBar: MatSnackBar,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * logOut() - Logs the users out of the system
   */
  logOut(): void {
    localStorage.clear();
    this.router.navigate(
      ['welcome']
    )
    this.snackBar.open(
      'You have been logged out.',
      'OK',
      {
        duration: 2000
      }
    )
  }

}
