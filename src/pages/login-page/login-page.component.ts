import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "./../../services/login.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [LoginService]
})
export class LoginPageComponent implements OnInit {
  title: String = "Please login to continue to your Dashboard";
  isUsername: Boolean = false;
  isPassword: Boolean = false;
  userObj;

  constructor(protected loginService: LoginService, protected router: Router){}

 /*  isTrue: Boolean = false; 
  myObject: Object = {
    name: "myName",
    lastName: "lastname"
  };
  myNumber: Number = 1;
  unsureOfValue: any = [ ];
  myArray: Array<Number> = [1,2,3]; */

  ngOnInit(){
    localStorage.setItem("Username", "Ada");
    localStorage.setItem("Password", "Ada123");
    this.userObj = this.loginService.getLoginDetails();
  }
  testUserDetails(userdetails){
    if (userdetails.username !== this.userObj.username || userdetails.password !== this.userObj.password){
      this.title = "Please do some changes";
      if(userdetails.username !== this.userObj.username){
        this.isUsername = true;
      }
      if(userdetails.password !== this.userObj.password){
        this.isPassword = true;
      }
    } else {
      sessionStorage.setItem("AuthToken", "sadpoasdapdoksadpok4424234");
      this.router.navigate(["/dashboard"]);
      this.isPassword = false;
      this.isUsername = false;
    }
  }
}

