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

  @Input() product:Product = {
    id: '',
    name: '',
    price: 0,
    image: '',
  }

  @Output() addedProduct = new EventEmitter<Product>();

  addToCart() {
    this.addedProduct.emit(this.product);
  }

}
