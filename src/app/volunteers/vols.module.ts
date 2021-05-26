import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VolunteerssRoutingModule } from './vols-routing.module';
import { LayoutComponent } from './layout.component';
import { VolunteerComponent } from './list.component';
import { ProfileComponent } from './profile.component';
import { ProfVolunteerInformationComponent } from './prof.voInfo.component';
import { ProfVolunteerRolesComponent } from './prof.voRoles.component';

// import { DataTablesModule } from "angular-datatables";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxSpinnerModule } from "ngx-spinner";
import { AgGridModule } from 'ag-grid-angular';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { MyModifyRoleModalComponent } from './role-modal.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // BrowserAnimationsModule,
        VolunteerssRoutingModule,
        // DataTablesModule,
        NgbModule,
        // SpinnerModule,
        NgxSpinnerModule,
        UiSwitchModule,
        MDBBootstrapModule.forRoot(),
        AgGridModule.withComponents([])
    ],
    declarations: [
        LayoutComponent,
        VolunteerComponent,
        ProfileComponent,
        ProfVolunteerInformationComponent,
        ProfVolunteerRolesComponent,
        MyModifyRoleModalComponent
        // AddEditComponent
    ],
    entryComponents: [
        MyModifyRoleModalComponent
    ]
})
export class VolunteersModule { }