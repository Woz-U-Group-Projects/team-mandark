import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Shared/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
