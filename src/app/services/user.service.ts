import { Injectable } from '@angular/core';
import { environment } from '@src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlLogin :string=environment.configServiceUrl +'/Login';
  constructor(private httpClient:HttpClient) { 
  }
  signInUser(signInUser):Observable<any> {
    return this.httpClient.post(this.urlLogin, signInUser)
  }
}
