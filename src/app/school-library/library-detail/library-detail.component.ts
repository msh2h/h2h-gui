import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-library-detail',
  templateUrl: './library-detail.component.html',
  styleUrls: ['./library-detail.component.scss']
})
export class LibraryDetailComponent implements OnInit {
  id;

  columnDefs;
  defaultColDef;
  pagination = true;
  paginationPageSize = 10;
  cashbookData: any[];
  constructor(private route: ActivatedRoute) {
    this.columnDefs = [
      { headerName: 'Date', field: 'date'},
      { headerName: 'Cashbook Entry Type', field: 'entryType'},
      { headerName: 'Sponsor', field: 'sponsor'},
      { headerName: 'Description', field: 'description'},
      { headerName: 'Amount Received', field: 'amountReceived'},
      { headerName: 'Amount Allocated', field: 'amountAllocated'}

    ];
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
