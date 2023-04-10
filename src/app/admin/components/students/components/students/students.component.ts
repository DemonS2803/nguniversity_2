import { Component, OnInit } from '@angular/core';
import {IStudent} from "../../../../models/students";
import { StudentsService} from "../../services/students.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment";
//import {MessageService} from "../../../messages/message.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: IStudent[] = [];

  constructor(private studentsService: StudentsService,
              private http: HttpClient) { }


  mainText: string = "";
  isRightRole: boolean = false;
  ngOnInit(): void {
    this.http.get<any>(environment.backendURL + "/api/student/home", {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Authorization': localStorage.getItem("token") || ""
      }
    }).subscribe({
      next: ((response: any) => {
        this.mainText = "Hello bro student. success login"
        this.isRightRole = true;
        console.log(response);
      }),
      error: ((error: any) => {
        this.mainText = "no one in rus has rights, even you";
        console.log(error);
      })
    })
  }

  getAllStudents(): void {
    this.studentsService.getStudents().subscribe(students => this.students = students);
  }


}
