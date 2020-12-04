import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { EditCandidateComponent } from './edit-candidate/edit-candidate.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
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
