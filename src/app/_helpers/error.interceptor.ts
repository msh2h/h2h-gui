import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AccountService } from '../_services/account.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * it intercepts http response from the api to check if there were any errors
 * if 401 --> user is automatically logged our of the application
 * all other errors are re-thrown up to the call service so an alert with error can be displayed on the screen.
 * 
 * implemented HttpInterceptor interface by creating a custom interceptor to catch all error responses from the server in a single location.
 * 
 * add in app.module.ts providers section.
 */

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                this.accountService.logout();
                location.reload(true);
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}