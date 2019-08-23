import { Injectable, OnInit } from "@angular/core";
import {
	Router,
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot
} from "@angular/router";
import { AuthenticationService } from "src/app/services/auth.service";

export class AuthGuard implements CanActivate {
	constructor(
		private route: Router,
		private authService: AuthenticationService
	) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		const currentUser = this.authService.currentUserValue;
		if (currentUser) {
			return true;
		}
		this.route.navigate(["/login"], {
			queryParams: { returnurl: state.url }
        });
        return false;
	}
}
