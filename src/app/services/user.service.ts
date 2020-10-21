import { Injectable } from '@angular/core';
import { environment } from '@src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlLogin :string=environment.configServiceUrl +'/Login';
  private urlOffice:string = environment.configServiceUrl +'/OrganizationUnit';
  constructor(private httpClient:HttpClient) { 
  }
  signInUser(signInUser):Observable<any> {
    return this.httpClient.post(this.urlLogin, signInUser)
  }
  getOrganisationalList(code?:string){
    if(code){
     return this.httpClient.get(this.urlOffice+'/'+code);
    }
    else{
        return this.httpClient.get(this.urlOffice+"/00000000-0000-0000-0000-000000000000/list");
    }
  }
}
