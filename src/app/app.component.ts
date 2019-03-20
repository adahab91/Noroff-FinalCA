import { Component, OnInit } from '@angular/core';
import { LoginService } from "./../services/login.service";
//import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoginService]
})
export class AppComponent implements OnInit{
  title: String = "Please login to continue to your Dashboard";
  isUsername: Boolean = false;
  isPassword: Boolean = false;
  userObj;

  constructor(protected loginService: LoginService){}

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
      this.title = "Welcome back " + userdetails.username;
      this.isPassword = false;
      this.isUsername = false;
    }
  }
}
