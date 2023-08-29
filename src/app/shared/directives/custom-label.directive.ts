import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>;
  private _color = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color( value: string ) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors( value: ValidationErrors | null | undefined ) {
    this._errors = value;
    this.setErrorMessage();
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setStyle();
  }

  setStyle(): void {
    if ( !this.htmlElement ) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void {
    if ( !this.htmlElement ) return;
    if ( !this._errors ) {
      this.htmlElement.nativeElement.innerText = 'No errors';
      return;
    }

    const errorsMessages = Object.keys(this._errors);

    if( errorsMessages.includes('required')) {
      this.htmlElement.nativeElement.innerText = 'this field is required';
      return;
    }

    if( errorsMessages.includes('minlength')) {
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];
      this.htmlElement.nativeElement.innerText = `Min lenght ${min} / current ${ current } characters `;
      return;
    }

    if( errorsMessages.includes('email')) {
      this.htmlElement.nativeElement.innerText = 'this field is an invalid email';
      return;
    }

  }
}
