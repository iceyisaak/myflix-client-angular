import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-director-dialog',
  templateUrl: './director-dialog.component.html',
  styleUrls: ['./director-dialog.component.scss']
})

/**
 * class DirectorDialogComponent - Shows Movie Director's Biography
 */
export class DirectorDialogComponent implements OnInit {


  /**
   * 
   * @param directorData 
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public directorData: {
      name: string,
      bio: string,
      birth: string,
      death: string
    }
  ) { }

  ngOnInit(): void {
  }

}
