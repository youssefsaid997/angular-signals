import { Component, signal } from '@angular/core';
import { IProduct } from '../../interfaces/Product.interface';
import { ProductsService } from '../../services/products.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,HttpClientModule , CardComponent],
  providers:[HttpClient,ProductsService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private productService:ProductsService){}

  products = signal<IProduct[]>([])

  ngOnInit(){
    this.productService.getProducts().subscribe({
      next:(value)=>{
        this.products.set(value)
      }
    })
  }

  deleteProduct(id:number){
    const filteredProducts= this.products().filter((product)=>{
      return product.id !== id
    })
    this.products.set(filteredProducts)
  }
}
