export class Product {
[x: string]: any;
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    thumbnail: string;
  
    constructor() {
      this.id = 0;
      this.title = '';
      this.description = '';
      this.category = '';
      this.price = 0;
      this.discountPercentage = 0.0;
      this.rating = 0.0;
      this.stock = 0;
        this.thumbnail="";
    }
  }
  