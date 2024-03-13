import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../service/UserService';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class Register implements OnInit {
  registerForm: FormGroup;
  users: User[];
  user: User;
  constructor(private formBuilder: FormBuilder, private _srv: UserService, private _route: ActivatedRoute, private _r: Router) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  name: any;
  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
     let newUser ;
    // = {
    //   id: this.users.length + 1,
    //   name: this.registerForm.value.name,
    //   address: this.registerForm.value.address,
    //   email: this.registerForm.value.email,
    //   password: this.registerForm.value.password
    // };
    newUser={
      id: 0,
      name: this.registerForm.value.name,
      address: this.registerForm.value.address,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    }
    let u:User=new User(newUser.id,newUser.name,newUser.address,newUser.email,newUser.password);
    console.log("newUser", newUser)
    if (this.users.find(u => u.name == newUser.name && u.password == newUser.password && u.adrress == newUser.adrress && u.mail == newUser.mail)) {
      alert("you allready exist in the system!")
      return;
    }
    this._srv.saveNewUser(newUser).subscribe(data => {
      if(data)
      alert("added successfully")
    else
    alert("failed")
    });
    sessionStorage.clear();
    sessionStorage.setItem("user", JSON.stringify(newUser));
    this._r.navigate(["/allcourses"]);
    this.registerForm.reset();
  }
  ngOnInit(): void {
    this._srv.getUsersFromServer().subscribe(data => {
      if (data) {
        this.users = data;
      }
    });
    this._route.params.subscribe(params => {
      console.log(params['name']);
      this.name = params['name'];
    })
    console.log(this._route);
  }
}

