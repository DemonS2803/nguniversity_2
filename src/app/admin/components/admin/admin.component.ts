import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employer} from "../../../models/employer";
import {environment} from "../../../../environments/environment";
import {FilterRequestDto} from "../../../models/filter-request-dto";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  reg_num: string = "";
  position: string = "";
  name: string = "";
  surname: string = "";
  patronymic: string = "";
  birthday: string = "";
  pol: string = "";
  isRightRole: boolean = false;
  filteredPersons = new Array();


  constructor(private http: HttpClient) {
  }

  mainText: string = "";

  ngOnInit(): void {
    this.http.get<any>(environment.backendURL + "/api/admin/page", {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Authorization': localStorage.getItem("token") || ""
      }
    }).subscribe({
      next: ((response: any) => {
        this.mainText = "admin works!"
        console.log(response);
        this.isRightRole = true;
      }),
      error: ((error: any) => {
        this.mainText = "you're not an admin. go out!"
        console.log(error);
      })
    })
  }

  postFilterMethod(): void {
    let filterDto = new FilterRequestDto( this.reg_num,
      this.position,
      this.name,
      this.surname,
      this.patronymic,
      this.birthday,
      this.pol,
    )
    console.log(filterDto);
    this.http.post<any>(environment.backendURL + "/api/admin/filter", JSON.stringify(filterDto), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Authorization': localStorage.getItem("token") || ""
      }
    }).subscribe(
      {
        next: ((response: any) => {
          console.log(response)
          this.filteredPersons = [];
          for (let personItem of response) {
            const employer = Object.assign(new Employer(), personItem);
            this.filteredPersons.push(employer);
          }
          console.log(this.filteredPersons);

        }),
        error: (error => {
          console.log(filterDto);
          console.log(error)
        })
      }
    )
  }

}
