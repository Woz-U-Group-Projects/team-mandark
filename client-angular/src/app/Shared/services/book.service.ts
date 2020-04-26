import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Book } from '../models/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  url: string = 'http://localhost:3000/book'

  getBook(): Observable<Book[]>{
    return this.http.get<Book[]>(this.url);
  }

  constructor(private http: HttpClient) { }
}

