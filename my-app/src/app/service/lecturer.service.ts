import { Injectable } from "@angular/core";
import { Lecturer } from "../models/lecturer.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class LecturerService {
    
    constructor(private _http:HttpClient) {
    }
    getLecturersFromServer(): Observable<Lecturer[]> {
        return this._http.get<Lecturer[]>("https://localhost:7035/api/Lecturer");
    }
}