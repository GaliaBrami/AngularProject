import { Location } from "@angular/common";
import {Component} from "@angular/core"
import { Router } from "@angular/router";
import { Course } from "./models/course.model";

@Component({
    selector:"app-root",
    styleUrls:["app.component.css"],
    templateUrl:"app.component.html"
})
export class AppComponent{
   
    constructor( private l:Location,private _r:Router){

    }
    isLinkActive(s :string){
        return this._r.url === s;
    } 
    
    logOut(){
        console.log(JSON.parse(sessionStorage.getItem("user")));
        console.log(JSON.parse(sessionStorage.getItem("lecturer")));
        console.log("log out!");
        sessionStorage.clear();
        this._r.navigate(['/login']);
    }
 
}