import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountriesDTO } from 'src/app/model/CountriesDTO';
import { CountriesService } from 'src/app/service/Countries.service';

@Component({
  selector: 'app-form-countries-insert',
  templateUrl: './form-countries-insert.component.html',
  styleUrls: ['./form-countries-insert.component.css']
})
export class FormCountriesInsertComponent {

  constructor(
    private countryService : CountriesService
  ) { }

  formToInsertNewCountry = new FormGroup({
    name_country : new FormControl('', Validators.required),
    acronym_shop : new FormControl('', Validators.required)
  })

  country = {} as CountriesDTO;


  insertNewCountry():void{
    var form = this.formToInsertNewCountry.value;
    this.country = {name_country : form.name_country, acronym_shop : form.acronym_shop};
    this.countryService.insert(this.country).subscribe();
    alert("you've already insert: \n" + form.name_country + "\n" + form.acronym_shop);
  }

}
