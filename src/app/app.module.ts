import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { ErrorInterceptor } from "./_helpers/error.interceptor";
import { BasicAuthInterceptor } from "./_helpers/basic-auth.interceptor";


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AlertComponent } from './_components';
import { HomeComponent } from "./home";
import { CreateRoleDialogComponent } from "./create-role-dialog/create-role-dialog.component";
import { HosVisScheduleDialogComponent } from "./hos-vis-schedule-dialog/hos-vis-schedule-dialog.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ScheduleModule, DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateRoleDialogComponent,
    HosVisScheduleDialogComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ButtonModule,
    ScheduleModule
  ],
  providers: [
    CreateRoleDialogComponent,
    HosVisScheduleDialogComponent,
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
