import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnDestroy, OnChanges {
  
  @Input()
  public price: number = 0;
  private timer$?: Subscription;

  ngOnInit(): void {
    console.log('Componente Hijo - ngOnInit');
    this.timer$ = interval(1000).subscribe(v=>console.log(v))
  }

  ngOnDestroy(): void {
    console.log('Componente Hijo - ngOnDestroy');
    this.timer$?.unsubscribe();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente Hijo - ngOnChanges');
    console.log('CHANGES', changes);
  }

}
