import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { VolunteerComponent } from './list.component';
import { ProfileComponent } from './profile.component';
// import { AddEditComponent } from './add-edit.component';


const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: VolunteerComponent },
            { path: 'edit/:userId', component: ProfileComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VolunteerssRoutingModule { }