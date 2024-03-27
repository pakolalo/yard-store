import { Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path:'',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: ProductsListComponent
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
