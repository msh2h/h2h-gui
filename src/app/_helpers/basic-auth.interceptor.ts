import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor(private authnticationService: AccountService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        const currentVolunteer = this.authnticationService.currentVolValue;
        if (currentVolunteer && currentVolunteer.authdata) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Basic ${currentVolunteer.authdata}`
                }
            });
        }
        return next.handle(request);
    }
}