import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/components/login/login.component';
import { StudentsComponent } from './students/components/students/students.component';
import { StudentDetailComponent } from './students/components/student-detail/student-detail.component';
import {FormsModule} from "@angular/forms";
import { MessagesComponent } from './messages/messages/messages.component';
import {HttpClientModule} from "@angular/common/http";
import { PersonalAccountComponent } from './personal-account/personal-cabinet.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AdminComponent } from './admin/components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentsComponent,
    StudentDetailComponent,
    MessagesComponent,
    PersonalAccountComponent,
    TeacherComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
