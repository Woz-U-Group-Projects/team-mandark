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




const routes: Routes = [
  { path: 'home', component: HomeViewComponent }
  // { path: 'first-component', component: FirstComponent },
  // { path: 'second-component', component: SecondComponent },
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
