import {Component, Input, OnInit} from '@angular/core';
//import {STUDENTS} from "../../../models/mock-stud";
import {IStudent} from "../../../models/students";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import {StudentsService} from "../../services/students.service";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {


//@Input() students?: IStudent;
  students: IStudent | undefined;

  constructor(private route: ActivatedRoute,
              private studentService: StudentsService,
              private location: Location) { }

  ngOnInit(): void {
    this.getStudent();
  }
  getStudent(): void {
    const student_id = Number(this.route.snapshot.paramMap.get('student_id'));
    this.studentService.getStudent(student_id)
      .subscribe(stud => this.students = stud);
  }

  goBack(): void {
    this.location.back();
  }
}
