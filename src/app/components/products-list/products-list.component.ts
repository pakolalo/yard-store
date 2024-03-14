import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

}
