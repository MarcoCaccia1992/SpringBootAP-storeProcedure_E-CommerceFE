import { Component, OnInit } from '@angular/core';
import { ProductsDTO } from 'src/app/model/ProductsDTO';
import { ProductsService } from 'src/app/service/Products.service';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css',
]
})
export class TableProductsComponent implements OnInit {

  constructor(
    private model : ProductsService
  ) { }

  products : Array<ProductsDTO> = [];

  ngOnInit(): void {
    this.model.findAll().subscribe(dto =>{this.products = dto;});
  }

}
