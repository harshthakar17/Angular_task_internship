import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ListingProductComponent } from './components/List-all-products/listing-product/listing-product.component';
import { UpdateFormComponent } from './components/UpdateForm/update-form/update-form.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/Navbar/navigation/navigation.component';
import { authGuard } from './AuthGaurd/auth.guard';

export const routes: Routes = [
    {
        path: "",
        redirectTo:"login",
        pathMatch:"full"
      
    },

    {
        path:"login",
        component:LoginComponent
    },

    {
        path: "",
       component:NavigationComponent,
       canActivate:[authGuard],
       children:[
        {
            path:"products",
            component:ProductListComponent,
            
        },
        {
            path:"cart",
            component: CartComponent,
            
        },
        {
            path:"checkout",
            component: CheckoutComponent,
            
        },
        {
            path:"addProduct",
            component: AddProductsComponent,
            
        },
        {
            path:"listproducts",
            component:ListingProductComponent,
            
        },
        {
            path:"update-form",
            component:UpdateFormComponent,
            
        },
        {
            path:"product-details",
            component:ProductDetailComponent,
           
        },
        {
            path:"allListedProducts",
            component:ListProductsComponent,
           
        }
         
       ]
    },
    

];
