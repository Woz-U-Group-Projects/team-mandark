import { Component, OnInit } from '@angular/core';
import { dataUsersDBservice} from '../data-user-db.service'
@Component({
  selector: 'app-db-users',
  templateUrl: './db-users.component.html',
  styleUrls: ['./db-users.component.css']
})
export class DbUsersComponent implements OnInit {

  users: Users[]

  getUsers: void {
    this.dataUsersDBservice.getUsers().subscribe(
      u => this.user = u
    )

  constructor(private dataUsersDBservice:) { }

  ngOnInit() {
    this.getUsers();
  }

}
