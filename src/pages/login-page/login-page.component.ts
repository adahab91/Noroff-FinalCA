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
  isUsername: Boolean = false;
  isPassword: Boolean = false;
  userObj;
  

  constructor(protected loginService: LoginService, protected router: Router){}

  ngOnInit(){
    localStorage.setItem("Username", "Ada");
    localStorage.setItem("Password", "Ada123");
    this.userObj = this.loginService.getLoginDetails();
  }
  testUserDetails(userdetails){
    if (userdetails.username !== this.userObj.username || userdetails.password !== this.userObj.password){
      if(userdetails.username !== this.userObj.username){
        this.isUsername = true;
      } else{
        this.isUsername = false;
      }
      if(userdetails.password !== this.userObj.password){
        this.isPassword = true;
      } else{
        this.isPassword = false;
      }
    } else {
      sessionStorage.setItem("AuthToken", "sadpoasdapdoksadpok4424234");
      this.router.navigate(["/dashboard"]);
      this.isPassword = false;
      this.isUsername = false;
    }
  }
}

