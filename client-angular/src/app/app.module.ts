import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AccountModule } from "./modules/account/account.module";
import { BookHistoryComponent } from './modules/account/components/book-history/book-history.component';

import { AppComponent } from "./app.component";
import { NavbarComponent } from './Shared/components/navbar/navbar.component';


@NgModule({
<<<<<<< HEAD
  declarations: [AppComponent, TaskDisplayComponent, LogInComponent, HomeComponent, LibraryComponent, UserAccountComponent, UserEditAccountComponent, DbUsersComponent, DbBooksComponent, AdminAccountComponent, NavbarComponent, BookHistoryComponent],
=======
  declarations: [AppComponent, NavbarComponent],
>>>>>>> e97434dc13afd69679fd55897bca27024089dff1
  imports: [BrowserModule, AccountModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }






