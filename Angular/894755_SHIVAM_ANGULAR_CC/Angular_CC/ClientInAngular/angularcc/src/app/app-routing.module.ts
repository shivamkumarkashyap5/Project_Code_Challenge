import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './Types/company-list/company-list.component';
import { CompanyLoginComponent} from './Types/company-login/company-login.component'
import {CartComponent} from './Types/cart/cart.component'
import {StockComponent} from './Types/stock/stock.component'
import { LogoutComponent } from './Types/logout/logout.component';

const routes: Routes = [
{path:'',pathMatch:'full',redirectTo:'company-login'},
{path:'company-login',component:CompanyLoginComponent},
{path:'company-list',component:CompanyListComponent},
 { path: 'cart', component: CartComponent },
{path:'stock', component:StockComponent},
{path:'logout',component:LogoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
