import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserLoginService } from './services/user-login.service';

import { NavbarComponent } from 'src/app/Shared/components/navbar/navbar.component';
import { HeaderComponent } from 'src/app/Shared/components/header/header.component';
import { FooterComponent } from 'src/app/Shared/components/footer/footer.component';



@NgModule({
  imports: [CommonModule],
  declarations: [UserLoginComponent, NavbarComponent, HeaderComponent, FooterComponent],
  providers: [UserLoginService]

})
export class LoginModule {
  id: number;
  username: string;
  password: string;
  is_admin: boolean;
  num_of_books: number;
  overdue_book: number;
  history: string;
  token: string;
  static password: string;
}

