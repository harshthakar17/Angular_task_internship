import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/services/product.service';
import { Product } from '../../models/product/product';
import { CommonModule, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[]= [];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getProduct().subscribe(
      {
        next : (data:any)=> {
        this.products= data.products;
      }, 
      error: (error) => {
        console.error('Error fetching products:', error);
      }
  });
  }


}
