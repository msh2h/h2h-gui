import { Component, Input, Type } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Hospital } from '../_models/hospital';
import csc from "country-state-city";
import { ICountry } from "country-state-city";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MyModifyRoleModalComponent } from './role-modal.component';

export enum RoleAction {
    Delete,
    Approve,
    Reject
}
@Component({
    selector: 'prof-volunteerRoles',
    templateUrl: 'prof.voRoles.component.html',
    styleUrls: ["volunteer.scss"]
})
export class ProfVolunteerRolesComponent {
    @Input() profile: any;

    volunteerRolesForm: FormGroup;

    roles: any[] = [
        {
            roleId: 1,
            roleDesc: "Hospital Visitor",
            subRole: ["Weekday", "Weekend"],
        },
        {
            roleId: 2,
            roleDesc: "Helping Hand",
            subRole: ["Kinitter", "Assembler"]
        },
    ];

    hospital: Hospital[] = [
        {
            id: 1,
            name: "hosA",
        },
        {
            id: 2,
            name: "hosB",
        },
    ];

    newRoleGroup = new FormGroup({
        newRole: new FormControl("", Validators.nullValidator),
        newSubRole: new FormControl("", Validators.nullValidator),
    });
    country: ICountry;
    countries: ICountry[];
    constructor(
        private formBuilder: FormBuilder,
        private _modalService: NgbModal
    ) { }

    ngOnInit() {
        this.volunteerRolesForm = this.formBuilder.group({
            ifHideInactiveRoles: [true],
            selectedRole: ['', Validators.required],
            selectedHospital: ['', Validators.required],
            passportName: [this.profile.passportName],
            passportID: [this.profile.passportId],
            nationality: [this.profile.passportNationality],
        });

        if (this.profile.country) {
            this.countries = csc.getAllCountries();
            this.country = this.countries.find(cou => cou.name == this.profile.country);
        }
    }

    isRole(expectedRoleId) {
        var expected = this.roles.find((rol) => rol.roleId == expectedRoleId);
        return (
            this.volunteerRolesForm.value.selectedRole != null &&
            this.volunteerRolesForm.value.selectedRole != undefined &&
            expected != null &&
            expected.subRole.includes(this.volunteerRolesForm.value.selectedRole)
        );
    }

    getHospitals() {
        return this.hospital;
    }

    getRoles() {
        return this.roles;
    }

    getUserRoles() {
        if (this.volunteerRolesForm.value.ifHideInactiveRoles) {
            return this.profile.volunteerRoles.filter(role => role.status != 'inactive');
        } else {
            return this.profile.volunteerRoles;
        }
    }

    openModal(roleAction: RoleAction, role: any) {
        console.log(roleAction, role);
        const modalRef = this._modalService.open(MyModifyRoleModalComponent,
            {
                scrollable: true,
                windowClass: 'myCustomModalClass',
            });
        let data;
        switch (+roleAction) {
            case RoleAction.Approve:
                data = {
                    comment: 'Are you sure you want to approve role:',
                    role: role
                }
                break;
            case RoleAction.Delete:
                data = {
                    comment: 'Are you sure you want to delete role:',
                    role: role
                }
                break;
            case RoleAction.Reject:
                data = {
                    comment: 'Are you sure you want to reject role:',
                    role: role
                }
                break;
        }

        modalRef.componentInstance.fromParent = data;
        modalRef.result.then((result) => {
            console.log(result);
            if (result) {
                switch (+roleAction) {
                    case RoleAction.Approve:
                        role.status = 'active';
                        break;
                    case RoleAction.Delete:
                        role.status = 'inactive';
                        break;
                    case RoleAction.Reject:
                        role.status = 'inactive';
                        break;
                }
            }
        }, (reason) => {
        });
    }

    onDeleteRole(role) {
        this.openModal(RoleAction.Delete, role)
    }

    onApproveRole(role) {
        this.openModal(RoleAction.Approve, role)
    }

    onRejectRole(role) {
        this.openModal(RoleAction.Reject, role)
    }

    canAddRole() {
        return true;
    }

    onAddRole() {
        // this.profile.volunteerRoles.concat({
        //     this.volunteerRolesForm.value.selectedRole
        // });
        // // console.log(this.volunteerRolesForm.value.selectedRole);
        // console.log(this.volunteerRolesForm);
    }

    canAddNewRole() {
        return true;
    }

    createNewRole() {
        console.log("create new role");
        console.log(this.newRoleGroup.value.newRole);
        console.log(this.newRoleGroup.value.newSubRole);
    }
}