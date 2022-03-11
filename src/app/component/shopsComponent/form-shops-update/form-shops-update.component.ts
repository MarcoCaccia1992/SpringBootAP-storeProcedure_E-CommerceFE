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
  ) {
    this.shopsFormToUpdate.disable();
   }

  shops : Array<ShopsDTO> = [];

  shop = {} as ShopsDTO;

  shopTMP = {} as ShopsDTO;

  isActive : boolean = true;

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
    this.service.put(this.shop).subscribe();
    alert("you've already update FROM: \n" + this.shopTMP.name_shop + "\n" + this.shopTMP.region_code + "\n" + "TO --> " + "\n" +
    this.shop.name_shop + "\n" + this.shop.region_code);
  }

  onChange(event : any){
    var shop = this.shops.find(x => x.id_shop == event.target.value);
    if(shop != null){
      this.isActive = false;
      this.shopsFormToUpdate.enable();
      this.shopsFormToUpdate.setValue({id_shop : shop.id_shop, name_shop : shop.name_shop, region_code : shop.region_code});
      this.shopTMP = {name_shop : shop.name_shop, region_code : shop.region_code}
    }else{
      this.isActive = true;
      this.shopsFormToUpdate.reset(); // --> resetta i valori dei campi
      this.shopsFormToUpdate.disable();
    }
  }

}
