import { Component, OnInit } from '@angular/core';
import { ProductsEntity } from 'src/app/model/ProductsEntity';
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
    this.productService.findAll().subscribe(response => {this.products = response});
  }

}
