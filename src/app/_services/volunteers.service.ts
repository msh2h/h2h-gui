import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { param } from 'jquery';
import { Volunteer } from '../_models';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class VolunteersService {
    constructor(private http: HttpClient) { }

    getAllVolList(): Observable<any> {
        return this.http.get(`${environment.apiUrl}/api/volunteer/getAllVolunteerGeneral`);
    }

    getProfileById(userId: string): Observable<any> {
        const params = new HttpParams().append('userId', userId);
        return this.http.get(`${environment.apiUrl}/api/user/getUserProfile`, { params });
    }
}