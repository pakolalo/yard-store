import { Component, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { ShoppingCartProductComponent } from '../shopping-cart-product/shopping-cart-product.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, ShoppingCartProductComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  activeMenu = false;
  activeShoppingCart = false;
  myShoppingCart: Product[] =[];
  //total = signal(0);

  constructor(
    private cartService: CartService,
  ) {
    this.myShoppingCart = this.cartService.getShoppingCart();
  }

  toggleNavBar() {
    this.activeMenu = !this.activeMenu;
  }

  toggleShoppingCart() {
    this.activeShoppingCart = !this.activeShoppingCart;
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   const cart = changes['myShoppingCart'];
  //   if (cart) {
  //     this.total.set(this.calcTotalShoppingCart());
  //   }
  // }

  addToShoppingCart(product: Product) {
    this.cartService.addProduct(product)
  }

  calcTotalShoppingCart() {
    return this.cartService.getTotal();
  }

}
