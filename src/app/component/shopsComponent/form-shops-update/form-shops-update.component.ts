import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShopsDTO } from 'src/app/model/ShopsDTO';
import { ShopsService } from 'src/app/service/Shops.service';

@Component({
  selector: 'app-form-shops-update',
  templateUrl: './form-shops-update.component.html',
  styleUrls: ['./form-shops-update.component.css']
})
export class FormShopsUpdateComponent implements OnInit {

  constructor(
    private service : ShopsService
  ) { }

  shops : Array<ShopsDTO> = [];

  shop = {} as ShopsDTO;

  shopsFormToUpdate = new FormGroup({
    id_shop : new FormControl('', Validators.required),
    name_shop : new FormControl('', Validators.required),
    region_code : new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    this.service.findAll().subscribe(response => {this.shops = response});
  }

  updateShop(): void{
    var form = this.shopsFormToUpdate.value;
    this.shop = {id_shop : form.id_shop, name_shop : form.name_shop, region_code : form.region_code}
    this.service.put(this.shop).subscribe((response: any) =>{alert(response)});
  }

  onChange(event : any){
    var shop = this.shops.find(x => x.id_shop == event.target.value);
    if(shop != null){
      this.shopsFormToUpdate.setValue({id_shop : shop.id_shop, name_shop : shop.name_shop, region_code : shop.region_code});
    }
  }

}
