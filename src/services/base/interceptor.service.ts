import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { AuthBynService } from '../authByn.service';
import { CommonService } from '../common.service';
import { getHeaders, isEmpty } from 'src/utils/utils';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor(private injector: Injector, private router: Router, private authBynService: AuthBynService, private commonService: CommonService) { }

  private handlePermissonError(err: HttpErrorResponse): Observable<any> {
    this.commonService.loadingState(false);
    this.router.navigateByUrl(`/login`);
    return of(err.message);
  }

  private handleAuthError(err: HttpErrorResponse, next: HttpHandler, request: HttpRequest<any>): Observable<any> {
    this.commonService.loadingState(false);
    if ([401,403].includes(err.status)) {
      const userToken = this.authBynService.getUserLoggedIn();
      if(isEmpty(userToken.accessToken) || isEmpty(userToken.refeshToken))
      {
        return this.handlePermissonError(err);
      }
      this.authBynService.refeshTokenUser().then(res => {
        if (res) {
          return next.handle(request).pipe(catchError(x => this.handlePermissonError(x)));
        } else {
          return this.handlePermissonError(err);
        }
      })
    }
    return throwError(err);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = this.authBynService.getUserLoggedIn();
    const headerInit = getHeaders(req.url, '', userToken.accessToken);
    let headers = new HttpHeaders(headerInit);
    const authRequest = req.clone({ headers: headers });
    return next.handle(authRequest).pipe(catchError(x => this.handleAuthError(x, next, authRequest)));
  }
}
