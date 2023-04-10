import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthUserDto} from "../../models/auth-user-dto";
import {environment} from "../../../../environments/environment";
import {ChosenRoleDto} from "../../models/chosen-role-dto";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private http: HttpClient,
              private router: Router) {
    this.isRoleChoosed = false;
    this.rolesToChoose = [];
  }


  login: string = "";
  password: string = "";
  role: string = "";
  rolesToChoose: string[];
  token: string = "";
  isRoleChoosed: boolean;

  ngOnInit(): void {

  }

  sendAuthRequest() {
    let authdto = new AuthUserDto(this.login, this.password, "");
    console.log(authdto)
    this.http.post<any>(environment.backendURL + "/api/auth/login", JSON.stringify(authdto), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
      }
    }).subscribe(
      {
        next: ((response: any) => {
          console.log(response)
          this.token = response.user.token;
          localStorage.setItem("token", response.user.token);
          if (!response.needToChooseRole) {
            console.log('success login as ' + response.user.login);
            localStorage.setItem("canChangeRole", "false")
            localStorage.setItem("currentRole", response.roles[0])
            this.router.navigate(["account"]);
          } else {
            this.isRoleChoosed = true;
            this.rolesToChoose = response.roles;
            localStorage.setItem("canChangeRole", "true");
            localStorage.setItem("rolesToChoose", JSON.stringify(this.rolesToChoose));
            console.log(this.rolesToChoose);
            console.log(response.user.login + " choose role to work with")
          }
        }),
        error: (error => {
          console.log(authdto);
          console.log(error);
        })
      }
    )
  }

  sendChooseRoleRequest() {
    console.log(this.role);
    localStorage.setItem("currentRole", this.role)
    this.router.navigate(["account"]);
  }

}
