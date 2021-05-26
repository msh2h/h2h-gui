import { Component } from '@angular/core';
import { AccountService } from './_services/account.service';
import { Volunteer } from './_models/volunteer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = false;
  currentVolunteer: Volunteer;

  constructor(
    private accountService: AccountService) {
    this.accountService.currentVolunteer.subscribe(x => this.currentVolunteer = x);
  }

  logout() {
    this.accountService.logout();
  }
}