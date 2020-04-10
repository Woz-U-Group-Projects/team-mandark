import { Component, OnInit } from '@angular/core';
import { DataBookDBService } from '../data-book-db.service'
import { from } from 'rxjs';
import { Books } from '../models/books';

@Component({
  selector: 'app-db-books',
  templateUrl: './db-books.component.html',
  styleUrls: ['./db-books.component.css']
})
export class DbBooksComponent implements OnInit {

  books: Books[]

  getBooks: void {
    this.dataBookDBservice.getBook().subscribe(
      b => this.book = b
    )
  }

  constructor(private dataBookDBservice : DataBookDBService) { }
 

  ngOnInit() {
    this.getBook();
  }

}
