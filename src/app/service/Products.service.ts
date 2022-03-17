import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsDTO } from '../model/ProductsDTO';
import { ProductsEntity } from '../model/ProductsEntity';





@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(
        private httpClient : HttpClient
    ){}

    localHostBaseProductsUrl = 'http://localhost:8090/products/';

    findAll() : Observable<Array<ProductsEntity>>{
        return this.httpClient.get<Array<ProductsEntity>>(this.localHostBaseProductsUrl + 'allProducts');
    }
    
    insert(product : ProductsDTO) : Observable<any> {
        return this.httpClient.post(this.localHostBaseProductsUrl + 'newProductSP?name_product=' + product.name_product + '&code_product=' + product.code_product + '&fk_shop=' + product.fk_shop, null);
    }
    
    put(product : ProductsEntity) : Observable<any> {
        return this.httpClient.put(this.localHostBaseProductsUrl + 'updateAllDataProductByIdSP', product);
    }

    delete(product : Number) : Observable<any>  {
        return this.httpClient.delete(this.localHostBaseProductsUrl + 'deleteAndOrderProductByIdSP?id_product=' + product);
    }
}