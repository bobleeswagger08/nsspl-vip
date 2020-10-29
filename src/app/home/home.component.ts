import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationSettings } from '@nativescript/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoggingIn = true;
  model:any={};
  constructor(private router: Router,private user: UserService) {
    
   }

  ngOnInit() {
    this.model.userId='';
    this.model.password='';
    this.model.isBackgroundUser=false;
    this.model.actualUserId='';
    this.model.systemIP='192.168.56.1';
  }
  // toggleForm() {
  //   this.isLoggingIn = !this.isLoggingIn;
  // }

  submit() {
    //console.log(this.model.userId1);
    ApplicationSettings.clear();
      this.user.signInUser(this.model)
      .subscribe(signInData => {
        let result = signInData;
        if (result.userSession && result.status === 1) {
          ApplicationSettings.setString('loginuser', JSON.stringify(result.userSession));
          this.router.navigate(['/listoffice']);
          return true;
        }
        alert(result.errorMessage);
      }, (error: any) => {
        alert(error);
      });

    // } else {
    //     // Perform the registration
    // }
  }
}
