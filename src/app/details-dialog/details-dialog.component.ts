import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.scss']
})

/**
 * class DetailsDialogComponent - Shows Details of the Movie
 */
export class DetailsDialogComponent implements OnInit {

  /**
   * 
   * @param summaryData 
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public summaryData: {
      title: string,
      imagePath: string,
      description: string,
      director: string,
      genre: string
    }
  ) { }

  ngOnInit(): void {
  }

}
