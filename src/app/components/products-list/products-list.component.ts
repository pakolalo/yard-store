import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit{
  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);
  showProductDetail = false;
  productDetail: Product = {
    id: 0,
    price: 0,
    title: '',
    images: [],
    description: '',
    category: {
      id: 0,
      name:''
    }
  }

  private cartService = inject(CartService);
  private productService = inject(ProductService);


  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe({
      next:(products) => {
        this.products.set(products);
      },
      error:() => {}
    })
  }

  togglePorductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }


  addToCart(product: Product) {
    this.cartService.addProduct(product);
  }

  onShowProductDetail(id:number) {
    this.productService.getOneProduct(id)
    .subscribe({
      next:(product) => {
        this.togglePorductDetail()
        this.productDetail = product
      },
      error: () => {}
    })

  }

}
