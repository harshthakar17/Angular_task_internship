import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../models/product/product';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ProductService } from '../../../Service/services/product.service';
import { query } from '@angular/animations';

@Component({
  selector: 'app-update-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css'
})
export class UpdateFormComponent implements OnInit
{


  product: Product ={} as Product;
  productID: number | undefined;
  updateForm!: FormGroup ;

  constructor(private route: ActivatedRoute, private fb:FormBuilder,private service: ProductService, private router: Router){}
  
  ngOnInit(): void {

    this.route.queryParams.subscribe((params)=>{
      this.productID = +params['productId'];
      console.log("update form:"+ this.productID);
    })

    this.updateForm= this.fb.group({
      category: [''],
      title: ['', Validators.required],
      price: ['',[Validators.required, Validators.min(1)]],
      description: ['',[Validators.required, (control:AbstractControl) => control.value?.trim().split(/\s+/).length > 150 ? { wordLimitExceeded: true } : null]],
      stock:[0,[Validators.required,Validators.min(1)]],
    });

    
    this.route.queryParams.subscribe((params)=>{
      const productID= params['productId'];
      if(productID){
        this.service.getProductbyId(productID).subscribe((data)=>{
          if(data){
          this.product= data;
          this.updateForm.patchValue({
            id : this.product.id,
            title: this.product.title,
            category : this.product.category,
            price: this.product.price,
            description: this.product.description,
            stock: this.product.stock
          });
          }else{
            console.error('product not found');
          }       
        },
          (error)=>{
            console.error('error fetching product:', error);
          }
      );
      }
      else{
        console.log("error");
      }
    });
  }
  saveChanges(product: Product){
    this.router.navigate(["/allListedProducts"], {queryParams: {id: this.product.id,product: JSON.stringify(this.updateForm.value)}})
   
    console.log(product.id);
    console.log(this.updateForm);
      this.service.updateProductbyID(this.updateForm.value,product.id).subscribe((data)=>{
      console.log(data);
      })
  }





  // updateData(updatedProduct: any) {
  //   this.http.put(`https://dummyjson.com/products/${updatedProduct.id}`, updatedProduct)
  //     .subscribe(() => {
  //       alert('Product updated successfully!');
  //       this.router.navigate(['/products', this.productList]); // Redirect to product list
  //     });
  // }
  
}

