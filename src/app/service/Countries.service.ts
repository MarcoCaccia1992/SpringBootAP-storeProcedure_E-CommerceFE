import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountriesDTO } from '../model/CountriesDTO';






@Injectable({
    providedIn: 'root'
})
export class CountriesService {

    //dichiarazione varabile ma solo con tipo
    constructor(
        private httpClient : HttpClient
    ){}

    localHostBaseCointriesUrl = 'http://localhost:8090/countries/';

    //dichiarazione metodo
    findAll() : Observable<Array<CountriesDTO>>{// oggetto necessario in chiamata get per per mettere la trasmissione di dati
        return this.httpClient.get<Array<CountriesDTO>>(this.localHostBaseCointriesUrl + 'allCountries');
    }

    insert(country : CountriesDTO) : Observable<any> {
        return this.httpClient.post(this.localHostBaseCointriesUrl + 'newCountrySP?name_country=' + country.name_country + '&acronym_shop=' + country.acronym_shop, country);
    }

    put(country : CountriesDTO) : Observable<any> {
        return this.httpClient.put(this.localHostBaseCointriesUrl + 'updateCountrySP', country);
    }
    
    delete(country : number) : Observable<any> {
        return this.httpClient.delete(this.localHostBaseCointriesUrl + 'deleteCountrySP?id_country=' + country );
    } 
}