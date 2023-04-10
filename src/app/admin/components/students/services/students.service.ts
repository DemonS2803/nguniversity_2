import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import {IStudent} from "../../../models/students";
import {MessageService} from "../../../messages/message.service";


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  //private heroesUrl = 'api/heroes';  // URL to web api - с документации
  private studentsUrl = 'assets/json/JournalStudents.json';

  constructor(private http: HttpClient) { }

  public getStudents(): Observable<IStudent[]> {
    //const url = 'assets/json/JournalStudents.json';
    return this.http.get<IStudent[]>(this.studentsUrl)
  }

  // getStudent(id: number): Observable<IStudent> {
  //   const students = STUDENTS.find(s => s.student_id === id)!;
  //   this.messageService.add(`StudentsService: fetched hero id=${id}`);
  //   return of(students);
  // }

  public getStudent(student_id: number): Observable<IStudent> {
    const url = `assets/json/JournalStudents.json/${student_id}`;
      return this.http.get<IStudent>(url)
  }


}
