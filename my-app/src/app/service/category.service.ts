import { Injectable } from "@angular/core";
import { Lecturer } from "../models/lecturer.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Category } from "../models/category.model";

@Injectable()
export class categoryService {
    /**
     *
     */
    constructor(private _http:HttpClient) {
    }
    getCategoriesFromServer(): Observable<Category[]> {
        return this._http.get<Category[]>("https://localhost:7035/api/Categoty");
    }
}