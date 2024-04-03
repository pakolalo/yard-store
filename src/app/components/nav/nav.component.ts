import { Component, Input, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { ShoppingCartProductComponent } from '../shopping-cart-product/shopping-cart-product.component';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, ShoppingCartProductComponent, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  activeMenu = false;
  activeShoppingCart = false;
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toggleNavBar() {
    this.activeMenu = !this.activeMenu;
  }

  toggleShoppingCart() {
    this.activeShoppingCart = !this.activeShoppingCart;
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
  }

}
