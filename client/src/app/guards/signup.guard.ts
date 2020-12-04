import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    var admin = prompt("Please Enter Password : ", "");
    console.log(admin);
    if(admin == "password"){
      return true;
    }
    else{
      this.router.navigate([  `/login` ]);
      return false;
    }
  }
  
}
