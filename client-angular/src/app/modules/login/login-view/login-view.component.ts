import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { LoginModule} from '../login.module';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

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
  onLogin() {
    this.http.post<any>(this.base_url + 'login', { username: this.LoginModule.username, password: this.LoginModule.password }, { observe: 'response' })
      .subscribe(
        res => this.token = res.headers.get('Authorization'),
        error => this.error = 'Unable to login with username and password.'
      );
  }

  getValues() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', this.token);
    this.http.get(this.base_url + 'api/values', { headers })
      .subscribe(res => this.data = res, error => this.error = 'Unable to retrieve data.');
  }
}
