import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import * as xlsx from 'xlsx';

import { InstituteService } from '../../services/institute.service';
import { UserService } from '../../services/user.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-institue-list',
  templateUrl: './institue-list.component.html',
  styleUrls: ['./institue-list.component.scss']
})
export class InstitueListComponent implements OnInit {
  @ViewChild('institutesList', { static: false }) institutesList: ElementRef;
  institutes:any = [];
  term;
  p:number;
  constructor(private instituteService : InstituteService,
              private userService : UserService,
              private notifyService : NotificationService
              ) { 
    this.getinstitute();
  }

  ngOnInit() {
  }

  getinstitute(){
    this.instituteService.getInstitutes().subscribe((data:any) => {
      this.institutes = data.institute;
    })
  }

  exportToExcel() {
    const ws: xlsx.WorkSheet =  xlsx.utils.table_to_sheet(this.institutesList.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'institutes.xlsx');
  }

  logout(){
    this.userService.logout();
  }

  changeInstituteStatus(name,status){
    let newStatus : Boolean;
    if(status == "true" || status == true){
      newStatus = false;
    }else{
      newStatus = true;
    }
    console.log(status);
    console.log(newStatus);
    this.instituteService.changeInstituteStatus(name,newStatus).subscribe((data:any) => {
      console.log(data);
      this.notifyService.showSuccess("Status Changed","");
      this.ngOnInit();
    },
    (err) => {
      console.log(err);
      this.notifyService.showError("Something went wrong","");
    })
  }

}
