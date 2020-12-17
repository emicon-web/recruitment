import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {

  constructor(private http: HttpClient) { }

  addInstitute(data){
    console.log(data);
    return this.http.post(`${environment.apiBaseUrl}/institute/add-institute`,data);
  }
  
  getInstitutes(){
    return this.http.get(`${environment.apiBaseUrl}/institute/get-institute`);
  }
  changeInstituteStatus(name,status){
    const data = {name,status}
    return this.http.post(`${environment.apiBaseUrl}/institute/change-institute-status`,data);
  }
}


