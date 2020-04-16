import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './modules/home/home.component';
import { LibraryComponent } from './library/library.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserEditAccountComponent } from './user-edit-account/user-edit-account.component';
import { DbUsersComponent } from './db-users/db-users.component';
import { DbBooksComponent } from './db-books/db-books.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'user-account', component: UserAccountComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'user-edit-account', component: UserEditAccountComponent },
  { path: 'db-users', component: DbUsersComponent },
  { path: 'db-books', component: DbBooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
