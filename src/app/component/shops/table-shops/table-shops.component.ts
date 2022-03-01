import { Component, OnInit } from '@angular/core';
import { ShopsDTO } from 'src/app/model/ShopsDTO';
import { ShopsService } from 'src/app/service/Shops.service';


@Component({
  selector: 'app-table-shops',
  templateUrl: './table-shops.component.html',
  styleUrls: ['./table-shops.component.css']
})

export class TableShopsComponent implements OnInit {

  constructor(
    private model : ShopsService,
  ) { }

  shops : Array<ShopsDTO> = [];

  ngOnInit(): void {
    this.model.findAll().subscribe(dto => {this.shops = dto});
  }

}
