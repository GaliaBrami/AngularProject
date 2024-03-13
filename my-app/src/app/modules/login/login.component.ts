import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../../service/UserService';
import { ReactiveFormsModule } from '@angular/forms';
import { Lecturer } from '../../models/lecturer.model';
import { Location } from '@angular/common';
import { LecturerService } from '../../service/lecturer.service';


// const users: User[] = [
//     new User(1, 'John Doe', '123 Main St', 'john@example.com', 'password123'),
//     new User(2, 'Jane Smith', '456 Elm St', 'jane@example.com', 'password456'),
//     new User(3, 'Alice Johnson', '789 Oak St', 'alice@example.com', 'password789'),
//     new User(4, 'AAA', '789 Oak St', 'alice@example.com', '123')
//   ];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // styleUrls: ['./login.component.scss']
})

export class Login implements OnInit {
  islecturer: boolean = false;
  users: User[] = [];
  lecturers: Lecturer[] = [];
  // userFound: User;
  alert: string;
  loginForm: FormGroup = new FormGroup({

    "name": new FormControl("", [Validators.required]),
    "password": new FormControl("", [Validators.required]),
    "courseName": new FormControl("")
  })
  check() {
    if (this.islecturer)
      this.checkLecturer();
    else
      this.checkUser();
  }
  checkLecturer() {
    if (this.loginForm.valid) {
      let userFound;
      userFound = this.lecturers.find(u => u.name == this.loginForm.value.name);
      if (userFound)
        if (userFound.password != this.loginForm.value.password)
          alert("wrong password");//sweet alert
        else {

          //לשמור פרטים בsession storage
          sessionStorage.clear();
          sessionStorage.setItem("lecturer", JSON.stringify(userFound));
          // console.log(JSON.parse(sessionStorage.getItem("user")))
          this._router.navigate(["/allcourses"]);
        }
      else {
        this.alert = "Invalid username or password!";
        //ניתוב לרגיסטר
        // let name = this.loginForm.value.name;
        // this._router.navigate(['/register', name]);
      }
    }
    else {
      this.alert = "username and password are required!";
    }
  }
  checkUser() {

    if (this.loginForm.valid) {
      let userFound;
      userFound = this.users.find(u => u.name == this.loginForm.value.name);
      if (userFound)
        if (userFound.password != this.loginForm.value.password)
          alert("wrong password");//sweet alert
        else {

          sessionStorage.clear();
          sessionStorage.setItem("user", JSON.stringify(userFound));
          console.log(JSON.parse(sessionStorage.getItem("user")))
          this._router.navigate(["/allcourses"]);
        }
      else {
        console.log(userFound)
        this.alert = "Invalid username or password!";//ניתוב לרגיסטר
        let name = this.loginForm.value.name;
        this._router.navigate(['/register', name]);
      }
    }
    else {
      this.alert = "All fields are required!";
    }
  }
  ngOnInit(): void {
    this._srv.getUsersFromServer().subscribe(data => {
      if (data)
        this.users = data;
    });
    this._s.getLecturersFromServer().subscribe(data => {
      if (data)
        this.lecturers = data;
    });
    sessionStorage.clear();
  }

  constructor(private _router: Router, private _srv: UserService, private l: Location, private _s: LecturerService) {
    
    if (l.path().endsWith("lecturerlogin")) {
      this.islecturer = true;
    }
  }

}
