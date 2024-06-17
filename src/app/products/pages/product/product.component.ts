import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  
  private fb = inject(FormBuilder);

  public check: boolean = false;
  public increment: number = 10;

  public color: string = 'green';
  public formDirectives: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email]]
  })

  ngOnInit(): void {
    // console.log('ngOnInit');
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges');
    
  }
  ngDoCheck(): void {
    // console.log('ngDoCheck');
    
  }
  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit');
    
  }
  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked');
    
  }
  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit');
    
  }
  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked');
    
  }
  ngOnDestroy(): void {
    // console.log('ngOnDestroy');
    
  }

  incrementPrice(){
    this.increment += 1;
  }

  changeColor(){
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }
}
