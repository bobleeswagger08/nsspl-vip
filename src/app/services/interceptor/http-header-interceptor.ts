import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { ApplicationSettings } from '@nativescript/core';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let LOGIN_SESSION: any;
    if (ApplicationSettings.hasKey('loginuser')) {
      LOGIN_SESSION = JSON.parse(ApplicationSettings.getString('loginuser'));
      const SECURITY_TOKEN = 'Bearer ' + LOGIN_SESSION.securityToken;
      if (SECURITY_TOKEN)
        return next.handle(httpRequest.clone({ setHeaders: { Authorization: SECURITY_TOKEN } }));
    }
    return next.handle(httpRequest);
  }
}