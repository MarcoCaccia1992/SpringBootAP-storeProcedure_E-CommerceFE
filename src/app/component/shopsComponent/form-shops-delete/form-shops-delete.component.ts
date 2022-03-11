import { Component, OnInit } from '@angular/core';
import { ShopsDTO } from 'src/app/model/ShopsDTO';
import { ShopsService } from 'src/app/service/Shops.service';

@Component({
  selector: 'app-form-shops-delete',
  templateUrl: './form-shops-delete.component.html',
  styleUrls: ['./form-shops-delete.component.css']
})
export class FormShopsDeleteComponent implements OnInit {

  constructor(
    private shopService : ShopsService
  ) { }

  shops : Array<ShopsDTO> = [];

  ngOnInit(): void {
   this.checkShopsList();
  }

  deleteShop(shop : string){
    var tmpShop = this.shops.find(x => x.id_shop == Number(shop))
    this.shopService.delete(Number(shop)).subscribe();
    this.checkShopsList();
    alert("you've already deleted: \n" + tmpShop?.id_shop + "\n" + tmpShop?.name_shop + "\n" + tmpShop?.region_code);
  }

  checkShopsList():void{
    this.shopService.findAll().subscribe(response => {this.shops = response})
  }

}
