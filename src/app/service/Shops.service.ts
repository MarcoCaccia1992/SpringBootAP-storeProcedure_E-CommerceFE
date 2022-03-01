import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShopsDTO } from '../model/ShopsDTO';





@Injectable({
    providedIn: 'root'
})
export class ShopsService {

    constructor(
        private httpClient : HttpClient
    ){}

    localHostBaseShopsUrl = 'http://localhost:8090/shops/';

    findAll() : Observable<Array<ShopsDTO>>{
        return this.httpClient.get<Array<ShopsDTO>>(this.localHostBaseShopsUrl + 'allShops');
    }

    insert(shop : ShopsDTO) : Observable<any> {
        return this.httpClient.post(this.localHostBaseShopsUrl + 'newShopSP?name_shop=' + shop.name_shop + '&region_code=' + shop.region_code, null);
    }
    
    put(shop : ShopsDTO) : Observable<any> {
        return this.httpClient.put(this.localHostBaseShopsUrl + 'updateShopSP', shop);
    }

    delete(shop : number) : Observable<any>  {
        return this.httpClient.delete<any>(this.localHostBaseShopsUrl + 'deleteShopByIdSP?id_shop=' + shop);
    }
}
