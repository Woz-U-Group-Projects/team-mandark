import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../../Shared/models/user';
import {Router, ActivatedRoute} from '@angular/router';
import {AlertService} from '../../../services/alert.service';
import {AuthenticationService} from '../../../services/authentication.service';
import {pipe} from 'rxjs';
import {first} from 'rxjs/operators';
import {LoginModule} from '../login.module';
import {ifStmt} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  title = 'angular-api-eater';
  token = '';
  LoginModule: User = new User();
  error: string;
  base_url = 'http://localhost:8080/';
  data: any;
  userUrl: string;
  adminUrl: String;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.userUrl = this.route.snapshot.queryParams['/userHome'] || '/';
    this.adminUrl = this.route.snapshot.queryParams['/admin'] || '/';
  }
  onLogin() {
    this.alertService.clear();
    // tslint:disable-next-line:max-line-length
    // this.http.post<any>(this.base_url + 'login', { username: this.LoginModule.username, password: this.LoginModule.password }, /*{ observe: 'response' }*/)
   //   .subscribe(
    //    data => {
   //     this.router.navigate([this.returnUrl]);
   //     },
   //     error => this.error = 'Unable to login with username and password.'
   //   );
    this.authenticationService.login(User.username, User.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.userUrl]);
        },
        error => {
          this.alertService.error(error);
        });
  }

  getValues() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', this.token);
    this.http.get(this.base_url + 'api/values', { headers })
      .subscribe(res => this.data = res, error => this.error = 'Unable to retrieve data.');
  }
}
