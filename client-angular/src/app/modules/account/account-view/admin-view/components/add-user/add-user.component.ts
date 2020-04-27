import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/Shared/models/user';
import { UserService } from 'src/app/Shared/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  newUser: User = new User()

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
