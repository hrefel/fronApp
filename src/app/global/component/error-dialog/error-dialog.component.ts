import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, @Inject(MAT_SNACK_BAR_DATA) public dataSnack: any) {}

  ngOnInit() {
  }

}