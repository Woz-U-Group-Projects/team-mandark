import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../../../../../../Shared/models/user'

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  private bookRoute = 'http://localhost:3100/user';
  public user: User[];

  constructor(private http: HttpClient) { }

  getUser(){
    this.http.get<User[]>(this.bookRoute).subscribe(user => {
      this.user = user;
      console.log('User', this.user);
    })
  }

  ngOnInit() {
    this.getUser();
  }

}