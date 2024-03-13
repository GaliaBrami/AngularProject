import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "../models/course.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CourseService{
    getCoursesFromServer(): Observable<Course[]> {
        return this._http.get<Course[]>("https://localhost:7035/api/Course");
    }
    getCourseFromServerById(id:number){
        return this._http.get<Course>("https://localhost:7035/api/Course/"+id);

    }
    edit(id:number,c:Course){
        return this._http.put<Course>("https://localhost:7035/api/Course/"+id,c);
    }
    saveNewCourse(c:Course):Observable<Course> {
        return this._http.post<Course>("https://localhost:7035/api/Course",c);
    }
    constructor( private _http: HttpClient){

    }
}