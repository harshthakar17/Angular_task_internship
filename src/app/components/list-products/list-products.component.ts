import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { identifierName } from '@angular/compiler';
import { query } from '@angular/animations';

@Component({
  selector: 'app-list-products',
  imports: [CommonModule],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit{
   
  productList:any[]=[];
  id: any 
  product: any;
  updatedProducts: { [key: number]: any } = {};
  
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
   
    this.route.queryParams.subscribe((params)=>{
      this.id = +params['id'];
      this.product= params['product'];

      if (this.productList.length === 0) {
        this.getProducts();
      } else {
        this.updateProductInList();
      }

    })

    // this.getProducts();
  }

  getProducts(){
    this.productService.getProduct().subscribe((res:any)=>{
      this.productList=res.products;
      console.log(this.productList)
      const updatedProduct = JSON.parse(this.product);
      updatedProduct.id = this.id;
  
      // Use map() to update only the selected product
      this.productList = this.productList.map(product =>
        product.id === this.id ? { ...product, ...updatedProduct } : product
        
      );
      this.updateProductInList();
      
  //     if(this.id && this.product){
  //       console.log("updated form:"+ this.id + this.product);
  //       this.productList[this.id -1]= JSON.parse(this.product);
  // this.productList[this.id - 1].id = this.id
  //     }  
    })
  }

  viewProduct(productId: number){
    console.log("id:"+ productId);
    this.router.navigate(['/product-details'], {queryParams: {productId}});
    
  }

  deleteProduct(productId:number){
    this.productService.deleteProductById(productId).subscribe((res:any)=>{
      alert("Deleted product successfully");

      this.productList= this.productList.filter(product=> product.id!= productId);
    })
    
  }
  UpdateProduct(productId:number){
      this.router.navigate(['/update-form'],{queryParams:{productId}});
  }

  updateProductInList() {
   if (this.id && this.product) {
      console.log("Updating product:", this.id, this.product);

      const updatedProduct = JSON.parse(this.product);
      updatedProduct.id = this.id;

      // Store updates locally so they persist
      this.updatedProducts[this.id] = updatedProduct;

      // Update the product list
      this.productList = this.productList.map((product) =>
        product.id === this.id ? { ...product, ...updatedProduct } : product
      );
    }
  }
}
