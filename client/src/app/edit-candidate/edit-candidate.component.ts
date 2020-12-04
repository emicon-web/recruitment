import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Candidate } from '../model/candidate';
import { CandidateService } from '../services/candidate.service';
import { NotificationService } from '../services/notification.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-candidate',
  templateUrl: './edit-candidate.component.html',
  styleUrls: ['./edit-candidate.component.scss']
})
export class EditCandidateComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  candidateData: Candidate[];
  showErrorMessage : Boolean = false;

  constructor(public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private candidateService: CandidateService,
    private notificationService: NotificationService,
    private router: Router,
    private userService : UserService) { }

  ngOnInit() {
    this.updateCandidate();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getCandidate(id);
    this.editForm = this.fb.group({
      consultantName : ['',[Validators.required]],
      email : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      location : ['',[Validators.required]],
      preferredLocation : ['',[Validators.required]],
      phoneNumber : ['',[Validators.required, Validators.pattern('^[0-9]+$')]],
      panNumber : ['',[Validators.required, Validators.pattern('^[0-9]+$')]],
      adharNumber : ['',[Validators.required, Validators.pattern('^[0-9]+$')]],
      skillSet : ['',[Validators.required]],
      yearOfExperience : ['',[Validators.required]]
    })
  }

  get myForm() {
    return this.editForm.controls;
  }


  getCandidate(id){
    this.candidateService.getSpecificCandidate(id).subscribe((data:any) => {
      this.editForm.setValue({
        consultantName: data.candidate.consultantName,
        email: data.candidate.email,
        location: data.candidate.location,
        preferredLocation : data.candidate.preferredLocation,
        phoneNumber: data.candidate.phoneNumber,
        panNumber: data.candidate.panNumber,
        adharNumber: data.candidate.adharNumber,
        skillSet: data.candidate.skillSet,
        yearOfExperience: data.candidate.yearOfExperience
      });
    });
  }

  updateCandidate(){
    this.editForm = this.fb.group({
      consultantName : ['',[Validators.required]],
      email : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      location : ['',[Validators.required]],
      preferredLocation : ['',[Validators.required]],
      phoneNumber : ['',[Validators.required, Validators.pattern('^[0-9]+$')]],
      panNumber : ['',[Validators.required, Validators.pattern('^[0-9]+$')]],
      adharNumber : ['',[Validators.required, Validators.pattern('^[0-9]+$')]],
      skillSet : ['',[Validators.required]],
      yearOfExperience : ['',[Validators.required]]
    })
  }

  onSubmit() {
    var k = parseInt((this.editForm.value.yearOfExperience + "").split(".")[1]);
    if(k > 12){
      this.showErrorMessage = true;
      return false;
    }else{
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.candidateService.updateCandidate(id, this.editForm.value)
          .subscribe(res => {
            this.notificationService.showSuccess('Candidate updated successfully!',"");
            this.router.navigateByUrl('/candidates');
          }, (error) => {
            this.notificationService.showError(error.msg,'');
          })
      }
    }
  }
  }

  logout(){
    this.userService.logout();
  }

}
