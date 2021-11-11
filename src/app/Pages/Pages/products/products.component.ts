import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ShoppingCartService } from 'src/app/shared/Services/shopping-cart.service';
import { Product } from './interface/product.interface';
import { PrductsService } from './services/prducts.service';

@Component({
  selector: 'app-products',
  template: `
    <section class="products">
      <app-product (addToCartClick)="addToCart($event)" [product]="product" *ngFor="let product of products">
      </app-product>
    </section>
  `,
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: Product[];
  constructor(private productSvc: PrductsService, private shoppingCartServ: ShoppingCartService) { }

  ngOnInit(): void {
    this.productSvc.getProducts()
    .pipe( 
      tap((products: Product[]) => this.products = products)
    )
    .subscribe();
  }

  addToCart(product: Product): void{
    this.shoppingCartServ.updateCart(product);
  }

}
