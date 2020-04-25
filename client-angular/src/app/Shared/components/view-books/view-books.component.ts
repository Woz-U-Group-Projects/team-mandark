import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Book } from '../../../Shared/models/book';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {

  private bookRoute = 'http://localhost:3000/book';
  public book: Book[];

  constructor(private http: HttpClient) { }

  getBook(){
    this.http.get<Book[]>(this.bookRoute).subscribe(book => {
      this.book = book;
      console.log('Book', this.book);
    })
  }

  ngOnInit() {
    this.getBook();
  }
}