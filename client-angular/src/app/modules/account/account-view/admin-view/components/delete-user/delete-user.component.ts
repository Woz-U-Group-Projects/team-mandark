import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Shared/services/user.service';
import { User } from 'src/app/Shared/models/user';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  public user: User[];

  constructor(private userService: UserService) { }

  getUser(): void{
    this.userService.getUsers().subscribe(user => {
      this.user = user;
      console.log('User', this.user);
    })
  }

  ngOnInit() {
    this.getUser();
  }

}