import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  imports: [MatButtonModule],
  templateUrl: './product-crud.html',
  styleUrl: './product-crud.css',
})
export class ProductCrud implements OnInit{
  constructor (private router: Router) { }


  ngOnInit(): void {
    
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }

}
