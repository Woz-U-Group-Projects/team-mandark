import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Book } from '../../../Shared/models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {

  public book: Book[];

  constructor(private bookService: BookService) { }

  getBooks(): void{ 
    this.bookService.getBooks().subscribe(book => {
      this.book = book;
      console.log('Book', this.book);
    })
  }

  ngOnInit() {
    this.getBooks();
  }
}