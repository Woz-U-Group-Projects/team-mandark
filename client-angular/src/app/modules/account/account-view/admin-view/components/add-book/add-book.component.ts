import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Book } from 'src/app/Shared/models/book';
import { BookService } from 'src/app/Shared/services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  newBook: Book = new Book();

  addBook() {
    this.bookService
    .addBook(this.newBook)
    .subscribe(book=> this.router.navigate(["bookView"]));
  }

  constructor(private bookService: BookService, private router : Router) { }

  ngOnInit() {
  }

}
