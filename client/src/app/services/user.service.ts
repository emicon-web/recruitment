import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  helper = new JwtHelperService();

  constructor(private http: HttpClient,
    private router: Router) { }
  
  userSignup(data){
    return this.http.post(`${environment.apiBaseUrl}/users/signup`, data);
  }

  userLogin(data){
    return this.http.post(`${environment.apiBaseUrl}/users/login`, data);
  }

  logout(){
    localStorage.removeItem('Token');
    this.router.navigate(['/login']);
  }

  currentUser(){
    let token = localStorage.getItem('Token');
    const decodedToken = this.helper.decodeToken(token);
    return decodedToken;
  }

  allUsers(){
    return this.http.get(`${environment.apiBaseUrl}/users/all-users`);
  }
  
}
