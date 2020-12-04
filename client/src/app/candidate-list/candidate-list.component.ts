import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { NgxSpinnerService } from "ngx-spinner";
import * as xlsx from 'xlsx';

import { CandidateService } from '../services/candidate.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {
  @ViewChild('candidatesList', { static: false }) candidatesList: ElementRef;
  candidates:any = [];
  term;
  p:number;
  constructor(private candidateService : CandidateService,
              private userService : UserService
              // private spinner: NgxSpinnerService
              ) { 
    this.getCandidates();
  }

  ngOnInit() {
  }

  getCandidates(){
    // this.spinner.show();
    this.candidateService.getCandidates().subscribe((data:any) => {
      // this.spinner.hide();
      this.candidates = data.candidates;
      for(let i=0; i<this.candidates.length;i++){
        console.log(this.candidates[i]);
      }
      console.log(this.candidates);
    })
  }

  exportToExcel() {
    const ws: xlsx.WorkSheet =  xlsx.utils.table_to_sheet(this.candidatesList.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'candidate.xlsx');
  }

  logout(){
    this.userService.logout();
  }

}
