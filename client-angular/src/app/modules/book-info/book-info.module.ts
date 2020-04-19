import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookProfileComponent } from './components/book-profile/book-profile.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { SimilarBooksComponent } from './components/similar-books/similar-books.component';


import { NavbarComponent } from 'src/app/Shared/components/navbar/navbar.component';
import { HeaderComponent } from 'src/app/Shared/components/header/header.component';
import { FooterComponent } from 'src/app/Shared/components/footer/footer.component';



@NgModule({
  imports: [CommonModule],
  declarations: [BookProfileComponent, SimilarBooksComponent, CheckOutComponent, NavbarComponent, HeaderComponent, FooterComponent],
  providers: []
  
})
export class BookInfoModule { }
