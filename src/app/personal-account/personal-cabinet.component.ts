import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import nav from "./nav.json";
import {Nav1LevelModel} from "../models/nav-1-level-model";

@Component({
  selector: 'app-personal-account',
  templateUrl: './personal-cabinet.component.html',
  styleUrls: ['./personal-cabinet.component.css']
})
export class PersonalAccountComponent implements OnInit {

  // хз че за анноун
  navList = [];

  currentRole: string = localStorage.getItem('currentRole') || "";
  canChangeRole: boolean = JSON.parse(localStorage.getItem("canChangeRole") || "false");
  rolesToChoose: string[] = JSON.parse(localStorage.getItem("rolesToChoose") || "");

  constructor(private http: HttpClient) {
    this.http.get<any>(environment.backendURL + "api/auth/get_available_roles", {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Authorization': localStorage.getItem("token") || ""
      }
    }).subscribe(
      {
        next: ((response: any) => {
          console.log(response);
          this.rolesToChoose = response.roles;
        }),
        error: ((error: any) => {
          console.log(error);
        })
      }
    )
  }

  ngOnInit(): void {
    this.getMenu();
    console.log(this.navList)
  }

  getMenu() {
    console.log(this.navList)
    this.http.get<any>(environment.backendURL + "/api/auth/get_menu", {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Authorization': localStorage.getItem("token") || ""
      }
    }).subscribe(
      {
        next: ((response: any) => {
          console.log("get response: ");
          this.navList = response['menu'];
          console.log(this.navList[0]);
          console.log(this.navList[0]['menu_item'])
        }),
        error: ((error: any) => {
          console.log("error menu response")
          console.log(error);
        })
      }
    )
  }
}
