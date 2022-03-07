import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsDTO } from 'src/app/model/ProductsDTO';
import { ProductsService } from 'src/app/service/Products.service';

@Component({
  selector: 'app-form-products-insert',
  templateUrl: './form-products-insert.component.html',
  styleUrls: ['./form-products-insert.component.css']
})
export class FormProductsInsertComponent{

  constructor(
    private productService : ProductsService
  ) { }

  product = {} as ProductsDTO;

  formToInsertProduct = new FormGroup({
    name_product : new FormControl('', Validators.required),
    code_product : new FormControl('', Validators.required),
    fk_shop : new FormControl('', Validators.required)
  })

  insertNewProduct(): void{
    var form = this.formToInsertProduct.value;
    this.product = {name_product : form.name_product, code_product : Number(form.code_product), fk_shop : Number(form.fk_shop)};
    this.productService.insert(this.product).subscribe();
    alert("you've already insert: \n" + form.name_product + "\n" + form.code_product + "\n" + "LINKED TO SHOP --> " + form.fk_shop);
  }

}
