import { Component, OnInit } from '@angular/core';
import { CountriesDTO } from 'src/app/model/CountriesDTO';
import { CountriesService } from 'src/app/service/Countries.service';

@Component({
  selector: 'app-from-countries-delete',
  templateUrl: './from-countries-delete.component.html',
  styleUrls: ['./from-countries-delete.component.css']
})
export class FromCountriesDeleteComponent implements OnInit {

  constructor(
    private countryService : CountriesService
  ) { }

  countries : Array<CountriesDTO> = [];

  ngOnInit(): void {
    this.checkCountriesList();
  }

  deleteCountry(country : string){
    var tmpCountry = this.countries.find(x => x.id_country == Number(country));
    this.countryService.delete(Number(country)).subscribe();
    this.checkCountriesList();
    alert("you've already deleted: \n" + tmpCountry?.id_country + "\n" + tmpCountry?.name_country + "\n" + tmpCountry?.acronym_shop)
  }

  checkCountriesList():void{
    this.countryService.findAll().subscribe(countriesList => {this.countries =  countriesList}); //subscribe serve per interpretare quello che ariva da backend
  }



}
