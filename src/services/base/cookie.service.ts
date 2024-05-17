import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class BynCookieService {
  constructor(private cookieService: CookieService) {
  }

  set(key: string, value: any, day: number = 1): void {
    //, day, '/', environment.COOKIE_DOMAIN, true
    this.cookieService.set(key, value);
  }

  get(key: string): any {
    return this.cookieService.get(key);
  }

  delete(key: string): any {
    return this.cookieService.delete(key);
  }
}
