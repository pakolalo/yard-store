import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpClient)
  private apiUrl = 'https://api.escuelajs.co/api/v1/categories'

  constructor() { }

  getAll() {
    return this.http.get<Category[]>(this.apiUrl);
  }
}
