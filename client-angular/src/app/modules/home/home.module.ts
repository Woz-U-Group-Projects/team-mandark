import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallToActionComponent } from '../home/components/call-to-action/call-to-action.component';
import { RecBooksComponent } from '../home/components/rec-books/rec-books.component';
import { RecBooksService } from './services/rec-books.service';

import { NavbarComponent } from 'src/app/Shared/components/navbar/navbar.component';
import { HeaderComponent } from 'src/app/Shared/components/header/header.component';
import { FooterComponent } from 'src/app/Shared/components/footer/footer.component';


@NgModule({
  imports: [CommonModule],
  declarations: [CallToActionComponent, RecBooksComponent, NavbarComponent, HeaderComponent, FooterComponent],
  exports: [CallToActionComponent, RecBooksComponent],
  providers: [RecBooksService,]
    
  
})
export class HomeModule { }


