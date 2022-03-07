import { Component, OnInit } from '@angular/core';
import { CountriesDTO } from 'src/app/model/CountriesDTO';
import { CountriesService } from 'src/app/service/Countries.service';

@Component({
  selector: 'app-table-countries',
  templateUrl: './table-countries.component.html',
  styleUrls: ['./table-countries.component.css']
})
export class TableCountriesComponent implements OnInit {

  constructor( 
    private model : CountriesService,
  ) { }
  
  countries : Array<CountriesDTO> = [];

  ngOnInit(): void {
    this.model.findAll().subscribe(dto =>{this.countries = dto;});
  }

}
