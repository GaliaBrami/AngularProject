import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { Login } from "./login/login.component";
import { Register } from "./register/register.component";
import { AllCourses } from "./all-courses/all-courses.component";
import { AddCourse } from "./add-course/add-course.component";
import { BrowserModule } from "@angular/platform-browser";
import { LoginGuardService } from "../service/Guards/login-guard.service";
import { LecturerGuardService } from "../service/Guards/lecturer-guard.service";
import { CoursDetails } from "./cours-details/cours-details.component";
import { PageNotFound } from "./page-not-found/page-not-found.component";
import { FullCourse } from "./full-course/full-course.component";

const APP_ROUTS:Route[]=[
    {path:"",redirectTo:"login",pathMatch:"full"},
    {path:"login", component:Login },
    {path:"lecturerlogin", component:Login},
    {path:"register", component:Register},
    {path:"register/:name", component:Register},
    {path:"allcourses", component:AllCourses, canActivate:[LoginGuardService]},
    {path:"coursedetiles/:c", component:FullCourse, canActivate:[LoginGuardService]},
    {path:"addcourse", component:AddCourse, canActivate:[LoginGuardService,LecturerGuardService]},
    {path:"editcourse/:id", component:AddCourse, canActivate:[LoginGuardService,LecturerGuardService]},
    {path:"**",component:PageNotFound}
]
@NgModule({
    imports:[RouterModule.forRoot(APP_ROUTS),BrowserModule],
    exports:[RouterModule]
})
export class AppRoutingModule{

}