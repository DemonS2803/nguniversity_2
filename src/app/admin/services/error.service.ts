import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StudentsService} from "../components/students/services/students.service";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private http: HttpClient,
              private studentsService: StudentsService) { }
}
