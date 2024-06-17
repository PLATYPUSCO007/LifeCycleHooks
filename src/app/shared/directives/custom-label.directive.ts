import { Directive, ElementRef, Input, OnInit, input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appCustomLabel]'
})
export class CustomLabelDirective implements OnInit{

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = '';
  private _error?: ValidationErrors | null;

  private _msg_errors: {[key: string]: string} = {
    required: 'Este campo es requerido. ',
    minlength: 'El campo debe tener X caracteres. ',
    email: 'El campo debe ser un email. '
  };

  @Input() set color(value: string){
    this._color = value;
    this.changeColor();
  }

  @Input() set myError(value: ValidationErrors | null | undefined){
    this._error = value;
    this.changeError();
  }

  constructor(private el: ElementRef<HTMLElement>) { 
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.htmlElement!.nativeElement.innerHTML = 'Cambie el contenido';
  }

  changeColor(){
    if (!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  changeError(){
    if (!this._error){
      this.htmlElement!.nativeElement.innerHTML = 'No hay errores';
      return;
    }

    if(!this.htmlElement) return;
    this.htmlElement!.nativeElement.innerHTML = '';

    const listErrors = Object.keys(this._error);
    listErrors.forEach(error=>{
      this.htmlElement!.nativeElement.innerHTML += (error === 'minlength') ? this._msg_errors[error].replace('X', this._error!['minlength'].requiredLength) : this._msg_errors[error];
    });

    
  }
}
