import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {config} from 'rxjs';
import {User} from '../Shared/models/user';
import {environment} from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/admin`);
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/register`, user);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/admin/${id}`);
  }

  getById(id: number) {
    return this.http.get<User>(`${environment.apiUrl}/admin/${id}`);
  }
}
