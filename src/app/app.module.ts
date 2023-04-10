import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/components/login/login.component';
import { StudentsComponent } from './admin/components/students/components/students/students.component';
import { StudentDetailComponent } from './admin/components/students/components/student-detail/student-detail.component';
import {FormsModule} from "@angular/forms";
import { MessagesComponent } from './admin/messages/messages/messages.component';
import {HttpClientModule} from "@angular/common/http";
import { PersonalAccountComponent } from './admin/components/personal-account/personal-cabinet.component';
import { TeacherComponent } from './admin/components/teacher/teacher.component';
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
