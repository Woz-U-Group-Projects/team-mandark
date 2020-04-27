import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Book } from '../../../Shared/models/book';

@Component({
  selector: 'app-e-library-view',
  templateUrl: './e-library-view.component.html',
  styleUrls: ['./e-library-view.component.css']
})
export class ELibraryViewComponent implements OnInit {

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

