import { VolStatus, RoleStatus } from './enum';

export class Volunteer {
    userId: string;
    name: string;
    email: string;
    status: VolStatus;
    roleType: string;
    role: string;
    roleStatus: RoleStatus;
    phone: string;
    //...
    authdata?: string;
}