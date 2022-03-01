import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountriesDTO } from 'src/app/model/CountriesDTO';
import { CountriesService } from 'src/app/service/Countries.service';

@Component({
  selector: 'app-form-countries-update',
  templateUrl: './form-countries-update.component.html',
  styleUrls: ['./form-countries-update.component.css']
})
export class FormCountriesUpdateComponent implements OnInit {

  constructor(
    private service : CountriesService
  ) { }

  countries : Array<CountriesDTO> = [];

  country = {} as CountriesDTO; 

  countriesFormToUpdate = new FormGroup({ /* inserimento del form group + form control per creare campi nella insert e gestirli nell'html */
    id_country : new FormControl('', Validators.required),
    name_country : new FormControl('', Validators.required),
    acronym_shop : new FormControl('', Validators.required)
})

  ngOnInit(): void {
    this.service.findAll().subscribe(response => {this.countries = response});
  }

  updateCountry(): void{
    var form =  this.countriesFormToUpdate.value;
    this.country = {id_country : form.id_country, name_country : form.name_country, acronym_shop : form.acronym_shop}
    this.service.put(this.country).subscribe((response: any) => {alert(response)});
  }

  onChange( event : any){
    var country = this.countries.find(x => x.id_country == event.target.value);
    if(country != null){
      this.countriesFormToUpdate.setValue({id_country : country.id_country, name_country : country.name_country, acronym_shop : country.acronym_shop});
    }
  }



}
