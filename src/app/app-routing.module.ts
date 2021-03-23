import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { RegisterComponent } from './register/register.component';
import { WeatherComponent } from './weather/weather.component';
import { PnrStatusComponent } from './pnr-status/pnr-status.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'add-emp', component: AddEmpComponent},
  {path: 'product-listing', component: ProductListingComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'pnr-status', component: PnrStatusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
