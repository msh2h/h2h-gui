// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import {  ForgotPwdComponent} from './login/forgotPwd.component';
// import { RegisterComponent } from './register/register.component';
// import { VolunteerComponent } from './volunteer/volunteer.component';
// import { HomeComponent } from './home/home.component';
// import { ProfileComponent } from './volunteers/profile.component';
// import { AuthGuard} from './_helpers/auth.guard';

// const routes: Routes = [
//   {path: '', component: HomeComponent, canActivate:[AuthGuard]},
//   {path: 'login', component: LoginComponent},
//   {path: 'forgetPwd', component: ForgotPwdComponent},
//   {path: 'register', component: RegisterComponent},
//   {path: 'volunteer', component: VolunteerComponent, canActivate:[AuthGuard]},
//   {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
//   {path: '**', redirectTo: ''}
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const volunteersModule = () => import('./volunteers/vols.module').then(x => x.VolunteersModule);

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },
  { path: 'volunteers', loadChildren: volunteersModule, canActivate: [AuthGuard] },


  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
