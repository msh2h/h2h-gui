import { Component, OnInit } from '@angular/core';
import {ButtonRendererComponent} from './button-renderer/button-renderer.component';

@Component({
  selector: 'app-school-library',
  templateUrl: './school-library.component.html',
  styleUrls: ['./school-library.component.scss']
})
export class SchoolLibraryComponent implements OnInit {
  columnDefs;
  defaultColDef;
  pagination = true;
  paginationPageSize = 10;
  libraryListData: any[];
  frameworkComponents: any;
  constructor() {
    this.columnDefs = [
      { headerName: 'H2H Library #', field: 'no', sortable: true, filter: true },
      { headerName: 'School Name', field: 'schoolName', sortable: true, filter: true },
      { headerName: 'Province', field: 'province', sortable: true, filter: true },
      { headerName: 'Amount Received', field: 'amountReceived', sortable: true, filter: true },
      { headerName: 'Amount Allocated', field: 'amountAllocated', sortable: true, filter: true },
      { headerName: 'Outstanding Balance', field: 'outstandingBalance', sortable: true, filter: true },
      { headerName: 'Action',
        cellRenderer: 'buttonRenderer',
        cellRendererParams: {
        } }
    ];
    this.defaultColDef = {
      flex: 1,
      minWidth: 200,
      resizable: true,
      floatingFilter: true,
    };
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    };
  }

  ngOnInit(): void {
    this.libraryListData = [
      {
        no: 1,
        schoolName: 'Liupu Primary School',
        province: 'Beijing',
        amountReceived: 10000,
        amountAllocated: 65000,
        outstandingBalance: 35000
      },
      {
        no: 2,
        schoolName: 'No.9 Primary School',
        province: 'Shanghai',
        amountReceived: 7000,
        amountAllocated: 3500,
        outstandingBalance: 3500
      }
    ];
  }

}
