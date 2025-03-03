import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    
  apiUrl = 'https://dummyjson.com/products';



  constructor(private http:HttpClient) {}

    //fetch the products
    getProduct(): Observable<Product[]>{
      return this.http.get<Product[]>(this.apiUrl);
    }

    getProductbyId(id:number):Observable<Product>{
      return this.http.get<Product>(`${this.apiUrl}/${id}`);

    }

    deleteProductById(id: number):Observable<Product>{
      return this.http.delete<Product>(`${this.apiUrl}/${id}`);

    }

    updateProductbyID(product:any, id:number){
      if (!product) {
        console.error("Invalid Product ID. Cannot update.");
       
    }
      return this.http.put<Product>(`${this.apiUrl}/${id}`,product);
    


      
    }
}

