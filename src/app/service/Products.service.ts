import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsDTO } from '../model/ProductsDTO';





@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(
        private httpClient : HttpClient
    ){}

    localHostBaseProductsUrl = 'http://localhost:8090/products/';

    findAll() : Observable<Array<ProductsDTO>>{
        return this.httpClient.get<Array<ProductsDTO>>(this.localHostBaseProductsUrl + 'allProducts');
    }
    
}