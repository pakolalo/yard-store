import { Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path:'',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./components/products-list/products-list.component'),
      },
      {
        path: 'product/:id',
        loadComponent: () => import('./pages/product-detail/product-detail.component'),
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
