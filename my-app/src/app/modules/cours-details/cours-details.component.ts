import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course, EnumLearningMode } from '../../models/course.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../service/CourseService';

@Component({
  selector: 'app-cours-details',
  templateUrl: './cours-details.component.html',
  styleUrls: ['./cours-details.component.scss']
})
export class CoursDetails implements OnInit {
  @Output()
  onSavingCourse: EventEmitter<Course> = new EventEmitter;

  @Input() course: Course;
  courses:Course[]=[];
  modes=Object.values(EnumLearningMode);

  constructor(private _route: ActivatedRoute,private _srv :CourseService) { }
  ngOnInit(): void {
    
  }

  saveNewStudent() {
    this.onSavingCourse.emit(this.course);
  }
}
