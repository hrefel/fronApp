import { Component, OnInit } from "@angular/core";
import {
	Validators,
	FormControl,
	FormBuilder,
	FormGroup
} from "@angular/forms";
import { trigger, style, animate, transition } from "@angular/animations";
import { MatSnackBar } from "@angular/material";

import { AppService } from "src/app/services/app.service";
import { Router } from "@angular/router";
import { AuthenticationService } from 'src/app/services/auth.service';
import { first } from 'rxjs/operators';

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
	animations: [
		trigger("enterAnimation", [
			transition(":enter", [
				style({
					transform: "translateY(100%)",
					position: "relative",
					opacity: 0
				}),
				animate(
					"1000ms",
					style({
						transform: "translateY(0)",
						position: "relative",
						opacity: 1
					})
				)
			]),
			transition(":leave", [
				style({
					transform: "translateY(0)",
					background: "#7575756c",
					position: "relative",
					opacity: 1
				}),
				animate(
					"1000ms",
					style({
						transform: "translateY(100%)",
						background: "#7575756c",
						position: "relative",
						opacity: 0
					})
				)
			])
		])
	]
})
export class LoginComponent implements OnInit {
	// password = new FormControl("", [Validators.required]);
	returnUrl: string;
	error = '';
	loading = false;

	username = new FormControl("", [Validators.required]);
	showLogin: boolean = true;
	hide = true;
	emailRegister: any;
	passwordRegister: any;
	usernameRegister: any;
	namaLengkap: any;

	passwordLogin: any;
	usernameLogin: any;

	signupForm: FormGroup;

	constructor(
		private service: AppService,
		private fb: FormBuilder,
		private _snackBar: MatSnackBar,
		private route: Router,
		private authService: AuthenticationService
	) {
		if(this.authService.currentUserValue) {
			this.route.navigate(['/']);
		}
	}

	ngOnInit() {
		// this.returnUrl = this.route.snapshot.queryParams['returnUr'] || '/';
	}

	getErrorMessage() {
		return this.username.hasError("required")
			? "You must enter a value"
			: this.username.hasError("email") ? "Not a valid email" : "";
	}

	toggleSignUp() {
		if (this.showLogin) {
			this.showLogin = false;
		} else {
			this.showLogin = true;
		}
	}

	login() {
		let dataLogin = {
			username: this.usernameLogin,
			password: this.passwordLogin
		};
		this.authService.login(dataLogin).pipe(first()).subscribe(data => {
			this.route.navigate(['/home'])
		}, error => {
			this.error = error;
			this.loading = false;
		})
		// this.service.login(dataLogin).subscribe((res: any) => {
		// 	if (res.success) {
		// 		this.route.navigate(["/home"]);
		// 		localStorage.setItem('user', JSON.stringify(res.data));
		// 	} else {
		// 		this.passwordLogin = "";
		// 		this._snackBar.open(res.message, "", {
		// 			duration: 5000,
		// 			horizontalPosition: "right",
		// 			verticalPosition: "top"
		// 		});
		// 	}
		// });
	}

	signup() {
		let dataSave = {
			name: this.namaLengkap,
			email: this.emailRegister,
			username: this.usernameRegister,
			password: this.passwordRegister
		};

		this.service.signup(dataSave).subscribe((res: any) => {
			this._snackBar.open(res.message, "", {
				duration: 5000,
				horizontalPosition: "right",
				verticalPosition: "top",
				panelClass: ["snackbar-error"]
			});
			if (res.success) {
				this.clearSignup();
				this.toggleSignUp();
			}
		});
	}

	clearSignup() {
		this.emailRegister = "";
		this.namaLengkap = "";
		this.usernameRegister = "";
		this.passwordRegister = "";
	}
}
