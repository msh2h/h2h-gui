import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import csc from "country-state-city";
import { ICountry, IState, ICity } from "country-state-city";

@Component({
    selector: 'prof-volunteerInfo',
    templateUrl: 'prof.voInfo.component.html'
})
export class ProfVolunteerInformationComponent {
    @Input() profile: any;

    volunteerInformationForm: FormGroup;

    country: ICountry;
    province: IState;
    countries: ICountry[];

    constructor(
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit() {
        this.volunteerInformationForm = this.formBuilder.group({
            firstName: [this.profile.givenName, Validators.required],
            lastName: [this.profile.familyName, Validators.required],
            mobilePhone: [this.profile.mobilePhone, Validators.pattern("[0-9]*")],
            homePhone: [this.profile.homePhone, Validators.pattern("[0-9]*")],
            emailAddress: [this.profile.email],
            passport: [this.profile.passportId, Validators.maxLength(15)],
            selectedCountry: [this.profile.country],
            selectedState: [this.profile.state],
            streetAddress: [this.profile.addres]
        });

        if (this.profile.country) {
            this.countries = csc.getAllCountries();
            this.country = this.countries.find(cou => cou.name == this.profile.country);

            if (this.profile.state) {
                const states = csc.getStatesOfCountry(this.country.id).filter(state => !state.name.includes(" "));
                this.province = states.find(pro => pro.name == this.profile.state);
            }
        }
    }

    getStates(): IState[] {
        if (
            this.country == null ||
            this.country.id == undefined
        ) {
            return null;
        }
        return csc.getStatesOfCountry(this.country.id).filter(state => !state.name.includes(" "));
    }
}