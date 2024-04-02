import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product, CreateProductDTO } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);
  private apiUrl = 'https://api.escuelajs.co/api/v1/products'

  constructor() { }

  getProducts(category_id?: string) {
    const url = new URL('https://api.escuelajs.co/api/v1/products')
    if (category_id) {
      url.searchParams.set('categoryId', category_id);
    }
    return this.http.get<Product[]>(url.toString());
  }

  getOneProduct(id:number) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  createProduct(dto: CreateProductDTO) {
    return this.http.post<Product>(this.apiUrl, dto);
  }
}
