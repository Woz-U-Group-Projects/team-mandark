import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Shared/services/book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/Shared/models/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  editBook: Book = new Book();

  constructor(private bookService: BookService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.bookService
      .getBook(+param["title"])
      .subscribe(book => (this.editBook = book))
    })
  }

}
