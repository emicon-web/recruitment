import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { EditCandidateComponent } from './edit-candidate/edit-candidate.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InstitueListComponent } from './institutes/institue-list/institue-list.component';
import { AddInstitueComponent } from './institutes/add-institue/add-institue.component';
import { EditInstitueComponent } from './institutes/edit-institue/edit-institue.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { SignupGuard } from './guards/signup.guard';

const routes: Routes = [
  {
    path : '',
    pathMatch: 'full',
    redirectTo : 'login'
  },
  { path: 'add-candidate',
    component: AddCandidateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-candidate/:id',
    component: EditCandidateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'candidates',
    component: CandidateListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'institutes',
    component: InstitueListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-institute',
    component: AddInstitueComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-institute/:id',
    component: EditInstitueComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sign-up',
    component: SignupComponent,
    canActivate: [SignupGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'candidates',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
