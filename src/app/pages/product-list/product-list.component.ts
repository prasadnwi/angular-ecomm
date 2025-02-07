import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
      @for (product of products(); track product.id){
         <app-product-card [product]="product"/>
      }
    </div>
  `,
  styles: ``
})
export class ProductListComponent {

  async ngOnInit() { 
    const res = await fetch('https://fakestoreapi.com/products/category/electronics');
    const data = await res.json();
    this.products.set(data);
  }

  products = signal<Product[]>([])
}
