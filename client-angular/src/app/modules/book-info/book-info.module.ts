import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NavbarComponent } from 'src/app/Shared/components/navbar/navbar.component';
import { HeaderComponent } from 'src/app/Shared/components/header/header.component';
import { FooterComponent } from 'src/app/Shared/components/footer/footer.component';



@NgModule({
  imports: [CommonModule],
  declarations: [NavbarComponent, HeaderComponent, FooterComponent],
  providers: []
  
})
export class BookInfoModule { }
