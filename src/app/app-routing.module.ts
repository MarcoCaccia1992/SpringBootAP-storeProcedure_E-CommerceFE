import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarManagmentComponent } from './component/navbar-managment/navbar-managment.component';
import { TableCountriesComponent } from './component/countries/table-countries/table-countries.component';
import { TableProductsComponent } from './component/products/table-products/table-products.component';
import { TableShopsComponent } from './component/shops/table-shops/table-shops.component';
import { ShopsIndexComponent } from './pages/shops-index/shops-index.component';
import { FormShopsInsertComponent } from './component/shops/form-shops-insert/form-shops-insert.component';
import { CountriesIndexComponent } from './pages/countries-index/countries-index.component';
import { FormCountriesInsertComponent } from './component/countries/form-countries-insert/form-countries-insert.component';
import { FormCountriesUpdateComponent } from './component/countries/form-countries-update/form-countries-update.component';
import { FromCountriesDeleteComponent } from './component/countries/from-countries-delete/from-countries-delete.component';
import { FormShopsUpdateComponent } from './component/shops/form-shops-update/form-shops-update.component';
import { FormShopsDeleteComponent } from './component/shops/form-shops-delete/form-shops-delete.component';

const routes: Routes = [
  {path: '', component:NavbarManagmentComponent}, /* --> modo per dire che questa è la default page mettere sempre qui i path dei component*/

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

  {path: 'products', component:TableProductsComponent, children:[
    {path: 'get', component:TableShopsComponent, outlet : 'products'},
    {path: 'post', component:FormShopsInsertComponent, outlet : 'products'},
    {path: 'put', component:FormShopsUpdateComponent, outlet : 'products'},
    {path: 'delete', component:FormShopsDeleteComponent, outlet : 'products'}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
