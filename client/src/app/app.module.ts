import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';

import { HttpConfigInterceptor } from './interceptors/httpconfig.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { EditCandidateComponent } from './edit-candidate/edit-candidate.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InstitueListComponent } from './institutes/institue-list/institue-list.component';
import { AddInstitueComponent } from './institutes/add-institue/add-institue.component';
import { EditInstitueComponent } from './institutes/edit-institue/edit-institue.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateListComponent,
    AddCandidateComponent,
    EditCandidateComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    InstitueListComponent,
    AddInstitueComponent,
    EditInstitueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    ToastrModule.forRoot({
      positionClass :'toast-top-right'
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
