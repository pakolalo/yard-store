import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]); //guardamos la lista de productos que el usuario va agregar al carrito
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0)
  });

  constructor() { }

  addToCart(product: Product) {
    this.cart.update(state => [...state, product]);
  }

  removeFromCart(index: number) {
    this.cart().splice(index, 1);
  }

}
