import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product/product-service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-create',
  imports: [MatButtonModule],
  templateUrl: './product-create.html',
  styleUrl: './product-create.css',
})
export class ProductCreate implements OnInit{

  constructor (private router: Router, private productService: ProductService) { }


  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }

  createProduct(): void {
    this.productService.showMessage("Operação executada com sucesso.");
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
