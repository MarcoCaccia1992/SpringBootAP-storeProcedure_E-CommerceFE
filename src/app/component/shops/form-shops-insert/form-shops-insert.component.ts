import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShopsService } from 'src/app/service/Shops.service';
import { ShopsDTO } from '../../../model/ShopsDTO';

@Component({
  selector: 'app-form-shops-insert',
  templateUrl: './form-shops-insert.component.html',
  styleUrls: ['./form-shops-insert.component.css']
})
export class FormShopsInsertComponent {

  shopsFormToInsert = new FormGroup({ /* inserimento del form group + form control per creare campi nella insert e gestirli nell'html */
    name_shop : new FormControl(''),
    region_code : new FormControl('')
  })
  
  shop = {} as ShopsDTO; 

  constructor(
    private model : ShopsService
  ) { }

  insertNewShop(): void {
    var form =  this.shopsFormToInsert.value;
    this.shop = {name_shop : form.name_shop, region_code : form.region_code}
    this.model.insert(this.shop).subscribe(response => {alert(response)});
  }

}
