import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Course, EnumLearningMode } from '../../models/course.model';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../service/CourseService';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../models/category.model';
import { categoryService } from '../../service/category.service';
import { Lecturer } from '../../models/lecturer.model';
import { LecturerService } from '../../service/lecturer.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourse implements OnInit {
  categorys: Category[] = [];
  lecturers: Lecturer[] = [];
  isEdit: boolean = false;
  course: Course;
  // syl;
  // showSiblings: boolean = false;

  // @Output() courseAdded = new EventEmitter<Course>();
  regex: RegExp = /^[A-Z]/;
  courseForm: FormGroup = new FormGroup({

    "name": new FormControl("", [Validators.required, Validators.pattern(this.regex)]),
    "category": new FormControl( "", [Validators.required]),
    "lessonsNumber": new FormControl("", [Validators.required]),
    "startDate": new FormControl("", [Validators.required]),
    // "syllbus": new FormControl(""),//, [Validators.required]),
    "lernningMode": new FormControl("", [Validators.required]),
    "picture": new FormControl("", [Validators.required]),
    "lecturerId": new FormControl("", [Validators.required]),
    // "syllabus": this.fb.array([this.createSibling()]),
  })
  inputs: string[] = [" "];
  onInput(event: Event, index: number): void {

    const target = event.target as HTMLInputElement;
    const value = target.value.trim();
    console.log(value);
    console.log(target.value);

    if (value && index === this.inputs.length - 1) {
      this.inputs[index] = value;
     setTimeout(()=>{
      this.inputs.push("");
     },0);
    }
    // else if (index < this.inputs.length - 2)
    //   this.inputs[index] = value;
    else if (!value && index < this.inputs.length - 1) {
      this.inputs.splice(index + 1, 1);
    }
    //   this.l=this.inputs.length;
    //else if(value){ this.inputs[index]=value}
    console.log(this.inputs)
  }
  // course: Course;
  modes;
  public enumLearningMode = Object.values(EnumLearningMode);
  constructor(private _srv: CourseService, private _r: Router, private _ctgS: categoryService, private _ls: LecturerService, private fb: FormBuilder, private l: Location, private _route: ActivatedRoute) {
    if (l.path().includes("editcourse")) {
      this.isEdit = true;
      this._route.params.subscribe(params => {
        _srv.getCourseFromServerById(params['id']).subscribe(x => {
           this.course = x;
           
          this.courseForm.patchValue(this.courseForm);
       });
        this.inputs = this.course.syllabus;
      })
      //למצוא דרך למלא את השדות בטופס!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //   this.courseForm.setValue(
    //     {["name"]: this.course.name,
    //     ["category"]:this.course.categoryId,
    // ["lessonsNumber"]: this.course.numberOfLessons,
    // "startDate": this.course.startDate,
    // ["lernningMode"]: this.course.learningMode,
    // ["picture"]: this.course.image,
    // ["lecturerId"]: this.course.lecturerId});
    // let i=0;
    // for(let n of this.inputs){
    //   n=this.course.syllabus[i];
    //   i++;
    // }
      }
  }
  ngOnInit(): void {
    this.modes = Object.values(EnumLearningMode);
    
    this._ctgS.getCategoriesFromServer().subscribe(data => {
      this.categorys = data;
    })
    this._ls.getLecturersFromServer().subscribe(data => {
      this.lecturers = data;
    })

    // this.syl=this.courseForm.get('syllabus') as FormArray;
  }
  onCancle() {
    this._r.navigate(['/allcourses']);
  }
  getLMode(): EnumLearningMode {
    let m1 = this.courseForm.value.lernningMode
    if (m1 === 'Frontally') {
      return EnumLearningMode.Frontaly;
    } else if (m1 === 'zoom') {
      return EnumLearningMode.Zoom;
    }return EnumLearningMode.Frontaly;
  }
  onSubmit() {
    if (this.courseForm.invalid) {
      return;
    }

    // Create a new user object with form values
    let newCourse;
     let m;
    if (this.modes[this.courseForm.value.lernningMode] === this.modes[0])
      m = 0;
    else
      m = 1;
    // let m=this.getLMode();
    newCourse = {
      id: 0,
      name: this.courseForm.value.name,
      categoryId: parseInt(this.courseForm.value.category),
      numberOfLessons: this.courseForm.value.lessonsNumber,
      startDate: new Date(this.courseForm.value.startDate).getDate(),
      syllabus: this.inputs,
      learningMode: m,
      lecturerId: JSON.parse(sessionStorage.getItem("lecturer")).id,
      image: this.courseForm.value.picture,
    };

    console.log('New c:', newCourse);
    debugger
    // this.users.push(newCourse);
    if (this.isEdit)
      this._srv.edit(this.course.id, newCourse);//למה לא עובד?
    else
      this._srv.saveNewCourse(newCourse);//למה לא עובד?
    this._r.navigate(["/allcourses"]);
    alert("course Added Successfully!!!")

    // Optionally, you can reset the form after submission
    this.courseForm.reset();

  }


}


