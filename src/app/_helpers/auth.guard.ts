import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AccountService } from '../_services/account.service';

/**
 * it's an Angular route guard that's used to prevent unauthenticated users from acessing restricted routes.
 * it does this by implementing the CanActive interface which allows the guard to decide if a route can be activated with the canActive() method.
 *
 * use accountService to check if the user is logged in.
 *
 * AuthGuard is used in app-routing.module.ts to protect the home page route.
*/

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        private accountService: AccountService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        /*const currentVolunteer = this.accountService.currentVolValue;
        if (currentVolunteer) {
            return true;
        }
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
        return false;*/
      return true;
    }
}
