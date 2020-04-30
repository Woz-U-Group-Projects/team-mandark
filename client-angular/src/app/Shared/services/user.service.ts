import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://localhost:3000/user'
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  getUser(id: number): Observable<User>{
    return this.http.delete<User>(this.url + '/' + id);
  }
  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.url, user);
  }
  deleteUser(id: number): Observable<User>{
    return this.http.delete<User>(this.url + '/' + id);
  }
  editUser(user: User): Observable<User>{
    return this.http.put<User>(this.url + '/' + user.id, user);
  }

  constructor(private http: HttpClient) {
  }
}
