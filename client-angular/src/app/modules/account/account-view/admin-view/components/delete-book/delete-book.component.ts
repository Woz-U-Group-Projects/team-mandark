import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Shared/services/book.service';
import { Book } from '../../../../../../Shared/models/book';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  public book: Book[];

  constructor(private bookService: BookService) { }

  getBooks(): void{
    this.bookService.getBooks().subscribe(book => {
      this.book = book;
      console.log('Book', this.book);
    })
  }
  deleteBook(book_id : number): void {
    this.bookService.deleteBook(book_id).subscribe(book => this.getBooks())
  }

  ngOnInit() {
    this.getBooks();
  }

}
