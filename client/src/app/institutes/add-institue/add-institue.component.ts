import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { NotificationService } from '../../services/notification.service';
import { UserService } from '../../services/user.service';
import { InstituteService } from '../../services/institute.service';

@Component({
  selector: 'app-add-institue',
  templateUrl: './add-institue.component.html',
  styleUrls: ['./add-institue.component.scss']
})
export class AddInstitueComponent implements OnInit {
  submitted = false;
  instituteForm : FormGroup;
  showErrorMessage : Boolean = false;
  currentUserEmail;
  constructor(public fb: FormBuilder,
      private router: Router,
      private ngZone: NgZone,
      private notificationService: NotificationService,
      private userService : UserService,
      private instituteService : InstituteService) { 
        this.mainForm();
      }
      ngOnInit() {
      }
    
    
      mainForm(){
        const data = this.userService.currentUser();
        this.currentUserEmail = data.email;
        this.instituteForm = this.fb.group({
          instituteName : ['',[Validators.required]],
          universityOfTheInstitute: ['',[Validators.required]],
          address : this.fb.group({
            line1 : ['',Validators.required],
            line2 : ['',Validators.required],
            city : ['',Validators.required],
            pinCode : ['', Validators.required],
            state: ['',Validators.required]
          }),
          instituteTpoName: ['',[Validators.required]],
          instituteTpoPhoneNumber: ['',[Validators.required, Validators.pattern('^[0-9]+$')]],
          instituteTpoEmail: ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
          instituteStatus: [true,[Validators.required]],
          instituteAddedBy : [this.currentUserEmail,[Validators.required]]
        })
      }

      get ff() {
        let outerGroup = this.instituteForm.controls.address as FormGroup;
        return ( outerGroup.controls );
      }

      get myForm(){
        return this.instituteForm.controls;
      }
      logout(){
        this.userService.logout();
      }
      onSubmit() {
        this.submitted = true;
        if (!this.instituteForm.valid) {
          return false;
        } else {
          console.log(this.instituteForm.value);
          this.instituteService.addInstitute(this.instituteForm.value).subscribe(
            (res) => {
              this.notificationService.showSuccess('Institute successfully Added!',"");
              this.ngZone.run(() => this.router.navigateByUrl('/institutes'))
            }, (error) => {
              console.log(error); 
              this.notificationService.showError(error,'');
            });
        }
      }
}
