import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { RegisterModule} from '../../register.module';
import { User } from '../../../../Shared/models/user'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  title: string = 'angular-api-eater';
  token: string = '';
  user: User = new User();
  error: string;
  base_url: string= 'http://localhost:8080/';
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


}
