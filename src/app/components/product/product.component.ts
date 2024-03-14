import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  product:Product = {
    id: '1',
    name: 'Chamarra novedosa',
    price: 19,
    image: 'https://m.media-amazon.com/images/I/61MWVals6tL._AC_SX466_.jpg',
  }

}
