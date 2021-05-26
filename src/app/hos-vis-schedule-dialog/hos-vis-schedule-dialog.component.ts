import { Component, ViewChild, Input } from '@angular/core';
import { EventSettingsModel, ScheduleComponent, DayService, WeekService, WorkWeekService, MonthService, AgendaService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { Appointment } from '../_models/appointment';
import { EventSettings } from '@syncfusion/ej2-schedule/src/schedule/models/event-settings';

@Component({
  selector: 'app-hos-vis-schedule-dialog',
  providers: [DayService, WeekService, WorkWeekService, MonthService],
  templateUrl: './hos-vis-schedule-dialog.component.html',
  styleUrls: ['./hos-vis-schedule-dialog.component.scss']
})
export class HosVisScheduleDialogComponent {
  @ViewChild('scheduleObj')
  public scheduleObj: ScheduleComponent;
  @Input() appointments: Appointment[];

  // @ViewChild('addButtonObj')
  // public addButtonObj: ButtonComponent;
  // @ViewChild('editButtonObj')
  // public editButtonObj: ButtonComponent;
  // @ViewChild('deleteButtonObj')
  // public deleteButtonObj: ButtonComponent;

  public selectedDate: Date = new Date(2021, 1, 12);
  public eventSettings: EventSettingsModel;
  public views: Array<string> = ['Day', 'Week', 'Month', 'Agenda'];

  constructor() {
    // console.log("appointments : " + this.appointments);
    this.eventSettings = { dataSource: this.appointments };
  }

  add(appointments: Appointment | Appointment[]): void {
    // let Data: Object[] = [{
    //   Id: 3,
    //   Subject: 'Conference',
    //   StartTime: new Date(2021, 1, 15, 9, 0),
    //   EndTime: new Date(2021, 1, 15, 10, 0),
    //   IsAllDay: false,
    //   RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=2'
    // }];
    this.scheduleObj.addEvent(appointments);
    // this.addButtonObj.element.setAttribute('disabled', 'true');
  }
  edit(appointment: Appointment): void {
    // let data: Object = new DataManager(this.scheduleObj.getCurrentViewEvents()).executeLocal(new Query().where('RecurrenceID', 'equal', 3));
    // data[0].Subject = 'Occurence edited';
    this.scheduleObj.saveEvent(appointment[0], 'EditOccurrence');
    // this.editButtonObj.element.setAttribute('disabled', 'true');
  }
  delete(): void {
    this.scheduleObj.deleteEvent(4, 'DeleteSeries');
    // this.deleteButtonObj.element.setAttribute('disabled', 'true');
  }

}
