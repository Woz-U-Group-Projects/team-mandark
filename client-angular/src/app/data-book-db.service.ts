import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Books } from "./models/books";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataBookDBService {
  url: string = "mysql://localhost:3306/team-mandark";

  getUser(): Observable<Books>{
    return this.http.get<Books[]>(this.url)

  constructor(private http: HttpClient) {}
}
