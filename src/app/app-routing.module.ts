import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableCountriesComponent } from './component/countriesComponent/table-countries/table-countries.component';
import { TableProductsComponent } from './component/productsComponent/table-products/table-products.component';
import { TableShopsComponent } from './component/shopsComponent/table-shops/table-shops.component';
import { ShopsIndexComponent } from './pages/shops-index/shops-index.component';
import { CountriesIndexComponent } from './pages/countries-index/countries-index.component';
import { FormCountriesUpdateComponent } from './component/countriesComponent/form-countries-update/form-countries-update.component';
import { FromCountriesDeleteComponent } from './component/countriesComponent/from-countries-delete/from-countries-delete.component';
import { FormShopsUpdateComponent } from './component/shopsComponent/form-shops-update/form-shops-update.component';
import { FormShopsDeleteComponent } from './component/shopsComponent/form-shops-delete/form-shops-delete.component';
import { ProductsIndexComponent } from './pages/products-index/products-index.component';
import { FormProductsInsertComponent } from './component/productsComponent/form-products-insert/form-products-insert.component';
import { FormShopsInsertComponent } from './component/shopsComponent/form-shops-insert/form-shops-insert.component';
import { FormProductsUpdateComponent } from './component/productsComponent/form-products-update/form-products-update.component';
import { FormProductsDeleteComponent } from './component/productsComponent/form-products-delete/form-products-delete.component';
import { FormCountriesInsertComponent } from './component/countriesComponent/form-countries-insert/form-countries-insert.component';
import { GenericSearchComponent } from './component/generic-search/generic-search.component';


const routes: Routes = [
  //{path: '', component:NavbarManagmentComponent}, /* --> modo per dire che questa è la default page mettere sempre qui i path dei component*/

  {path: 'countries', component:CountriesIndexComponent, children:[
    {path: 'get', component:TableCountriesComponent, outlet : 'countries'},
    {path: 'post', component:FormCountriesInsertComponent, outlet : 'countries'},
    {path: 'put', component:FormCountriesUpdateComponent, outlet : 'countries'},
    {path: 'delete', component:FromCountriesDeleteComponent, outlet : 'countries'}]
  },

  {path: 'shops', component:ShopsIndexComponent, children:[
    {path: 'get', component:TableShopsComponent, outlet : 'shops'},
    {path: 'post', component:FormShopsInsertComponent, outlet : 'shops'},
    {path: 'put', component:FormShopsUpdateComponent, outlet : 'shops'},
    {path: 'delete', component:FormShopsDeleteComponent, outlet : 'shops'}]
  },

  {path: 'products', component:ProductsIndexComponent, children:[
    {path: 'get', component:TableProductsComponent, outlet : 'products'},
    {path: 'post', component:FormProductsInsertComponent, outlet : 'products'},
    {path: 'put', component:FormProductsUpdateComponent, outlet : 'products'},
    {path: 'delete', component:FormProductsDeleteComponent, outlet : 'products'}]
  },

  {path: 'search', component:GenericSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
