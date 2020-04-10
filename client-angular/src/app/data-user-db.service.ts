import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Users } from "./models/users" 
import { Observable, of } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DataUserDBService {
  url: string = "mysql://localhost:3306/team-mandark"; /* not sure if this is right */

  getUser(): Observable<Users>{
    return this.http.get<Users[]>(this.url)
  }

  constructor(private http: HttpClient) {}
}
