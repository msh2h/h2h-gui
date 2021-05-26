import { Component, OnInit, Input, Output, Inject } from '@angular/core';

export interface DialogData{
  role: string
  subRole: string[]
}

@Component({
  selector: 'app-create-role-dialog',
  templateUrl: './create-role-dialog.component.html',
  styleUrls: ['./create-role-dialog.component.scss']
})
export class CreateRoleDialogComponent implements OnInit {

  
  constructor() {}
      
  ngOnInit() {}

  onNoClick(): void{

  }
}
