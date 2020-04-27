import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Shared/services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

}
