import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import  {LoginModule} from '../../login/login.module';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {

  title = 'angular-api-eater';
  token = '';
  LoginModule: LoginModule = new LoginModule();
  error: string;
  // tslint:disable-next-line:variable-name
  base_url = 'http://localhost:8080/';
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
