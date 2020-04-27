import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://localhost:3100/user'

  getUser(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  constructor(private http: HttpClient) { }
}
