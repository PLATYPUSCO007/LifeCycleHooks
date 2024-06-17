import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {

  public counter = signal(10);
  public square = computed(()=>this.counter()**2);

  modifyVal(n: number){
    this.counter.update(val=>val + n);
  }
}
