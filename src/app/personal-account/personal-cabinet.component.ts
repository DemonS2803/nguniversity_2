import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-personal-account',
  templateUrl: './personal-cabinet.component.html',
  styleUrls: ['./personal-cabinet.component.css']
})
export class PersonalAccountComponent implements OnInit {

  currentRole: string = localStorage.getItem('currentRole') || "";
  canChangeRole: boolean = JSON.parse(localStorage.getItem("canChangeRole") || "false");
  rolesToChoose: string[] = JSON.parse(localStorage.getItem("rolesToChoose") || "");

  constructor(private http: HttpClient) {
    // this.http.get<any>(environment.backendURL + "api/auth/get_available_roles", {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Credentials': 'true',
    //     'Authorization': localStorage.getItem("token") || ""
    //   }
    // }).subscribe(
    //   {
    //     next: ((response: any) => {
    //       console.log(response);
    //       this.rolesToChoose = response.roles;
    //     }),
    //     error: ((error: any) => {
    //       console.log(error);
    //     })
    //   }
    // )
  }

  ngOnInit(): void {

  }

}
