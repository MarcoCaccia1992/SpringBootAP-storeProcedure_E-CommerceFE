import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShopsDTO } from 'src/app/model/ShopsDTO';
import { ShopsService } from 'src/app/service/Shops.service';

@Component({
  selector: 'app-form-shops-insert',
  templateUrl: './form-shops-insert.component.html',
  styleUrls: ['./form-shops-insert.component.css']
})
export class FormShopsInsertComponent{

  constructor(
    private shopsService : ShopsService
  ) { }

  shop = {} as ShopsDTO;

  formToInsertShop = new FormGroup({
    name_shop : new FormControl('', Validators.required),
    region_code : new FormControl('', Validators.required)
  })

  insertNewShop(): void{
    var form = this.formToInsertShop.value;
    this.shop = {name_shop : form.name_shop, region_code : form.region_code};
    this.shopsService.insert(this.shop).subscribe();
    this.formToInsertShop.reset();
    alert("you've already insert: \n" + form.name_shop + "\n" + form.region_code);
  }


}
