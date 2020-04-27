import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../../../../../../Shared/models/user'
import { UserService } from 'src/app/Shared/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  public user: User[];

  constructor(private userService: UserService) { }

  getUser(): void{
    this.userService.getUser().subscribe(user => {
      this.user = user;
      console.log('User', this.user);
    })
  }

  ngOnInit() {
    this.getUser();
  }

}