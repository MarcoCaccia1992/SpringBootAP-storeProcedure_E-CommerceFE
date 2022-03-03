import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableCountriesComponent } from './component/countries/table-countries/table-countries.component';

// imported by myself
import { HttpClientModule } from '@angular/common/http';
import { TableShopsComponent } from './component/shops/table-shops/table-shops.component';
import { TableProductsComponent } from './component/products/table-products/table-products.component';
import { CountriesIndexComponent } from './pages/countries-index/countries-index.component';
import { ShopsIndexComponent } from './pages/shops-index/shops-index.component';
import { ProductsIndexComponent } from './pages/products-index/products-index.component';
import { NavbarManagmentComponent } from './component/navbar-managment/navbar-managment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormCountriesUpdateComponent } from './component/countries/form-countries-update/form-countries-update.component';
import { FromCountriesDeleteComponent } from './component/countries/from-countries-delete/from-countries-delete.component';
import { FormShopsUpdateComponent } from './component/shops/form-shops-update/form-shops-update.component';
import { FormShopsDeleteComponent } from './component/shops/form-shops-delete/form-shops-delete.component';






@NgModule({
  declarations: [
    AppComponent,
    TableCountriesComponent,
    TableShopsComponent,
    TableProductsComponent,
    CountriesIndexComponent,
    ShopsIndexComponent,
    ProductsIndexComponent,
    NavbarManagmentComponent,
    FormCountriesUpdateComponent,
    FromCountriesDeleteComponent,
    FormShopsUpdateComponent,
    FormShopsDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // imported by myself
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
