import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
// import { StudentListComponent } from "./student-list/student-list.component";
// import StudentDetailsComponent from    "./student-details/student-details.component";
// import { StudentDetailsFormComponent } from './student-details-form/student-details-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { UserComponent } from './user/user.component';
// import { LecturerComponent } from './lecturer/lecturer.component';
// import { CategoryComponent } from './category/category.component';
import { Login } from './modules/login/login.component';
import { Route, RouterModule } from "@angular/router";
import { AppRoutingModule } from "./modules/app-routing.module";
import { Register } from './modules/register/register.component';
import { AllCourses } from './modules/all-courses/all-courses.component';
import { CoursDetails } from './modules/cours-details/cours-details.component';
import { AddCourse } from './modules/add-course/add-course.component';
import { UserService } from "./service/UserService";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CourseService } from "./service/CourseService";
import { LecturerService } from "./service/lecturer.service";
import { PageNotFound } from './modules/page-not-found/page-not-found.component';
import { FullCourse } from './modules/full-course/full-course.component';
import { categoryService } from "./service/category.service";
import { IconPipe } from "./service/icon.pipe";

@NgModule({

    declarations:[AppComponent, Login, Register, AllCourses, CoursDetails, AddCourse, PageNotFound, FullCourse,IconPipe  ],
    imports:[BrowserModule,ReactiveFormsModule,AppRoutingModule,HttpClientModule,FormsModule],
    bootstrap:[AppComponent],
    providers:[UserService,CourseService,LecturerService,categoryService]
})
export class AppModule{

}


//לטפל בהוספת משתמש(שיתווסף)
//לטפל בעדכון והוספת קורס
//האם אפשר שטופס יצעק על ולידציה רק אחרי שמנסים למלא אותו ולא יהיה אדום מההתחלה
//קורס מלא ngclass לא עובד לצבוע זמן התחלה שבשבוע הנוכחי!
//sweet alert!