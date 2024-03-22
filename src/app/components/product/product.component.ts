import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input({required: true}) product!: Product;

  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showProductDetail = new EventEmitter<number>();

  addToCart() {
    this.addedProduct.emit(this.product);
  }

  showDetail() {
    this.showProductDetail.emit(this.product.id);
  }

}
