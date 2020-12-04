import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http: HttpClient) { }

  addCandidate(consultantImage,consultantName,email,location,preferredLocation,phoneNumber,panNumber,adharNumber,skillSet,yearOfExperience,createdBy,resume){
    var formData: any = new FormData();
    formData.append("consultantImage", consultantImage);
    formData.append("consultantName", consultantName);
    formData.append("email",email);
    formData.append("location",location);
    formData.append("preferredLocation",preferredLocation);
    formData.append("phoneNumber",phoneNumber);
    formData.append("panNumber",panNumber);
    formData.append("adharNumber",adharNumber);
    formData.append("skillSet",skillSet);
    formData.append("yearOfExperience",yearOfExperience);
    formData.append("createdBy",createdBy);
    formData.append("resume",resume);
    console.log(formData);
    return this.http.post(`${environment.apiBaseUrl}/candidate/add-candidate`,formData);
  }

  getCandidates(){
    return this.http.get(`${environment.apiBaseUrl}/candidate/get-candidates`);
  }

  getSpecificCandidate(id){
    return this.http.get(`${environment.apiBaseUrl}/candidate/get-specific-candidate/${id}`);
  }

  updateCandidate(id,data){
    return this.http.put(`${environment.apiBaseUrl}/candidate/update-candidate/${id}`,data);
  }
}
