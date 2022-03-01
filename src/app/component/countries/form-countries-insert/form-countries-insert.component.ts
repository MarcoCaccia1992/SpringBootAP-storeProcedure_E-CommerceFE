import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from 'src/app/service/Countries.service';
import { CountriesDTO } from '../../../model/CountriesDTO';

@Component({
  selector: 'app-form-countries-insert',
  templateUrl: './form-countries-insert.component.html',
  styleUrls: ['./form-countries-insert.component.css']
})
export class FormCountriesInsertComponent {

  countriesFormToInsert = new FormGroup({ /* inserimento del form group + form control per creare campi nella insert e gestirli nell'html */
    name_country : new FormControl('', Validators.required),
    acronym_shop : new FormControl('', Validators.required)
  })

  country = {} as CountriesDTO; 
  responseInsert : string = "";

  constructor(
    private model : CountriesService
  ) { }

  insertNewCountry(): void {
    var form =  this.countriesFormToInsert.value;
    this.country = {name_country : form.name_country, acronym_shop : form.acronym_shop}
    this.model.insert(this.country);
    alert("you've already insert: \n" + this.country.name_country + "\n" + this.country.acronym_shop)
  }

}


