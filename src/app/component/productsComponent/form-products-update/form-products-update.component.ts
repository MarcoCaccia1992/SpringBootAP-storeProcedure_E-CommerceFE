import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { ProductsDTO } from 'src/app/model/ProductsDTO';
import { ProductsEntity } from 'src/app/model/ProductsEntity';
import { ProductsService } from 'src/app/service/Products.service';

@Component({
  selector: 'app-form-products-update',
  templateUrl: './form-products-update.component.html',
  styleUrls: ['./form-products-update.component.css']
})
export class FormProductsUpdateComponent implements OnInit {

  constructor(
    private productService : ProductsService
  ) { }

  product = {} as ProductsEntity;

  productTMP = {} as ProductsEntity;

  products : Array<ProductsEntity> = [];

  formToUpdateProduct = new FormGroup({
    id_product : new FormControl('', Validators.required),
    name_product : new FormControl('', Validators.required),
    code_product : new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    this.productService.findAll().subscribe(response => {this.products = response})
  }

  updateProduct(): void{
    var form = this.formToUpdateProduct.value;
    this.product = {id_product : Number(form.id_product), name_product : form.name_product, code_product : Number(form.code_product)}
    this.productService.put(this.product).subscribe((response: any) =>{alert(response)});
    alert("you've already update FROM: \n" + this.productTMP.name_product + "\n" + this.productTMP.code_product + "\n" + "TO --> " + "\n" +
    this.product.name_product + "\n" + this.product.code_product);
  }

  onChange(event : any){
    var product = this.products.find(x => x.id_product == event.target.value);
    if(product != null){
      this.formToUpdateProduct.setValue({id_product : product.id_product, name_product : product.name_product, code_product : product.code_product});
      this.productTMP = {id_product : Number(product.id_product), name_product : product.name_product, code_product : product.code_product};
    }
  }

}
