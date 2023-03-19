import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-account',
  templateUrl: './personal-cabinet.component.html',
  styleUrls: ['./personal-cabinet.component.css']
})
export class PersonalAccountComponent implements OnInit {

  currentRole: string = localStorage.getItem('currentRole') || "";

  constructor() { }

  ngOnInit(): void {
  }

}
