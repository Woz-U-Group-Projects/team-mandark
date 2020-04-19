import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookHistoryComponent } from './components/book-history/book-history.component';
import { BugReportComponent } from './components/bug-report/bug-report.component';
import { CheckInComponent } from './components/check-in/check-in.component';

import { NavbarComponent } from 'src/app/Shared/components/navbar/navbar.component';
import { HeaderComponent } from 'src/app/Shared/components/header/header.component';
import { FooterComponent } from 'src/app/Shared/components/footer/footer.component';


@NgModule({
  imports: [CommonModule],
  declarations: [BookHistoryComponent, BugReportComponent, CheckInComponent, NavbarComponent, HeaderComponent, FooterComponent],
  providers: []
  
})
export class AccountModule { }
