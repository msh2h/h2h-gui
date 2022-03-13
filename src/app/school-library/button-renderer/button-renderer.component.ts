import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';
import {Router} from '@angular/router';

@Component({
  selector: 'app-button-renderer',
  templateUrl: './button-renderer.component.html',
  styleUrls: ['./button-renderer.component.scss']
})
export class ButtonRendererComponent implements ICellRendererAngularComp {
  params;
  constructor(private router: Router) { }



  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  onClick($event) {
    // this.router.navigate(['/library/detail', this.params.data.no]);
    this.router.navigateByUrl(`/library/${this.params.data.no}`);
  }
}
