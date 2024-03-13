import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Course, EnumLearningMode } from '../../models/course.model';
import { UserService } from '../../service/UserService';
import { Route, Router } from '@angular/router';
import { CourseService } from '../../service/CourseService';
import { categoryService } from '../../service/category.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  // styleUrls: ['./all-courses.component.scss']
})
export class AllCourses implements OnInit{
  // @Output()
  // courseAdded: EventEmitter<Course> = new EventEmitter();
  modes=Object.values(EnumLearningMode);

  courses:Course[];
  filteredCourses:Course[];
  // @Output() courseFulltoSend = new EventEmitter<Course>();
 showFullDetails(courseToShow:Course){
    let c=courseToShow.id;
    // this.courseFulltoSend.emit(courseToShow);
    this._r.navigate(['/coursedetiles',c]);

  }
  categorys:Category[]=[];
  ngOnInit(): void {
    this._ctgS.getCategoriesFromServer().subscribe(data=>{
      this.categorys=data;
    })
    // this.courses=
    this._srv.getCoursesFromServer().subscribe(data => {
      if (data)
        this.courses = data;
      this.filteredCourses=data;
    });
  }
  name:string;
  filterByName(){
    this.filteredCourses=this.courses.filter(c=>c.name.includes(this.name));
  }
  ctg:any;
  filterByCategory(e:any){
    let number: number = parseInt(this.ctg); 
    this.filteredCourses=this.courses.filter(c=>c.categoryId==this.ctg);
  }
  lm:any;
  filterByLm(){
    console.log(this.lm);
    this.filteredCourses=this.courses.filter(c=>this.modes[c.learningMode]==this.lm);}
  constructor(private _srv:CourseService, private _r :Router,private _ctgS:categoryService) {

  }
  addNewCourse(){
    this._r.navigate(['/addcourse']);
  }

  selectedCourse:Course;
  
  addNewCourseToList(CourseToAdd:Course){
    this._r.navigate(['/addcourse']);
  }
}
