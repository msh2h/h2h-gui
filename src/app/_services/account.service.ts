import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'jquery';
import { Volunteer } from '../_models/volunteer';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { VolunteersService } from './volunteers.service';
import { environment } from 'src/environments/environment';

/**
 * it handles communication between the Angular app and the backend api for everything related the accounts.
 * login(), logout(), register()
 */

@Injectable({ providedIn: 'root' })
export class AccountService {
    private currentVolSubject: BehaviorSubject<any>;  //use BehaviorSubject rather than Subject. Observable --> Subject --> BehaviorSubject.
    public currentVolunteer: Observable<any>;
    static address: string = "http://192.168.1.5:8080/";

    constructor(private http: HttpClient, private router: Router) {
        this.currentVolSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentVolunteer')));
        this.currentVolunteer = this.currentVolSubject.asObservable();
    }

    public get currentVolValue() {
        return this.currentVolSubject.value;
    }

    login(email, password) {
        return this.http.post<Volunteer>(`${environment.apiUrl}/api/login/login`, { email, password })
            .pipe(tap((vol: Volunteer) => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentVolunteer', JSON.stringify(vol));
                this.currentVolSubject.next(vol);
                return vol;
            }));
    }

    register(vol: Volunteer) {
        return this.http.post(`${environment.apiUrl}/api/login/registeruser`, vol);
    }

    logout() {
        //remove user from local storage and set current user to null.
        localStorage.removeItem('currentVolunteer');
        this.currentVolSubject.next(null);
        this.router.navigate(['/account/login']);
    }
}