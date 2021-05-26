import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { VolunteersService } from "../_services/volunteers.service";
// import { DataTableDirective } from "angular-datatables";
import { Volunteer } from "../_models/volunteer";
import { NgxSpinnerService } from "ngx-spinner";
import { RowClickedEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
    templateUrl: 'list.component.html',
    styleUrls: ["volunteer.scss"]
})
export class VolunteerComponent implements OnInit {
    filterName: string;
    filterEmail: string;
    filterVolStatus: string;
    filterVolRole: string;
    filterRoleStatus: string;

    volunteers: []

    isLoaded: boolean = false;
    error: any;

    gridApi;
    gridColumnApi;
    defaultColDef;
    columnDefs;
    autoGroupColumnDef;

    pagination = true;
    paginationPageSize = 10;

    constructor(
        private http: HttpClient,
        private volService: VolunteersService,
        public router: Router,
        private spinner: NgxSpinnerService
    ) {
        this.columnDefs = [
            { field: 'name', sortable: true, filter: true },
            { field: 'email', sortable: true, filter: true },
            { field: 'phone', sortable: true, filter: true },
            { field: 'status', sortable: true, filter: true },
            { field: 'roleType', sortable: true, filter: true },
            { field: 'roleStatus', sortable: true, filter: true }
        ];
        this.defaultColDef = {
            flex: 1,
            minWidth: 200,
            resizable: true,
            floatingFilter: true,
        };
    }

    showProfile(vol: Volunteer) {
        this.router.navigate([this.router.url + "/edit/" + vol.userId]);
    }

    onItemClicked($event: RowClickedEvent) {
        this.showProfile($event.data);
        console.log($event);
    }

    // onGridReady(params) {
    //     this.gridApi = params.api;
    //     this.gridColumnApi = params.columnApi;
    //     this.getAllVolList();
    // }

    ngOnInit(): void {
        this.spinner.show();
        setTimeout(() => { this.spinner.hide(); }, 5000);
        // this.volunteers = this.http.get<any[]>(`${environment.apiUrl}/api/volunteer/getAllVolunteerGeneral`);
        this.getAllVolList();
    }

    getAllVolList() {
        console.log("getAllVolList calling")
        this.volService.getAllVolList().subscribe(
            result => {
                console.log(result);
                this.volunteers = result;
                this.spinner.hide();
                this.isLoaded = true;
            },
            error => {
                console.log(error);
                this.error = error;
                this.spinner.hide();
                this.isLoaded = true;
            }
        );
    }
}
