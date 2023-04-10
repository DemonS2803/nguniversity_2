import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./admin/components/login/login.component";
import {StudentsComponent} from "./admin/components/students/components/students/students.component";
import {StudentDetailComponent} from "./admin/components/students/components/student-detail/student-detail.component";
import {PersonalAccountComponent} from "./admin/components/personal-account/personal-cabinet.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'account', component: PersonalAccountComponent},
  { path: 'login', component: LoginComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/detail/:id', component: StudentDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
