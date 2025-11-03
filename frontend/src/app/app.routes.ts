import { Routes } from '@angular/router';
import { Home } from './views/home/home'
import { ProductCrud } from './views/product-crud/product-crud'
import { ProductCreate } from './components/product/product-create/product-create';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "products",
        component: ProductCrud
    },
    {
        path: "products/create",
        component: ProductCreate
    }
];
