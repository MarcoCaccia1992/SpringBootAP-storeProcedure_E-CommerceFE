import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableCountriesComponent } from './component/countriesComponent/table-countries/table-countries.component';

// imported by myself
import { HttpClientModule } from '@angular/common/http';
import { TableShopsComponent } from './component/shopsComponent/table-shops/table-shops.component';
import { TableProductsComponent } from './component/productsComponent/table-products/table-products.component';
import { CountriesIndexComponent } from './pages/countries-index/countries-index.component';
import { ShopsIndexComponent } from './pages/shops-index/shops-index.component';
import { ProductsIndexComponent } from './pages/products-index/products-index.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormCountriesUpdateComponent } from './component/countriesComponent/form-countries-update/form-countries-update.component';
import { FromCountriesDeleteComponent } from './component/countriesComponent/from-countries-delete/from-countries-delete.component';
import { FormShopsUpdateComponent } from './component/shopsComponent/form-shops-update/form-shops-update.component';
import { FormShopsDeleteComponent } from './component/shopsComponent/form-shops-delete/form-shops-delete.component';
import { FormProductsInsertComponent } from './component/productsComponent/form-products-insert/form-products-insert.component';
import { FormShopsInsertComponent } from './component/shopsComponent/form-shops-insert/form-shops-insert.component';
import { FormProductsUpdateComponent } from './component/productsComponent/form-products-update/form-products-update.component';
import { FormProductsDeleteComponent } from './component/productsComponent/form-products-delete/form-products-delete.component';
import { FormCountriesInsertComponent } from './component/countriesComponent/form-countries-insert/form-countries-insert.component';
import { GenericSearchComponent } from './component/generic-search/generic-search.component';
import { HomeComponent } from './component/home/home.component';






@NgModule({
  declarations: [
    AppComponent,
    TableCountriesComponent,
    TableShopsComponent,
    TableProductsComponent,
    CountriesIndexComponent,
    ShopsIndexComponent,
    ProductsIndexComponent,
    FormCountriesUpdateComponent,
    FromCountriesDeleteComponent,
    FormShopsUpdateComponent,
    FormShopsDeleteComponent,
    FormProductsInsertComponent,
    FormShopsInsertComponent,
    FormProductsUpdateComponent,
    FormProductsDeleteComponent,
    FormCountriesInsertComponent,
    GenericSearchComponent,
    HomeComponent,
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
