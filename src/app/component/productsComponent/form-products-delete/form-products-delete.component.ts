import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductsEntity } from 'src/app/model/ProductsEntity';
import { ShopsDTO } from 'src/app/model/ShopsDTO';
import { ProductsService } from 'src/app/service/Products.service';

@Component({
  selector: 'app-form-products-delete',
  templateUrl: './form-products-delete.component.html',
  styleUrls: ['./form-products-delete.component.css']
})
export class FormProductsDeleteComponent implements OnInit {

  constructor(
    private productService : ProductsService
  ) { }

  products : Array<ProductsEntity> = [];

  selectOption = new FormControl();

  ngOnInit(): void {
    this.checkProductsList();
  }

  deleteProduct(product : string){
    var tmpProduct = this.products.find(x => x.id_product == Number(product));
    this.productService.delete(Number(product)).subscribe();
    this.checkProductsList();
    alert("you've already deleted: \n" + tmpProduct?.id_product + "\n" + tmpProduct?.name_product + "\n" + tmpProduct?.code_product);
  }

  checkProductsList():void{
    this.selectOption.reset();
    this.productService.findAll().subscribe((response: Array<ProductsEntity>) => {
      this.products = response;
      if (this.products.length != 0) {
        this.selectOption.enable();
        this.selectOption.setValue(this.products[0].id_product);
      } else {
        this.selectOption.disable();
      }
    });
  }

 
}
