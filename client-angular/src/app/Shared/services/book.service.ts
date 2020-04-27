import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Book } from '../models/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  url: string = 'http://localhost:3000/book'

  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.url);
  }
  getBook(book_id: number): Observable<Book>{
    return this.http.delete<Book>(this.url + "/" + book_id);
  }
  addBook(book: Book): Observable<Book>{
    return this.http.post<Book>(this.url,book);
  }
  deleteBook(book_id: number): Observable<Book>{
    return this.http.delete<Book>(this.url + "/" + book_id);
  }
  editBook(book: Book): Observable<Book>{
    return this.http.put<Book>(this.url + "/" + book.book_id, book);
  }

  constructor(private http: HttpClient) { }
}

