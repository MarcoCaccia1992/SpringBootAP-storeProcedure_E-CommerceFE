import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsDTO } from 'src/app/model/ProductsDTO';
import { ShopsDTO } from 'src/app/model/ShopsDTO';
import { ProductsService } from 'src/app/service/Products.service';
import { ShopsService } from 'src/app/service/Shops.service';

@Component({
  selector: 'app-form-products-insert',
  templateUrl: './form-products-insert.component.html',
  styleUrls: ['./form-products-insert.component.css']
})
export class FormProductsInsertComponent{

  constructor(// --> nelle tonde va la dichiarazione
    private productService : ProductsService,
    private shopsService : ShopsService
  ) { this.shopsService.findAll().subscribe(response => {this.shops = response}); //--> qui nelle graffe va un'azione da vare
 }

  product = {} as ProductsDTO;

  shops : Array<ShopsDTO> = [];

  formToInsertProduct = new FormGroup({
    name_product : new FormControl('', Validators.required),
    code_product : new FormControl('', Validators.required),
    fk_shop : new FormControl('', Validators.required)
  })

  getLinkedShop(shopId: any ): any{
    var shopsName : String = "";
      this.shops.forEach(element => {
        if(element.id_shop == shopId){
          shopsName = element.name_shop;
        }
    });
    return shopsName;
  }

  insertNewProduct(): void{
    var form = this.formToInsertProduct.value;
    this.product = {name_product : form.name_product, code_product : Number(form.code_product), fk_shop : Number(form.fk_shop)};
    this.productService.insert(this.product).subscribe();
    var shopsName = this.getLinkedShop(form.fk_shop);
    alert("you've already insert: \n" + form.name_product + "\n" + form.code_product + "\n" + "LINKED TO SHOP --> " + shopsName);
  }

  

}
