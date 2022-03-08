import { AnimateChildOptions } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CountriesDTO } from 'src/app/model/CountriesDTO';
import { ProductsEntity } from 'src/app/model/ProductsEntity';
import { ShopsDTO } from 'src/app/model/ShopsDTO';
import { CountriesService } from 'src/app/service/Countries.service';
import { ProductsService } from 'src/app/service/Products.service';
import { ShopsService } from 'src/app/service/Shops.service';

@Component({
  selector: 'app-generic-search',
  templateUrl: './generic-search.component.html',
  styleUrls: ['./generic-search.component.css']
})
export class GenericSearchComponent implements OnInit {

  constructor(
    private shopsService : ShopsService,
    private countriesService : CountriesService,
    private productsService : ProductsService,
    private route: ActivatedRoute
  ) {
  this.countriesService.findAll().subscribe(response => {this.countries = response;   this.readDataFromQueyParams();});
  this.productsService.findAll().subscribe(response => {this.products = response;   this.readDataFromQueyParams();});
  this.shopsService.findAll().subscribe(response => {this.shops = response;   this.readDataFromQueyParams();}); // qui per far creare una volta sola le cose e BASTA! aggiunto il metodo per fixare il fatto che alla prima search non andava
}

  shops : Array<ShopsDTO> = [];
  countries : Array<CountriesDTO> = [];
  products : Array<ProductsEntity> = [];
  titles : Array<String> = [];
  results : Array<any> = [];
  categ : String = ""; 

  ngOnInit(): void {
    this.readDataFromQueyParams();
  }

  readDataFromQueyParams() : void {
    this.route.queryParams.subscribe((params : any) => { // da utilizzare queryParams importante
    var stringToSearch = params['dataToSearch'];
    this.getDataSearched(stringToSearch);
  })}

  getDataSearched(data : any) : void{
    this.titles = [];
    this.categ = "";
    this.results = [];

    this.shops.forEach((elementShop : ShopsDTO) => {
      if(elementShop.name_shop.toLowerCase() == data){
        this.results.push(elementShop);
        this.categ = "SHOP";
        this.titles.push("ID-SHOP", "NAME-SHOP", "REGION-CODE");
      }
    });
    this.countries.forEach((elementCounry : CountriesDTO) => {
      if(elementCounry.name_country.toLowerCase() == data){
        this.results.push(elementCounry);
        this.categ = "COUNTRY";
        this.titles.push("ID-COUNTRY", "NAME-COUNTRY", "ACRONYM-SHOP");
      } 
    });
    this.products.forEach((elementProduct : ProductsEntity) => {
      if(elementProduct.name_product.toLowerCase() == data){
        this.results.push(elementProduct);
        this.categ = "PRODUCT";
        this.titles.push("ID-PRODUCT", "NAME-PRODUCT", "CODE-PRODUCT");
      }
    });
  }



}
