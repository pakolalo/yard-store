import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  myShoppingCart: Product[] = [];
  total = 0;

  constructor(
    private storeService: StoreService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart()
  }

  products: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://m.media-amazon.com/images/I/51eU3lWTXNL._AC_SX679_.jpg'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://m.media-amazon.com/images/G/33/apparel/rcxgs/tile._CB483369929_.gif'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://m.media-amazon.com/images/G/33/apparel/rcxgs/tile._CB483369929_.gif'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: 'https://m.media-amazon.com/images/I/61FguqF5ZeL._AC_SX679_.jpg'
    },
  ]

  addToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.storeService.getTotal()
  }

}
