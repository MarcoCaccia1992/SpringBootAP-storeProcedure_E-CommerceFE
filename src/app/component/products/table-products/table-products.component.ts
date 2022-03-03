import { Component, OnInit } from '@angular/core';
import { ProductsEntity } from 'src/app/model/ProductsEntity';
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

  products : Array<ProductsEntity> = [];

  ngOnInit(): void {
    this.model.findAll().subscribe(dto =>{this.products = dto;});
  }

}
