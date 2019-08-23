    
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Address } from '../configuration/address';

@Injectable({ providedIn: 'root' })
export class AuthenticationService  {
    private curretSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;

    constructor(private http: HttpClient) {
        this.curretSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('user')));
        this.currentUser = this.curretSubject.asObservable();
    }

    public get currentUserValue(): any {
        return this.curretSubject.value;
    }

    login(body) {
        // return this.http.post(Address.get().baseUrl + 'user/authenticate', body);
        return this.http.post<any>(Address.get().baseUrl + 'user/authenticate', body).pipe(map(res => {
            localStorage.setItem('user', JSON.stringify(res.data));
            this.curretSubject.next(res);
            return res;
        }))
    }

    logout() {
        localStorage.removeItem('user');
        this.curretSubject.next(null);
    }


}