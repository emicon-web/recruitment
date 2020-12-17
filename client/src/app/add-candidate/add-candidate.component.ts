import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { CandidateService } from '../services/candidate.service';
import { NotificationService } from '../services/notification.service';
import { UserService } from '../services/user.service';
import { InstituteService } from '../services/institute.service';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss']
})
export class AddCandidateComponent implements OnInit {
  submitted = false;
  candidateForm : FormGroup;
  showErrorMessage : Boolean = false;
  currentUserEmail;
  institutes = [];

  constructor(public fb: FormBuilder,
      private router: Router,
      private ngZone: NgZone,
      private notificationService: NotificationService,
      private candidateService : CandidateService,
      private userService : UserService,
      private instituteService : InstituteService) { 
        this.mainForm();
      }

  ngOnInit() {
    this.getInstitutes();
  }

  getInstitutes(){
    this.instituteService.getInstitutes().subscribe((data:any)=>{
      this.institutes = data.institute;
      let other = {instituteName : "Other"}
      this.institutes.push(other);
    },(err)=>{
      console.log(err);
    })
  }

  mainForm(){
    const data = this.userService.currentUser();
    this.currentUserEmail = data.email;
    this.candidateForm = this.fb.group({
      consultantImage : [''],
      consultantName : ['',[Validators.required]],
      email : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      location : ['',[Validators.required]],
      preferredLocation : ['',[Validators.required]],
      phoneNumber : ['',[Validators.required, Validators.pattern('^[0-9]+$')]],
      panNumber : [''],
      adharNumber : [''],
      skillSet : ['',[Validators.required]],
      yearOfExperience : ['',[Validators.required]],
      createdBy : [this.currentUserEmail,[Validators.required]],
      candidateSource : ['',[Validators.required]],
      canidateCollege :[''],
      resume: ['']
    })
  }

// Image Preview
uploadFile(event) {
  const file = (event.target as HTMLInputElement).files[0];
  this.candidateForm.patchValue({
    consultantImage: file
  });
  this.candidateForm.get('consultantImage').updateValueAndValidity()

  // File Preview
  const reader = new FileReader();
  reader.readAsDataURL(file)
}

onFileSelect(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.candidateForm.get('consultantImage').setValue(file);
  }
}

onFileSelectt(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.candidateForm.get('resume').setValue(file);
  }
}

  get myForm(){
    return this.candidateForm.controls;
  }
  logout(){
    this.userService.logout();
  }
  onSubmit() {
    var k = parseInt((this.candidateForm.value.yearOfExperience + "").split(".")[1]);
    if(k > 12){
      this.showErrorMessage = true;
      return false;
    }else{
    this.submitted = true;
    if (!this.candidateForm.valid) {
      return false;
    } else {
      console.log(this.candidateForm.value);
      this.candidateService.addCandidate(this.candidateForm.value
      // this.candidateForm.get('consultantImage').value,
      // this.candidateForm.value.consultantName,
      // this.candidateForm.value.email,
      // this.candidateForm.value.location,
      // this.candidateForm.value.preferredLocation,
      // this.candidateForm.value.phoneNumber,
      // this.candidateForm.value.panNumber,
      // this.candidateForm.value.adharNumber,
      // this.candidateForm.value.skillSet,
      // this.candidateForm.value.yearOfExperience,
      // this.candidateForm.value.createdBy
      // this.candidateForm.get('resume').value
        ).subscribe(
        (res) => {
          this.notificationService.showSuccess('Candidate successfully created!',"");
          this.ngZone.run(() => this.router.navigateByUrl('/candidates'))
        }, (error) => {
          console.log(error);
          this.notificationService.showError(error,'Validation Failed');
        });
    }
  }
  }

}
