import { CommonModule, NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UpdateFormComponent } from '../../UpdateForm/update-form/update-form.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from '../../../Service/services/product.service';
import { Product } from '../../../models/product/product';

@Component({
  selector: 'app-listing-product',
  imports: [CommonModule,UpdateFormComponent, RouterLink, RouterOutlet ],
  templateUrl: './listing-product.component.html',
  styleUrl: './listing-product.component.css'
})
export class ListingProductComponent implements OnInit {

  public serverData = <Product[]>[];

  
  constructor( private router: Router , private service: ProductService ){}
  ngOnInit(): void {
    this.service.getProduct().subscribe(data => { 
      console.log("fetched Data: " , data);
      this.serverData = data;
      console.log(this.serverData);
    });
  }
  
  

  onDetails(id:number){
    this.router.navigate(['/product-details', id]);
  }

  
}
