import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user.model";

@Injectable()
export class UserService {
    getUsersFromServer(): Observable<User[]> {
        return this._http.get<User[]>("https://localhost:7035/api/Users");
    }
    getUsersFromServerByActive(active: boolean): Observable<User[]> {
        return this._http.get<User[]>("https://localhost:7035/api/Users/" + active);
    }
    saveUsers(s: User[]): Observable<boolean> {
        return this._http.post<boolean>("https://localhost:7035/api/Users", s);
    }
    
    saveNewUser(user:User): Observable<boolean> {
        console.log(user +"from server")
        return this._http.post<boolean>("https://localhost:7035/api/Users/add",user);
    }
    
    constructor(private _http: HttpClient) {

    }
}