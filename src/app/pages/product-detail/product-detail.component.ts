import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export default class ProductDetailComponent implements OnInit {

  @Input() id?: number;
  product = signal<Product | null>(null);
  cover = signal('');
  private productService = inject(ProductService);
  private cartService = inject(CartService)

  ngOnInit(): void {
    if(this.id) {
      this.productService.getOneProduct(this.id)
      .subscribe({
        next: (product) => {
          this.product.set(product);
          if(product.images.length > 0) {
            this.cover.set(product.images[0])
          }
        }
      })
    }
  }

  changeCover(newImage: string) {
    this.cover.set(newImage);
  };

  addToCart() {
    const product = this.product();
    if(product){
      this.cartService.addToCart(product);
    };
  };

}
