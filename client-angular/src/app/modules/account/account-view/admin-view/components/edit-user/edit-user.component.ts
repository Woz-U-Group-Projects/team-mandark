import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Shared/models/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editUser: User = new User();

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

   ngOnInit() {
      this.route.params.subscribe(param => {          
        this.userService
          .getUser(+param["username"])
          .subscribe(user => (this.editUser = user))
      })          
  }
            
}
            
