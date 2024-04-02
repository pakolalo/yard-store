import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { ProductComponent } from '../product/product.component';
import { Product } from '../../models/product.model';
import { Category } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { RouterLinkWithHref } from '@angular/router';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, NavComponent, ProductComponent, RouterLinkWithHref],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductsListComponent implements OnInit{
  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  showProductDetail = false;
  product!: Product;
  //productDetail = signal<Product[] | null>(null);
  productDetail: Product | null = {
    id: 0,
    price: 0,
    title: '',
    images: [],
    description: '',
    category: {
      id: 0,
      name:'',
      image:'',
    }
  }

  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);


  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  }

  togglePorductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  addToCart(product: Product) {
    return this.cartService.addToCart(product);
  }

  onShowProductDetail(id:number) {
    this.productService.getOneProduct(id)
    .subscribe({
      next:(product) => {
        this.togglePorductDetail()
        this.productDetail = product;
      },
      error: () => {}
    })
  };

  private getProducts() {
    this.productService.getProducts()
    .subscribe({
      next:(products) => {
        this.products.set(products);
      },
      error:() => {}
    });
  };

  private getCategories() {
    this.categoryService.getAll()
    .subscribe({
      next:(data) => {
        this.categories.set(data);
      },
      error:() => {}
    });
  };

}
