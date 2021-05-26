import { RoleStatus } from './enum';
import { Hospital } from './hospital';
import { Appointment } from './appointment';

export class VolunteerRole {
    id: number;
    roleDesc: string;
    subRole: string;
    status: RoleStatus;
    preferredHospital: Hospital;
    schedule: Appointment[];
}