import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators , FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { NotificationService } from '../services/notification.service';
import { UserService } from '../services/user.service';
import * as _ from "lodash";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  formShow:Boolean = false;
  tableShow:Boolean = true;
  signupForm : FormGroup;
  formSubmitted = false;
  showPassword:boolean = false;
  showConfirmPassword:boolean = false;
  allUsers;
  term;
  p:number;
  constructor( private formBuilder: FormBuilder,
              private router: Router,
              private notifyService : NotificationService,
              private userService : UserService) { }

  ngOnInit() {
    this.createForm();
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.allUsers().subscribe((data:any)=>{
      this.allUsers = data.users;
    },(err)=>{
      this.notifyService.showError('Something Went Wrong','');
    })
  }
  togglePassword(){
    this.showPassword = !this.showPassword;
  }
  toggle(){
    this.formShow = !this.formShow;
    this.tableShow = !this.tableShow;
  }
  toggleConfirmPassword(){
    this.showConfirmPassword = !this.showConfirmPassword
  }

  createForm(){
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
      confirmPassword: ['', [Validators.required]],
      status: [true,Validators.required]
    },{
      validator: this.MustMatch('password', 'confirmPassword')
    });
}


MustMatch(password1: string, password2: string) {
  return (formGroup: FormGroup) => {
      const pass = formGroup.controls[password1];
      const confirmPass = formGroup.controls[password2];

      if (confirmPass.errors && !confirmPass.errors.mustMatch) {
          return;
      }

      // set error on confirmPass if validation fails
      if (pass.value !== confirmPass.value) {
            confirmPass.setErrors({ mustMatch: true });
      } else {
            confirmPass.setErrors(null);
      }
  }
}

// Getter for easy access to form fields
get f() { return this.signupForm.controls; }

submitForm(){
  this.formSubmitted = true;
  if(this.signupForm.invalid) { return; }
  this.userService.userSignup(this.signupForm.value).subscribe(
    (data: any) => {
      this.notifyService.showSuccess('Employee Account Created Successfully',"");
      this.router.navigate([ `/`]);
    },
    (err: HttpErrorResponse) => {
      if (err.error.error) {
        this.notifyService.showError(err.error.error,"");
      }
      else if(err.error.msg){
        this.notifyService.showError(err.error.msg,"");
      } else {
        this.notifyService.showError("Something went wrong","");
      }
    }
  );
}

}
