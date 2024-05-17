import { Injectable, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { isEmpty, isEmptyObject } from '../utils/utils';
import { AuthBynService } from '../services/authByn.service';
import { Observable, Subject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { UserBynService } from 'src/services/userByn.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, OnInit {
  userInfo = {};
  constructor(protected router: Router, private userBynService: UserBynService, private authBynService: AuthBynService) {

  }

  ngOnInit(): void {
    this.userBynService.userInfo$.subscribe(m => {
      this.userInfo = m;
    });
  }

  // canActivate(): boolean {
  //   const isCheckRole = () => {
  //     const userInfo = this.authService.userInfo;
  //     if (isEmptyObject(userInfo)) {
  //       this.router.navigate(['auth/sign-in']);
  //       return false;
  //     }
  //     return true;
  //   }
  //   if (!this.authService.isFetchUser) {
  //     this.authService.initUserSession().then(res => {
  //       return isCheckRole();
  //     })
  //   } else {
  //     return isCheckRole();
  //   }
  // }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
  //   const isCheckRole = () => {
  //     const userInfo = this.authService.userInfo;
  //     if (isEmptyObject(userInfo)) {
  //       this.router.navigate(['auth/sign-in']);
  //       return false;
  //     }
  //     return true;
  //   }
  //   if (!this.authService.isFetchUser) {
  //     this.authService.initUserSession().then(res => {
  //       return isCheckRole();
  //     })
  //   } else {
  //     return isCheckRole();
  //   }
  //   return true;
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const userToken = this.authBynService.getUserLoggedIn();
    if (!isEmptyObject(userToken) && !isEmpty(userToken.accessToken)) {
      const jwtInfo: any = jwtDecode(userToken.accessToken);
      if (jwtInfo && Date.now() < jwtInfo.exp * 1000) {
        //this.authService.initUserSession();
        return true;
      }
    }
    this.router.navigate(['auth/sign-in']);
    return false;
  }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   var user = this.authService.getUserLoggedIn();
  //   // this.check = this.usr.getUserLoggedIn();
  //   // if (this.check) {
  //   //   return true;
  //   // } else {
  //   //   // alert('else');
  //   //   this.router.navigate(['/authentication/login']);
  //   //   return false;
  //   // }
  //   return true;
  // }
}
