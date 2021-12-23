import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './Types/company-list/company-list.component';
import {HttpClientModule} from '@angular/common/http';


import { CompanyLoginComponent } from './Types/company-login/company-login.component';

import { CartComponent } from './Types/cart/cart.component';
import { StockComponent } from './Types/stock/stock.component';
import { LogoutComponent } from './Types/logout/logout.component'
@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyLoginComponent,
    CartComponent,
    StockComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
