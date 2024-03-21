import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-cart-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart-product.component.html',
  styleUrl: './shopping-cart-product.component.css'
})
export class ShoppingCartProductComponent {

  @Input({required: true}) product!: Product;

  @Output() addedProduct = new EventEmitter<Product>();

}
