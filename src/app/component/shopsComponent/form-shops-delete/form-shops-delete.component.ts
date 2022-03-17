import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ShopsDTO } from 'src/app/model/ShopsDTO';
import { ShopsService } from 'src/app/service/Shops.service';

@Component({
  selector: 'app-form-shops-delete',
  templateUrl: './form-shops-delete.component.html',
  styleUrls: ['./form-shops-delete.component.css']
})
export class FormShopsDeleteComponent implements OnInit {

  constructor(
    private shopService: ShopsService
  ) { }

  shops: Array<ShopsDTO> = [];

  selectOption = new FormControl();

  ngOnInit(): void {
    this.checkShopsList();
  }

  deleteShop(shop: String) {
    var tmpShop = this.shops.find(x => x.id_shop == Number(shop))
    this.shopService.delete(Number(shop)).subscribe();// ricordarsi che il subscribe è asincrono    
    alert("you've already deleted: \n" + tmpShop?.id_shop + "\n" + tmpShop?.name_shop + "\n" + tmpShop?.region_code);
    this.checkShopsList();
  }

  checkShopsList(): void {
    this.selectOption.reset();
    this.shopService.findAll().subscribe((response: Array<ShopsDTO>) => { 
      this.shops = response;
      if (this.shops.length != 0) {
        this.selectOption.enable();
        this.selectOption.setValue(this.shops[0].id_shop);
      } else {
        this.selectOption.disable();
      }
    });
  }

}
