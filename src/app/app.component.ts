import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ProductListComponent } from "./components/product-list/product-list.component";
import { NavigationComponent } from "./components/Navbar/navigation/navigation.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaskAngular';
}
