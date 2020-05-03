import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilmOverviewComponent } from '../film-overview/film-overview.component';

@Component({
  selector: 'app-recos',
  templateUrl: './recos.component.html',
  styleUrls: ['./recos.component.css']
})
export class RecosComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RecosComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openInfos(mv) {
    this.dialog.open(FilmOverviewComponent, {
      width: '80vw',
      height: '85vh',
      data: mv
    });
  }

}
