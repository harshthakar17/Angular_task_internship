import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/services/product.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Product } from '../../models/product/product';

@Component({
  selector: 'app-product-detail',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  
  constructor(private service:ProductService, private route:ActivatedRoute){}
  
  public productid? : number ;
  public products : Product | null = null;

  ngOnInit(): void {

    this.route.queryParams.subscribe((params)=> {
      this.productid= +params['productId'];
      console.log("id in detail: " + this.productid);

      this.service.getProductbyId(this.productid).subscribe((data)=>{ 
        this.products = data
        console.log(this.products);
        console.log(data);
      });
    })
    
    
    
      }
     
  
  }
   

  

