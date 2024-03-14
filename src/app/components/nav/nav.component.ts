import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  activeMenu = false;
  myShoppingCart: Product[] =[]

  constructor(
    private storeService: StoreService,
  ) {
    this. myShoppingCart = this.storeService.getShoppingCart();
  }

  toggleNavBar() {
    this.activeMenu = !this.activeMenu;
  }

  addToShoppingCart(product: Product) {
    this.storeService.addProduct(product)
  }

}
