import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../_models/volunteer';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
  loading = false;
  currentVolunteer: Volunteer;

  constructor(
    private router: Router,
    private accountService: AccountService) {
    this.currentVolunteer = this.accountService.currentVolValue;
  }

}
