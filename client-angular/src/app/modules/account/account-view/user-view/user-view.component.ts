import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Book } from '../../../../Shared/models/book'
import {AuthenticationService} from '../../../../services/authentication.service';
import {UserService} from '../../../../services/user.service';
import {User} from '../../../../Shared/models/user';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  loading = false;
  currentUser: User;
  userFromApi: User;
  private bookRoute = 'http://localhost:3000/book';
  public book: Book[];

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
  this.currentUser = this.authenticationService.currentUserValue;
  }

  getBook(){
    this.http.get<Book[]>(this.bookRoute).subscribe(book => {
      this.book = book;
      console.log('Book', this.book);
    })
  }

  ngOnInit() {
    this.getBook();
    this.loading = true;
    this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
      this.loading = false;
      this.userFromApi = user;
    });
  }

}
