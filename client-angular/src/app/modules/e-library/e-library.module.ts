import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltersComponent } from './components/filters/filters.component';
import { FiltersService } from './services/filters.service';
import { SearchComponent } from './components/search/search.component';
import { SearchService } from './services/search.service';

import { BookShowcaseComponent } from './components/book-showcase/book-showcase.component';

import { NavbarComponent } from 'src/app/Shared/components/navbar/navbar.component';
import { HeaderComponent } from 'src/app/Shared/components/header/header.component';
import { FooterComponent } from 'src/app/Shared/components/footer/footer.component';
import { BookService } from 'src/app/Shared/services/book.service';

@NgModule({
  imports: [CommonModule],
  declarations: [FiltersComponent, SearchComponent, BookShowcaseComponent, NavbarComponent, HeaderComponent, FooterComponent],
  providers: [FiltersService, SearchService, BookService],
  exports: []
})
export class ELibraryModule { }
