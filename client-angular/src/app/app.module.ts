import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TaskDisplayComponent } from "./task-display/task-display.component";

import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './modules/home/home.component';
import { LibraryComponent } from './library/library.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserEditAccountComponent } from './user-edit-account/user-edit-account.component';
import { DbUsersComponent } from './db-users/db-users.component';
import { DbBooksComponent } from './db-books/db-books.component';
import { AdminAccountComponent } from './admin-account/admin-account.component';
import { NavbarComponent } from './Shared/components/navbar/navbar.component';

import { AccountModule } from "./modules/account/account.module";





@NgModule({
  declarations: [AppComponent, TaskDisplayComponent, LogInComponent, HomeComponent, LibraryComponent, UserAccountComponent, UserEditAccountComponent, DbUsersComponent, DbBooksComponent, AdminAccountComponent, NavbarComponent],
  imports: [BrowserModule, AccountModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

