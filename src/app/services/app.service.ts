import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { Address } from "../configuration/address";

@Injectable({
	providedIn: "root"
})
export class AppService {
	constructor(private http: HttpClient) {}

	signup(body) {
    return this.http.post(Address.get().baseUrl + "user/register", body);
  }
  
  login(body) {
    return this.http.post(Address.get().baseUrl + 'user/authenticate', body);
  }
  
}
