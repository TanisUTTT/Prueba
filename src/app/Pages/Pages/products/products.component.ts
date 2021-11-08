import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from './interface/product.interface';
import { PrductsService } from './services/prducts.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: Product[];
  constructor(private productSvc: PrductsService) { }

  ngOnInit(): void {
    this.productSvc.getProducts()
    .pipe( 
      tap((products: Product[]) => this.products = products)
    )
    .subscribe();
  }

  addToCart(product: Product): void{
    console.log('add to cart', product);
  }

}
