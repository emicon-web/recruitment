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
      _id :[''],
      consultantName : ['',[Validators.required]],
      email : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      location : ['',[Validators.required]],
      preferredLocation : ['',[Validators.required]],
      phoneNumber : ['',[Validators.required, Validators.pattern('^[0-9]+$')]],
      panNumber : [''],
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
      console.log(data);
      if(data.candidate != undefined){
      this.editForm.setValue({
        _id : data.candidate._id,
        consultantName: data.candidate.consultantName,
        email: data.candidate.email,
        location: data.candidate.location,
        preferredLocation : data.candidate.preferredLocation,
        phoneNumber: data.candidate.phoneNumber,
        panNumber: data.candidate.panNumber,
        adharNumber: data.candidate.adharNumber,
        skillSet: data.candidate.skillSet,
        yearOfExperience: data.candidate.yearOfExperience
      });}
      else{
        this.editForm.setValue({
          _id : data.can._id,
          consultantName: data.can.consultantName,
          email: data.can.email,
          location: data.can.location,
          preferredLocation : data.can.preferredLocation,
          phoneNumber: data.can.phoneNumber,
          panNumber: data.can.panNumber,
          adharNumber: data.can.adharNumber,
          skillSet: data.can.skillSet,
          yearOfExperience: data.can.yearOfExperience
        });
      }
    });
  }

  updateCandidate(){
    this.editForm = this.fb.group({
      _id : [''],
      consultantName : ['',[Validators.required]],
      email : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      location : ['',[Validators.required]],
      preferredLocation : ['',[Validators.required]],
      phoneNumber : ['',[Validators.required, Validators.pattern('^[0-9]+$')]],
      panNumber : [''],
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
