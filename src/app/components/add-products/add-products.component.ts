import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  imports: [ReactiveFormsModule],
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {

    createForm: FormGroup= new FormGroup(
      {
        id: new FormControl('0'),
    title: new FormControl(''),
    description:new  FormControl(''),
    category: new FormControl(''),
    price: new FormControl('0'),
    discountPercentage:new  FormControl('0'),
    rating: new FormControl('0'),
    stock:new  FormControl('0'),
    thumbnail:new  FormControl('')
      }
    );


    constructor(private http:HttpClient){}
    
    onSaveUser(){
      const obj = this.createForm.value;
      this.http.post('https://dummyjson.com/products/add',obj).subscribe((res:any)=>{
        alert('user created');
      })
    }
}
