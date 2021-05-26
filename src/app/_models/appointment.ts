export class Appointment {
    Id: number
    Subject: string;
    StartTime: Date;
    EndTime: Date;
    IsAllDay: boolean
    RecurrenceRule: string;
}
