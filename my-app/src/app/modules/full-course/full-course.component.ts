import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Course, EnumLearningMode } from '../../models/course.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../service/CourseService';
import { addWeeks, isThisWeek } from 'date-fns';

@Component({
  selector: 'app-full-course',
  templateUrl: './full-course.component.html',
  styleUrls: ['./full-course.component.scss']
})
export class FullCourse implements OnInit {
  // @Input()
  modes = Object.values(EnumLearningMode);
  course: Course;
  startsThisWeek: boolean = false;
  myCourse: boolean = false;
  /**
   *
   */
  constructor(private _route: ActivatedRoute, private _r: Router, private _srv: CourseService) {
    // console.log(this.course);

  }
  editMe() {
    let id = this.course.id;
    this._r.navigate(['/editcourse', id]);
  }
  isNextWeek(dateToCheck: Date): boolean {
    const startOfNextWeek = addWeeks(new Date(), 1);
    return isThisWeek(dateToCheck, { weekStartsOn: 1 }) || isThisWeek(dateToCheck);//, { weekStartsOn: 1, weekStartsOn: startOfNextWeek });
  }
  ngOnInit(): void {
    this._route.params.subscribe(params => {
      console.log(params['c'])
      let id = params['c'];
      this._srv.getCourseFromServerById(id).subscribe(data => {
        this.course = data;
        console.log(this.course)
        if (JSON.parse(sessionStorage.getItem("lecturer")).id === this.course.lecturerId)
          this.myCourse = true;
        this.startsThisWeek = this.isInCurrentWeek(this.course.startDate);
      })
    });
    this.checkStartDate();
    this.startsThisWeek = this.isNextWeek(this.course.startDate);
    // if(this.startsThisWeek)
    // this.elementRef.nativeElement.classList.add('alert-danger');
  }
  isStartDateInNextWeek;
  checkStartDate(): void {
    if (this.course?.startDate) {
      const start = new Date(this.course.startDate);
      const today = new Date();
      const nextWeek = new Date();
      nextWeek.setDate(today.getDate() + 7); // Get date for the start of the next week
      // Check if startDate is in the next week
      this.isStartDateInNextWeek = start <= nextWeek && start >= today;
      console.log("start", this.isStartDateInNextWeek)
    }
  }
  isInCurrentWeek(date: Date) {
    const today = new Date();
    const startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
    const endOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 6);
    this.isStartDateInNextWeek = date >= startOfWeek && date <= endOfWeek;
    return date >= startOfWeek && date <= endOfWeek;
  }
}


