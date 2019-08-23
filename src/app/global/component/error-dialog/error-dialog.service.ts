import { Injectable } from "@angular/core";
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA,
	MatSnackBar,
	MatSnackBarConfig
} from "@angular/material";

import { ErrorDialogComponent } from "./error-dialog.component";

@Injectable({
	providedIn: "root",
})
export class ErrorDialogService {
	public isDialogOpen: Boolean = false;
	constructor(public dialog: MatDialog, private snackBar: MatSnackBar, private snackBarConfig: MatSnackBarConfig) {}
	openDialog(data): any {
		if (this.isDialogOpen) {
			return false;
		}
		this.isDialogOpen = true;
		const dialogRef = this.dialog.open(ErrorDialogComponent, {
			width: "600px",
			data: data
		});

		dialogRef.afterClosed().subscribe(result => {
			this.isDialogOpen = false;
		});
		dialogRef.backdropClick().subscribe(res => {
			// console.log('-->', res);
			// console.log('masuk backdrop click');
			console.log("event on close");
		});
	}
	openSnack(data): any {
		
		this.snackBar.open(data.reason, "", {
			duration: 5000,
			horizontalPosition: "right",
			verticalPosition: "top",
			panelClass: ['snackbar-error']
		});
	}
}
