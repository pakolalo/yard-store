import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  activeMenu = false;
  activeShoppingCart = false;
  myShoppingCart: Product[] =[]

  constructor(
    private cartService: CartService,
  ) {
    this. myShoppingCart = this.cartService.getShoppingCart();
  }

  toggleNavBar() {
    this.activeMenu = !this.activeMenu;
  }

  toggleShoppingCart() {
    this.activeShoppingCart = !this.activeShoppingCart;
  }

  addToShoppingCart(product: Product) {
    this.cartService.addProduct(product)
  }

}
