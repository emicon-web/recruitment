import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, UrlTree, ActivatedRouteSnapshot, Router} from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  helper = new JwtHelperService();
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
      let token = localStorage.getItem('Token');
      const decodedToken = this.helper.decodeToken(token);
      let validity = this.helper.isTokenExpired(token);
      if (token != null && validity == false){
        return true;
      }
      else{
      this.router.navigate([  `/login` ]);
      return false;
    }
  }
  
}
