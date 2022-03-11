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
  ) { 
    this.countriesFormToUpdate.disable();// AZIONE da verificarsi ad ogni avvio o richiamo componente
  }

  countries : Array<CountriesDTO> = [];

  country = {} as CountriesDTO;

  countryTMP = {} as CountriesDTO;
  
  isActive : boolean = true;

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
    this.service.put(this.country).subscribe();
    alert("you've already update FROM: \n" + this.countryTMP.name_country + "\n" + this.countryTMP.acronym_shop + "\n" + "TO --> " + "\n" +
    this.country.name_country + "\n" + this.country.acronym_shop);
  }

  onChange( event : any){
    var country = this.countries.find(x => x.id_country == event.target.value);
    if(country != null){
      this.isActive = false;
      this.countriesFormToUpdate.enable();
      this.countriesFormToUpdate.setValue({id_country : country.id_country, name_country : country.name_country, acronym_shop : country.acronym_shop});
      this.countryTMP = {name_country : country.name_country, acronym_shop : country.acronym_shop}
    }else{
      this.isActive = true;// check della variabile nel tag button nelle [] ovvero l'azione al quale sottoposta
      this.countriesFormToUpdate.reset(); // --> resetta i valori dei campi
      this.countriesFormToUpdate.disable();// disabilita il form  per evitare disguidi
    }
  }



}
