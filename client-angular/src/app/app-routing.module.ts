import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FiltersComponent } from './modules/e-library/components/filters/filters.component'
import { SearchComponent } from './modules/e-library/components/search/search.component'
import { RecBooksComponent } from './modules/home/components/rec-books/rec-books.component'
import { UserLoginComponent } from "./modules/login/components/user-login/user-login.component"
import { CreateUserComponent } from './modules/register/components/create-user/create-user.component';
import { AuthenticationComponent } from './Shared/components/authentication/authentication.component';
import { FooterComponent } from './Shared/components/footer/footer.component';
import { HeaderComponent } from './Shared/components/header/header.component';
import { NavbarComponent } from './Shared/components/navbar/navbar.component';
import { TeamInfoComponent } from './Shared/components/team-info/team-info.component';
import { HomeViewComponent } from './modules/home/home-view/home-view.component';
import { LoginViewComponent } from './modules/login/login-view/login-view.component';
import { RegisterViewComponent } from './modules/register/register-view/register-view.component';


// Admin Routes
import { ELibraryViewComponent } from './modules/e-library/e-library-view/e-library-view.component';
import { UserViewComponent } from './modules/account/account-view/user-view/user-view.component';
import { AdminViewComponent } from './modules/account/account-view/admin-view/admin-view.component';
import { AddBookComponent } from './modules/account/account-view/admin-view/components/add-book/add-book.component';
import { DeleteBookComponent } from './modules/account/account-view/admin-view/components/delete-book/delete-book.component';
import { EditBookComponent } from './modules/account/account-view/admin-view/components/edit-book/edit-book.component';
import { AddUserComponent } from './modules/account/account-view/admin-view/components/add-user/add-user.component';
import { DeleteUserComponent } from './modules/account/account-view/admin-view/components/delete-user/delete-user.component';
import { EditUserComponent } from './modules/account/account-view/admin-view/components/edit-user/edit-user.component';
import { ViewUserComponent } from './modules/account/account-view/admin-view/components/view-user/view-user.component';




const routes: Routes = [
  { path: 'home', component: HomeViewComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'register', component: RegisterViewComponent },
  { path: 'user-view', component: UserViewComponent },
  { path: 'admin', component: AdminViewComponent },
  
  
  
  // Admin routes
  { path: 'book-add', component: AddBookComponent },
  { path: 'book-view', component: ELibraryViewComponent },
  { path: 'book-delete', component: DeleteBookComponent },
  { path: 'book-edit', component: EditBookComponent },
  { path: 'user-add', component: AddUserComponent },
  { path: 'user-view', component: ViewUserComponent },
  { path: 'user-delete', component: DeleteUserComponent },
  { path: 'user-edit', component: EditUserComponent },
  

  
  // { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', component: FirstComponent },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
]

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule,],
  declarations: []
})
export class AppRoutingModule { }
