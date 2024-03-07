import { Component , signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule,ButtonComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  count = signal(0);
  counter = this.count.toString()
  increment(){
    this.count.update((value)=>{return value+1})
  }
  decrement(){
    this.count.update(value => value -1)
  }
}
