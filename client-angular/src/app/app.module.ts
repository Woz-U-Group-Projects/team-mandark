import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AccountModule } from "./modules/account/account.module";

import { AppComponent } from "./app.component";
import { NavbarComponent } from './Shared/components/navbar/navbar.component';


@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AccountModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }






