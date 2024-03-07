import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IProduct } from '../../interfaces/Product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  constructor() {}
  @Input() product!: IProduct;
  @Output('delete') delete = new EventEmitter();

  onClick(id: number) {
    this.delete.emit();
  }
}
