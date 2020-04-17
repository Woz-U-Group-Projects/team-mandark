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




const routes: Routes = [

  {
    path: 'filters',
    component: FiltersComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'rec-books',
    component: RecBooksComponent
  },
  {
    path: 'user-login',
    component: UserLoginComponent
  },
  {
    path: 'create-user',
    component: CreateUserComponent
  },
  {
    path: 'authentication',
    component: AuthenticationComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'team-info',
    component: TeamInfoComponent
  },
  {
    path: '',
    component: TeamInfoComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
