import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AccountModule } from './modules/account/account.module';
import { BookHistoryComponent } from './modules/account/components/book-history/book-history.component';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Shared/components/navbar/navbar.component';
import { HeaderComponent } from './Shared/components/header/header.component';

/*Services */
import { FiltersService } from './modules/e-library/services/filters.service';
import { SearchService } from './modules/e-library/services/search.service';
import { RecBooksService } from './modules/home/services/rec-books.service';
import { UserLoginService } from './modules/login/services/user-login.service';
import { CreateUserService } from './modules/register/services/create-user.service';
import { BookService } from './Shared/services/book.service';
import { UserService } from './Shared/services/user.service';
import { HomeViewComponent } from './modules/home/home-view/home-view.component';
import { AccountViewComponent } from './modules/account/account-view/account-view.component';
import { BookInfoViewComponent } from './modules/book-info/book-info-view/book-info-view.component';
import { ELibraryViewComponent } from './modules/e-library/e-library-view/e-library-view.component';
import { LoginViewComponent } from './modules/login/login-view/login-view.component';
import { RegisterViewComponent } from './modules/register/register-view/register-view.component';
import { FiltersComponent } from './modules/e-library/components/filters/filters.component';
import { SearchComponent } from './modules/e-library/components/search/search.component';
import { RecBooksComponent } from './modules/home/components/rec-books/rec-books.component';
import { UserLoginComponent } from './modules/login/components/user-login/user-login.component';
import { CreateUserComponent } from './modules/register/components/create-user/create-user.component';
import { AuthenticationComponent } from './Shared/components/authentication/authentication.component';
import { FooterComponent } from './Shared/components/footer/footer.component';
import { TeamInfoComponent } from './Shared/components/team-info/team-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserViewComponent } from './modules/account/account-view/user-view/user-view.component';
import { AdminViewComponent } from './modules/account/account-view/admin-view/admin-view.component';
import { AddBookComponent } from './modules/account/account-view/admin-view/components/add-book/add-book.component';
import { DeleteBookComponent } from './modules/account/account-view/admin-view/components/delete-book/delete-book.component';
import { ViewBooksComponent } from './Shared/components/view-books/view-books.component';
import { EditBookComponent } from './modules/account/account-view/admin-view/components/edit-book/edit-book.component';
import { ViewUserComponent } from './modules/account/account-view/admin-view/components/view-user/view-user.component';
import { AddUserComponent } from './modules/account/account-view/admin-view/components/add-user/add-user.component';
import { DeleteUserComponent } from './modules/account/account-view/admin-view/components/delete-user/delete-user.component';
import { EditUserComponent } from './modules/account/account-view/admin-view/components/edit-user/edit-user.component';
import {AlertComponent} from './Shared/components/alert.component';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import {ErrorInterceptor} from './helpers/error.interceptor';
import {RouterModule, Routes} from '@angular/router';


@NgModule({
  imports: [
    BrowserModule,
    AccountModule,
    AppRoutingModule,
    FormsModule, HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    BookHistoryComponent,
    HeaderComponent,
    HomeViewComponent,
    AccountViewComponent,
    BookInfoViewComponent,
    ELibraryViewComponent,
    LoginViewComponent,
    RegisterViewComponent,
    FiltersComponent,
    SearchComponent,
    RecBooksComponent,
    UserLoginComponent,
    CreateUserComponent,
    AuthenticationComponent,
    FooterComponent,
    TeamInfoComponent,
    UserViewComponent,
    AdminViewComponent,
    AddBookComponent,
    DeleteBookComponent,
    ViewBooksComponent,
    EditBookComponent,
    ViewUserComponent,
    AddUserComponent,
    DeleteUserComponent,
    EditUserComponent,
    AlertComponent
  ],
  providers: [
    FiltersService,
    SearchService,
    RecBooksService,
    UserLoginService,
    CreateUserService,
    BookService,
    UserService,
    HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]

})

export class AppModule { }








