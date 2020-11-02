import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { LocalStorage} from '../../components/local-storage/local-storage'
@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let LOGIN_SESSION: any;
    if (LocalStorage.getValue('loginuser')) {
      LOGIN_SESSION = JSON.parse(LocalStorage.getValue('loginuser'));
      const SECURITY_TOKEN = 'Bearer ' + LOGIN_SESSION.securityToken;
      if (SECURITY_TOKEN)
        return next.handle(httpRequest.clone({ setHeaders: { Authorization: SECURITY_TOKEN } }));
    }
    return next.handle(httpRequest);
  }
}